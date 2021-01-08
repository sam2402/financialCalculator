import { StyleSheet, Dimensions, Platform } from "react-native";
import PickerInput from "./PickerInput";
import PercenatgeInputBox from "./percentageInputBox";

function safeScreenWidth() {
  let x = Dimensions.get("window").width;
  return x - 10;
}

export default StyleSheet.create({
  background: {
    height: 100 + "%",
    width: 100 + "%",
    backgroundColor: "rgb(239, 239, 239)"
  },
  banner: {
    flexDirection: "row",
    width: 100 + "%",
    height: 50,
    backgroundColor: "white",
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    paddingHorizontal: 11,
    elevation: 2
  },
  informationPanelPOR: {
    margin: 5,
    paddingHorizontal: 10,
    paddingTop: 5,
    height: 240,
    width: safeScreenWidth(),
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  },
  informationPanelMargin: {
    margin: 5,
    paddingHorizontal: 10,
    paddingTop: 5,
    height: 200,
    width: safeScreenWidth(),
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  },
  inputView: {
    marginVertical: 5,
    width: 100 + "%",
    height: 30,
    backgroundColor: "white",
    flexDirection: "row",
    //paddingHorizontal: 5,
    justifyContent: "space-between",
    alignItems: "center"
  },
  inputTextDescriptors: {
    fontSize: 20
  },
  TextInputStyle: {
    padding: 0,
    paddingLeft: 3,
    textAlign: "left",
    height: 30,
    width: 100,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "gray"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  PanelTitle: {
    backgroundColor: "cadetblue",
    marginTop: -5,
    marginHorizontal: -10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 5,
    paddingLeft: 11,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  PanelTitleText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white"
  },
  PickerInputStyles: {
    paddingLeft: 3,
    paddingTop: 5,
    textAlign: "center",
    fontSize: 14,
    height: 30,
    width: 60,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "gray"
  },
  PercenatgeInputStyle: {
    paddingLeft: 3,
    textAlign: "left",
    height: 30,
    width: 65,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "gray"
  }
});
