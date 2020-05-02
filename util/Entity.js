import { Vector } from "./Vector.js";
import { Tickable } from "./Tickable.js";
export class Entity extends Tickable {
  constructor() {
    super();
    this.position = new Vector();
    this.rotation = new Vector();
  }
}
