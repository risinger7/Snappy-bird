import React from 'react'
import { View, StyleSheet, Text } from 'react-native'


export default function Box(props) {

  const bodyWidth = props.body.bounds.max.x - props.body.bounds.min.x
  const bodyHeight = props.body.bounds.max.y - props.body.bounds.min.y  
  const posY = props.body.position.y - bodyHeight/2
  const posX = props.body.position.x - bodyWidth/2

  return (
    <View style={{
      position: "absolute",
      left: posX,
      top: posY,
      width: bodyWidth,
      height: bodyHeight,
      backgroundColor: "red",
      borderStyle: "solid", 
      borderRadius: "4px"
      }}>
    </View>
  )
}

