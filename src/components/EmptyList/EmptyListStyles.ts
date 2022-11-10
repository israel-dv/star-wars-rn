import { StyleSheet } from "react-native";

import { COLORS } from "../../utils/constants/COLORS";

export const emptyListStyles = StyleSheet.create({
  view: {
    width: "100%",
    display: "flex",
    flex: 1,
    alignItems: "center",
    marginTop: 40,
  },
  textContent: {
    textAlign: "center",
    fontSize: 28,
    color: COLORS.grayLight,
    marginVertical: 20,
  },
});
