import { setupCanvas } from "./managers/canvasManager.js";
import { setupMovement } from "./managers/inputManager.js";
import game from './managers/gameManager.js';
import ui from './managers/uiManager.js';

setupCanvas();
setupMovement();
game.start();
ui.draw();