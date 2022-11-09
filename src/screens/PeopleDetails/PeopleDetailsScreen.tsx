import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";

import { SafeGoBackLayout } from "../../layouts/SafeGoBackLayout/SafeGoBackLayout";
import { peopleDetailsStyles } from "./PeopleDetailsStyles";

export const PeopleDetailsScreen = () => {
  const { goBack } = useNavigation();
  return (
    <SafeGoBackLayout onGoBack={goBack} title="Character Details">
      <View style={peopleDetailsStyles.view}></View>
    </SafeGoBackLayout>
  );
};
