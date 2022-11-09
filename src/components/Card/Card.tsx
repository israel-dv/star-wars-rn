import React from "react";
import { Text, TouchableHighlight, View } from "react-native";

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
        <Text style={cardStyles.cardNameText}>{name}</Text>
        <Text
          style={cardStyles.cardGenderText}
        >{`${CARD_TEXT.gender}: ${gender}`}</Text>
        <Text
          style={cardStyles.cardBirthYearText}
        >{`${CARD_TEXT.birthYear}: ${birth_year}`}</Text>
      </View>
    </TouchableHighlight>
  );
};
