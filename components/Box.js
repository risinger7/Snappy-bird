import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Box(props) {
  const bodyWidth = props.body.bounds.max.x - props.body.bounds.min.x;
  const bodyHeight = props.body.bounds.max.y - props.body.bounds.min.y;
  const posY = props.body.position.y - bodyHeight / 2;
  const posX = props.body.position.x - bodyWidth / 2;
  const color = props.color;

  return (
    <View
      style={{
        position: "absolute",
        left: posX,
        top: posY,
        width: bodyWidth,
        height: bodyHeight,
        backgroundColor: color,
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "#fff",
        borderRadius: "4px",
      }}
    ></View>
  );
}
