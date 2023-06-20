import React from "react";
import { StyleSheet, View } from "react-native";
 
export default function Finger(props) {
    const bodyWidth = props.body.bounds.max.x - props.body.bounds.min.x
    const bodyHeight = props.body.bounds.max.y - props.body.bounds.min.y  
    const x = props.body.position.x - bodyHeight / 2;
    const y = props.body.position.y - bodyHeight / 2;
    return (
      <View style={[styles.finger, { left: x, top: y, width: bodyWidth, height: bodyHeight, borderRadius: bodyHeight/2}]} />
    );
  }

 
const styles = StyleSheet.create({
  finger: {
    borderColor: "#CCC",
    borderWidth: 4,
    backgroundColor: "pink",
    position: "absolute"
  }
});
 