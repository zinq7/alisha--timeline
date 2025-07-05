import { adjustViewport, updateCamera } from "./cameraManager.js";
import { camera, showCamera, canvas } from "../internal.js";

// CONSIDER: acceleration
const SPEED = 5;

export function setupMovement() {
    document.onkeydown = (e) => {
        console.log(e);
        // shift = sprint
        const pace = (e.shiftKey ? 2 : 1); 
        const key = e.key.toLowerCase();

        if (key == "d") {
            move(pace, 0);
        } else if (key == "s") {
            move(0, pace);
        } else if (key == "a") {
            move(-pace, 0);
        } else if (key == "w") {
            move(0, -pace);
        }
    }
}

function move(dx, dy) {
    
    const { x, y } = camera;
    let newX = x + SPEED * dx;
    let newY = y + SPEED * dy;

    // semi lazy boundary detection -- camera straight stops fr fr
    newX = Math.min(newX + camera.width, canvas.width) - camera.width;
    newX = Math.max(newX, 0);
    newY = Math.min(newY + camera.height, canvas.height) - camera.height;
    newY = Math.max(newY, 0);

    updateCamera(newX, newY);

    showCamera();
    adjustViewport();
}

export function hello() {
    console.log("hello world");
}