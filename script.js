import { setupCanvas } from "./managers/canvasManager.js";
import { setupMovement } from "./managers/inputManager.js";
import game from './managers/gameManager.js';

setupCanvas();
setupMovement();
game.start();