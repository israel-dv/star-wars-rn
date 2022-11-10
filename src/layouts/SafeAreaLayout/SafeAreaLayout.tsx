import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View, ViewStyle } from "react-native";

import { COLORS } from "../../utils/constants/COLORS";
import { safeAreaLayoutStyles } from "./SafeAreaLayoutStyles";

type SafeAreaLayoutProps = {
  children: React.ReactNode;
  style?: ViewStyle | null;
};

export const SafeAreaLayout = ({
  children,
  style,
}: SafeAreaLayoutProps): React.ReactElement => {
  return (
    <SafeAreaView
      style={{ backgroundColor: COLORS.primaryBackgorund, ...style }}
    >
      <StatusBar style="light" />
      <View style={safeAreaLayoutStyles.view}>{children}</View>
    </SafeAreaView>
  );
};
