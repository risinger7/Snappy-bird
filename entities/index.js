import Matter from "matter-js";
// components
import Box from "../components/Box";
import Floor from "../components/Floor";
import Wall from "../components/Wall";
import vars from "../vars";
import { getWalls } from "../utils/random";

function Entities() {

    // setting up the world
    let engine = Matter.Engine.create({enableSleeping: false})
    let world = engine.world
    engine.gravity.y = vars.GRAVITY

    // creating entites
    // box
    const boxA = Matter.Bodies.rectangle(vars.MAX_WIDTH/2, vars.MAX_HEIGHT/1.5, 50, 50)
    // floor
    const floorA = Matter.Bodies.rectangle(
      vars.MAX_WIDTH/2, 
      vars.MAX_HEIGHT, 
      vars.MAX_WIDTH, 100, 
      {isStatic: true})
    // wall

    const pipeA = getWalls()
    console.log(pipeA)
    const wallLeft1 = Matter.Bodies.rectangle(
      pipeA.pipeLeft.pos.x, 
      pipeA.pipeLeft.pos.y, 
      pipeA.pipeLeft.size.width,
      pipeA.pipeLeft.size.height, 
      {isStatic: true})
    
    const wallRight1 = Matter.Bodies.rectangle(
      pipeA.pipeRight.pos.x, // x
      pipeA.pipeRight.pos.y, // y
      pipeA.pipeRight.size.width, // w
      pipeA.pipeRight.size.height, // h
      {isStatic: true})

      const pipeB = getWalls(-vars.MAX_HEIGHT/2)
    
      const wallLeft2 = Matter.Bodies.rectangle(
        pipeB.pipeLeft.pos.x, 
        pipeB.pipeLeft.pos.y, 
        pipeB.pipeLeft.size.width,
        pipeB.pipeLeft.size.height, 
        {isStatic: true})
      
      const wallRight2 = Matter.Bodies.rectangle(
        pipeB.pipeRight.pos.x, // x
        pipeB.pipeRight.pos.y, // y
        pipeB.pipeRight.size.width, // w
        pipeB.pipeRight.size.height, // h
        {isStatic: true})

    // adding it to the world
    Matter.World.add(world, [boxA, wallLeft1, wallRight1, wallLeft2, wallRight2])

  const entities = {
    physics: {
      world, engine
    },
    box: {
      world,
      body: boxA,
      renderer: <Box />,
    },
    wallLeft1: {
      world, 
      body: wallLeft1,
      color: "blue",
      renderer: <Wall />
    },
    wallRight1: {
      world, 
      body: wallRight1,
      color: "blue",
      renderer: <Wall />
    },
    wallLeft2: {
      world, 
      body: wallLeft2,
      color: "blue",
      renderer: <Wall />
    },
    wallRight2: {
      world, 
      body: wallRight2,
      color: "blue",
      renderer: <Wall />
    }
  }

  return entities   
  
}

export default Entities
