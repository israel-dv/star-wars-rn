import React from "react";
import { SafeAreaView, ViewStyle } from "react-native";

import { COLORS } from "../constants/COLORS";

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
      {children}
    </SafeAreaView>
  );
};
