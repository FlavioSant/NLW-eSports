import { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { Heading } from "../../components/Heading";
import { Background } from "../../components/Background";
import { Game, GameCard } from "../../components/GameCard";

import logoImg from "../../assets/logo-nlw-esports.png";

import { styles } from "./styles";

export const Home = () => {
  const navigation = useNavigation();
  const [games, setGames] = useState<Game[]>([
    {
      id: "010435d2-7f47-4d3b-b382-df94c33c949f",
      title: "League of Legends",
      bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
      _count: {
        ads: 1,
      },
    },
    {
      id: "03f83f5e-5079-4753-9ca0-90f38146f2bf",
      title: "Minecraft",
      bannerUrl:
        "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
      _count: {
        ads: 2,
      },
    },
    {
      id: "063a4645-b030-484e-a9b6-fcc61204c10f",
      title: "CS:GO",
      bannerUrl:
        "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg",
      _count: {
        ads: 4,
      },
    },
    {
      id: "74be4591-6fb7-4f2a-88d5-af20bf03363b",
      title: "Rocket League",
      bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/30921-285x380.jpg",
      _count: {
        ads: 3,
      },
    },
    {
      id: "8518d90c-094c-4353-8439-288dd460eda4",
      title: "Euro Truck",
      bannerUrl:
        "https://static-cdn.jtvnw.net/ttv-boxart/75467_IGDB-285x380.jpg",
      _count: {
        ads: 5,
      },
    },
    {
      id: "8658c91c-4fad-4cf3-a840-bb4991f034e4",
      title: "Grand Theft Auto V",
      bannerUrl:
        "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg",
      _count: {
        ads: 5,
      },
    },
  ]);

  const handleOpenGame = ({ id, title, bannerUrl }: Game) => {
    navigation.navigate("game", { id, title, bannerUrl });
  };

  // useEffect(() => {
  //   fetch("http://192.168.10.116:3333/games")
  //     .then((response) => response.json())
  //     .then((data) => setGames(data));
  // }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={(game) => game.id}
          renderItem={({ item: game }) => (
            <GameCard game={game} onPress={() => handleOpenGame(game)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
};
