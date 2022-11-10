import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { Typography } from "../Typography";
import { emptyListStyles } from "./EmptyListStyles";
import { COLORS } from "../../utils/constants/COLORS";

type EmptyListProps = {
  isErrorContentType?: boolean;
};

export const EmptyList = ({
  isErrorContentType = false,
}: EmptyListProps): React.ReactElement => {
  return (
    <View style={emptyListStyles.view}>
      {isErrorContentType ? (
        <>
          <Typography.Heading text="UPS!" fontSize={40} textAlign="center" />
          <Typography.TextRegular
            text="We have some problems. Try again more later"
            style={emptyListStyles.textContent}
          />
          <MaterialIcons name="search-off" size={50} color={COLORS.grayLight} />
        </>
      ) : (
        <>
          <Typography.Heading text="Sorry!" fontSize={40} textAlign="center" />
          <Typography.TextRegular
            text="We couldn't find what you're looking for"
            style={emptyListStyles.textContent}
          />
          <AntDesign name="warning" size={50} color={COLORS.grayLight} />
        </>
      )}
    </View>
  );
};
