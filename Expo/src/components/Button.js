import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";

import Style from "./style";

export default class Button extends Component {
  render() {
    return (
      <TouchableHighlight
        style={[
          Style.button,
          this.props.highlight ? Style.buttonHighlighted : null
        ]}
        underlayColor="#193441"
        onPress={this.props.onPress}
      >
        <Text style={Style.buttonText}>{this.props.value}</Text>
      </TouchableHighlight>
    );
  }
}
