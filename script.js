import { setupCanvas, showCamera } from "./canvasManager.js";
import { adjustViewport, getCam, updateCamera, setupViewport } from './cameraManager.js';
import { setupMovement } from "./moveManager.js";
import { setupGame } from "./gameManager.js";


setupCanvas();
showCamera();

setupViewport();
setupMovement();

setupGame();