import Drawable from './drawable.js'

export default class extends Drawable {
    imageLocation = ''
    #image
    spriteLocation = []

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load() {
        const img = new Image();
        img.src = this.imageLocation
        await img.decode()
        this.#image = img
    }

    draw() {
        const imagex = this.spriteLocation[0]
        const imagey = this.spriteLocation[1]
        const imagew = this.spriteLocation[2]
        const imageh = this.spriteLocation[3]

        // this.ctx.beginPath();
        // this.ctx.rect(this.canvasx-1, this.canvasy-1, this.canvasw+1, this.canvash+1);
        // this.ctx.stroke();

        this.ctx.drawImage(this.#image, imagex, imagey, imagew, imageh, this.canvasx, this.canvasy, this.canvasw, this.canvash)
    }

}