import TitleBar from "./TitleBar";
import { NativeRouter, Route, Link } from "react-router-native";
import axios from "axios";
import React from "react";
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
  } from 'react-native';
const CreateAccount = ({ navigation }) => {
  state = {
    user: '',
    password: ''
  }

  handleUsernameChange = event => {
    this.setState({ user: event.target.value })
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value })
  }
  
  Back = async event => {
    navigation.navigate("Login");
  }


  Login = async event => {
    console.log("GET")
    var url = "http://localhost:3000/authenticate" + 
    "?user=" + this.state.user + 
    "&password=" + this.state.password
    console.log(url)
    navigation.navigate("Home");
    // await axios.get(url)
    // .then((response) => {
    //   console.log(response.status);
    //   console.log(response.data);
    // })
  }

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
                        onChange={this.handleUsernameChange}
                    />
                    <TextInput
                        onChange={this.handlePasswordChange}
                        secureTextEntry={true}
                        placeholder="Password"
                        style={styles.input}
                    />
                    <TextInput
                        onChange={this.handlePasswordChange}
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
};

export default CreateAccount;

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