import vars from "../vars";

export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getWalls(addToPosY = 0) {
  const GAP = 150;

  let randomXpos = randomIntFromInterval(10, vars.MAX_WIDTH - 10);
  const pipeLeft = {
    pos: { x: randomXpos - 180, y: 0 + addToPosY },
    size: { height: 50, width: 180 },
  };

  const pipeRight = {
    pos: { x: randomXpos + GAP + 180, y: 0 + addToPosY },
    size: { height: 50, width: 180 },
  };

  return {
    pipeLeft,
    pipeRight,
  };
}
