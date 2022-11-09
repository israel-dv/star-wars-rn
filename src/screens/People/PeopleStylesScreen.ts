import { StyleSheet } from "react-native";

import { COLORS } from "../../utils/constants/COLORS";

export const peopleStyles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.primaryBackgorund,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
