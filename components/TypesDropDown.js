import { SelectList } from 'react-native-dropdown-select-list'
import React from "react";

const TypesDropDown = () => {

  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Deadlift'},
      {key:'2', value:'Back Squat'},
      {key:'3', value:'Bench'},
      {key:'4', value:'Front Squat', disabled:true},
  ]

  return(
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />
  )

};
export default TypesDropDown;