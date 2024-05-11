import Drawable from './drawable.js'

export default class extends Drawable {

    elements = []
    controlls

    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h)
        this.controlls = controlls
    }

    checkCollision(x,y,r,b) {
        for (const element of this.elements) {
            const ex = element.canvasx
            const ey = element.canvasy
            const er = element.canvasx + element.canvasw
            const eb = element.canvasy + element.canvash
            
            if (x < er && r > ex && y < eb && b > ey) {
                return true
            }

        }
        return false
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