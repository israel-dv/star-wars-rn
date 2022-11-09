import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

import { COLORS } from "../../utils/constants/COLORS";
import { safeGoBackStyles } from "./SafeGoBackStyles";

type SafeGoBackLayoutProps = {
  children: React.ReactNode;
  barstyle?: ViewStyle;
  style?: ViewStyle | null;
  title?: string;
  onGoBack?: () => void;
};

export const SafeGoBackLayout = ({
  children,
  barstyle,
  style,
  title,
  onGoBack,
}: SafeGoBackLayoutProps): React.ReactElement => {
  return (
    <SafeAreaView
      style={{ backgroundColor: COLORS.primaryBackgorund, ...style }}
    >
      <StatusBar style="light" />
      <View style={safeGoBackStyles.areaView}>
        <View style={[safeGoBackStyles.bar, barstyle]}>
          <AntDesign
            size={24}
            name={"arrowleft"}
            color={"white"}
            onPress={onGoBack}
          />
          <Text style={safeGoBackStyles.title}>{title}</Text>
        </View>
        {children}
      </View>
    </SafeAreaView>
  );
};
