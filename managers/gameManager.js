import { FpsController } from "../util/fpsController.js";
import camera from "./camera.js";

class GameManager {
    constructor() {
        this.anim = null;
        this.fpsController = new FpsController(60);
        this.tickNum = 0;
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
    }
}

export default new GameManager();

