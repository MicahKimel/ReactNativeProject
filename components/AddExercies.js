import TypesDropDown from "./TypesDropDown";
import Month from "./Month";
import Charting from "./Charting";
import axios from "axios";
import {React,forwardRef,useState,useImperativeHandle} from "react";
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
export default class AddExercies extends Component {
    state = {
        weight: '',
        reps: '',
        exercise: '',
        showAddWorkout: false,
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
        console.log(this.state.showAddWorkout)
        this.setState({ showAddWorkout: !this.state.showAddWorkout })
    }

    createExercise = async event => {
        this.toggleShowWorkout();
        this.setState({ showAddWorkout: false }, async () => {
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
                //this.props.navigation.navigate("Dashboard");
                })
            } catch (error) {
                console.log(error)
            }
        })
    }



    render(){
        return (
            <View>
                
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Button title="+" color="#76BFE4" onPress={this.toggleShowWorkout} />
                    </View>
            <Modal  useNativeDriver={true} isVisible={this.state.showAddWorkout} >
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
                </View>
        )
    }

}

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