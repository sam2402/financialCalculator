import React, { Component } from "react";
import { Text, View } from "react-native";
import CurrencyInputBox from "./CurrencyInputBox.js";
import PickerInput from "./PickerInput.js";
import NumericalInputBox from "./NumericalInputBox.js";
import styles from "./Styles";
import PercenatgeInputBox from "./percentageInputBox.js";

class InputFeild extends Component {
  passValueToInformationPanelParent = valueFromChild => {
    this.props.onUpdate([valueFromChild, this.props.title]);
  };

  state = {};
  render() {
    inputSelector = () => {
      if (this.props.type == "currency") {
        return (
          <CurrencyInputBox
            descriptor={this.props.title}
            onUpdate={this.passValueToInformationPanelParent}
            placeholder={this.props.placeholder}
          />
        );
      } else if (this.props.type == "picker") {
        return (
          <PickerInput
            values={this.props.values}
            descriptor={this.props.title}
            onUpdate={this.passValueToInformationPanelParent}
          />
        );
      } else if (this.props.type == "numerical") {
        return (
          <NumericalInputBox
            descriptor={this.props.title}
            onUpdate={this.passValueToInformationPanelParent}
          />
        );
      } else if (this.props.type == "percentage") {
        return (
          <PercenatgeInputBox
            descriptor={this.props.title}
            onUpdate={this.passValueToInformationPanelParent}
          />
        );
      }
    };

    return (
      <View style={styles.inputView}>
        <Text style={styles.inputTextDescriptors}>{this.props.title}</Text>
        <View>{inputSelector()}</View>
      </View>
    );
  }
}

export default InputFeild;
