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
    Dimensions,
  } from 'react-native';

const Month = () => {

  return(
    <View>
        <Row>
            <Col>
                <Text>January                                                     </Text>
            </Col>
            <Col>
                <Text>February                                           </Text>
            </Col>
            <Col>
                <Text>March                                                        </Text>
            </Col>
            <Col>
                <Text>April                                                 </Text>
            </Col>
            <Col>
                <Text>May                                                            </Text>
            </Col>
            <Col>
                <Text>June                                                 </Text>
            </Col>
            <Col>
                <Text>July                                                            </Text>
            </Col>
            <Col>
                <Text>August                                                       </Text>
            </Col>
            <Col>
                <Text>September                                      </Text>
            </Col>
            <Col>
                <Text>October                                                     </Text>
            </Col>
            <Col>
                <Text>November                                        </Text>
            </Col>
            <Col>
                <Text>December</Text>
            </Col>
        </Row>
        <Row>
            {//January 
            }
            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="1" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="2" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="3" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="4" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="5" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="6" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="7" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="8" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="9" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="10" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="11" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="12" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="13" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="14" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="15" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="16" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="17" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="18" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="19" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="20" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="21" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="22" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="23" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="24" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="25" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="26" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="27" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="28" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="29" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="30" color="#ffffff"/>
            </View>
            </Col>

            <Col>
            <View style={styles.GridBttn}>
            <Button title="31" color="#ffffff"/>
            </View>
            </Col>



            <Col numRows={0}>
            <Text>  </Text>
            </Col>

            {//Febuary 
            }
            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="1" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="2" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="3" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="4" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="5" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="6" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="7" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="8" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="9" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="10" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="11" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="12" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="13" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="14" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="15" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="16" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="17" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="18" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="19" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="20" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="21" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="22" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="23" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="24" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="25" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="26" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="27" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="28" color="#ffffff"/>
            </View>
            {/* SET THIS ON LEAP YEARS
            <View style={styles.GridBttn}>
            <Button title="29" color="#ffffff"/>
            </View> */}
            </Col>



            <Col numRows={0}>
            <Text>  </Text>
            </Col>

            {//March 
            }
            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="1" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="2" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="3" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="4" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="5" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="6" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="7" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="8" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="9" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="10" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="11" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="12" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="13" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="14" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="15" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="16" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="17" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="18" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="19" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="20" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="21" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="22" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="23" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="24" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="25" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="26" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="27" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="28" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="29" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="30" color="#ffffff"/>
            </View>
            </Col>

            <Col>
            <View style={styles.GridBttn}>
            <Button title="31" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <Text>  </Text>
            </Col>

            {//April 
            }
            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="1" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="2" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="3" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="4" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="5" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="6" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="7" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="8" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="9" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="10" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="11" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="12" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="13" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="14" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="15" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="16" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="17" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="18" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="19" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="20" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="21" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="22" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="23" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="24" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="25" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="26" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="27" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="28" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="29" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="30" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <Text>  </Text>
            </Col>

            {//May 
            }
            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="1" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="2" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="3" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="4" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="5" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="6" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="7" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="8" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="9" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="10" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="11" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="12" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="13" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="14" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="15" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="16" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="17" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="18" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="19" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="20" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="21" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="22" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="23" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="24" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="25" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="26" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="27" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="28" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="29" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="30" color="#ffffff"/>
            </View>
            </Col>

            <Col>
            <View style={styles.GridBttn}>
            <Button title="31" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <Text>  </Text>
            </Col>

            {//June 
            }
            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="1" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="2" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="3" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="4" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="5" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="6" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="7" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="8" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="9" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="10" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="11" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="12" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="13" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="14" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="15" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="16" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="17" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="18" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="19" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="20" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="21" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="22" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="23" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="24" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="25" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="26" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="27" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="28" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="29" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="30" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <Text>  </Text>
            </Col>

            {//July 
            }
            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="1" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="2" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="3" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="4" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="5" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="6" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="7" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="8" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="9" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="10" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="11" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="12" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="13" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="14" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="15" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="16" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="17" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="18" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="19" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="20" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="21" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="22" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="23" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="24" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="25" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="26" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="27" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="28" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="29" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="30" color="#ffffff"/>
            </View>
            </Col>

            <Col>
            <View style={styles.GridBttn}>
            <Button title="31" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <Text>  </Text>
            </Col>

            {//August 
            }
            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="1" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="2" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="3" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="4" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="5" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="6" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="7" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="8" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="9" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="10" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="11" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="12" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="13" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="14" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="15" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="16" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="17" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="18" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="19" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="20" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="21" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="22" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="23" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="24" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="25" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="26" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="27" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="28" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="29" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="30" color="#ffffff"/>
            </View>
            </Col>


            <Col>
            <View style={styles.GridBttn}>
            <Button title="31" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <Text>  </Text>
            </Col>

            {//September 
            }
            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="1" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="2" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="3" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="4" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="5" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="6" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="7" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="8" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="9" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="10" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="11" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="12" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="13" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="14" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="15" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="16" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="17" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="18" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="19" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="20" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="21" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="22" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="23" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="24" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="25" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="26" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="27" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="28" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="29" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="30" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <Text>  </Text>
            </Col>

            {//October 
            }
            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="1" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="2" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="3" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="4" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="5" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="6" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="7" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="8" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="9" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="10" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="11" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="12" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="13" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="14" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="15" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="16" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="17" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="18" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="19" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="20" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="21" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="22" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="23" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="24" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="25" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="26" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="27" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="28" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="29" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="30" color="#ffffff"/>
            </View>
            </Col>


            <Col>
            <View style={styles.GridBttn}>
            <Button title="31" color="#ffffff"/>
            </View>
            </Col>


            <Col numRows={0}>
            <Text>  </Text>
            </Col>

            {//November 
            }
            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="1" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="2" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="3" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="4" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="5" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="6" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="7" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="8" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="9" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="10" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="11" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="12" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="13" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="14" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="15" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="16" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="17" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="18" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="19" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="20" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="21" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="22" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="23" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="24" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="25" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="26" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="27" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="28" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="29" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="30" color="#ffffff"/>
            </View>
            </Col>



            <Col numRows={0}>
            <Text>  </Text>
            </Col>

            {//December 
            }
            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="1" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="2" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="3" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="4" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="5" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="6" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="7" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="8" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="9" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="10" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="11" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="12" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="13" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="14" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="15" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="16" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="17" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="18" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="19" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="20" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="21" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="22" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="23" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="24" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="25" color="#ffffff"/>
            </View>
            </Col>

            <Col numRows={0}>
            <View style={styles.GridBttn}>
            <Button title="26" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="27" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="28" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="29" color="#ffffff"/>
            </View>
            <View style={styles.GridBttn}>
            <Button title="30" color="#ffffff"/>
            </View>
            </Col>


            <Col>
            <View style={styles.GridBttn}>
            <Button title="31" color="#ffffff"/>
            </View>
            </Col>

        </Row>
    </View>
  )

};
export default Month;

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
        marginTop: 50,
        backgroundColor: "#3DB4E4"
    },
    GridBttn:{
        backgroundColor: "#704b48"
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