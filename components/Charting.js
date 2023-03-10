
import axios from "axios";
import React from "react";
import ChartingTypeDropDown from "./ChartingTypeDropDown";
import { storeUserSession } from "./code";
import Modal from "react-native-modal";
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
        Reps: "",
        Weight: "",
        Name: "",
        date1: "",
        date2: "",
        ExerciseProgress: false
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

  updateChart = async event => {
    this.setState({ ExerciseProgress: !this.state.ExerciseProgress})
    dataval = this.props.route.params["data"]
    if (this.state.Name != "") {
      dataval = dataval.filter(i => i.Name == this.state.Name)
    }
    if (this.state.date1 != "") {
      dataval = dataval.filter(i => i.Date == this.state.date1)
    }
    if (this.state.Reps != "") {
      dataval = dataval.filter(i => i.Reps == this.state.Reps)
    }
    if (this.state.Weight != "") {
      dataval = dataval.filter(i => i.Weight == this.state.Weight)
    }
    datasets = dataval.reduce((groups, item) => {
      const group = (groups[item.Name] || []);
      group.push(item);
      groups[item.Name] = group;
      return groups;
    }, {});
    const datavalues = []
    const legend = []
    for (const property in datasets) {
        color1 = String(Math.floor(Math.random() * 255));
        color2 = String(Math.floor(Math.random() * 255));
        datavalues.push(
        {
            data: this.getFields(datasets[property], "Weight"),
            color: (opacity = 1) => `rgba(`+color1+`, 255, `+color2+`, ${opacity})`, // optional
            strokeWidth: 2 // optional
        });
        legend.push(property);
    }
    this.props.navigation.navigate("Charting", {
        data: this.props.route.params["data"],
        filtered: dataval,
        labels: this.getFields(dataval, "Reps"),
        xdata: this.getFields(dataval, "Weight"),
        legend: legend,
        datasets: datavalues,
        date: this.props.route.params["date"]
    })
  }

  getFields(input, field) {
    var output = [];
    if (input != null && input.length > 0){
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    }
    return output;
  }

  updateWeight = (val) => {
    this.setState({ Weight: val})
  }

  updateType = (val) => {
    this.setState({ Name: val})
  }

  updateReps = (val) => {
    this.setState({ Reps: val})
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

  toggleExerciseProgress = async event => {
    this.setState({ ExerciseProgress: !this.state.ExerciseProgress})
  }

  ChartNavigate = async event => {
    console.log("charting")
    this.props.navigation.navigate("Charting", {
        data: this.state.data,
        filtered: this.state.data,
        labels: this.getFields(this.props.route.params["data"].filter( i => i.Reps === val), this.state.labelName),
        xdata: this.getFields(this.props.route.params["data"].filter( i => i.Reps === val), this.state.xdataName),
    })
}

  render(){
    return (
        <View style={{flex: 0.8}}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Button title="<" color="#202124" onPress={this.BacktoDashboard} />
        </View>
        <View>
          <Row style={{RowCenter}}>
          <Button title="<" color="#50A9D8" onPress={this.BacktoDashboard} />
          <Button title={String(this.props.route.params["date"])} color="#50A9D8" onPress={this.refresh} />
          <Button title=">" color="#50A9D8" onPress={this.BacktoDashboard} />
          </Row>
        </View>

        <View style={styles.displaybox}>
        <ScrollView horizontal={true}>
        <View style={styles.Labely}>
        <Text>Weight</Text>
        </View>
        <LineChart
        data={{
            labels: this.props.route.params["labels"],
            datasets: this.props.route.params["datasets"],
            legend: this.props.route.params["legend"] // optional
        }}
        width={Dimensions.get("window").width - 40} // from react-native
        height={220}
        //width={800}
        yAxisLabel=""
        yAxisSuffix=""
        xAxisLabel=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
        backgroundColor: "#5499C7",
        backgroundGradientFrom: "#2980B9",
        backgroundGradientTo: "#A9CCE3",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#0D4567"
        }
        }}
        bezier
        style={{
        marginVertical: 8,
        borderRadius: 16
        }}
        /> 
        </ScrollView>
        <View style={styles.Labelx}>
        <Text>Reps</Text>
        </View>
        </View>

        <Modal isVisible={this.state.ExerciseProgress}>
        <View style={styles.displaybox}>
            
            <Row>
                <Button title="X" color="#FE0000" onPress={this.toggleExerciseProgress} />
            </Row>
            <Text>Type</Text>
            <ChartingTypeDropDown update = {this.updateType} data = {[...new Set(this.getFields(this.props.route.params["data"], "Name"))]}/>

        <Row>
            <Col>
            <Text>Reps</Text>
            <ChartingTypeDropDown update = {this.updateReps} data = {[...new Set(this.getFields(this.props.route.params["data"], "Reps"))]}/>
            </Col>
            <Col>
            <Text>Weight</Text>
            <ChartingTypeDropDown update = {this.updateWeight} data = {[...new Set(this.getFields(this.props.route.params["data"], "Weight"))]}/>
            </Col>
        </Row>
            <View style={styles.Accbutton}>
            <Button title="Filter" color="#ffffff" onPress={this.updateChart} />
            </View>
        </View>
        </Modal>
        <View style={styles.displaybox}>
        <View style={styles.Accbutton}>
            <Button title="Exercise Progress Filter" color="#ffffff" onPress={this.toggleExerciseProgress} />
        </View>
        </View>
        {/*<Row>

         <Col>
            <Text>X Axis</Text>
            <ChartingTypeDropDown update = {this.updatelabelName} data = {[...new Set(Object.keys(this.props.route.params["data"][0]))]}/>
            </Col>
            <Col>
            <Text>Y Axis</Text>
            <ChartingTypeDropDown update = {this.updatexdataName} data = {[...new Set(Object.keys(this.props.route.params["data"][0]))]}/>
            </Col>
        </Row> */}
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
    RowCenter:{
      justifyContent: center,
      alignItems: center
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
    Labelx:{
      marginStart: 180,
    },
    Labely:{
      marginTop: 120,
      height: 30,
      transform: [{rotate: '-90deg'}]
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