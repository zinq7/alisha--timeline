import map from "./managers/mapManager.js";
import input from "./managers/inputManager.js";
import game from './managers/gameManager.js';
import ui from './managers/uiManager.js';
import { EventItem } from './util/eventItem.js';

map.draw();
input.setupMovement();
game.start();
ui.draw();

const ev = new EventItem("/assets/events/meeting");

await ev.loadFile();

game.addItem(ev);