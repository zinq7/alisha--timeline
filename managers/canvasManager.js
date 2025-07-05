import { getCam } from '../internal.js';

const _canvas = document.querySelector("canvas");
const _ctx = _canvas.getContext("2d");

function drawPattern() {
    for (let i = 0.5; i < 10; i++) {
        ctx.beginPath();
        ctx.lineWidth = 20;
        ctx.strokeStyle = "orange";
        ctx.moveTo(0, 50 * i);
        ctx.lineTo(4000, 50 * i);
        ctx.stroke();

        i += i / 2;
    }
}

export function setupCanvas() {
    canvas.width = 4000;
    canvas.height = 500;
    canvas.style.backgroundColor = "gray"
    
    drawPattern();
}

export function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPattern();
}

export function showCamera() {
    const camera = getCam();
    redraw();
    
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.rect(camera.x, camera.y, camera.width, camera.height);
    ctx.stroke();
}

export const canvas = _canvas;
export const ctx = _ctx;