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

    draw() {
        this.images[this.currentSprite].draw()
    }

}