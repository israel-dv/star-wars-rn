import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  StatusBar as RNStatusBar,
  View,
  ViewStyle,
} from "react-native";

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
  const paddingTop = Platform.OS === "android" ? RNStatusBar.currentHeight : 0;
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.primaryBackgorund,
        paddingTop,
        ...style,
      }}
    >
      <StatusBar style="light" />
      <View style={safeAreaLayoutStyles.view}>{children}</View>
    </SafeAreaView>
  );
};
