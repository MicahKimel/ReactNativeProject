
import axios from "axios";
import React from "react";
import ChartingTypeDropDown from "./ChartingTypeDropDown";
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
    state = {
        labelName: "Reps",
        xdataName: "Weight"
      }
  // Access the postId and otherParam via Destructuring assignment
  componentDidMount(){
      this.state.data = this.props.route.params["data"]
  }

  getFields(input, field) {
    var output = [];
    if (input != null && input.length > 0){
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    }
    return output;
    }

  BacktoDashboard = async event => {
    this.props.navigation.navigate("Dashboard")
  }

  updateType = (val) => {
    this.props.navigation.navigate("Charting", {
        data: this.props.route.params["data"],
        filtered: this.props.route.params["data"].filter( i => i.Name === val),
        labels: this.getFields(this.props.route.params["data"].filter( i => i.Name === val), this.state.labelName),
        xdata: this.getFields(this.props.route.params["data"].filter( i => i.Name === val), this.state.xdataName),
    })
  }

  updateWeight = (val) => {
    this.props.navigation.navigate("Charting", {
        data: this.props.route.params["data"],
        filtered: this.props.route.params["data"].filter( i => i.Weight === val),
        labels: this.getFields(this.props.route.params["data"].filter( i => i.Weight === val), this.state.labelName),
        xdata: this.getFields(this.props.route.params["data"].filter( i => i.Weight === val), this.state.xdataName),

    })
  }

  updateReps = (val) => {
    this.props.navigation.navigate("Charting", {
        data: this.props.route.params["data"],
        filtered: this.props.route.params["data"].filter( i => i.Reps === val),
        labels: this.getFields(this.props.route.params["data"].filter( i => i.Reps === val), this.state.labelName),
        xdata: this.getFields(this.props.route.params["data"].filter( i => i.Reps === val), this.state.xdataName),
    })
  }

  updateAxis = () => {
    this.props.navigation.navigate("Charting", {
        data: this.props.route.params["data"],
        filtered: this.props.route.params["filtered"],
        labels: this.getFields(this.props.route.params["filtered"], this.state.labelName),
        xdata: this.getFields(this.props.route.params["filtered"], this.state.xdataName),
    })
  }

  refresh = () => {
    this.props.navigation.navigate("Charting", {
        data: this.props.route.params["data"],
        filtered: this.props.route.params["data"],
        labels: this.getFields(this.props.route.params["data"], this.state.labelName),
        xdata: this.getFields(this.props.route.params["data"], this.state.xdataName),
    })
  }

  updatelabelName = (val) => {
    this.setState({ labelName: val })
    this.updateAxis()
  }

  updatexdataName = (val) => {
    this.setState({ xdataName: val })
    this.updateAxis()
  }

  render(){
    return (
        <View style={{flex: 1}}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Button title="<" color="#202124" onPress={this.BacktoDashboard} />
            <Button title="Clear" color="#50A9D8" onPress={this.refresh} />
        </View>
        <ScrollView horizontal={true}>
        <LineChart
        data={{
            labels: this.props.route.params["labels"],
            datasets: [
                // {
                // data: this.state.data2,
                // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                // strokeWidth: 2 // optional
                // },

                {
                data: this.props.route.params["xdata"],
                color: (opacity = 1) => `rgba(134, 70, 50, ${opacity})`, // optional
                strokeWidth: 2 // optional
                }
            ],
            legend: ["Reps"] // optional
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        //width={800}
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
        <Row>
            <Col>
            
            <Text>Type</Text>
            <ChartingTypeDropDown update = {this.updateType} data = {[...new Set(this.getFields(this.props.route.params["data"], "Name"))]}/>
        
            </Col>
            <Col>
            <Text>Weight</Text>
            <ChartingTypeDropDown update = {this.updateWeight} data = {[...new Set(this.getFields(this.props.route.params["data"], "Weight"))]}/>
        
            </Col>
        </Row>
        <Row>
            <Col>
            <Text>Reps</Text>
            <ChartingTypeDropDown update = {this.updatelabelName} data = {[...new Set(this.getFields(this.props.route.params["data"], "Reps"))]}/>
            </Col>
        </Row>
        <Row>

        <Col>
            <Text>X Axis</Text>
            <ChartingTypeDropDown update = {this.updatelabelName} data = {[...new Set(Object.keys(this.props.route.params["data"][0]))]}/>
            </Col>
            <Col>
            <Text>Y Axis</Text>
            <ChartingTypeDropDown update = {this.updatexdataName} data = {[...new Set(Object.keys(this.props.route.params["data"][0]))]}/>
            </Col>
        </Row>
        </View>
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

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#3DB4E4"
    },    
    Accbutton:{
        marginTop: 50,
        backgroundColor: "#3DB4E4"
    },    
    Accbutton:{
        marginTop: 20,
        backgroundColor: "#3DB4E4"
    },
    GridBttn:{
        backgroundColor: "#704b48"
    },
    backbutton:{
        width: 50,
    },
    addWorkoutbutton:{
        width: 50,
        position: "absolute",
        alignSelf: 'flex-end',
        right: 0,
        paddingHorizontal: 20,
        
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
        marginTop: 0,
        marginBottom: 2,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "#A2B6AB",
        backgroundColor: "#F5FEF9",
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