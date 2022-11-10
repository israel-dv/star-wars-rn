import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PeopleDetailsScreen } from "../../screens/PeopleScreen/PeopleDetails";
import { TabNavigator } from "../TabNavigator";
import { StarshipDetails } from "../../screens/StarshipsScreen/StarshipDetails";
import { FilmDetails } from "../../screens/FilmsScreen/FilmDetails";

const Stack = createNativeStackNavigator();

export const AppNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      initialRouteName="People"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="PeopleDetails" component={PeopleDetailsScreen} />
      <Stack.Screen name="StarshipDetails" component={StarshipDetails} />
      <Stack.Screen name="FilmDetails" component={FilmDetails} />
    </Stack.Navigator>
  );
};
