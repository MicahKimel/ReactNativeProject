
import axios from "axios";
import React from "react";
import ChartingTypeDropDown from "./ChartingTypeDropDown";
import { storeUserSession } from "./code";
import Modal from "react-native-modal";
import TypesDropDown from "./TypesDropDown";
import AddExercies from "./AddExercies";
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
    LineChart, StackedBarChart
  } from "react-native-chart-kit";

export default class Charting extends Component {
    state = {
        Reps: "",
        Weight: "",
        Name: "",
        date1: "",
        date2: "",
        weight: '',
        reps: '',
        exercise: '',
        showAddWorkout: false,
        ExerciseProgress: false
      }
  // Access the postId and otherParam via Destructuring assignment
  componentDidMount(){
      //this.state.data = this.props.route.params["data"]
  }

  toggleShowWorkout = event => {
    this.setState({ showAddWorkout: !this.state.showAddWorkout })
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

  toListView = async event => {
    this.props.navigation.navigate("ListView", {
      data: this.props.route.params["data"]
    })
  }

  filterChart = async event => {
    this.setState({ ExerciseProgress: !this.state.ExerciseProgress})
    this.updateChart()
  }

  getFields(input, field) {
    var output = [];
    if (input != null && input.length > 0){
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    }
    return output;
  }

  ShowToday = (val) => {
    this.setState({ Weight: ""})
    this.setState({ Name: ""})
    this.setState({ Reps: ""})
    this.setState({ date1: val},
    function() {this.updateChart()});
  }

  updateWeight = (val) => {
    this.setState({ Weight: val})
    this.setState({ date1: ""})
  }

  updateType = (val) => {
    this.setState({ Name: val})
    this.setState({ date1: ""})
  }

  updateReps = (val) => {
    this.setState({ Reps: val})
    this.setState({ date1: ""})
  }

  toggleExerciseProgress = async event => {
    this.setState({ ExerciseProgress: !this.state.ExerciseProgress})
  }

  updateChart = async event => {
    dataval = this.props.route.params["data"]
    if (this.state.Name != "") {
      dataval = dataval.filter(i => i.Name == this.state.Name)
    }
    if (this.state.date1 != "") {
      dataval = dataval.filter(i => i.Date == this.state.date1)
    }
    if (this.state.Weight != "") {
      dataval = dataval.filter(i => i.Weight == this.state.Weight)
    }
    if (this.state.Reps != "") {
      dataval = dataval.filter(i => i.Reps == this.state.Reps)
      labels = this.getFields(dataval, "Date")
    } else {
      var labels = this.getFields(dataval, "Reps")
    }
    datasets = dataval.reduce((groups, item) => {
      const group = (groups[item.Name] || []);
      group.push(item);
      groups[item.Name] = group;
      return groups;
    }, {});
    const datavalues = []
    const legend = []
    //MAYBE ONLY PUSH LAST 4
    for (const property in datasets) {
        color1 = String(Math.floor(Math.random() * 255));
        color2 = String(Math.floor(Math.random() * 255));
        datavalues.push(
        {
            data: this.getFields(datasets[property], "Weight"),
            color: (opacity = 1) => `rgba(`+color1+`, 255, `+color2+`, ${opacity})`, // optional
            strokeWidth: 2, // optional
        });
        legend.push(property);
    }
    this.props.navigation.navigate("Charting", {
        data: this.props.route.params["data"],
        filtered: dataval,
        labels: labels,
        // xdata: this.getFields(dataval, "Weight"),
        legend: legend,
        datasets: datavalues,
        date: this.props.route.params["date"]
    })
  }

  render(){
    return (
        <View style={styles.topView}>
        <View style={styles.container}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Button title="<" color="#202124" onPress={this.BacktoDashboard} />
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.sectionTitle}>Chart</Text>  
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Button title="=" color="#FFAA00" onPress={this.toListView} />
          </View>
          <AddExercies />
        </View>

        <View style={styles.displaybox}>
        <ScrollView horizontal={true}>
        <View style={styles.Labely}>
        <Text>Weight</Text>
        </View>
        <LineChart
        data={{
            labels: this.props.route.params["labels"] == null || this.props.route.params["labels"].length == 0 ? [""] : this.props.route.params["labels"],
            datasets: this.props.route.params["datasets"] == null || this.props.route.params["datasets"].length == 0 ? [""] : this.props.route.params["datasets"],
            legend: this.props.route.params["legend"] == null || this.props.route.params["legend"].length == 0 ? [""] : this.props.route.params["legend"] // optional
        }}
        width={this.props.route.params["labels"].length < 10 ? Dimensions.get("window").width - 100 : this.props.route.params["labels"].length * 20} // from react-native
        height={340}
        yAxisLabel=""
        yAxisSuffix=""
        xAxisLabel=""
        formatXLabel={label =>
          label.length == 8 ? label.substring(4,6) + "-" + label.substring(6,8) : label
        }
        verticalLabelRotation={this.props.route.params["labels"].length != 0 && this.props.route.params["labels"][0].length > 4 ? "90" : "0"}
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
        <View>
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <Button title="Clear" color="#ffffff" onPress={() => this.ShowToday(String(this.props.route.params["date"]))} />
            </View>
            { this.props.route.params["labels"].length != 0 && this.props.route.params["labels"][0].length > 4 ?
            <Text>Date</Text> : <Text>Reps</Text>
            }
            <View style={styles.buttonContainer}>
                <Button title="Filter" color="#ffffff" onPress={this.toggleExerciseProgress} />
            </View>
          </View>
        </View>
        </View>

        <Modal isVisible={this.state.ExerciseProgress} useNativeDriver={true} >
        <View style={styles.displaybox}>
            
            <Row>
                <Button title="X" color="#FE0000" onPress={this.toggleExerciseProgress} />
            </Row>
            <Text>Type</Text>
            <ChartingTypeDropDown update = {this.updateType} data = {this.props.route.params["data"].length != 0 ? 
            [...new Set(this.getFields(this.props.route.params["data"].filter(i => this.state.Weight != "" ? i.Weight == this.state.Weight : this.state.Reps != "" ?
            i.Reps == this.state.Reps : i), "Name"))] : []}/>

        <Row>
            <Col>
            <Text>Reps</Text>
            <ChartingTypeDropDown update = {this.updateReps} data = {this.props.route.params["data"].length != 0 ? 
            [...new Set(this.getFields(this.props.route.params["data"].filter(i => this.state.Name != "" ? i.Name == this.state.Name : this.state.Weight != "" ?
            i.Weight == this.state.Weight : i), "Reps"))].sort(function (a, b) {  return a - b;  }) : []}/>
            </Col>
            <Col>
            <Text>Weight</Text>
            <ChartingTypeDropDown update = {this.updateWeight} data = {this.props.route.params["data"].length != 0 ? 
            [...new Set(this.getFields(this.props.route.params["data"].filter(i => this.state.Name != "" ? i.Name == this.state.Name : this.state.Reps != "" ?
             i.Reps == this.state.Reps : i), "Weight"))].sort(function (a, b) {  return a - b;  }) : []}/>
            </Col>
        </Row>
            <View style={styles.Accbutton}>
            <Button title="Filter" color="#ffffff" onPress={this.filterChart} />
            </View>
        </View>
        </Modal>        
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
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: "#3DB4E4",
      marginHorizontal: 20,
      justifyContent: 'space-between'
    },
    button:{
        backgroundColor: "#3DB4E4"
    },    
    Accbutton:{
        marginTop: 50,
        backgroundColor: "#3DB4E4"
    },    
    Accbutton:{
        paddingHorizontal: 10,
        backgroundColor: "#3DB4E4"
    },
    RowCenter:{
      backgroundColor: "#704b48"
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
    topView: {
      position: "absolute",
      paddingVertical: 40,
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
      marginTop: 180,
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