import { setupCanvas, showCamera } from "./canvasManager.js";
import { adjustViewport, getCam, updateCamera, setupViewport } from './cameraManager.js';
import { setupMovement } from "./moveManager.js";


setupCanvas();
showCamera();

setupViewport();
setupMovement();