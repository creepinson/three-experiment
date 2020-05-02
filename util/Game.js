import { Tickable } from "./Tickable.js";
import { Entity } from "./Entity.js";
import { VisibleEntity } from "./VisibleEntity.js";
export class Game extends Tickable {
  static instance;

  static running = false;

  static Update() {
    this.instance.update();
  }

  static init() {
    this.instance = new Game();
    this.instance.awake();
    this.running = true;
  }

  constructor() {
    super();
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
    this.entities = [];
  }

  addEntity(e) {
    e.awake();
    if (e instanceof VisibleEntity) {
      this.scene.add(e.mesh);
    }
    this.entities.push(e);
  }

  awake() {
    this.test = new VisibleEntity(
      new THREE.SphereGeometry(1),
      new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true })
    );
    this.addEntity(this.test);
  }

  update(time) {
    for (let e of this.entities) {
      e.update();
    }
  }
}
