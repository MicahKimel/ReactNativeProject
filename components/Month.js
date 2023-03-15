import React from "react";
import {
    StyleSheet,
    Text,
    Button,
    View,
  } from 'react-native';
  import { Component } from "react/cjs/react.production.min";
import { useNavigation } from '@react-navigation/native';

const Month = (data, navigation) => {

  componentDidMount = () => {
    console.log(this.props)
  }

    printing = async event => {
        console.log(String(new Date().getUTCFullYear()) + "0" + String(new Date().getUTCMonth() + 1) + String(new Date().getDate()))
        console.log(data.data.filter( key => key.Date == 
            String(new Date().getUTCFullYear()) + "0" + String(new Date().getUTCMonth() + 1) + String(new Date().getDate())).length > 0)
    }
  return(
    <View>
        <Row>
            <Col>
                <Text>   January                                                     </Text>
            </Col>
            <Col>
                <Text>       February                                           </Text>
            </Col>
            <Col>
                <Text>     March                                                    </Text>
            </Col>
            <Col>
                <Text>April                                                 </Text>
            </Col>
            <Col>
                <Text>       May                                                            </Text>
            </Col>
            <Col>
                <Text>       June                                                 </Text>
            </Col>
            <Col>
                <Text>     July                                                            </Text>
            </Col>
            <Col>
                <Text>       August                                                       </Text>
            </Col>
            <Col>
                <Text>      September                                      </Text>
            </Col>
            <Col>
                <Text>      October                                                     </Text>
            </Col>
            <Col>
                <Text>       November                                        </Text>
            </Col>
            <Col>
                <Text>     December</Text>
            </Col>
        </Row>
        <Row>
            {
                getDates(new Date(year, 0, 1), new Date(year, 11, 1).addDays(daysInMonth(12, year))).map(i => {
                    if (i.getDate() % 5 == 0 && i.getDate() == 5)
                    return (
                        <Col numRows={0}>
                        <Row>
                        <Text>   </Text>
                        <Day month = {i.getMonth()+1} day = {(i.getDate()-4).toString()} data = {data.data} ></Day>
                        </Row>
                        <Row>
                        <Text>   </Text>
                        <Day month = {i.getMonth()+1} day = {(i.getDate()-3).toString()} data = {data.data} ></Day>
                        </Row>
                        <Row>
                        <Text>   </Text>
                        <Day month = {i.getMonth()+1} day = {(i.getDate()-2).toString()} data = {data.data} ></Day>
                        </Row>
                        <Row>
                        <Text>   </Text>
                        <Day month = {i.getMonth()+1} day = {(i.getDate()-1).toString()} data = {data.data} ></Day>
                        </Row>
                        <Row>
                        <Text>   </Text>
                        <Day month = {i.getMonth()+1} day = {i.getDate().toString()} data = {data.data} ></Day>
                        </Row>
                        </Col>
                      );
                    if (i.getDate() % 5 == 0)
                    return (
                        <Col numRows={0}>
                        <Day month = {i.getMonth()+1} day = {(i.getDate()-4).toString()} data = {data.data} ></Day>
                        <Day month = {i.getMonth()+1} day = {(i.getDate()-3).toString()} data = {data.data} ></Day>
                        <Day month = {i.getMonth()+1} day = {(i.getDate()-2).toString()} data = {data.data} ></Day>
                        <Day month = {i.getMonth()+1} day = {(i.getDate()-1).toString()} data = {data.data} ></Day>
                        <Day month = {i.getMonth()+1} day = {i.getDate().toString()} data = {data.data} ></Day>
                        </Col>
                      );
                    if (i.getMonth() == 1 && i.getDate() == 26 && year % 4 == 0)
                    return (
                        <View>
                            <Col numRows={0}>
                            <Day month = {i.getMonth()+1} day = {(i.getDate()).toString()} data = {data.data} ></Day>
                            <Day month = {i.getMonth()+1} day = {(i.getDate()+1).toString()} data = {data.data} ></Day>
                            <Day month = {i.getMonth()+1} day = {(i.getDate()+2).toString()} data = {data.data} ></Day>
                            <Day month = {i.getMonth()+1} day = {(i.getDate()+3).toString()} data = {data.data} ></Day>
                            </Col>
                        </View>
                      );
                    if (i.getMonth() == 1 && i.getDate() == 26 && year % 4 != 0)
                      return (
                        <View>
                            <Col numRows={0}>
                            <Day month = {i.getMonth()+1} day = {(i.getDate()).toString()} data = {data.data} ></Day>
                            <Day month = {i.getMonth()+1} day = {(i.getDate()+1).toString()} data = {data.data} ></Day>
                            <Day month = {i.getMonth()+1} day = {(i.getDate()+2).toString()} data = {data.data} ></Day>
                            </Col>
                        </View>
                        );
                    if (daysInMonth(i.getMonth(), year) >= 30 && i.getDate() == 31)
                      return (
                        <View>
                            <Col numRows={0}>
                            <Day month = {i.getMonth()+1} day = {(i.getDate()).toString()} data = {data.data} ></Day>
                            </Col>
                        </View>
                        );
                    return (
                        null
                    );
                })
            }

        <View style={styles.Accbutton}>
            <Button title="Print" color="#ffffff" onPress={this.printing} />
        </View>
        </Row>
    </View>
    
  )

};
export default Month;

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date (currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}


