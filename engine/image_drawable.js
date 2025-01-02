import Drawable from './drawable.js'

export default class extends Drawable {
    imageLocation = ''
    #image
    spriteLocation = []
    #flipx = false

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

         let canvasx = this.canvasx

         if (this.#flipx) {
            this.ctx.scale(-1, 1);
            canvasx = (canvasx + this.canvasw) * -1
         }
        
        this.ctx.drawImage(this.#image, canvasx, this.canvasy, this.canvasw, this.canvash)
        this.ctx.setTransform(1, 0, 0, 1, 0, 0)
    }

    setFlipx(flipx) {
        this.#flipx = flipx
    }

    getFlipx() {
        return this.#flipx
    }

}