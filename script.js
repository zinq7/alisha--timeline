import { setupCanvas } from "./managers/canvasManager.js";
import input from "./managers/inputManager.js";
import game from './managers/gameManager.js';
import ui from './managers/uiManager.js';

setupCanvas();
input.setupMovement();
game.start();
ui.draw();