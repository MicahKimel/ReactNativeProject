import TypesDropDown from "./TypesDropDown";
import Month from "./Month";
import Charting from "./Charting";
import axios from "axios";
import {React,forwardRef,useState,useImperativeHandle} from "react";
import Modal from "react-native-modal";
import { retrieveUserSession } from "./code";
import AddExercies from "./AddExercies";
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


    //   constructor(props) {
    //     super(props)
    //     this.ChartNavigate = this.ChartNavigate.bind(this) //referencing the method in constructor
    //   }

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
        console.log(this.state.showAddWorkout)
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
            //console.log(response.status);
            //console.log(response.data);
            this.state.data = response.data;
            this.setState({ showAddWorkout: false })
            //this.props.navigation.navigate("Dashboard");
            })
        } catch (error) {
            console.log(error)
        }
    }

    ChartNavigate = (val) => {
        console.log("charting")
        //console.log(val)
        this.props.navigation.navigate("Charting", {
            data: this.state.data,
            filtered: this.state.data,
            labels: this.getFields(this.state.data, "Reps"),
            xdata: this.getFields(this.state.data, "Weight"),
        })
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
                    <AddExercies />
                </Row>
            </View>
            {/*<Text>{new Date().toLocaleString()}</Text>*/}
            <ScrollView style={styles.scrollView} horizontal={true}
                contentOffset={{x:new Date().getMonth() * 250, y:0}} >
                <View style={styles.displaybox}>
                    <Month data = {this.state.data} navigation = {this.props.navigation} />
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

            {/* <View style={styles.Accbutton}>
                <Button title="Chart" color="#ffffff" onPress={this.ChartNavigate} />
            </View> */}
            </View>
            </View>
            </ScrollView>
    );
    }
};

const _addExercise = (props, ref) => {
    const [visible, setVisible] = useState(false);

    const openMe = () => {
      console.log('MODAL: openMe called from parent component via ref');
      setVisible(true);
    };
  
    useImperativeHandle(ref, () => ({publicHandler: openMe}), [openMe]);
  
    return (<Modal  useNativeDriver={true} isVisible={this.state.showAddWorkout} >
        <View style={styles.displaybox}>
            <Row>
            <Button title="X" color="#FE0000" onPress={this.toggleShowWorkout} />
            </Row>
            <Text>Weight</Text>
            <Text>Reps</Text>
            <View style={styles.Accbutton}>
              <Button title="Sumbit" color="#ffffff" onPress={this.createExercise} />
            </View>
        </View>
        </Modal>);
}

const AddExercise = forwardRef(_addExercise);

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