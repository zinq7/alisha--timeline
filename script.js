import map from "./managers/mapManager.js";
import input from "./managers/inputManager.js";
import game from './managers/gameManager.js';
import ui from './managers/uiManager.js';
import { EventItem } from './util/eventItem.js';

map.draw();
input.setupMovement();
game.start();
ui.draw();

const events = [];
const promises = [];
await fetch("/events.json").then((res) => {
    return res.json();
}).then((json) => {
    json.forEach(element => {
        const ev = new EventItem("/assets/events/" + element);
        promises.push(ev.loadFile());
        events.push(ev);
    });
})

await Promise.all(promises);

events.forEach(ev => game.addItem(ev));

// game.addItem(events[0])