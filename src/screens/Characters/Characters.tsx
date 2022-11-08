import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { SafeAreaLayout } from "../../layouts";
import { charactersStyles } from "./CharactersStyles";

export const Characters = () => {
  return (
    <SafeAreaLayout>
      <View style={charactersStyles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </SafeAreaLayout>
  );
};
