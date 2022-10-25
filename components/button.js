import React from "react";
import {useState } from "react"
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { Text, TouchableOpacity } from "react-native";


export default function ButtonPrimary(props) {

const [pressedColor, setPressColor] = useState(props.color);

function action(){
    if(props.isPlane)
    {
        setPressColor('red')
        props.alert()
    }

    else
        setPressColor('green')
}

return (
    <TouchableOpacity
      style={[style.touchableOpacity,{backgroundColor: pressedColor}]}
      onPress={() => action() }
    >
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    touchableOpacity: {
      justifyContent: 'center',
      padding: 30,
      borderWidth: 2,
      borderRadius: 4,
      borderColor: '#3b5998',
      backgroundColor: 'black',
      margin: 2
    }
  })