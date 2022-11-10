import { StyleSheet } from "react-native";

import { COLORS } from "../../utils/constants/COLORS";

export const safeAreaLayoutStyles = StyleSheet.create({
  view: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.primaryBackgorund,
    paddingHorizontal: 20,
  },
});
