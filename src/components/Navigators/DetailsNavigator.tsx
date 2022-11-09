import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PeopleDetailsScreen } from "../../screens/PeopleDetails";
import { PeopleScreen } from "../../screens/People";

const Stack = createNativeStackNavigator();

export const DetailsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="People"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="People" component={PeopleScreen} />
      <Stack.Screen name="PeopleDetails" component={PeopleDetailsScreen} />
    </Stack.Navigator>
  );
};
