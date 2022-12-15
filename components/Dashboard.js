import TitleBar from "./TitleBar";
import { NativeRouter, Route, Link, withRouter } from "react-router-native";
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
const Dashboard = ({ navigation }) => {

    Back = async event => {
        navigation.navigate("Login");
    }


    return (
        <View>
            <Text style={styles.sectionTitle}>Dashboard</Text>            
            <View style={styles.backbutton} >
                <Button title="<" color="#202124" onPress={this.Back} />
            </View>
        </View>
    );
};

export default Dashboard;

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
        borderWidth: 1,
        borderColor: "#DCFFDC",
        backgroundColor: "#DCFFDC",
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