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
const Dashboard = () => {
  return (
    <View>
        <Text>Dashboard</Text>
        <Link to="/dashboard/home" >
            <Text>Home</Text>
        </Link>
    </View>
  );
};

export default Dashboard;