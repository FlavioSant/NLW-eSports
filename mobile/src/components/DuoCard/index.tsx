import { TouchableOpacity, View, Text } from "react-native";
import { GameController } from "phosphor-react-native";
import { THEME } from "../../theme";
import { DuoInfo } from "../DuoInfo";

import { styles } from "./styles";

export interface Duo {
  id: string;
  name: string;
  weekDays: string[];
  useVoiceChannel: boolean;
  yearsPlaying: number;
  hourStart: string;
  hourEnd: string;
}

interface DuoCardProps {
  duo: Duo;
  onConnect: () => void;
}

export const DuoCard = ({ duo, onConnect }: DuoCardProps) => {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={duo.name} />
      <DuoInfo label="Tempo de jogo" value={`${duo.yearsPlaying} ano(s)`} />
      <DuoInfo
        label="Disponibilidade"
        value={`${duo.weekDays.length} dias \u2022 ${duo.hourStart} - ${duo.hourEnd}`}
      />
      <DuoInfo
        label="Chamada de áudio"
        value={duo.useVoiceChannel ? "Sim" : "Não"}
        colorValue={
          duo.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
};
