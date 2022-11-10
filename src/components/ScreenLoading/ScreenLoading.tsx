import React from "react";
import { View } from "react-native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import { screenLoadingStyles } from "./ScreenLoadingStyles";

type ScreenLoadingProps = {
  showSearcher?: boolean;
};

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export const ScreenLoading = ({ showSearcher = false }: ScreenLoadingProps) => {
  return (
    <View style={screenLoadingStyles.view}>
      {showSearcher ? (
        <ShimmerPlaceholder style={screenLoadingStyles.search} />
      ) : null}
      <View style={screenLoadingStyles.card}>
        <ShimmerPlaceholder style={screenLoadingStyles.title} />
        <ShimmerPlaceholder style={screenLoadingStyles.subtitle} />
        <ShimmerPlaceholder style={screenLoadingStyles.subtitle} />
      </View>
      <View style={screenLoadingStyles.card}>
        <ShimmerPlaceholder style={screenLoadingStyles.title} />
        <ShimmerPlaceholder style={screenLoadingStyles.subtitle} />
        <ShimmerPlaceholder style={screenLoadingStyles.subtitle} />
      </View>
      <View style={screenLoadingStyles.card}>
        <ShimmerPlaceholder style={screenLoadingStyles.title} />
        <ShimmerPlaceholder style={screenLoadingStyles.subtitle} />
        <ShimmerPlaceholder style={screenLoadingStyles.subtitle} />
      </View>
      <View style={screenLoadingStyles.card}>
        <ShimmerPlaceholder style={screenLoadingStyles.title} />
        <ShimmerPlaceholder style={screenLoadingStyles.subtitle} />
        <ShimmerPlaceholder style={screenLoadingStyles.subtitle} />
      </View>
      <View style={screenLoadingStyles.card}>
        <ShimmerPlaceholder style={screenLoadingStyles.title} />
        <ShimmerPlaceholder style={screenLoadingStyles.subtitle} />
        <ShimmerPlaceholder style={screenLoadingStyles.subtitle} />
      </View>
    </View>
  );
};
