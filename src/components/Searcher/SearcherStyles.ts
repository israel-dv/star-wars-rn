import { StyleSheet } from "react-native";

import { COLORS } from "../../utils/constants/COLORS";

export const searcherStyles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLORS.primaryBackgorund,
  },
  input: {
    backgroundColor: "rgb(37,40,51)",
    borderColor: COLORS.borderColor,
    borderRadius: 5,
    borderWidth: 1,
    color: "white",
    fontFamily: "Sen-Regular",
    height: 40,
    marginBottom: 10,
    padding: 10,
  },
});
