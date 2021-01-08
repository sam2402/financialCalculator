import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./Styles";

class PercenatgeInputBox extends Component {
  handleNumericalInputBox(numericalInputBoxValue) {
    this.props.onUpdate(numericalInputBoxValue);
    this.setState({
      value: this.normalisedChangedNumberValue(numericalInputBoxValue)
    });
  }

  normalisedChangedNumberValue(numberValue) {
    //let normalisedNumberValue = ""
    if (numberValue[0] == "0") {
      normalisedNumberValue = numberValue.substr(1);
    } else {
      normalisedNumberValue = numberValue;
    }
    return normalisedNumberValue;
  }

  state = {};
  render() {
    return (
      <View flexDirection="row" style={{ alignItems: "center" }}>
        <TextInput
          style={styles.PercenatgeInputStyle}
          keyboardType={"numeric"}
          onChangeText={value => this.handleNumericalInputBox(value)}
          value={this.state.value}
        />
        <Text style={{ marginLeft: 3 }}>%</Text>
      </View>
    );
  }
}

export default PercenatgeInputBox;
