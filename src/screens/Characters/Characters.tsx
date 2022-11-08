import React from "react";
import { Text, View } from "react-native";

import { usePeople } from "../../hooks/usePeople";
import { SafeAreaLayout } from "../../layouts";
import { charactersStyles } from "./CharactersStyles";

export const Characters = () => {
  const { data: people } = usePeople();

  return (
    <SafeAreaLayout>
      <View style={charactersStyles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </SafeAreaLayout>
  );
};
