import React from "react";
import { Text, TextStyle } from "react-native";
import { textRegularStyles } from "./TextRegularStyles";

type TextRegularProps = {
  text?: string;
  style?: TextStyle;
};

export const TextRegular = ({
  text,
  style,
}: TextRegularProps): React.ReactElement => {
  return (
    <Text style={[textRegularStyles.textRegular, { ...style }]}>{text}</Text>
  );
};
