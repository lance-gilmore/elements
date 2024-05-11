import Drawable from './drawable.js'

export default class extends Drawable {

    elements = []
    controlls

    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h)
        this.controlls = controlls
    }

    async load() {

    }

    update() {
        
    }

    move(x,y) {
        for (const element of this.elements) {
            element.move(x,y)
        }
    }

    draw() {
        for (const element of this.elements) {
            element.draw()
        }
    }

}