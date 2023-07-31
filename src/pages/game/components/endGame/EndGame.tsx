import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";

type ChoiseProps = {
  counter: number;
  goToMenu:() => void;
};
export const EndGame: React.FC<ChoiseProps> = ({ counter, goToMenu }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>Ваш результат:{counter}</Text>
          <Text>Личный рекорд:{counter}</Text>
          <TouchableOpacity onPress={goToMenu} style={styles.button}>
            <View style={styles.button.container}>
              <Text>Меню</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
