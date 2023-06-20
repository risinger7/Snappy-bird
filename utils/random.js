import vars from "../vars"

export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getWalls(addToPosY = 0){

  const GAP = 150;

  let randomXpos = randomIntFromInterval(10, vars.MAX_WIDTH - 10)
  console.log("Xpos ", randomXpos)
  const pipeLeft = {
    pos: {x: randomXpos -200/2, y: 0 + addToPosY },
    size: {height: 50, width: 200}
  }

  const pipeRight = {
    pos: {x: randomXpos + GAP + 200, y: 0 + addToPosY },
    size: {height: 50, width: 200}
  }

  return {
    pipeLeft, 
    pipeRight
  }
}