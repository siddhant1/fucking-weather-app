import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Highlighter from "react-native-highlight-words";

const phrases = {
  Default: {
    title: "Fetching the Fucking Weather",
    subtitle: "Be patient, you're witnessing a miracle",
    highlight: "Fucking",
    color: "#636363",
    background: "#9C9C9C"
  },
  Clear: {
    title: "It's Fucking Amaze Balls",
    subtitle: "Rock that shit!",
    highlight: "Fucking",
    color: "#E32500",
    background: "#FFD017"
  },
  Rain: {
    title: "Rain rain please go away",
    subtitle: "Stay inside and code all day",
    highlight: "away",
    color: "#004A96",
    background: "#2F343A"
  },
  Thunderstorm: {
    title: "Fucking Thunder Strike",
    subtitle: "Unplug those devices",
    highlight: "Thunder",
    color: "#FBFF46",
    background: "#020202"
  },
  Clouds: {
    title: "Cloud storage limit reached",
    subtitle: "error: 5000 - cirrocumulus",
    highlight: "limit",
    color: "#0044FF",
    background: "#939393"
  },
  Snow: {
    title: "Brain Fucking Freeze",
    subtitle: "You're not supposed to eat it",
    highlight: "Fucking",
    color: "#021D4C",
    background: "#15A678"
  },
  Drizzle: {
    title: "Meh... don't even ask",
    subtitle: "What did I just say?",
    highlight: "don't",
    color: "#B3F6E4",
    background: "#1FBB68"
  },
  Mist: {
    title: "Things are Getting Misty",
    subtitle: "Fuck this sweat",
    highlight: "Getting",
    color: "#B3F6E4",
    background: "#1FBB68"
  }
};
export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.body}>
        {console.log(phrases[this.props.state.weather].color)}
        <Highlighter
          style={styles.title}
          highlightStyle={{ color: phrases[this.props.state.weather].color }}
          searchWords={[phrases[this.props.state.weather].highlight]}
          textToHighlight={phrases[this.props.state.weather].title}
        />
        <Text style={styles.subtitle}>
          {phrases[this.props.state.weather].subtitle}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flex: 5,
    margin: 15
  },
  title: {
    fontSize: 78,
    color: "black",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 24,
    color: "white"
  }
});
