import vars from "../vars"

export default function getVelocity(x) {
  const midpoint = vars.MAX_WIDTH/2
  if(x >= midpoint) {
    return vars.X_VEL
  } return -vars.X_VEL
}
