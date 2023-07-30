import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  allForm: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    paddingHorizontal: "18%",
    gap: 20,
    // borderColor: "red",
    // borderWidth: 1,
    width: "100%",
    paddingBottom: 100,
  },
  buttons: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#333333",
    borderStyle: "solid",
    padding: 5,
    position: "relative",
    height: 50,
  },
  buttons__container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,215,0, 0.8)",
    borderRadius: 6,
    width: "100%",
    height: "100%",
    padding: 5,
  },
});
