import React from "react";
import { Text, ViewStyle } from "react-native";
import { COLORS } from "../../../utils/constants/COLORS";

type HeadingProps = {
  text: string;
  fontSize?: number;
  textAlign?: "center" | "right" | "left" | "justify" | "auto";
  color?: string;
  style?: ViewStyle;
};

export const Heading = ({
  text,
  fontSize = 24,
  textAlign = "auto",
  color = COLORS.grayLight,
  style,
}: HeadingProps): React.ReactElement => {
  return (
    <Text
      style={{
        fontSize,
        textAlign,
        color,
        fontFamily: "Archivo-Black",
        ...style,
      }}
    >
      {text}
    </Text>
  );
};
