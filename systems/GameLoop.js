import Matter from "matter-js";
import getAngle from "../utils/getVelocity";
import getVelocity from "../utils/getVelocity";
import { getWalls } from "../utils/random";
import { GameEngine } from "react-native-game-engine";
import vars from "../vars";

// handle updates of entities

export default function GameLoop(entities, { touches, time, dispatch }) {
  let engine = entities.physics.engine;

  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      const touchX = t.event.changedTouches[0].pageX;
      let xVel = getVelocity(touchX);
      Matter.Body.setVelocity(entities.box.body, {
        x: xVel,
        y: vars.Y_VEL,
      });
    });

  for (let i = 1; i < 3; i++) {
    if (
      entities.box.body.position.y <=
        entities[`wallLeft${i}`].body.bounds.max.y &&
      !entities[`wallLeft${i}`].point
    ) {
      entities[`wallLeft${i}`].point = true;
      dispatch({ type: "INCREASE_SCORE" });
    }

    if (entities[`wallLeft${i}`].body.bounds.max.y >= vars.MAX_HEIGHT + 60) {
      const pipeA = getWalls(-vars.MAX_HEIGHT / 2);
      entities[`wallLeft${i}`].point = false;
      Matter.Body.setPosition(
        entities[`wallLeft${i}`].body,
        pipeA.pipeLeft.pos
      );
      Matter.Body.setPosition(
        entities[`wallRight${i}`].body,
        pipeA.pipeRight.pos
      );
    }

    Matter.Body.translate(entities[`wallLeft${i}`].body, {
      x: 0,
      y: vars.WALL_SPEED,
    });
    Matter.Body.translate(entities[`wallRight${i}`].body, {
      x: 0,
      y: vars.WALL_SPEED,
    });
  }

  // check for game over
  const boxPosX = entities.box.body.position.x;
  const boxPosY = entities.box.body.position.y;
  if (
    boxPosX < 0 ||
    boxPosX > vars.MAX_WIDTH ||
    boxPosY < 0 ||
    boxPosY > vars.MAX_HEIGHT
  ) {
    dispatch({ type: "GAME_OVER" });
  }

  Matter.Events.on(engine, "collisionStart", (event) => {
    dispatch({ type: "GAME_OVER" });
  });

  Matter.Engine.update(engine, time.delta);

  return entities;
}
