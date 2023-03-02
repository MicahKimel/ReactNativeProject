import TypesDropDown from "./TypesDropDown";
import Month from "./Month";
import Charting from "./Charting";
import axios from "axios";
import React from "react";
import Modal from "react-native-modal";
import { retrieveUserSession } from "./code";
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
        exercise: '',
        showAddWorkout: false,
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

      getFields(input, field) {
        var output = [];
        if (input != null && input.length > 0){
        for (var i=0; i < input.length ; ++i)
            output.push(input[i][field]);
        }
        return output;
        }

    onWeightText = event => {
        this.setState({ weight: event.nativeEvent.text })
    }

    onRepsText = event => {
        this.setState({ reps: event.nativeEvent.text })
        console.log(this.state.reps)
    }

    onExerciesChange = (val) => {
        this.setState({ exercise: val })
        console.log(this.state.exercise)
    }

    toggleShowWorkout = event => {
        this.setState({ showAddWorkout: !this.state.showAddWorkout })
    }

    componentDidMount(){
        console.log("mounted")
        this.GetUserExercise()
    }

    GetUserExercise = async event => {
        console.log("GET")
        var url = "https://localhost:7144/work/getUserExerciseSetByWorkout" 
        //retrieveUserSession()
        let session = await retrieveUserSession()
        console.log(session.split("\"")[3])
        console.log(this.state.data)
        // + 
        // "?user=" + this.state.user + 
        // "&password=" + this.state.password
        try{
            await axios({
            method: 'get',
            url: url,
            headers: {Authorization : "Bearer " + session.split("\"")[3]},
            httpsAgent: {
            rejectUnauthorized: false,
            requestCert: false,
            agent: false,
            }
            })
            .then((response) => {
            console.log(response.status);
            console.log(response.data);
            this.state.data = response.data;
            this.setState({ showAddWorkout: false })
            //this.props.navigation.navigate("Dashboard");
            })
        } catch (error) {
            console.log(error)
        }
    }

    ChartNavigate = async event => {
        console.log("charting")
        this.props.navigation.navigate("Charting", {
            data: this.state.data,
            filtered: this.state.data,
            labels: this.getFields(this.state.data, "Reps"),
            xdata: this.getFields(this.state.data, "Weight"),
        })
    }

    createExercise = async event => {
        console.log("POST")
        var url = "https://localhost:7144/work/exerciseSet" 
        //retrieveUserSession()
        let session = await retrieveUserSession()
        console.log(session.split("\"")[3])
        console.log(this.state.data)
        // + 
        // "?user=" + this.state.user + 
        // "&password=" + this.state.password
        try{
            await axios({
            method: 'post',
            url: url,
            headers: {Authorization : "Bearer " + session.split("\"")[3]},
            data: {
              exerciseId: this.state.exercise, 
              weight: this.state.weight,
              reps: this.state.reps,
              metricType: 1
            },
            httpsAgent: {
            rejectUnauthorized: false,
            requestCert: false,
            agent: false,
            }
            })
            .then((response) => {
            console.log(response.status);
            console.log(response.data);
            //this.state.data = response.data;
            this.setState({ showAddWorkout: false })
            //this.props.navigation.navigate("Dashboard");
            })
        } catch (error) {
            console.log(error)
        }
    }
    

    Back = async event => {
        this.props.navigation.navigate("Login");
    }
    render(){
    return (
        <ScrollView style={styles.scrollView}>
        <View style={{flex: 1}} >
            <Text style={styles.sectionTitle}>Dashboard</Text>            
            <View>
                <Row>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Button title="<" color="#202124" onPress={this.Back} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Button title="+" color="#76BFE4" onPress={this.toggleShowWorkout} />
                    </View>
                </Row>
            </View>
            <Modal isVisible={this.state.showAddWorkout}>
            <View style={styles.displaybox}>
                <Row>
                <Button title="X" color="#FE0000" onPress={this.toggleShowWorkout} />
                </Row>
                <TypesDropDown SelectedWorkout = {this.onExerciesChange}></TypesDropDown>
                <Text>Weight</Text>
                <TextInput
                    style={styles.input}
                    onChange={this.onWeightText}
                    keyboardType="numeric"
                    value={this.reps}
                />
                <Text>Reps</Text>
                <TextInput
                    style={styles.input}
                    onChange={this.onRepsText}
                    keyboardType="numeric"
                    value={this.reps}
                />
                <View style={styles.Accbutton}>
                  <Button title="Sumbit" color="#ffffff" onPress={this.createExercise} />
                </View>
            </View>
            </Modal>
            {/*<Text>{new Date().toLocaleString()}</Text>*/}
            <ScrollView style={styles.scrollView} horizontal={true}
                contentOffset={{x:new Date().getMonth() * 250, y:0}} >
                <View style={styles.displaybox}>
                    <Month data = {this.state.data} />
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

            <View style={styles.Accbutton}>
                <Button title="Chart" color="#ffffff" onPress={this.ChartNavigate} />
            </View>
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