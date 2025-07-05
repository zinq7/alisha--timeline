import { FpsController } from "../util/fpsController.js";

let anim = "";
let fpsController = "";
let i = 0;

export function setupGame() {
    anim = requestAnimationFrame(tick);
    fpsController = new FpsController();
    i = 0;
    setTimeout(() => {
        cancelAnimationFrame(anim);
    }, 1000);
}

function tick(timestamp) {
    anim = requestAnimationFrame(tick);
    if (fpsController.shouldDelay(timestamp)) {
        return;
    }

    console.log(i++);
}

