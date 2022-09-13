import { View, Text, ViewProps } from "react-native";

import { styles } from "./styles";

interface HeaderProps extends ViewProps {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle, ...rest }: HeaderProps) => {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
