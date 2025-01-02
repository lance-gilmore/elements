import Drawable from './drawable.js'

export default class extends Drawable {

    currentSprite = 0
    images = []

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async loadSprites() {

    }

    update() {
        this.currentSprite++
        if (this.currentSprite > this.images.length -1) {
            this.currentSprite = 0
        }
    }

    move(x,y) {
        for (const image of this.images) {
            image.move(x,y)
        }
    }

    draw() {
        this.images[this.currentSprite].draw()
    }

    setFlipx(flipx) {
        for (const image of this.images) {
            image.setFlipx(flipx)
        }
    }

    getFlipx() {
        return this.images[0].getFlipx()
    }

}