import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 300,
    width: 300,
  },
  active: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 60,
    borderRadius: 6,
    backgroundColor: "#333333",
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
