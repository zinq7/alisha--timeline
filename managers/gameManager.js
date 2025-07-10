import { FpsController } from "../util/fpsController.js";
import camera from "./camera.js";
import map from "./mapManager.js";
import ui from "./uiManager.js";

class GameManager {
    constructor() {
        this.anim = null;
        this.fpsController = new FpsController(60);
        this.tickNum = 0;
        this.items = [];
    }

    start() {
        this.tick(null);
    }

    tick(timestamp) {
        // preserve "this" context btw
        this.anim = requestAnimationFrame((e) => this.tick(e));
        if (this.fpsController.shouldDelay(timestamp)) {
            return;
        }

        this.tickNum++;
        
        // important things: ... 
        camera.update();
        map.update();
        ui.update();
    }

    addItem(eventItem) {
        this.items.push(eventItem);
        map.loadPoi(eventItem);
    }
}

export default new GameManager();

