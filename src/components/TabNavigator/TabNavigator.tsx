import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { FilmsScreen } from "../../screens/FilmsScreen/FilmsScreen";
import { PeopleScreen } from "../../screens/People";
import { styleNavigator } from "./TabNavigatorStyles";

const Tab = createBottomTabNavigator();

export const TabNavigator = (): React.ReactElement => {
  return (
    <Tab.Navigator screenOptions={styleNavigator}>
      <Tab.Screen name="People" component={PeopleScreen} />
      <Tab.Screen name="Films" component={FilmsScreen} />
    </Tab.Navigator>
  );
};
