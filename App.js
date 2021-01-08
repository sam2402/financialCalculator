import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import Banner from "./Components/Banner.js";
import styles from "./Components/Styles.js";
import InformationPanelPOR from "./Components/InformationPanelPOR.js";
import InformationPanelMargin from "./Components/InformationPanelMargin.js";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.background}>
          <Banner />
          <ScrollView>
            <KeyboardAvoidingView>
              <InformationPanelPOR />
              <InformationPanelMargin />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
