import Entity from './entity.js'

export default class extends Entity {
    ctx
    canvasx = 0
    canvasy = 0
    canvasw = 0
    canvash = 0

    constructor(ctx, x, y, w, h) {
        this.ctx = ctx
        this.canvasx = x
        this.canvasx = y
        this.canvasw = w
        this.canvash = h
    }

    draw() {

    }

}