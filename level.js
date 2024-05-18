import Drawable from './drawable.js'

export default class extends Drawable {

    levelWidth = 10000
    viewx = 0

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    moveView(x) {
        this.viewx += x
    }


}