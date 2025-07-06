import map from "./managers/mapManager.js";
import input from "./managers/inputManager.js";
import game from './managers/gameManager.js';
import ui from './managers/uiManager.js';

map.draw();
input.setupMovement();
game.start();
ui.draw();