import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/COLORS";

export const charactersStyles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.primaryBackgorund,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
