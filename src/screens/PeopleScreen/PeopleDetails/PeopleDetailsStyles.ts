import { StyleSheet } from "react-native";
import { COLORS } from "../../../utils/constants/COLORS";

export const peopleDetailsStyles = StyleSheet.create({
  view: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  nameView: {
    marginVertical: 15,
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
