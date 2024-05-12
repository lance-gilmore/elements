import Drawable from '../layer.js'
import House from '../sprites/house.js'

export default class extends Drawable {

    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h, controlls)
    }

    async load() {
        const h = new House(this.ctx)
        await h.load()
        this.elements.push(h)
    }

    update() {
        
    }

}