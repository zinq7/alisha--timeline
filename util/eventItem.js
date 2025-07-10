import pp from './positionPlacer.js';


export class EventItem {
    constructor(itemPath) {
        this.isLoaded = false;
        this.path = itemPath;
        // this.loadFile();
    }

    async loadFile() {
        const json = await fetch(this.path + ".json")
            .then((res) => res.json()); // promise !! yay

        const { day, vibes, imgWidth, imgHeight, fileFormat } = json; // both props

        this.fileFormat = fileFormat;
        this.position = {};

        let w, h;
        if (json.sizePreset) {
            const { width, height } = pp.getSizeScaling(json.sizePreset, imgWidth, imgHeight);
            w = width;
            h = height;
        } else {
            const { width, height } = json;
            w = width;
            h = height;
        }

        this.height = h;
        this.width = w;

        this.imgWidth = imgWidth;
        this.imgHeight = imgHeight;

        this.position.x = pp.getXForDay(day);
        this.position.x -= pp.offsetX(w);
        this.position.y = pp.getYForVibes(vibes);
        this.position.y -= pp.offsetY(h);

        this.isLoaded = true;
    }

    draw(ctx) {
        const img = new Image();
        img.src = this.path + "." + this.fileFormat;
        img.alt = "why am i setting alt if it never breaks";
        ctx.drawImage(img, 0, 0, this.imgWidth, this.imgHeight, this.position.x, this.position.y, this.width, this.height);
    }

    checkColision(range, gameX, gameY) {
        const minX = gameX;
        if (this.position.x) {
            // TODO
        }
    }
}