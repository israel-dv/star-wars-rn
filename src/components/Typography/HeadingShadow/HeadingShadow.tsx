import React from "react";
import { Text } from "react-native";

import { headingShadowStyles } from "./HeadingShadowStyles";

type HeadingShadowProps = {
  text: string;
  fontSize?: number;
  textAlign?: "center" | "right" | "left" | "justify" | "auto";
};

export const HeadingShadow = ({
  text,
  fontSize = 24,
  textAlign = "auto",
}: HeadingShadowProps): React.ReactElement => {
  return (
    <Text style={[headingShadowStyles.title, { fontSize, textAlign }]}>
      {text}
    </Text>
  );
};
