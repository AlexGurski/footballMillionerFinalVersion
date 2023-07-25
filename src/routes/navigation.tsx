import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "../pages/mainMenu/mainMenu";
// import StartGame from "../page/StartGame";

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="StartGame" component={StartGame} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
