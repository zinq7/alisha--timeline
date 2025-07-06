import camera from "./camera.js";

const _canvas = document.querySelector("canvas");
const _ctx = _canvas.getContext("2d");
const WIDTH = 4000;
const HEIGHT = 1080 * 2;

function drawPattern() {
    

    for (let i = 0.5; i < 10; i++) {
        ctx.beginPath();
        ctx.lineWidth = 20;
        ctx.strokeStyle = "orange";
        ctx.moveTo(0, 50 * i);
        ctx.lineTo(4000, 100 * i);
        ctx.stroke();

        i += i / 2;
    }

    let img = new Image();
    img.src = "/assets/road.webp";
    img.alt = "heyo this img sucks";
    ctx.drawImage(img, 0, 0, 1040, 280, 0, 0, WIDTH, HEIGHT);

    img = new Image();
    img.src = "/assets/high.avif";
    img.alt = "why am i setting alt if it never breaks";
    ctx.drawImage(img, 0, 0, 740, 886, 100, 100, 740 / 2, 886 / 2);

}

export function setupCanvas() {
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.style.backgroundColor = "gray"
    
    drawPattern();
}

export function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPattern();
}

export function showCamera() {
    redraw();
    
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.rect(camera.position.x, camera.position.y, camera.width, camera.height);
    ctx.stroke();
}

export const canvas = _canvas;
export const ctx = _ctx;