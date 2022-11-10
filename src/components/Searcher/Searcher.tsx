import React from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { searcherStyles } from "./SearcherStyles";
import { COLORS } from "../../utils/constants/COLORS";

type SearcherProps = {
  value?: string;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};

export const Searcher = ({
  value,
  onChange,
}: SearcherProps): React.ReactElement => {
  return (
    <View style={searcherStyles.container}>
      <TextInput
        style={searcherStyles.input}
        placeholder={"Search People"}
        placeholderTextColor={COLORS.grayLight}
        cursorColor={"white"}
        focusable={false}
        onChange={onChange}
        value={value}
      />
      <Ionicons name="md-search-outline" size={18} color={COLORS.grayLight} />
    </View>
  );
};
