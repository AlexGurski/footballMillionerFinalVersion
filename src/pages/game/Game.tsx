import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import backgroundIMG from "../../assets/images/jpg/gameBackground.jpeg";
import { styles } from "./style";
import { NavigationProp } from "@react-navigation/native";
import { questionEasy } from "../../base/questions/easy";
import { generateUniqueRandomNumbers } from "../../functions/random";
import { shuffleArray } from "../../functions/shuffleArray";
const Game: React.FC<{ navigation: NavigationProp<any> }> = ({
  navigation,
}) => {
  const [easyQuestions, setEasyQuestions] = useState<any[]>([]);
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    const questionArray: any[] = generateUniqueRandomNumbers(
      5,
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

  const nextQuestion = () => {
    setCounter((count) => count + 1);
  };

  const sendAnswer = (answer: string) => {
    if (easyQuestions[counter].true === answer){
      nextQuestion();
    }
  };

  return (
    <ImageBackground source={backgroundIMG} resizeMode="cover">
      <SafeAreaView style={styles.allForm}>
        {easyQuestions.length > 0 && counter < easyQuestions.length && (
          <View>
            <Text>{easyQuestions[counter].vopros}</Text>
            {easyQuestions[counter].choise.map(
              (question: string, index: number) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => sendAnswer(question)}
                >
                  <Text>{question}</Text>
                </TouchableOpacity>
              )
            )}
          </View>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};
export default Game;
