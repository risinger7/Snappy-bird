import { Dimensions } from "react-native";

// VARIABLES
export default {
  MAX_WIDTH: Dimensions.get("screen").width,
  MAX_HEIGHT: Dimensions.get("screen").height,
  WALL_SPEED: 3,
  GRAVITY: 0.7,
  X_VEL: 4,
  Y_VEL: -4,
};
