import React, { Component } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  Platform,
  Alert,
  Linking
} from "react-native";
import styles from "./Styles";

class Banner extends Component {
  state = {};

  handleInfoButtonPress = () => {
    Alert.alert(
      "The RNF Profit Calculator",
      "Created by Samuel Lubrano on behalf of RNF Digital Innovation Ltd.",
      [
        {
          text: "Visit RNF Website",
          onPress: () => Linking.openURL("https://rnfdigital.com")
        },
        { text: "OK", style: "cancel" }
      ]
    );
  };

  render() {
    let iconLink =
      "./icons8-info-filled-100.png";
    if (Platform.OS === "ios") {
      iconLink =
        "./icons8-info-filled-100.png";
    } else if (Platform.OS === "android") {
      iconLink =
        "./baseline_info_black_48dp.png";
    }
    return (
      <View style={styles.banner}>
        <View style={{ height: 26, width: 26 }} />
        <Text style={{ fontSize: 23 }}>Profit Calculator</Text>
        <TouchableHighlight
          onPress={this.handleInfoButtonPress}
          underlayColor="white"
        >
          <Image
            source={require("./icons8-info-filled-100.png")}
            style={{ height: 26, width: 26 }}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

export default Banner;
