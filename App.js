import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import Body from "./Components/Body";

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

export default class App extends React.Component {
  state = {
    latitude: 0,
    longitude: 0,
    temparature: 0,
    weather: "Default",
    loading: false
  };
  componentDidMount() {
    console.log(this.state);
    console.log("Runnign");
    navigator.geolocation.getCurrentPosition(pos => {
      console.log(pos);
      this.setState(
        current => {
          return {
            ...current,
            latitude: pos.coords.latitude || 0,
            longitude: pos.coords.longitude || 0
          };
        },
        async () => {
          let data = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${
              this.state.latitude
            }&lon=${
              this.state.longitude
            }&appid=62328e4464216d93be8e8d5590566f18&units=metric`
          );
          let json = await data.json();
          console.log(json);
          this.setState(
            current => {
              return {
                ...current,
                weather: json.weather[0].main,
                temparature: json.main.temp
              };
            },
            () => console.log(this.state)
          );
        }
      );
    });
  }
  render() {
    return (
      <View style={{ backgroundColor: phrases[this.state.weather].background,flex:1 }}>
        <Header state={this.state} />
        <Body state={this.state} />
      </View>
    );
  }
}
