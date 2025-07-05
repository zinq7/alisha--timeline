import camera from "./camera.js";

export function setupMovement() {
    const pace = 1;

    document.onkeydown = (e) => {
        const key = e.key.toLowerCase();

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

    document.onkeyup = (e) => {
        const key = e.key.toLowerCase();

        if (key == "d") {
            stopMove(pace, 0);
        } else if (key == "s") {
            stopMove(0, pace);
        } else if (key == "a") {
            stopMove(-pace, 0);
        } else if (key == "w") {
            stopMove(0, -pace);
        }
    }
}

// slightly scuffed turnaround code
function startMove(dx, dy) {
    camera.velocity.dx = dx == 0 || dx == -camera.velocity.dx ? camera.velocity.dx : dx;
    camera.velocity.dy = dy == 0 || dy == -camera.velocity.dy ? camera.velocity.dy : dy;
}

function stopMove(dx, dy) {
    camera.velocity.dx = dx == camera.velocity.dx ? 0 : camera.velocity.dx;
    camera.velocity.dy = dy == camera.velocity.dy ? 0 : camera.velocity.dy;
}