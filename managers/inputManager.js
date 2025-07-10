import camera from "./camera.js";
import game from './gameManager.js';

// slightly scuffed turnaround code
function startMove(dx, dy) {
    camera.velocity.dx = dx == 0 || dx == -camera.velocity.dx ? camera.velocity.dx : dx;
    camera.velocity.dy = dy == 0 || dy == -camera.velocity.dy ? camera.velocity.dy : dy;
}

function stopMove(dx, dy) {
    camera.velocity.dx = dx == camera.velocity.dx ? 0 : camera.velocity.dx;
    camera.velocity.dy = dy == camera.velocity.dy ? 0 : camera.velocity.dy;
}

class InputManager {
    constructor() {
        this.sprint = false;
        this.paused = false;
    }

    setup() {
        document.onkeydown = (e) => {
            this.checkPausing(e);
            if (!this.paused) {
                this.checkMovement(e);
            }
        }

        document.onkeyup = (e) => {
            if (!this.paused) {
                this.checkTurnaround(e);
            }
        }
    }

    checkTurnaround(e) {
        const pace = 4;

        const key = e.key.toLowerCase();
        this.sprint = e.shiftKey;

        if (key == "d") {
            stopMove(pace, 0);
        } else if (key == "s") {
            stopMove(0, pace);
        } else if (key == "a") {
            stopMove(-pace, 0);
        } else if (key == "w") {
            stopMove(0, -pace);
        };
    }

    checkPausing(e) {
        const key = e.key.toLowerCase();

        if (key !== " ") {
            return;
        }

        if (this.paused) {
            this.paused = game.unpause(); // always f
        } else {
            this.paused = game.pause(); // sometimes does shitall
            if (this.paused) {
                camera.velocity.dx = 0;
                camera.velocity.dy = 0;

            }
        }
    }

    checkMovement(e) {
        const pace = 4;

        const key = e.key.toLowerCase();;
        this.sprint = e.shiftKey;

        if (key == "d") {
            startMove(pace, 0);
        } else if (key == "s") {
            startMove(0, pace);
        } else if (key == "a") {
            startMove(-pace, 0);
        } else if (key == "w") {
            startMove(0, -pace);
        }
    }


    isSprinting() {
        return this.sprint;
    }
}

export default new InputManager();