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
        let imagex = this.spriteLocation[0]
        const imagey = this.spriteLocation[1]
        let imagew = this.spriteLocation[2]
        const imageh = this.spriteLocation[3]

         this.ctx.beginPath();
         this.ctx.rect(this.canvasx-1, this.canvasy-1, this.canvasw+1, this.canvash+1);
         this.ctx.stroke();

         if (this.#flipx) {
            imagex = imagex * -1
            imagew = imagew * -1
         }
        
        this.ctx.drawImage(this.#image, imagex, imagey, imagew, imageh, this.canvasx, this.canvasy, this.canvasw, this.canvash)
    }

    setFlipx(flipx) {
        this.#flipx = flipx
    }

}