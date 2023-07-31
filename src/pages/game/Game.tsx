import { ImageBackground, SafeAreaView, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import backgroundIMG from "../../assets/images/jpg/gameBackground.jpeg";
import { styles } from "./style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/route";
import { getQuestions } from "../../functions/getQuestions";
import { QuestionsForGame } from "../../types/questions";
import { ChoiseList } from "./components/choiseList/ChoisesList";
import { EndGame } from "./components/endGame/EndGame";

type Game = NativeStackScreenProps<RootStackParamList, "Game">;

const Game: React.FC<Game> = ({ navigation, route }) => {
  const [questionsList, setQuestionsList] = useState<QuestionsForGame[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [currentSelect, setCurrenSelect] = useState<string>("");
  const [endTimeout, setEndTimeout] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  useEffect(() => {
    setQuestionsList(getQuestions(route.params.gameName));
  }, []);

  const nextQuestion = () => {
    setCounter((count) => count + 1);
    setCurrenSelect("");
    setEndTimeout(false);
  };

  const mistakeQuestion = () => {
    console.log(counter);
    if (route.params.gameName === "survivor") {
      console.log(`Your strick is ${counter}`);
    }
    setIsGameOver(true);
    setEndTimeout(false);
  };

  const sendAnswer = (answer: string) => {
    setCurrenSelect(answer);
    const timer = setTimeout(() => {
      setEndTimeout(true);
      const timer1 = setTimeout(() => {
        if (questionsList[counter].true === answer) {
          nextQuestion();
        } else {
          mistakeQuestion();
        }
        clearTimeout(timer1);
        clearTimeout(timer);
      }, 1500);
    }, 1500);
  };

  const goToMenu = () => {
    navigation.navigate("Main", {});
  }
  return (
    <ImageBackground source={backgroundIMG} resizeMode="cover">
      <SafeAreaView style={styles.allForm}>
        <View style={styles.header}>
          <View style={styles.progres}>
            <View
              style={{
                width: `${(counter / questionsList.length) * 100}%`,
                height: "100%",
                backgroundColor: "gold",
                borderRadius: 6,
              }}
            >
              {/* <Text>{counter} / {questionsList.length}</Text> */}
            </View>
          </View>
        </View>
        {questionsList.length > 0 && counter < questionsList.length && (
          <View style={styles.wrapper}>
            <View style={styles.question}>
              <Text>{questionsList[counter].vopros}</Text>
            </View>
            <ChoiseList
              sendAnswer={sendAnswer}
              questionsList={questionsList}
              counter={counter}
              currentSelect={currentSelect}
              endTimeout={endTimeout}
            />
          </View>
        )}
      </SafeAreaView>
      {isGameOver && <EndGame counter={counter} goToMenu={goToMenu} />}
    </ImageBackground>
  );
};
export default Game;
