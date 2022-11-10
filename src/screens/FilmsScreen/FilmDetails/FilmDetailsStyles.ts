import { StyleSheet } from "react-native";

import { COLORS } from "../../../utils/constants/COLORS";

export const filmDetailsStyles = StyleSheet.create({
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
  opneningView: {
    display: "flex",
    marginVertical: 15,
  },
  textDetail: {
    fontSize: 22,
    color: COLORS.blueTurquoise,
  },
  textDetailInfo: {
    fontSize: 22,
    color: COLORS.greenLemon,
  },
  textCrawl: {
    fontSize: 18,
    color: COLORS.orange,
  },
  textCrawlInfo: {
    fontSize: 16,
    textAlign: "justify",
    color: COLORS.grayDark,
  },
});
