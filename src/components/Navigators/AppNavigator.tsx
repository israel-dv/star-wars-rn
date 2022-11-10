import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PeopleDetailsScreen } from "../../screens/PeopleScreen/PeopleDetails";
import { TabNavigator } from "../TabNavigator";
import { StarshipDetails } from "../../screens/StarshipsScreen/StarshipDetails";
import { FilmDetails } from "../../screens/FilmsScreen/FilmDetails";
import { PeopleResults } from "../../utils/types/People.types";
import { StarshipsResults } from "../../utils/types/Starships.types";
import { FilmsResults } from "../../utils/types/Films.types";

export type StackParamList = {
  Home: undefined;
  PeopleDetails: { character: PeopleResults };
  StarshipDetails: { starship: StarshipsResults };
  FilmDetails: { film: FilmsResults };
};

const Stack = createNativeStackNavigator<StackParamList>();

export const AppNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="PeopleDetails" component={PeopleDetailsScreen} />
      <Stack.Screen name="StarshipDetails" component={StarshipDetails} />
      <Stack.Screen name="FilmDetails" component={FilmDetails} />
    </Stack.Navigator>
  );
};
