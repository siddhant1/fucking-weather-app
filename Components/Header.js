import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const iconNames = {
  Default: "md-time",
  Clear: "md-sunny",
  Rain: "md-rainy",
  Thunderstorm: "md-thunderstorm",
  Clouds: "md-cloudy",
  Snow: "md-snow",
  Drizzle: "md-umbrella",
  Mist: "md-partly-sunny"
};
export default class Header extends Component {
  render() {
    return (
      <View style={styles.Styles}>
        <Ionicons
          style={{ fontSize: 60 }}
          name={iconNames[this.props.state.weather]}
          size={32}
          color="black"
        />
        <Text style={{ fontSize: 60 }}>{parseInt(this.props.state.temparature).toFixed(1)}°C</Text>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  Styles: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1.7
  }
});
