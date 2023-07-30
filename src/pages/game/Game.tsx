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
  const [questionsList, setQuestionsList] = useState<any[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [currentSelect, setCurrenSelect] = useState<string>("");
  const [endTimeout, setEndTimeout] = useState<boolean>(false);

  useEffect(() => {
    setQuestionsList(getQuestions(route.params.game))
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
        if (questionsList[counter].true === answer) {
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
        {questionsList.length > 0 && counter < questionsList.length && (
          <View style={styles.wrapper}>
            <View style={styles.question}>
              <Text>{questionsList[counter].vopros}</Text>
            </View>

            <View style={styles.container}>
              {questionsList[counter].choise.map(
                (question: string, index: number) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => sendAnswer(question)}
                    style={[
                      styles.choise,
                      currentSelect === question &&
                        !endTimeout &&
                        styles.select,
                        questionsList[counter].true === question &&
                        endTimeout &&
                        styles.true,
                        questionsList[counter].true !== question &&
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
