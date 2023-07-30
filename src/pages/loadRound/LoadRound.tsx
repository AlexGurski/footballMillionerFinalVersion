import { ImageBackground, SafeAreaView } from "react-native";

import React, { useEffect, useState } from "react";
import backgroundIMG from "../../assets/images/jpg/gameBackground.jpeg";
import { styles } from "./style";
import { questionEasy } from "../../base/questions/easy";
import { generateUniqueRandomNumbers } from "../../functions/random";
import { shuffleArray } from "../../functions/shuffleArray";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { GameList } from "../../base/game/gameList";
import { RootStackParamList } from "../../types/route";

type LoadRound = NativeStackScreenProps<RootStackParamList, "LoadRound">;

const LoadRound: React.FC<LoadRound> = ({ navigation, route }) => {
  const GameParam = GameList[route.params.game];

  const [easyQuestions, setEasyQuestions] = useState<any[]>([]);
  const [mediumQuestions, setMediumQuestions] = useState<any[]>([]);
  const [hardQuestions, setHardQuestions] = useState<any[]>([]);

  useEffect(() => {
    const questionArray: any[] = generateUniqueRandomNumbers(
      GameParam.easy,
      1,
      questionEasy.length - 1
    );
    if (questionArray && questionArray.length > 0) {
      setEasyQuestions(
        questionArray.map((el: number) => {
          return {
            vopros: questionEasy[el].vopros,
            true: questionEasy[el].trues,
            choise: shuffleArray([
              questionEasy[el].vB,
              questionEasy[el].vC,
              questionEasy[el].vD,
              questionEasy[el].trues,
            ]),
          };
        })
      );
    }
  }, []);

  return (
    <ImageBackground source={backgroundIMG} resizeMode="cover">
      <SafeAreaView style={styles.allForm}></SafeAreaView>
    </ImageBackground>
  );
};
export default LoadRound;
