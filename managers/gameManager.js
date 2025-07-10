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

        this.items.forEach((gameItem) => {
            const { x, y } = this.getGameCoords();
            if (gameItem.checkCollision(camera.WIDTH * 0.1, camera.WIDTH * 0.1, x, y)) {
                console.log('touching element ' + gameItem.path);
                ui.addUiElement(gameItem.tooltip);
                return;
            }
        });

        // important things: ... 
        camera.update();
        map.update();
        ui.update();
    }

    addItem(eventItem) {
        this.items.push(eventItem);
        map.loadPoi(eventItem);
    }

    getGameCoords() {
        return {
            x: camera.position.x + camera.WIDTH / 2,
            y: camera.position.y + camera.HEIGHT / 2,
        }
    }

    async pause() {
        const { x, y } = this.getGameCoords();
        const adj = this.items.find((item) => item.checkCollision(camera.WIDTH * 0.1, camera.WIDTH * 0.1, x, y));

        if (!adj) {
            return false;
        }
        
        // awaiting promises low load time its finnnneee
        const res = await fetch(adj.path + ".json");
        const json = await res.json(); 

        ui.pauseMenu(json); 

        return true;
    }

    unpause() {
        ui.unpauseMenu();
        return false;
    }
}

export default new GameManager();

