import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { Typography } from "../Typography/Typography";

import { cardStyles } from "./CardStyles";

type CardProps = {
  name: string;
  gender: string;
  birth_year: string;
  onPress?: () => void;
};

const CARD_TEXT = {
  gender: "Gender",
  birthYear: "BirthYear",
};

export const Card = ({
  name,
  gender,
  birth_year,
  onPress = () => null,
}: CardProps): React.ReactElement => {
  return (
    <TouchableHighlight onPress={onPress} style={cardStyles.card}>
      <View>
        <Typography.Title text={name} />
        <Typography.TextRegular
          text={`${CARD_TEXT.gender}: ${gender}`}
          style={{ color: "rgb(96,131,186)" }}
        />
        <Typography.TextRegular
          text={`${CARD_TEXT.birthYear}: ${birth_year}`}
          style={{ color: "rgb(101,152, 83)" }}
        />
      </View>
    </TouchableHighlight>
  );
};
