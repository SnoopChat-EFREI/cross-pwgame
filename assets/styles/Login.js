import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  connectionContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  connectionInput: {
    alignItems: "center",
    width: "100%",
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    padding: 15,
    marginBottom: "10%",
    borderRadius: 10,
  },
  connectionButton: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#1acaff",
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginTop: "5%",
    width: "50%",
    borderColor: "#1AC6F0",
    borderWidth: 1,
    borderRadius: 25,
  },
  buttonText: {
    color: "#0082ba",
    fontWeight: "bold",
  },
  connectionBox: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "105%",
    borderWidth: 1,
    borderColor: "#00B2FF",
  },
  fail: {
    backgroundColor: "#CC4114",
    color: "white",
    width: "80%",
    padding: 15,
    marginBottom: "10%",
    borderRadius: 10,
  },
  title: {
    color: "#00B2FF",
    marginBottom: 50,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default styles;
