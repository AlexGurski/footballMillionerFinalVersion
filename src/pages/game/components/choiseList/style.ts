import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 20,
  },
  choise: {
    width: "40%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "red",
    borderStyle: "dashed",
    borderWidth: 2,
  },
  select: {
    backgroundColor: "orange",
  },
  default: {
    backgroundColor: "white",
  },
  true: {
    backgroundColor: "green",
  },
  mistake: {
    backgroundColor: "red",
  },
});
