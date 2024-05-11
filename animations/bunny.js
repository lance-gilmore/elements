import AnimatedSprite from '../animated_sprite.js'
import Bunny1 from '../sprites/bunny1.js'
import Bunny2 from '../sprites/bunny2.js'

export default class extends AnimatedSprite {
    #controlls

    constructor(ctx, controlls) {
        super(ctx, 100, 350, 40, 70)
        this.#controlls = controlls
    }

    async load() {
        const b1 = new Bunny1(this.ctx,this.canvasx,this.canvasy,this.canvasw,this.canvash)
        await b1.load()
        this.images.push(b1)
        const b2 = new Bunny2(this.ctx,this.canvasx,this.canvasy,this.canvasw,this.canvash)
        await b2.load()
        this.images.push(b2)
    }

    update() {
        if (this.#controlls.upPressed) {
            const newy = this.canvasy - 2
            console.log('updatey: '+newy)
            this.move(this.canvasx, newy)
        }
        super.update()
    }

}