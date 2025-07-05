import { setupCanvas, showCamera } from "./canvasManager.js";
import { adjustViewport, getCam, updateCamera } from './cameraManager.js';

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

c.fillRect(10, 10, 50, 50);

setupCanvas(canvas, c);

console.log(getCam());

showCamera(getCam());

const viewp = document.getElementById("viewport");
viewp.width = 400;
viewp.height = 400;
viewp.style.backgroundColor = "green"

const drawer = viewp.getContext("2d");
drawer.drawImage(canvas, 10, 10, 400, 400, 0, 0, 400, 400);

document.onkeydown = (e) => {
    console.log(e.key);

    const { x, y } = getCam();
    if (e.key == "d") {
        updateCamera(x + 5, y);
        showCamera(getCam());
    } else if (e.key == "s") {
        updateCamera(x, y + 5);
        showCamera(getCam());
    } else if (e.key == "a") {
        updateCamera(x - 5, y);
        showCamera(getCam());
    } else if (e.key == "w") {
        updateCamera(x, y - 5);
        showCamera(getCam());
    }

    adjustViewport(viewp, drawer, canvas);
}