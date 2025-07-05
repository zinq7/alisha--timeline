import { canvas } from "../internal.js";

const _viewport = document.getElementById("viewport");
const _vpCtx = _viewport.getContext("2d");
const _camera = {
    x: 10,
    y: 10,
    width: 400,
    height: 400
}; 

export function setupViewport() {
    viewport.width = 400;
    viewport.height = 400;
    viewport.style.backgroundColor = "green";

    adjustViewport(); // sets up the image
}

export function updateCamera(x, y) {
    camera.x = x;
    camera.y = y;

}

export function adjustViewport() {
    vpCtx.clearRect(0, 0, viewport.width, viewport.height);
    
    const { x, y, width, height } = camera;
    vpCtx.drawImage(canvas, x, y, width, height, 0, 0, 400, 400);
}

export function getCam() {
    if (camera) {
        return camera; 
    } else {
        // ... 
    }
}

export const camera = _camera;
export const viewport = _viewport;
export const vpCtx = _vpCtx;