import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ViewStyle } from "react-native";

import { COLORS } from "../../utils/constants/COLORS";

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
      {children}
    </SafeAreaView>
  );
};
