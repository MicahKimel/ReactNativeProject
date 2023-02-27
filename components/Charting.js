
import axios from "axios";
import React from "react";
import { storeUserSession } from "./code";
import {
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
    Dimensions,
    ScrollView,
  } from 'react-native';
import { Component } from "react/cjs/react.production.min";
import {
    LineChart, ContributionGraph
  } from "react-native-chart-kit";

export default class Charting extends Component {
  // Access the postId and otherParam via Destructuring assignment
  componentDidMount(){
      console.log("mounted")
      let tmp = this.props.route.params["data"]
      
      console.log(this.getFields(tmp, "Date"))
  }

  getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

  BacktoDashboard = async event => {
    this.props.navigation.navigate("Dashboard")
  }

  render(){
    return (
        <View style={{flex: 1}}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Button title="<" color="#202124" onPress={this.BacktoDashboard} />
        </View>
        <ScrollView horizontal={true}>
        <LineChart
        data={{
            labels: this.getFields(this.props.route.params["data"], "Date"),
            datasets: [
                // {
                // data: this.state.data2,
                // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                // strokeWidth: 2 // optional
                // },

                {
                data: this.getFields(this.props.route.params["data"], "Reps"),
                color: (opacity = 1) => `rgba(134, 70, 50, ${opacity})`, // optional
                strokeWidth: 2 // optional
                }
            ],
            legend: ["Reps"] // optional
        }}
        //width={Dimensions.get("window").width} // from react-native
        height={220}
        width={800}
        yAxisLabel=""
        yAxisSuffix=""
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
        </ScrollView>
        </View>
    );
  }
};
