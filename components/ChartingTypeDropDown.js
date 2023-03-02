import { SelectList } from 'react-native-dropdown-select-list'
import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
    Dimensions,
    ScrollView,
  } from 'react-native';

const ChartingTypeDropDown = ( props ) => {
  
    return(
      <SelectList 
          setSelected={val => props.update(val)} 
          width={Dimensions.get("window").width/4}
          data={props.data} 
          save="key"
      />
    )
  
  };
  export default ChartingTypeDropDown;