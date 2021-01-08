import React, { Component } from "react";
import { Picker, View, Platform } from "react-native";
import styles from "./Styles";
import SelectInput from "react-native-select-input-ios";

class PickerInput extends React.Component {
  state = {
    value: this.props.values[0],
    values: this.props.values,
    numberOfTimesSelected: 0
  };

  handlePickerInput = pickerInputValue => {
    this.props.onUpdate(pickerInputValue);
    this.setState({ value: pickerInputValue });
    if (Platform.OS === "android") {
      this.removeDefaultOption();
    }
  };

  removeDefaultOption = () => {
    if (this.state.values[0] === this.props.values[0]) {
      this.setState({
        values: this.state.values.slice(1, this.state.values.length)
      });
    }
  };

  selector = () => {
    const options = this.state.values.map(item => {
      return { value: item, label: String(item) + "%" };
    });
    if (Platform.OS === "ios") {
      return (
        <SelectInput
          labelStyle={styles.PickerInputStyles}
          value={this.state.value}
          mode="dialog"
          options={options}
          onValueChange={itemValue => {
            this.handlePickerInput(itemValue);
          }}
          onSubmitEditing={foo => {
            this.removeDefaultOption();
          }}
        />
      );
    } else if (Platform.OS === "android") {
      return (
        <Picker
          style={{ height: 50, width: 100 }}
          onValueChange={itemValue => {
            this.handlePickerInput(itemValue);
          }}
          selectedValue={this.state.value}
        >
          {this.state.values.map(item => {
            return (
              <Picker.Item label={String(item) + "%"} value={item} key={item} />
            );
          })}
        </Picker>
      );
    }
  };

  render() {
    return <View>{this.selector()}</View>;
  }
}

export default PickerInput;