function Day({month, day, data}){
    const navigation = useNavigation();
    ChartNavigate = async event => {
        console.log("charting")
        //console.log(data)
        filterData = data.filter( d => d.Date ===  String(new Date().getUTCFullYear()) + (String(month).length == 1 ? "0" + String(month) : String(month)) + 
        (String(day).length == 1 ? "0" + String(day) : String(day)))
        datasets = filterData.reduce((groups, item) => {
            const group = (groups[item.Name] || []);
            group.push(item);
            groups[item.Name] = group;
            return groups;
          }, {});
        const datavalues = []
        const legend = []
        for (const property in datasets) {
            color1 = String(Math.floor(Math.random() * 255));
            color2 = String(Math.floor(Math.random() * 255));
            datavalues.push(
            {
                data: getFields(datasets[property], "Weight"),
                color: (opacity = 1) => `rgba(`+color1+`, 255, `+color2+`, ${opacity})`, // optional
                strokeWidth: 2 // optional
            });
            legend.push(property);
        }
        navigation.navigate("Charting", {
            data: data,
            filtered: filterData,
            labels: [...new Set(getFields(filterData, "Reps"))],
            xdata: getFields(filterData, "Weight"),
            legend: legend,
            datasets: datavalues,
            date: String(new Date().getUTCFullYear()) + (String(month).length == 1 ? "0" + String(month) : String(month)) + 
            (String(day).length == 1 ? "0" + String(day) : String(day))
        })
    }

    function getFields(input, field) {
        var output = [];
        if (input != null && input.length > 0){
        for (var i=0; i < input.length ; ++i)
            output.push(input[i][field]);
        }
        return output;
    }

    return (
        <View style={data.filter( key => key.Date === 
            String(new Date().getUTCFullYear()) + (String(month).length == 1 ? "0" + String(month) : String(month)) + 
            (String(day).length == 1 ? "0" + String(day) : String(day))).length > 0 ? styles.GridBttnActivity
            : new Date().getMonth() + 1 == month && new Date().getDate() == day ? 
            styles.GridBttnToday : styles.GridBttn}>
            <Button title={day} color="#ffffff" onPress={ChartNavigate} />
        </View>
    );
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
    GridBttnActivity:{
        width: 38,
        backgroundColor: "#69D850"
    },
    GridBttn:{
        width: 38,
        backgroundColor: "#704b48"
    },
    GridBttnToday:{
        width: 38,
        backgroundColor: "#3DB4E4"
    },
    backbutton:{
        width: 50,
    },
    col:  {
        backgroundColor:  "lightblue",
        borderColor:  "#fff",
        borderWidth:  1,
        flex:  1
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
        marginTop: 16,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "#384252",
        backgroundColor: "#385380",
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