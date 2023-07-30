import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import backgroundIMG from "../../assets/images/jpg/gameBackground.jpeg";
import { styles } from "./style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/route";
import { getQuestions } from "../../functions/getQuestions";

type Game = NativeStackScreenProps<RootStackParamList, "Game">;

const Game: React.FC<Game> = ({ navigation, route }) => {
  const [easyQuestions, setEasyQuestions] = useState<any[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [currentSelect, setCurrenSelect] = useState<string>("");
  const [endTimeout, setEndTimeout] = useState<boolean>(false);

  useEffect(() => {
    getQuestions(route.params.game)
    setEasyQuestions(getQuestions(route.params.game))
  },[])

  const nextQuestion = () => {
    setCounter((count) => count + 1);
    setCurrenSelect("");
    setEndTimeout(false);
  };

  const sendAnswer = (answer: string) => {
    setCurrenSelect(answer);
    const timer = setTimeout(() => {
      setEndTimeout(true);
      const timer1 = setTimeout(() => {
        if (easyQuestions[counter].true === answer) {
          nextQuestion();
        }
        nextQuestion();
        clearTimeout(timer1);
        clearTimeout(timer);
      }, 1500);
    }, 1500);
  };

  return (
    <ImageBackground source={backgroundIMG} resizeMode="cover">
      <SafeAreaView style={styles.allForm}>
        {easyQuestions.length > 0 && counter < easyQuestions.length && (
          <View style={styles.wrapper}>
            <View style={styles.question}>
              <Text>{easyQuestions[counter].vopros}</Text>
            </View>

            <View style={styles.container}>
              {easyQuestions[counter].choise.map(
                (question: string, index: number) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => sendAnswer(question)}
                    style={[
                      styles.choise,
                      currentSelect === question &&
                        !endTimeout &&
                        styles.select,
                      easyQuestions[counter].true === question &&
                        endTimeout &&
                        styles.true,
                      easyQuestions[counter].true !== question &&
                        currentSelect === question &&
                        endTimeout &&
                        styles.mistake,
                    ]}
                  >
                    <Text>{question}</Text>
                  </TouchableOpacity>
                )
              )}
            </View>
          </View>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};
export default Game;
