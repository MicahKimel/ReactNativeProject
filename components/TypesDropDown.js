import { SelectList } from 'react-native-dropdown-select-list'
import React from "react";
import { retrieveUserSession } from "./code";
import { Component } from "react/cjs/react.production.min";
import axios from "axios";
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

const TypesDropDown = ( props ) => {

  state = {
    data: [{
      "key": 1,
      "value": "Bar Dip"
    },
    {
      "key": 2,
      "value": "Bench Press"
    },
    {
      "key": 3,
      "value": "Cable Chest Press"
    },
    {
      "key": 4,
      "value": "Close-Grip Bench Press"
    },
    {
      "key": 5,
      "value": "Close-Grip Feet-Up Bench Press"
    },
    {
      "key": 6,
      "value": "Decline Bench Press"
    },
    {
      "key": 7,
      "value": "Dumbbell Chest Fly"
    },
    {
      "key": 8,
      "value": "Dumbbell Chest Press"
    },
    {
      "key": 9,
      "value": "Dumbbell Decline Chest Press"
    },
    {
      "key": 10,
      "value": "Dumbbell Floor Press"
    },
    {
      "key": 11,
      "value": "Dumbbell Pullover"
    },
    {
      "key": 12,
      "value": "Feet-Up Bench Press"
    },
    {
      "key": 13,
      "value": "Floor Press"
    },
    {
      "key": 14,
      "value": "Incline Bench Press"
    },
    {
      "key": 15,
      "value": "Incline Dumbbell Press"
    },
    {
      "key": 16,
      "value": "Incline Push-Up"
    },
    {
      "key": 17,
      "value": "Kneeling Incline Push-Up"
    },
    {
      "key": 18,
      "value": "Kneeling Push-Up"
    },
    {
      "key": 19,
      "value": "Machine Chest Fly"
    },
    {
      "key": 20,
      "value": "Machine Chest Press"
    },
    {
      "key": 21,
      "value": "Pec Deck"
    },
    {
      "key": 22,
      "value": "Push-Up"
    },
    {
      "key": 23,
      "value": "Push-Up Against Wall"
    },
    {
      "key": 24,
      "value": "Push-Ups With Feet in Rings"
    },
    {
      "key": 25,
      "value": "Resistance Band Chest Fly"
    },
    {
      "key": 26,
      "value": "Smith Machine Bench Press"
    },
    {
      "key": 27,
      "value": "Smith Machine Incline Bench Press"
    },
    {
      "key": 28,
      "value": "Standing Cable Chest Fly"
    },
    {
      "key": 29,
      "value": "Standing Resistance Band Chest Fly"
    },
    {
      "key": 30,
      "value": "Band External Shoulder Rotation"
    },
    {
      "key": 31,
      "value": "Band Internal Shoulder Rotation"
    },
    {
      "key": 32,
      "value": "Band Pull-Apart"
    },
    {
      "key": 33,
      "value": "Barbell Front Raise"
    },
    {
      "key": 34,
      "value": "Barbell Rear Delt Row"
    },
    {
      "key": 35,
      "value": "Barbell Upright Row"
    },
    {
      "key": 36,
      "value": "Behind the Neck Press"
    },
    {
      "key": 37,
      "value": "Cable Lateral Raise"
    },
    {
      "key": 38,
      "value": "Cable Rear Delt Row"
    },
    {
      "key": 39,
      "value": "Dumbbell Front Raise"
    },
    {
      "key": 40,
      "value": "Dumbbell Horizontal Internal Shoulder Rotation"
    },
    {
      "key": 41,
      "value": "Dumbbell Horizontal External Shoulder Rotation"
    },
    {
      "key": 42,
      "value": "Dumbbell Lateral Raise"
    },
    {
      "key": 43,
      "value": "Dumbbell Rear Delt Row"
    },
    {
      "key": 44,
      "value": "Dumbbell Shoulder Press"
    },
    {
      "key": 45,
      "value": "Face Pull"
    },
    {
      "key": 46,
      "value": "Front Hold"
    },
    {
      "key": 47,
      "value": "Lying Dumbbell External Shoulder Rotation"
    },
    {
      "key": 48,
      "value": "Lying Dumbbell Internal Shoulder Rotation"
    },
    {
      "key": 49,
      "value": "Machine Lateral Raise"
    },
    {
      "key": 50,
      "value": "Machine Shoulder Press"
    },
    {
      "key": 51,
      "value": "Monkey Row"
    },
    {
      "key": 52,
      "value": "Overhead Press"
    },
    {
      "key": 53,
      "value": "Plate Front Raise"
    },
    {
      "key": 54,
      "value": "Power Jerk"
    },
    {
      "key": 55,
      "value": "Push Press"
    },
    {
      "key": 56,
      "value": "Reverse Dumbbell Flyes"
    },
    {
      "key": 57,
      "value": "Reverse Machine Fly"
    },
    {
      "key": 58,
      "value": "Seated Dumbbell Shoulder Press"
    },
    {
      "key": 59,
      "value": "Seated Barbell Overhead Press"
    },
    {
      "key": 60,
      "value": "Seated Smith Machine Shoulder Press"
    },
    {
      "key": 61,
      "value": "Snatch Grip Behind the Neck Press"
    },
    {
      "key": 62,
      "value": "Squat Jerk"
    },
    {
      "key": 63,
      "value": "Split Jerk"
    },
    {
      "key": 64,
      "value": "Barbell Curl"
    },
    {
      "key": 65,
      "value": "Barbell Preacher Curl"
    },
    {
      "key": 66,
      "value": "Bodyweight Curl"
    },
    {
      "key": 67,
      "value": "Cable Curl With Bar"
    },
    {
      "key": 68,
      "value": "Cable Curl With Rope"
    },
    {
      "key": 69,
      "value": "Concentration Curl"
    },
    {
      "key": 70,
      "value": "Dumbbell Curl"
    },
    {
      "key": 71,
      "value": "Dumbbell Preacher Curl"
    },
    {
      "key": 72,
      "value": "Hammer Curl"
    },
    {
      "key": 73,
      "value": "Incline Dumbbell Curl"
    },
    {
      "key": 74,
      "value": "Machine Bicep Curl"
    },
    {
      "key": 75,
      "value": "Spider Curl"
    },
    {
      "key": 76,
      "value": "Barbell Standing Triceps Extension"
    },
    {
      "key": 77,
      "value": "Barbell Lying Triceps Extension"
    },
    {
      "key": 78,
      "value": "Bench Dip"
    },
    {
      "key": 79,
      "value": "Close-Grip Push-Up"
    },
    {
      "key": 80,
      "value": "Dumbbell Lying Triceps Extension"
    },
    {
      "key": 81,
      "value": "Dumbbell Standing Triceps Extension"
    },
    {
      "key": 82,
      "value": "Overhead Cable Triceps Extension"
    },
    {
      "key": 83,
      "value": "Tricep Bodyweight Extension"
    },
    {
      "key": 84,
      "value": "Tricep Pushdown With Bar"
    },
    {
      "key": 85,
      "value": "Tricep Pushdown With Rope"
    },
    {
      "key": 86,
      "value": "Air Squat"
    },
    {
      "key": 87,
      "value": "Barbell Hack Squat"
    },
    {
      "key": 88,
      "value": "Barbell Lunge"
    },
    {
      "key": 89,
      "value": "Barbell Walking Lunge"
    },
    {
      "key": 90,
      "value": "Belt Squat"
    },
    {
      "key": 91,
      "value": "Body Weight Lunge"
    },
    {
      "key": 92,
      "value": "Box Squat"
    },
    {
      "key": 93,
      "value": "Bulgarian Split Squat"
    },
    {
      "key": 94,
      "value": "Chair Squat"
    },
    {
      "key": 95,
      "value": "Dumbbell Lunge"
    },
    {
      "key": 96,
      "value": "Dumbbell Squat"
    },
    {
      "key": 97,
      "value": "Front Squat"
    },
    {
      "key": 98,
      "value": "Goblet Squat"
    },
    {
      "key": 99,
      "value": "Hack Squat Machine"
    },
    {
      "key": 100,
      "value": "Half Air Squat"
    },
    {
      "key": 101,
      "value": "Hip Adduction Machine"
    },
    {
      "key": 102,
      "value": "Landmine Hack Squat"
    },
    {
      "key": 103,
      "value": "Landmine Squat"
    },
    {
      "key": 104,
      "value": "Leg Extension"
    },
    {
      "key": 105,
      "value": "Leg Press"
    },
    {
      "key": 106,
      "value": "Lying Leg Curl"
    },
    {
      "key": 107,
      "value": "Pause Squat"
    },
    {
      "key": 108,
      "value": "Romanian Deadlift"
    },
    {
      "key": 109,
      "value": "Safety Bar Squat"
    },
    {
      "key": 110,
      "value": "Seated Leg Curl"
    },
    {
      "key": 111,
      "value": "Shallow Body Weight Lunge"
    },
    {
      "key": 112,
      "value": "Side Lunges (Bodyweight)"
    },
    {
      "key": 113,
      "value": "Smith Machine Squat"
    },
    {
      "key": 114,
      "value": "Squat"
    },
    {
      "key": 115,
      "value": "Step Up"
    },
    {
      "key": 116,
      "value": "Back Extension"
    },
    {
      "key": 117,
      "value": "Barbell Row"
    },
    {
      "key": 118,
      "value": "Barbell Shrug"
    },
    {
      "key": 119,
      "value": "Block Snatch"
    },
    {
      "key": 120,
      "value": "Cable Close Grip Seated Row"
    },
    {
      "key": 121,
      "value": "Cable Wide Grip Seated Row"
    },
    {
      "key": 122,
      "value": "Chin-Up"
    },
    {
      "key": 123,
      "value": "Clean"
    },
    {
      "key": 124,
      "value": "Clean and Jerk"
    },
    {
      "key": 125,
      "value": "Deadlift"
    },
    {
      "key": 126,
      "value": "Deficit Deadlift"
    },
    {
      "key": 127,
      "value": "Dumbbell Deadlift"
    },
    {
      "key": 128,
      "value": "Dumbbell Row"
    },
    {
      "key": 129,
      "value": "Dumbbell Shrug"
    },
    {
      "key": 130,
      "value": "Floor Back Extension"
    },
    {
      "key": 131,
      "value": "Good Morning"
    },
    {
      "key": 132,
      "value": "Hang Clean"
    },
    {
      "key": 133,
      "value": "Hang Power Clean"
    },
    {
      "key": 134,
      "value": "Hang Power Snatch"
    },
    {
      "key": 135,
      "value": "Hang Snatch"
    },
    {
      "key": 136,
      "value": "Inverted Row"
    },
    {
      "key": 137,
      "value": "Inverted Row with Underhand Grip"
    },
    {
      "key": 138,
      "value": "Kettlebell Swing"
    },
    {
      "key": 139,
      "value": "Lat Pulldown With Pronated Grip"
    },
    {
      "key": 140,
      "value": "Lat Pulldown With Supinated Grip"
    },
    {
      "key": 141,
      "value": "One-Handed Cable Row"
    },
    {
      "key": 142,
      "value": "One-Handed Lat Pulldown"
    },
    {
      "key": 143,
      "value": "Pause Deadlift"
    },
    {
      "key": 144,
      "value": "Pendlay Row"
    },
    {
      "key": 145,
      "value": "Power Clean"
    },
    {
      "key": 146,
      "value": "Power Snatch"
    },
    {
      "key": 147,
      "value": "Pull-Up"
    },
    {
      "key": 148,
      "value": "Rack Pull"
    },
    {
      "key": 149,
      "value": "Seal Row"
    },
    {
      "key": 150,
      "value": "Seated Machine Row"
    },
    {
      "key": 151,
      "value": "Snatch"
    },
    {
      "key": 152,
      "value": "Snatch Grip Deadlift"
    },
    {
      "key": 153,
      "value": "Stiff-Legged Deadlift"
    },
    {
      "key": 154,
      "value": "Straight Arm Lat Pulldown"
    },
    {
      "key": 155,
      "value": "Sumo Deadlift"
    },
    {
      "key": 156,
      "value": "T-Bar Row"
    },
    {
      "key": 157,
      "value": "Trap Bar Deadlift With High Handles"
    },
    {
      "key": 158,
      "value": "Trap Bar Deadlift With Low Handles"
    },
    {
      "key": 159,
      "value": "Banded Side Kicks"
    },
    {
      "key": 160,
      "value": "Cable Pull Through"
    },
    {
      "key": 161,
      "value": "Clamshells"
    },
    {
      "key": 162,
      "value": "Dumbbell Romanian Deadlift"
    },
    {
      "key": 163,
      "value": "Dumbbell Frog Pumps"
    },
    {
      "key": 164,
      "value": "Fire Hydrants"
    },
    {
      "key": 165,
      "value": "Frog Pumps"
    },
    {
      "key": 166,
      "value": "Glute Bridge"
    },
    {
      "key": 167,
      "value": "Hip Abduction Against Band"
    },
    {
      "key": 168,
      "value": "Hip Abduction Machine"
    },
    {
      "key": 169,
      "value": "Hip Thrust"
    },
    {
      "key": 170,
      "value": "Hip Thrust Machine"
    },
    {
      "key": 171,
      "value": "Hip Thrust With Band Around Knees"
    },
    {
      "key": 172,
      "value": "Lateral Walk With Band"
    },
    {
      "key": 173,
      "value": "Machine Glute Kickbacks"
    },
    {
      "key": 174,
      "value": "One-Legged Glute Bridge"
    },
    {
      "key": 175,
      "value": "One-Legged Hip Thrust"
    },
    {
      "key": 176,
      "value": "Romanian Deadlift"
    },
    {
      "key": 177,
      "value": "Single Leg Romanian Deadlift"
    },
    {
      "key": 178,
      "value": "Standing Glute Kickback in Machine"
    },
    {
      "key": 179,
      "value": "Step Up"
    },
    {
      "key": 180,
      "value": "Cable Crunch"
    },
    {
      "key": 181,
      "value": "Crunch"
    },
    {
      "key": 182,
      "value": "Dead Bug"
    },
    {
      "key": 183,
      "value": "Hanging Leg Raise"
    },
    {
      "key": 184,
      "value": "Hanging Knee Raise"
    },
    {
      "key": 185,
      "value": "Hanging Sit-Up"
    },
    {
      "key": 186,
      "value": "High to Low Wood Chop with Band"
    },
    {
      "key": 187,
      "value": "Horizontal Wood Chop with Band"
    },
    {
      "key": 188,
      "value": "Kneeling Ab Wheel Roll-Out"
    },
    {
      "key": 189,
      "value": "Kneeling Plank"
    },
    {
      "key": 190,
      "value": "Kneeling Side Plank"
    },
    {
      "key": 191,
      "value": "Lying Leg Raise"
    },
    {
      "key": 192,
      "value": "Lying Windshield Wiper"
    },
    {
      "key": 193,
      "value": "Lying Windshield Wiper with Bent Knees"
    },
    {
      "key": 194,
      "value": "Machine Crunch"
    },
    {
      "key": 195,
      "value": "Mountain Climbers"
    },
    {
      "key": 196,
      "value": "Oblique Crunch"
    },
    {
      "key": 197,
      "value": "Oblique Sit-Up"
    },
    {
      "key": 198,
      "value": "Plank"
    },
    {
      "key": 199,
      "value": "Side Plank"
    },
    {
      "key": 200,
      "value": "Sit-Up"
    },
    {
      "key": 201,
      "value": "Eccentric Heel Drop"
    },
    {
      "key": 202,
      "value": "Heel Raise"
    },
    {
      "key": 203,
      "value": "Seated Calf Raise"
    },
    {
      "key": 204,
      "value": "Standing Calf Raise"
    },
    {
      "key": 205,
      "value": "Barbell Wrist Curl"
    },
    {
      "key": 206,
      "value": "Barbell Wrist Curl Behind the Back"
    },
    {
      "key": 207,
      "value": "Bar Hang"
    },
    {
      "key": 208,
      "value": "Dumbbell Wrist Curl"
    },
    {
      "key": 209,
      "value": "Farmers Walk"
    },
    {
      "key": 210,
      "value": "Fat Bar Deadlift"
    },
    {
      "key": 211,
      "value": "Gripper"
    },
    {
      "key": 212,
      "value": "One-Handed Bar Hang"
    },
    {
      "key": 213,
      "value": "Plate Pinch"
    },
    {
      "key": 214,
      "value": "Plate Wrist Curl"
    },
    {
      "key": 215,
      "value": "Towel Pull-Up"
    }]
  }

  GetData = async event => {
    console.log("GET")
    var url = "https://localhost:7144/work/getExercises" 
    //retrieveUserSession()
    let session = await retrieveUserSession()
    console.log(session.split("\"")[3])
    console.log(this.state.data)
    // + 
    // "?user=" + this.state.user + 
    // "&password=" + this.state.passworddata: [
    //   {key:'1', value:'Deadlift'},
    //   {key:'2', value:'Back Squat'},
    //   {key:'3', value:'Bench'},
    //   {key:'4', value:'Front Squat', disabled:true},
    // ]
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
        console.log(response.status);
        console.log(response.data);
        console.log("UPLOAD!!!!!!!!!")
        this.state.data = response.data;
        console.log(this.state.data)
        //this.props.navigation.navigate("Dashboard");
        })
    } catch (error) {
        console.log(error)
    }
}

  return(
    <SelectList 
        setSelected={val => props.SelectedWorkout(val)} 
        data={this.state.data} 
        //onSelect={() => Component.this.props.onExerciesChange(selected)} 
        save="key"
    />
  )

};
export default TypesDropDown;