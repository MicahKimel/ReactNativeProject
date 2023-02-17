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
  export default class  CreateAccount extends Component {
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
  
  Back = async event => {
    this.props.navigation.navigate("Login");
  }


  Login = async event => {
    console.log("POST")
    var url = "https://localhost:7144/api/CreateAccount" 
    // + 
    // "?user=" + this.state.user + 
    // "&password=" + this.state.password
    console.log(url)
    console.log(this.state.user)
    console.log(this.state.password)
    try{
      await axios({
       method: 'post',
       url: url,
       headers: {},
       data: {
        username: this.state.user, 
        password: this.state.password
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
        this.props.navigation.navigate("Dashboard");
      })
     } catch (error) {
       console.log(error)
     }
  }
  render(){
    return (
        <View>
            <Text style={styles.sectionTitle}>Create Account</Text>
            <View style={styles.backbutton} >
                <Button title="<" color="#202124" onPress={this.Back} />
            </View>
            <View style={styles.paddingbox}>
                <View style={styles.displaybox}>
                    <TextInput 
                        placeholder="Username" 
                        style={styles.input} 
                        onChange={(this.handleUsernameChange)}
                    />
                    <TextInput
                        onChange={this.handlePasswordChange}
                        secureTextEntry={true}
                        placeholder="Password"
                        style={styles.input}
                    />
                    <TextInput
                        //onChange={this.handlePasswordChange}
                        secureTextEntry={true}
                        placeholder="Password"
                        style={styles.input}
                    />
                    <View style={styles.button} >
                        <Button title="Login" color="#ffffff" onPress={this.Login} />
                    </View>
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