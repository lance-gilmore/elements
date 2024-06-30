import Drawable from '../engine/layer.js'
import InsideHouse from '../sprites/inside_house.js'

export default class extends Drawable {

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load() {
        const m1 = new InsideHouse(this.ctx, 0, 0, 800, 600)
        await m1.load()
        this.elements.push(m1)

    }

    update() {
        
    }

}