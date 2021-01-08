import React, { Component } from "react";
import { Text, View, Image, TouchableHighlight, Alert } from "react-native";
import styles from "./Styles";

class PanelTitle extends Component {
  state = {};

  handleMoreButtonPress = () => {
    Alert.alert(this.props.title, this.props.message, [{ text: "OK" }]);
  };

  render() {
    return (
      <View style={styles.PanelTitle}>
        <Text style={styles.PanelTitleText}>{this.props.title}</Text>
        <TouchableHighlight
          onPress={this.handleMoreButtonPress}
          underlayColor="cadetblue"
        >
          <Image
            source={require("./baseline_more_horiz_white_48pt_3x.png")}
            style={{ height: 25, width: 30 }}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

export default PanelTitle;
