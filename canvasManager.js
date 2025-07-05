var canvas = null;
var ctx = null;

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

export function setupCanvas(canva, c) {
    canva.width = 4000;
    canva.height = 500;
    canva.style.backgroundColor = "gray"
    
    canvas = canva;
    ctx = c;
    
    drawPattern();
}

export function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPattern();
}

export function showCamera(camera) {
    redraw();
    
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.rect(camera.x, camera.y, camera.width, camera.height);
    ctx.stroke();
}
