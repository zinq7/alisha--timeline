import { setupCanvas, showCamera } from "./managers/canvasManager.js";
import { adjustViewport, getCam, updateCamera, setupViewport } from './managers/cameraManager.js';
import { setupMovement } from "./managers/moveManager.js";
import { setupGame } from "./managers/gameManager.js";


setupCanvas();
showCamera();

setupViewport();
setupMovement();

setupGame();