import { StyleSheet } from "react-native";

import { COLORS } from "../../../utils/constants/COLORS";

export const starshipStyles = StyleSheet.create({
  view: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  infoView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  textDetail: {
    fontSize: 22,
    color: COLORS.blueTurquoise,
  },
  textDetailInfo: {
    fontSize: 22,
    color: COLORS.greenLemon,
  },
});
