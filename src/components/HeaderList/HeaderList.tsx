import React from "react";
import { View } from "react-native";

import { COLORS } from "../../utils/constants/COLORS";
import { Typography } from "../Typography";

type HeaderListProps = {
  text: string;
};

export const HeaderList = ({ text }: HeaderListProps): React.ReactElement => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: COLORS.primaryBackgorund,
        paddingBottom: 15,
      }}
    >
      <Typography.Heading text={text} textAlign="center" />
    </View>
  );
};
