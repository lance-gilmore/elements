import Drawable from './drawable.js'

export default class extends Drawable {

    viewx = 0
    viewy = 0

    playerCharicters = []
    layers = []

    viewWidth
    viewHeight

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
        this.viewWidth = w
        this.viewHeight = h
    }

    moveView(x) {
        this.viewx += x
    }

    draw() {
        for (const layer of this.layers) {
            layer.move(-this.viewx, this.viewy)
            layer.draw()
        }

        for (const charicter of this.playerCharicters) {
            if (charicter.positionx - this.viewx < 0) {
                charicter.positionx = this.viewx
            }
            if (charicter.positionx - this.viewx > this.viewWidth - charicter.canvasw) {
                charicter.positionx = this.viewx + this.viewWidth - charicter.canvasw
            }
            charicter.move(charicter.positionx - this.viewx, charicter.positiony - this.viewy)
            charicter.draw()
        }

    }

    update() {
        let charictersCenter = 0
        for (const charicter of this.playerCharicters) {
            charictersCenter += charicter.positionx + (charicter.canvasw / 2)
        }
        const centerPoint = charictersCenter / 2
        this.viewx = centerPoint - (this.viewWidth / 2)

        for (const charicter of this.playerCharicters) {
            charicter.update()
        }
    }

}