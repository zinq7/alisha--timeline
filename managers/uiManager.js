class UIManager {
    // simply the camera resolution. quality
    WIDTH = 1920;
    HEIGHT = 1080;

    constructor() {
        this.overlay = document.getElementById("ui-overlay");
        this.overlay.width = this.WIDTH;
        this.overlay.height = this.HEIGHT;
        this.overCtx = this.overlay.getContext("2d");
        this.uiElements = []; // unused rn

        console.log(this.overlay);
    }

    // reminder: they're temporary...
    addUiElement(x) {
        this.uiElements.add(x);
    }

    update() {
        this.overCtx.reset();
        this.draw();
        this.uiElements = []; // clear the ui elements
    }

    draw() {
        this.drawCrosshair();
    }

    drawCrosshair() {
        const img = new Image();
        img.src = "/assets/crosshair.webp";
        img.alt = "bruv";

        const x = this.WIDTH / 2 - this.WIDTH * 0.1;
        const y = this.HEIGHT / 2 - this.WIDTH * 0.1; // x + based (loser)
        const dim = this.WIDTH * 0.2;
        this.overCtx.drawImage(img, 0, 0, 442, 442, x, y, dim, dim);

        console.log("drawing ctx")
        console.log(x, y, dim);
    }
}

export default new UIManager();