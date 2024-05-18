import Drawable from '../layer.js'
import Mountains from '../sprites/mountains.js'

export default class extends Drawable {

    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h, controlls)
    }

    async load() {
        const m1 = new Mountains(this.ctx, -800, 0, 800, 600)
        await m1.load()
        this.elements.push(m1)

        const m = new Mountains(this.ctx, 0, 0, 800, 600)
        await m.load()
        this.elements.push(m)

        const m2 = new Mountains(this.ctx, 800, 0, 800, 600)
        await m2.load()
        this.elements.push(m2)
    }

    update() {
        
    }

}