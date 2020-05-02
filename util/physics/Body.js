import { Vector } from "../Vector.js";
import { Entity } from "../Entity.js";
import { Universe } from "./Universe.js";

export class Body extends Entity {
  constructor() {
    super();
    this.mass = 0;
    this.radius = 0;
    this.initialVelocity = new Vector();
    this.currentVelocity = this.initialVelocity;
  }

  updateVelocity(allBodies, timeStep) {
    for (let otherBody of allBodies) {
      if (otherBody !== this) {
        var sqrDst = otherBody.position.subtract(this.position).sqrMagnitude();
        var forceDir = otherBody.position.subtract(this.position).normalize();
        var force = forceDir.multiply(
          (Universe.gravitationalConstant * this.mass * otherBody.mass) / sqrDst
        );
        var acceleration = force.divide(this.mass);
        this.currentVelocity.add(acceleration.multiply(timeStep));
      }
    }
  }

  updatePosition(timeStep) {
    this.position += this.currentVelocity * timeStep;
  }
}
