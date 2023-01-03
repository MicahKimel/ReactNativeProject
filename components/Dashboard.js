import TypesDropDown from "./TypesDropDown";
import Month from "./Month";
import axios from "axios";
import React from "react";
import {
    LineChart, ContributionGraph
  } from "react-native-chart-kit";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    Button,
    useColorScheme,
    View,
    Dimensions,
  } from 'react-native';
import { Component } from "react/cjs/react.production.min";
export default class Dashboard extends Component {
    state = {
        weight: '',
        reps: '',
        data: [40, 35, 18, 30, 99, 13],
        data2: [20, 45, 28, 80, 99, 43, 55],
        data3: [
            { date: "2017-01-02", count: 1 },
            { date: "2017-01-03", count: 2 },
            { date: "2017-01-04", count: 3 },
            { date: "2017-01-05", count: 4 },
            { date: "2017-01-06", count: 5 },
            { date: "2017-01-30", count: 2 },
            { date: "2017-01-31", count: 3 },
            { date: "2017-03-01", count: 2 },
            { date: "2017-04-02", count: 4 },
            { date: "2017-03-05", count: 2 },
            { date: "2017-02-30", count: 4 }
          ]
      }

    onWeightText = event => {
        this.setState({ weight: event.nativeEvent.text })
    }

    onRepsText = event => {
        this.setState({ reps: event.nativeEvent.text })
        console.log(this.state.reps)
    }
    

    Back = async event => {
        this.props.navigation.navigate("Login");
    }
    render(){
    return (
        <ScrollView style={styles.scrollView}>
        <View style={{flex: 1}} >
            <Text style={styles.sectionTitle}>Dashboard</Text>            
            <View style={styles.backbutton} >
                <Button title="<" color="#202124" onPress={this.Back} />
            </View>
            <View style={styles.displaybox}>
                <TypesDropDown></TypesDropDown>
                <TextInput
                    style={styles.input}
                    onChange={this.onWeightText}
                    keyboardType="numeric"
                    value={this.reps}
                />
                <TextInput
                    style={styles.input}
                    onChange={this.onRepsText}
                    keyboardType="numeric"
                    value={this.reps}
                />
                <View style={styles.Accbutton}>
                  <Button title="Sumbit" color="#ffffff" onPress={this.createAccount} />
                </View>
            </View>
            <Text>{new Date().toLocaleString()}</Text>
            <ScrollView style={styles.scrollView} horizontal={true}
                contentOffset={{x:new Date().getMonth() * 250, y:0}} >
                <View style={styles.displaybox}>
                    <Month />
                </View>
            </ScrollView>
            <View>
            {/* <ContributionGraph
            values={commitsData}
            endDate={new Date("2017-11-01")}
            numDays={105}
            width={Dimensions.get("window").width}
            height={220}
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
            />
            <Text>Bezier Line Chart</Text> */}
             <LineChart
                data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                        data: this.state.data2,
                        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                        strokeWidth: 2 // optional
                        },
                
                        {
                        data: this.state.data,
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
            </View>
            </ScrollView>
    );
    }
};

const Col = ({ numRows, children }) => {
    return  (
      <View style={styles[`${numRows}col`]}>{children}</View>
    )
  }

const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
)

const commitsData = [
    { date: "2017-01-02", count: 1 },
    { date: "2017-01-03", count: 2 },
    { date: "2017-01-04", count: 3 },
    { date: "2017-01-05", count: 4 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 2 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 2 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-02-30", count: 4 },
    { date: "2017-05-30", count: 4 },
    { date: "2017-06-30", count: 4 },
    { date: "2017-07-30", count: 4 },
    { date: "2017-08-30", count: 4 },
    { date: "2017-09-30", count: 4 },
    { date: "2017-10-30", count: 4 }
  ];

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#3DB4E4"
    },    
    Accbutton:{
        marginTop: 50,
        backgroundColor: "#3DB4E4"
    },    
    Accbutton:{
        marginTop: 50,
        backgroundColor: "#3DB4E4"
    },
    GridBttn:{
        backgroundColor: "#704b48"
    },
    backbutton:{
        width: 50,
    },
    col:  {
        backgroundColor:  "lightblue",
        borderColor:  "#fff",
        borderWidth:  1,
        flex:  1
    },  
    scrollView: {
      paddingVertical: 20,
      flexWrap: 'wrap'
    },
    row: {
        flexDirection: "row"
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
        marginTop: 40,
      fontSize: 20,
      fontWeight: '600',
      textAlign: "center",
    },
    setColorRed :{
        color: '#f44336'
    },
    displaybox:{
        marginTop: 10,
        paddingHorizontal: 24,
        paddingVertical: 24,
        backgroundColor: "#D6E0E4",
    },
    input: {
        marginTop: 16,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "#384252",
        backgroundColor: "#385380",
        color: "black",
        textAlign: "center",
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });