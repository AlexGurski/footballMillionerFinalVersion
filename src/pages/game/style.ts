import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  allForm: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 20,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    position: "absolute",
    top: 0,
    height: 40,
    width: "100%",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  progres: {
    height: "100%",
    borderColor: "#333333",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius:6,
    padding:3,
  },
  percent: {},
  question: {
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
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
