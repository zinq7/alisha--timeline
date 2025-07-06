class UIManager {
    WIDTH = 1920;
    HEIGHT = 1080; // TODO: fix coupling and potential resolution

    constructor() {
        this.overlay = document.getElementById("ui-overlay");
        this.overlay.width = this.WIDTH;
        this.overlay.height = this.HEIGHT;
        this.overCtx = this.overlay.getContext("2d");
        this.uiElements = [];
    }

    draw() {
        // for ... in uiElements ...
        const ctx = this.overCtx;

        ctx.beginPath();
        ctx.font = "25vh cursive"
        ctx.fillText("Welcome UI", 500, 900);
    }
}

export default new UIManager();