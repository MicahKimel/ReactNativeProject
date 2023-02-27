
import axios from "axios";
import React from "react";
import { storeUserSession } from "./code";
import {
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
  } from 'react-native';
import { Component } from "react/cjs/react.production.min";

export default class Charting extends Component {
  state = {
    user: '',
    password: ''
  }

  render(){
    return (
        <View>
        <LineChart
        data={{
            labels: this.state.data.map(i => { i.Year }),
            datasets: [
                // {
                // data: this.state.data2,
                // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                // strokeWidth: 2 // optional
                // },

                {
                data: this.state.data.getFields("Reps"),
                color: (opacity = 1) => `rgba(134, 70, 50, ${opacity})`, // optional
                strokeWidth: 2 // optional
                }
            ],
            legend: ["Rainy Days"] // optional
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
        }
        }}
        bezier
        style={{
        marginVertical: 8,
        borderRadius: 16
        }}
        /> 
        </View>
    );
  }
};