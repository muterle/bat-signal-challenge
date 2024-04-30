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
  containerImg: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "flex-start",
  },
  img: {
    height: 100,
    width: 100,
  },
  containerData: {
    flexDirection: "column",
    width: "80%",
    justifyContent: "flex-start",
    gap: 5,
    marginTop: 20,
  },
  text: {
    width: "100%",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  textLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  send: {
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
