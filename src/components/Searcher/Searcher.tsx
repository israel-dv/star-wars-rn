import React from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";

import { searcherStyles } from "./SearcherStyles";

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
        placeholderTextColor={"white"}
        cursorColor={"white"}
        focusable={false}
        onChange={onChange}
        value={value}
      />
    </View>
  );
};
