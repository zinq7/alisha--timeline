const camera = {
    x: 10,
    y: 10,
    width: 400,
    height: 400
}; 

export function initCam(canvas) {
    // .. initialize cam based on canvas props.
}

export function updateCamera(x, y) {
    camera.x = x;
    camera.y = y;

    
}

export function adjustViewport(viewp, drawer, canvas) {
    viewp.getContext('2d').clearRect(0, 0, viewp.width, viewp.height);
    
    const { x, y, width, height } = camera;
    drawer.drawImage(canvas, x, y, width, height, 0, 0, 400, 400);
}


export function getCam() {
    if (camera) {
        return camera; 
    } else {
        // ... 
    }
}