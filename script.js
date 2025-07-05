import { setupCanvas, showCamera } from "./canvasManager.js";
import { adjustViewport, getCam, updateCamera, setupViewport } from './cameraManager.js';

setupCanvas();
showCamera();

setupViewport();

document.onkeydown = (e) => {
    console.log(e.key);

    const { x, y } = getCam();
    if (e.key == "d") {
        updateCamera(x + 5, y);
    } else if (e.key == "s") {
        updateCamera(x, y + 5);
    } else if (e.key == "a") {
        updateCamera(x - 5, y);
    } else if (e.key == "w") {
        updateCamera(x, y - 5);
    }

    showCamera(getCam());

    adjustViewport();
}