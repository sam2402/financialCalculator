import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from "./Styles";

class OutputFeild extends Component {
  state = {};
  render() {
    return (
      <View style={styles.inputView}>
        <Text style={styles.inputTextDescriptors}>{this.props.title}</Text>
        <Text style={styles.inputTextDescriptors}>{this.props.output}</Text>
      </View>
    );
  }
}

export default OutputFeild;
