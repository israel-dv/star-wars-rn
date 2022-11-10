import React from "react";
import { ActivityIndicator, View } from "react-native";

import { footerLoadingStyles } from "./FooterLoadingStyles";

export const FooterLoading = () => {
  return (
    <View style={footerLoadingStyles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};
