class UIManager {
    // simply the camera resolution. quality
    WIDTH = 2000;
    HEIGHT = 1000;

    constructor() {
        this.overlay = document.getElementById("ui-overlay");
        this.overlay.width = this.WIDTH;
        this.overlay.height = this.HEIGHT;
        this.overCtx = this.overlay.getContext("2d");
        this.uiElements = []; // unused rn
        this.selecting = false;

        console.log(this.overlay);
    }

    // reminder: they're temporary...
    addUiElement(x) {
        this.uiElements.push(x);
    }

    update() {
        this.overCtx.reset();
        this.draw();
        this.uiElements = []; // clear the ui elements
    }

    draw() {
        this.drawCrosshair();
        this.uiElements.forEach((x) => {
            x.draw(this.overCtx);
        });
    }

    drawCrosshair() {
        const img = new Image();
        img.src = this.selecting ? "assets/crosshairSelected.png" : "assets/crosshair.png";
        img.alt = "bruv";

        const x = this.WIDTH / 2 - this.WIDTH * 0.1;
        const y = this.HEIGHT / 2 - this.WIDTH * 0.1; // x + based (loser)
        const dim = this.WIDTH * 0.2;
        this.overCtx.drawImage(img, 0, 0, 442, 442, x, y, dim, dim);
        // ui = cam * 2
    }

    pauseMenu(json) {
        document.getElementById("infopanel").style.display = "flex";
        
        // fill in content;
        const { day, acc, eventName, description, rating } = json; // get relevant fields
        document.getElementById("info-img").src = acc;
        document.getElementById("info-description").innerHTML = "<i>" + description + "</i>";
        document.getElementById("info-rating").innerText = rating;
        document.getElementById("info-title").innerText = eventName;

        const start = new Date(1724767200000);
        start.setDate(start.getDate() + day);

        document.getElementById("info-date").innerText = start.toDateString();

    }

    unpauseMenu() {
        document.getElementById("infopanel").style.display = "none";
    }
}

export default new UIManager();