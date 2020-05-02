import { Entity } from "../Entity.js";
import { Body } from "./Body.js";

export class NBodySimulation extends Tickable {
  awake() {
    super.awake();
    this.bodies = Game.findEntitiesOfType(Body);
  }
  
  update() {
    super.update();
    for()
  }
}