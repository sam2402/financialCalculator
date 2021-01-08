import React, { Component } from "react";
import { View } from "react-native";
import styles from "./Styles.js";
import InputFeild from "./InputFeild";
import OutputFeild from "./OutputFeild";
import TitlePanel from "./PanelTitle.js";

class InformationPanelPOR extends Component {
  state = {
    POR: "",
    rsp: "",
    packSize: "",
    cost: "",
    vatRate: ""
  };

  calculatePOR = (rsp, packSize, cost, vatRate) => {
    rsp = Number(rsp);
    packSize = Number(packSize);
    cost = parseFloat(cost);
    vatRate = Number(vatRate);
    if (!packSize || !rsp) {
      return "";
    }

    const vat = cost * (vatRate / 100);
    const profit = rsp * packSize - (cost + vat);
    const profitPerPiece = profit / packSize;
    const por = (profitPerPiece / rsp) * 100;
    return isNaN(por) ? "" : por.toFixed(2);
  };

  recivePORVariables = valueAndDescriptor => {
    switch (valueAndDescriptor[1]) {
      case "Cost":
        this.state.cost = valueAndDescriptor[0];
        break;
      case "RSP":
        this.state.rsp = valueAndDescriptor[0];
        break;
      case "Pack Size":
        this.state.packSize = valueAndDescriptor[0];
        break;
      case "VAT Rate":
        this.state.vatRate = valueAndDescriptor[0];
        break;
    }
    this.setState({
      POR: this.calculatePOR(
        this.state.rsp,
        this.state.packSize,
        this.state.cost,
        this.state.vatRate
      )
    });
  };

  render() {
    return (
      <View style={styles.informationPanelPOR}>
        <TitlePanel
          title="Profit On Return (POR)"
          message="This calculator helps you work out how much you should charge for a product to make your desired profit margin."
        />
        <OutputFeild title="POR" output={String(this.state.POR) + "%"} />
        <InputFeild
          title="Cost"
          type="currency"
          onUpdate={this.recivePORVariables}
        />
        <InputFeild
          title="RSP"
          type="currency"
          onUpdate={this.recivePORVariables}
        />
        <InputFeild
          title="Pack Size"
          type="numerical"
          onUpdate={this.recivePORVariables}
        />
        <InputFeild
          title="VAT Rate"
          type="picker"
          values={["- ", 0, 5, 10, 15, 20]}
          onUpdate={this.recivePORVariables}
        />
      </View>
    );
  }
}

export default InformationPanelPOR;
