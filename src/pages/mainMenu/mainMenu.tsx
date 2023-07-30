import {
  View,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import backgroundIMG from "../../assets/images/jpg/mainFormPortrait.jpeg";
import { styles } from "./style";
import { NavigationProp } from "@react-navigation/native";

const Main: React.FC<{ navigation: NavigationProp<any> }> = ({
  navigation,
}) => {
  //   const startGame = () => navigation.navigate("StartGame");

  const goTo = (page: string) => {
    navigation.navigate('Game', {game: page});
  };

  return (
    <ImageBackground source={backgroundIMG} resizeMode="cover">
      <SafeAreaView style={styles.allForm}>
        <View style={styles.buttonsContainer}>

          <TouchableOpacity style={styles.buttons} onPress={() => goTo("millioner")}>
            <Text>Кто хочет стать миллионером</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}>
            <Text>Сказать спасибо</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default Main;
