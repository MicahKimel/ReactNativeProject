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
import { Component } from 'react/cjs/react.production.min';

export default class Home extends Component{

    BacktoDashboard = async event => {
        this.props.navigation.navigate("Dashboard")
      }

    render(){
    return (
      <View>
        <ScrollView>
        <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Button title="<" color="#202124" onPress={this.BacktoDashboard} />
        </View>
        </View>
        {this.props.route.params["data"].map( i => {
            return(
            <View>
            <View style={styles.container}>
            <Text styles={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>{i.Name} </Text>
            <Text styles={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>{i.CreateTime.substring(0,10)} </Text>
            </View>
            <View style={styles.container}>
            <Text> Weight: </Text>
            <Text styles={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>{i.Weight}</Text>
            <Text> Reps: </Text>
            <Text styles={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>{i.Reps}</Text>
            </View>
            </View>
        )}
    )}
    </ScrollView>
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
    backbutton:{
        width: 50,
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