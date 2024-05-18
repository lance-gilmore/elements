import Drawable from '../layer.js'
import Mountains from '../sprites/mountains.js'

export default class extends Drawable {

    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h, controlls)
    }

    async load() {
        const m = new Mountains(this.ctx, -800, 0, 800, 600)
        await m.load()
        this.elements.push(m)

        const m = new Mountains(this.ctx, 0, 0, 800, 600)
        await m.load()
        this.elements.push(m)

        const m = new Mountains(this.ctx, 800, 0, 800, 600)
        await m.load()
        this.elements.push(m)
    }

    update() {
        
    }

}