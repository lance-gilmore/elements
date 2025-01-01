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
            // const ex = element.canvasx
            // const ey = element.canvasy
            // const er = element.canvasx + element.canvasw
            // const eb = element.canvasy + element.canvash

            const ex = element.startx
            const ey = element.starty
            const er = element.startx + element.canvasw
            const eb = element.starty + element.canvash
            
            if (x < er && r > ex && y < eb && b > ey) {
                return true
            }

        }
        return false
    }

    async load() {

    }

    update() {
        console.log('layer updating elements')
        for (const element of this.elements) {
            element.update()
        }
    }

    move(x,y) {
        super.move(x,y)
        for (const element of this.elements) {
            element.move(element.startx + this.canvasx, element.starty + this.canvasy)
        }
    }

    draw() {
        for (const element of this.elements) {
            element.draw()
        }
    }

}