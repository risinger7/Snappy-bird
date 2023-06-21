import React from "react";
import { View } from "react-native";

export default function Wall(props) {
  const bodyWidth = props.body.bounds.max.x - props.body.bounds.min.x; // for now
  const bodyHeight = props.body.bounds.max.y - props.body.bounds.min.y;
  const posY = props.body.position.y - bodyHeight / 2;
  const posX = props.body.position.x - bodyWidth / 2;

  return (
    <View
      style={{
        position: "absolute",
        left: posX,
        top: posY,
        width: bodyWidth,
        height: bodyHeight,
        backgroundColor: props.color,
        borderRadius: "4px",
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "#fff",
      }}
    ></View>
  );
}
