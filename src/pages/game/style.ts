import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  allForm: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
});
