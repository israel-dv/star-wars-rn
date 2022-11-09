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
  cardNameText: {
    color: "white",
    fontSize: 24,
    fontFamily: "Archivo-Black",
    textShadowColor: "orange",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 2,
  },
  cardGenderText: {
    color: "rgb(96,131,186)",
    fontFamily: "Sen-Regular",
    fontSize: 15,
    marginTop: 5,
  },
  cardBirthYearText: {
    color: "rgb(101,152, 83)",
    fontFamily: "Sen-Regular",
    fontSize: 15,
  },
});
