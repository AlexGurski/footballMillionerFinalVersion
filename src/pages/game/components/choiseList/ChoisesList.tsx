import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { QuestionsForGame } from "../../../../types/questions";

type ChoiseProps = {
  sendAnswer: (e: string) => void;
  questionsList: QuestionsForGame[];
  counter: number;
  currentSelect: string;
  endTimeout: boolean;
};
export const ChoiseList: React.FC<ChoiseProps> = ({
  sendAnswer,
  questionsList,
  counter,
  currentSelect,
  endTimeout,
}) => {
  return (
    <View style={styles.container}>
      {questionsList[counter].choise.map((question: string, index: number) => (
        <TouchableOpacity
          key={index}
          onPress={() => sendAnswer(question)}
          style={[
            styles.choise,
            currentSelect === question && !endTimeout && styles.select,
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
      ))}
    </View>
  );
};
