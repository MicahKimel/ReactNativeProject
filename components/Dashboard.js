import TypesDropDown from "./TypesDropDown";
import { SelectList } from 'react-native-dropdown-select-list'
import React from "react";
import {
    LineChart
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
        reps: ''
      }
  

    onWeightText = event => {
        this.setState({ weight: event.target.value })
    }

    onRepsText = event => {
        console.log('print')
        console.log(this.reps)
        console.log(this.weight)
    }
    

    Back = async event => {
        this.props.navigation.navigate("Login");
    }
    render(){
    return (
        <View>
            <Text style={styles.sectionTitle}>Dashboard</Text>            
            <View style={styles.backbutton} >
                <Button title="<" color="#202124" onPress={this.Back} />
            </View>
            <View>
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
                <View>
                <View style={styles.Loginbutton} >
                    <Button title="Login" color="#ffffff" onPress={this.onRepsText} />
                </View>
            <Text>Bezier Line Chart</Text>
            <LineChart
                data={{
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                    {
                    data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                    ]
                    },
                    {
                        data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                        ]
                    },
                    {
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                        ]
                        }
                ]
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
            </View>
    );
    }
};


const styles = StyleSheet.create({
    button:{
        marginTop: 50,
        backgroundColor: "#3DB4E4"
    },
    backbutton:{
        width: 50,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
        marginTop: 16,
      fontSize: 20,
      fontWeight: '600',
      textAlign: "center",
    },
    setColorRed :{
        color: '#f44336'
    },
    displaybox:{
        marginTop: 150,
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
        color: "red",
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