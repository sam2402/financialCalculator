import React, { Component } from "react";
import { View } from "react-native";
import styles from "./Styles.js";
import InputFeild from "./InputFeild";
import OutputFeild from "./OutputFeild";
import PanelTitle from "./PanelTitle.js";

class InformationPanelMargin extends Component {
  state = {
    cost: "",
    margin: "",
    revenue: "",
    profit: "",
    useRevenue: true
  };

  generateIOFeild = RevOrProfit => {
    <InputFeild
      title={RevOrProfit}
      type="currency"
      onUpdate={this.reciveMarginVariables}
      placeholder={this.state.revenue}
    />;
  };

  calculateMargin = (cost, revenue, profit) => {
    if (
      (cost != "" && revenue !== "" && this.state.useRevenue == true) ||
      (cost != "" && profit != "" && this.state.useRevenue == false)
    ) {
      if (this.state.useRevenue == true) {
        calculatedProfit = Number(revenue) - Number(cost);
        this.setState({ profit: calculatedProfit });
        calculatedRevenue = Number(revenue);
      } else {
        this.setState({ revenue: "" });
        calculatedProfit = Math.abs(Number(profit));
        calculatedRevenue = Number(cost) + Number(calculatedProfit);
        this.setState({ revenue: calculatedRevenue });
      }
      let margin = calculatedProfit / calculatedRevenue;
      margin = margin * 100;
      if (margin != Infinity && margin != -Infinity && cost != "")
        return isNaN(margin) ? "" : margin.toFixed(2);
    }
    return "";
  };

  reciveMarginVariables = valueAndDescriptor => {
    switch (valueAndDescriptor[1]) {
      case "Cost":
        this.state.cost = valueAndDescriptor[0];
        break;
      case "Revenue":
        this.state.revenue = valueAndDescriptor[0];
        this.state.useRevenue = true;
        break;
      case "Profit":
        this.state.profit = valueAndDescriptor[0];
        this.state.useRevenue = false;
        break;
    }
    this.setState({
      margin: this.calculateMargin(
        this.state.cost,
        this.state.revenue,
        this.state.profit
      )
    });
  };

  render() {
    return (
      <View style={styles.informationPanelMargin}>
        <PanelTitle
          title="Cash Margin"
          message="This calculator uses cost and either revenue or profit to calculate cash margin. The calculation will be based off whichever field out of profit or revenue you entered last. Margin shows what percentage of your costs your profit accounts for. "
        />
        <OutputFeild title="Margin" output={String(this.state.margin) + "%"} />
        <InputFeild
          title="Cost"
          type="currency"
          onUpdate={this.reciveMarginVariables}
        />
        <InputFeild
          title="Revenue"
          type="currency"
          onUpdate={this.reciveMarginVariables}
          placeholder={this.state.revenue}
        />
        <InputFeild
          title="Profit"
          type="currency"
          onUpdate={this.reciveMarginVariables}
          placeholder={this.state.profit}
        />
      </View>
    );
  }
}

export default InformationPanelMargin;
