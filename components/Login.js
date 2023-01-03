import axios from "axios";
import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
  } from 'react-native';
import { Component } from "react/cjs/react.production.min";
export default class CreateAccount extends Component {
  state = {
    user: '',
    password: ''
  }

  handleUsernameChange = event => {
    this.setState({ user: event.nativeEvent.text })
  }

  handlePasswordChange = event => {
    this.setState({ password: event.nativeEvent.text })
  }

  createAccount = async event => {
    this.props.navigation.navigate("CreateAccount")
  }


  Login = async event => {
    console.log("GET")
    var url = "http://localhost:3000/authenticate" + 
    "?user=" + this.state.user + 
    "&password=" + this.state.password
    console.log(url);
    this.props.navigation.navigate("Dashboard");
    // await axios.get(url)
    // .then((response) => {
    //   console.log(response.status);
    //   console.log(response.data);
    // })
  }
  render(){
    return (
        <View>
            <Text style={styles.sectionTitle}>Login</Text>
              <View styles={styles.paddingbox}>
                <View style={styles.displaybox}>
                  <TextInput 
                      placeholder="Username" 
                      style={styles.input} 
                      onChange={(this.handleUsernameChange)}
                      value={this.user}
                  />
                  <TextInput
                      onChange={this.handlePasswordChange}
                      secureTextEntry={true}
                      placeholder="Password"
                      style={styles.input}
                      value={this.password}
                  />
                  <View style={styles.Loginbutton} >
                  <Button title="Login" color="#ffffff" onPress={this.Login} />
                  </View>
                  <View style={styles.Accbutton}>
                  <Button title="Create Account" color="#ffffff" onPress={this.createAccount} />
                </View>
              </View>
            </View>
        </View>
    );
  }
};


const styles = StyleSheet.create({
    Accbutton:{
        marginTop: 50,
        backgroundColor: "#3DB4E4"
    },
    Loginbutton:{
      marginTop: 50,
      backgroundColor: "#14de21"
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
        marginTop: 50,
        paddingHorizontal: 24,
        paddingVertical: 24,
        backgroundColor: "#D6E0E4",
    },
    paddingbox:{
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
    input: {
        marginTop: 16,
        paddingVertical: 8,
        backgroundColor: "#ebedeb",
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