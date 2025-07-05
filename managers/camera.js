import { canvas } from "../internal.js";
import { showCamera } from "../internal.js";

class Camera {
    // default camera
    constructor() {
        this.viewport = document.getElementById("viewport");
        this.viewport.style.backgroundColor = "green";
        this.viewport.width = 400;
        this.viewport.height = 400;
        this.vpCtx = this.viewport.getContext("2d"); // fix this later
        this.position = {
            x: 10,
            y: 10
        };

        this.velocity = {
            dx: 0,
            dy: 0
        };

        this.width = 400;
        this.height = 400;
    }

    draw() {
        this.vpCtx.reset();
        const { x, y } = this.position;
        const { width, height } = this;

        this.vpCtx.drawImage(canvas, x, y, width, height, 0, 0, 400, 400);

        showCamera();
    }

    update() {
        const { x, y } = this.position;
        const { dx, dy } = this.velocity;

        let newX = x + dx;
        let newY = y + dy;

        // semi lazy boundary detection -- camera straight stops fr fr
        newX = Math.min(newX + this.width, canvas.width) - this.width;
        newX = Math.max(newX, 0);
        newY = Math.min(newY + this.height, canvas.height) - this.height;
        newY = Math.max(newY, 0);

        this.position.x = newX;
        this.position.y = newY;

        this.draw();
    }
}

export default new Camera();