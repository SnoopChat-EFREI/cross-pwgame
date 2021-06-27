import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  page: {
    display: "flex",
    alignItems: "center",
    height: "80%",
  },
  table: {
    display: "flex",
    flexDirection: "row",
  },
  list: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  boxBtn: {},
  btn: {
    backgroundColor: "#00a8ff",
    paddingHorizontal: 80,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
  },
});

export default styles;
