import React from 'react'
import { View, StyleSheet } from 'react-native'
import getRandom from '../utils/random'

export default function Wall(props) {


  const bodyWidth = props.body.bounds.max.x - props.body.bounds.min.x // for now
  const bodyHeight = props.body.bounds.max.y - props.body.bounds.min.y  
  const posY = props.body.position.y - bodyHeight/2
  const posX = props.body.position.x - bodyWidth/2

  console.log("wall positions ", posX)

  return (
    <View style={{
      position: "absolute",
      left: posX,
      top: posY,
      width: bodyWidth,
      height: bodyHeight, 
      backgroundColor: props.color
    }}>
    </View>
  )
}