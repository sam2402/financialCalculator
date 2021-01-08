import React, { Component } from "react";
import { View, TextInput } from "react-native";
import styles from "./Styles";

class NumericalInputBox extends Component {
  handleNumericalInputBox(numericalInputBoxValue) {
    this.props.onUpdate(numericalInputBoxValue);
    this.setState({
      value: this.normalisedChangedNumberValue(numericalInputBoxValue)
    });
  }

  normalisedChangedNumberValue(numberValue) {
    let normalisedChangedNumberValue = "";
    if (numberValue.includes(".")) {
      normalisedNumberValueArray = numberValue.split(".");
      normalisedNumberValue = normalisedNumberValueArray[0];
    } else {
      normalisedNumberValue = numberValue;
    }
    if (normalisedNumberValue[0] == "0") {
      normalisedNumberValue = normalisedNumberValue.substr(1);
    }
    return normalisedNumberValue;
  }

  state = {};
  render() {
    return (
      <View>
        <TextInput
          style={styles.TextInputStyle}
          keyboardType={"numeric"}
          onChangeText={value => this.handleNumericalInputBox(value)}
          value={this.state.value}
        />
      </View>
    );
  }
}

export default NumericalInputBox;
