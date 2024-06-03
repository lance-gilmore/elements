import Drawable from './drawable.js'
import Level1 from 'levels/level1.js'

export default class extends Drawable {

    viewWidth = 800
    viewHeight = 600
    
    controlls
    #ctx

    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h)
        this.controlls = controlls
        this.#ctx = ctx
    }

    async load() {
        
        const l = new Level1(this.#ctx, 0, 0, 800, 600, controlls)
        await l.load()

    }

}