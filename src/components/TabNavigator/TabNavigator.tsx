import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FilmsScreen } from "../../screens/FilmsScreen/FilmsScreen";
import { PeopleScreen } from "../../screens/PeopleScreen";
import { Starships } from "../../screens/StarshipsScreen/Starships";
import { styleNavigator } from "./TabNavigatorStyles";

const Tab = createBottomTabNavigator();

export const TabNavigator = (): React.ReactElement => {
  return (
    <Tab.Navigator screenOptions={styleNavigator}>
      <Tab.Screen name="People" component={PeopleScreen} />
      <Tab.Screen name="Films" component={FilmsScreen} />
      <Tab.Screen name="Starships" component={Starships} />
    </Tab.Navigator>
  );
};
