import { Body } from "./util/physics/Body.js";
import { Game } from "./util/Game.js";
var camera, renderer;
var params;
function init() {
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10
  );
  camera.position.z = 3;

  Game.init();

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  var gui = new dat.GUI({
    height: 5 * 32 - 1
  });

  var params = {
    test: 1
  };
  gui
    .add(params, "test")
    .min(-5)
    .max(5)
    .step(0.1)
    .onFinishChange(function() {
      // refresh based on the new value of params.interation
      Game.instance.test.position.x = params.test;
    });
}

function animate(time) {
  if (Game.running) {
    renderer.render(Game.instance.scene, camera);
    Game.Update(time);

    requestAnimationFrame(animate);
  } else {
    console.log("Game not running");
  }
}

init();
requestAnimationFrame(animate);
