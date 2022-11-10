import React from "react";
// import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
// import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, Text, View } from "react-native";
import { footerLoadingStyles } from "./FooterLoadingStyles";

// const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export const FooterLoading = () => {
  return (
    <View style={footerLoadingStyles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};
