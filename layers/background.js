import Drawable from '../layer.js'
import Mountains from '../sprites/mountains.js'

export default class extends Drawable {

    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h, controlls)
    }

    async load() {
        const m = new Mountains(this.ctx)
        await m.load()
        this.elements.push(m)
    }

    update() {
        
    }

}