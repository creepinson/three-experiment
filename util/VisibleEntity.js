import { Entity } from "./Entity.js";

export class VisibleEntity extends Entity {
  constructor(geometry, material) {
    super();
    this.geometry = geometry;
    this.material = material;
    this.mesh = new THREE.Mesh(geometry, material);
  }

  update() {
    this.mesh.position.set(
      new THREE.Vector3(this.position.x, this.position.y, this.position.z)
    );
    this.mesh.rotation.setFromVector3(
      new THREE.Vector3(this.rotation.x, this.rotation.y, this.rotation.z)
    );
  }
}
