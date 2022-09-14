import { StyleSheet } from "react-native";

export const todoStyles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    marginLeft: 16,
  },
  button: {
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
    width: 56,
  },
  buttonText: {
    color: "#FDFCFE",
    fontSize: 18,
    fontWeight: "bold"
  },
  textContainer: {
    justifyContent: "center",
    flex: 1,
    marginRight: 5,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
  }
});
