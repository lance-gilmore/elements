import Drawable from '../layer.js'
import Platform from '../sprites/platform.js'

export default class extends Drawable {

    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h, controlls)
    }

    async load() {
        const p = new Platform(this.#ctx,100,420)
        await p.load()

        const p2 = new Platform(this.#ctx,250,420)
        await p2.load()

        this.elements.push(p)
        this.elements.push(p2)
    }

    update() {
        
    }

}