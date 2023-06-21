import Matter from "matter-js";
import Box from "../components/Box";
import Wall from "../components/Wall";
import vars from "../vars";
import { getWalls } from "../utils/random";

function Entities() {
  // setting up the world
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  engine.gravity.y = vars.GRAVITY;

  // creating initial entities

  // box
  const boxA = Matter.Bodies.rectangle(
    vars.MAX_WIDTH / 2,
    vars.MAX_HEIGHT / 2,
    50,
    50
  );

  // wall

  const pipeA = getWalls();
  const wallLeft1 = Matter.Bodies.rectangle(
    pipeA.pipeLeft.pos.x,
    pipeA.pipeLeft.pos.y,
    pipeA.pipeLeft.size.width,
    pipeA.pipeLeft.size.height,
    { isStatic: true }
  );

  const wallRight1 = Matter.Bodies.rectangle(
    pipeA.pipeRight.pos.x,
    pipeA.pipeRight.pos.y,
    pipeA.pipeRight.size.width,
    pipeA.pipeRight.size.height,
    { isStatic: true }
  );

  const pipeB = getWalls(-vars.MAX_HEIGHT / 2);

  const wallLeft2 = Matter.Bodies.rectangle(
    pipeB.pipeLeft.pos.x,
    pipeB.pipeLeft.pos.y,
    pipeB.pipeLeft.size.width,
    pipeB.pipeLeft.size.height,
    { isStatic: true }
  );

  const wallRight2 = Matter.Bodies.rectangle(
    pipeB.pipeRight.pos.x,
    pipeB.pipeRight.pos.y,
    pipeB.pipeRight.size.width,
    pipeB.pipeRight.size.height,
    { isStatic: true }
  );

  // adding it to the world
  Matter.World.add(world, [boxA, wallLeft1, wallRight1, wallLeft2, wallRight2]);

  const entities = {
    physics: {
      world,
      engine,
    },
    box: {
      world,
      body: boxA,
      color: "#FACF5A",
      renderer: <Box />,
    },
    wallLeft1: {
      world,
      body: wallLeft1,
      color: "#F95959", // F95959
      renderer: <Wall />,
    },
    wallRight1: {
      world,
      body: wallRight1,
      color: "#F95959",
      renderer: <Wall />,
    },
    wallLeft2: {
      world,
      body: wallLeft2,
      color: "#F95959",
      renderer: <Wall />,
    },
    wallRight2: {
      world,
      body: wallRight2,
      color: "#F95959",
      renderer: <Wall />,
    },
  };

  return entities;
}

export default Entities;
