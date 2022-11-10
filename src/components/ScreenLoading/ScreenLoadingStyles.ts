import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/constants/COLORS";

export const screenLoadingStyles = StyleSheet.create({
  view: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  search: {
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    marginBottom: 10,
  },
  card: {
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
  title: {
    width: "50%",
    height: 24,
    borderRadius: 10,
    marginTop: 10,
  },
  subtitle: {
    width: "35%",
    height: 16,
    borderRadius: 10,
    marginTop: 10,
  },
});
