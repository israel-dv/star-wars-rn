import { StyleSheet } from "react-native";

//TODO: Set Colors on THEME
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
    justifyContent: "center",
    width: "100%",
  },
  textDetail: {
    fontSize: 22,
    color: "rgb(197,195,187)",
  },
  textDetailInfo: {
    fontSize: 22,
    color: "rgb(255,204,111)",
  },
});
