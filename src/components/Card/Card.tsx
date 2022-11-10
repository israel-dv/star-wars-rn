import React from "react";
import { TouchableHighlight, View } from "react-native";
import { COLORS } from "../../utils/constants/COLORS";
import { Typography } from "../Typography/Typography";

import { cardStyles } from "./CardStyles";

type CardProps = {
  title: string;
  primaryText?: string;
  secondayText?: string;
  onPress?: () => void;
};

export const Card = ({
  title,
  primaryText,
  secondayText,
  onPress = () => null,
}: CardProps): React.ReactElement => {
  return (
    <TouchableHighlight onPress={onPress} style={cardStyles.card}>
      <View>
        <Typography.Title text={title} />
        <Typography.TextRegular
          text={primaryText}
          style={{ color: COLORS.blueOcean }}
        />
        <Typography.TextRegular
          text={secondayText}
          style={{ color: COLORS.greenDark }}
        />
      </View>
    </TouchableHighlight>
  );
};
