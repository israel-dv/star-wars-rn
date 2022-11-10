import { StyleSheet } from "react-native";

import { COLORS } from "../../utils/constants/COLORS";

export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: "rgb(25,28,36)",
    borderWidth: 2,
    borderColor: COLORS.borderColor,
    borderRadius: 12,
    display: "flex",
    height: 110,
    justifyContent: "center",
    marginVertical: 10,
    marginRight: 20,
    overflow: "hidden",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
