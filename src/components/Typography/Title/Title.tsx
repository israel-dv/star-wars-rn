import React from "react";
import { Text } from "react-native";

import { titleStyles } from "./TitleStyles";

type TitleProps = {
  text: string;
  fontSize?: number;
  textAlign?: "center" | "right" | "left" | "justify" | "auto";
};

export const Title = ({
  text,
  fontSize = 24,
  textAlign = "auto",
}: TitleProps): React.ReactElement => {
  return (
    <Text style={[titleStyles.title, { fontSize, textAlign }]}>{text}</Text>
  );
};
