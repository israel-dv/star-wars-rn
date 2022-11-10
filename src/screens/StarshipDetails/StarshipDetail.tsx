import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SafeGoBackLayout } from "../../layouts/SafeGoBackLayout";

export const StarshipDetails = ({ route }): React.ReactElement => {
  const { starship } = route.params;

  const { goBack } = useNavigation();

  return (
    <SafeGoBackLayout onGoBack={goBack} title={"Starship Details"}>
      <View></View>
    </SafeGoBackLayout>
  );
};
