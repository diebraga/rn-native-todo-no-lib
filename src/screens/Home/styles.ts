import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    alignItems: "center",
  },
  textHeading: {
    color: "white",
  },
  headingText: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
  },
  headingHelperText: {
    marginLeft: 2,
    color: "#6B6B6B",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },
  layoutView: {
    marginTop: 100,
    maxWidth: "90%",
    width: "100%",
    flex: 1
  },
  input: {
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    color: "#FDFCFE",
    marginTop: 5,
    flex: 1,
    marginRight: 5
  },
  button: {
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    width: 56,
  },
  buttonText: {
    color: "#FDFCFE",
    fontSize: 18,
    fontWeight: "bold"
  },
  form: {
    flexDirection: "row",
    width: "100%",
    marginTop: 15,
    marginBottom: 30
  },
  emptyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center"
  }
});
