import { StyleSheet } from "react-native";

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
    color: "rgb(121,195,187)",
  },
  textDetailInfo: {
    fontSize: 22,
    color: "rgb(213,255,124)",
  },
  textCrawl: {
    fontSize: 18,
    color: "orange",
  },
  textCrawlInfo: {
    fontSize: 16,
    textAlign: "justify",
  },
});
