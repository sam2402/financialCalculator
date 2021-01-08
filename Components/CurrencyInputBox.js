import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import styles from "./Styles";

class CurrencyInputBox extends Component {
  state = {};

  handleCurrencyInputBox = CurrencyInputBoxValue => {
    this.props.onUpdate(CurrencyInputBoxValue);
    this.setState({
      value: this.normalisedChangedMoneyValue(CurrencyInputBoxValue)
    });
  };

  normalisedChangedMoneyValue(moneyValue) {
    if (moneyValue.includes(".")) {
      var normalisedMoneyValueArray = moneyValue.split(".");
      if (normalisedMoneyValueArray[1] > 2) {
        normalisedMoneyValueArray[1] = normalisedMoneyValueArray[1].slice(0, 2);
      }
      normalisedMoneyValue =
        normalisedMoneyValueArray[0] + "." + normalisedMoneyValueArray[1];
    } else {
      normalisedMoneyValue = moneyValue;
    }
    if (normalisedMoneyValue[0] == "0") {
      normalisedMoneyValue = normalisedMoneyValue.substr(1);
    }
    return normalisedMoneyValue;
  }

  getDisplayValue = () => {
    if (this.props.placeholder != undefined) {
      return String(this.props.placeholder);
    }
    return this.state.value;
  };

  render() {
    return (
      <View flexDirection="row" style={{ alignItems: "center" }}>
        <Text style={{ margin: 2 }}>£</Text>
        <TextInput
          //gravity="center"
          style={styles.TextInputStyle}
          keyboardType={"numeric"}
          onChangeText={moneyValue => this.handleCurrencyInputBox(moneyValue)}
          value={this.getDisplayValue()}
        />
      </View>
    );
  }
}

export default CurrencyInputBox;
