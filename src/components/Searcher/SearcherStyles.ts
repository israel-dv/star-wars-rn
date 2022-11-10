import { StyleSheet } from "react-native";

import { COLORS } from "../../utils/constants/COLORS";

export const searcherStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    display: "flex",
    width: "100%",
    backgroundColor: COLORS.primaryBackgorund,
    borderColor: COLORS.borderColor,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "rgb(37,40,51)",
    color: "white",
    fontFamily: "Sen-Regular",
    flex: 1,
    borderRadius: 5,
  },
});
