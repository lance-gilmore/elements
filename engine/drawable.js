import Entity from './entity.js'

export default class extends Entity {
    ctx
    canvasx = 0
    canvasy = 0
    canvasw = 0
    canvash = 0
    startx
    starty

    constructor(ctx, x, y, w, h) {
        super()
        this.ctx = ctx
        this.canvasx = x
        this.canvasy = y
        this.canvasw = w
        this.canvash = h
        this.startx = x
        this.starty = y
    }

    draw() {

    }

    move(x,y) {
        this.canvasx = x
        this.canvasy = y
    }

}