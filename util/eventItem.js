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

    checkCollision(detX, detY, gameX, gameY) {
        const top = this.position.y;
        const left = this.position.x;
        const bot = top + this.height;
        const right = left + this.width;

        const dTop = gameY - detY;
        const dBot = gameY + detY - 96;
        const dLeft = gameX - detX;
        const dRight = gameX + detX - 96; // 96 is a magic number...

        let xFlag = false;
        if (top <= dBot && bot >= dTop) {
            xFlag = true;
        } else if (bot <= dTop && top >= dBot) {
            xFlag = true;
        }

        let yFlag = false;
        if (left <= dRight && right >= dLeft) {
            yFlag = true;
        } else if (right <= dLeft && left >= dRight) {
            yFlag = true;
        }

        return xFlag && yFlag;
    }
}