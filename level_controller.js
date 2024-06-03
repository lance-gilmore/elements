import Drawable from './drawable.js'
import Level1 from 'levels/level1.js'

export default class extends Drawable {
    
    controlls
    #ctx
    currentLevel

    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h)
        this.controlls = controlls
        this.#ctx = ctx
    }

    async load() {
        
        const l = new Level1(this.#ctx, 0, 0, this.canvasw, this.canvash, controlls)
        await l.load()

        this.currentLevel = l

    }

    draw() {
        this.currentLevel.draw()
    }

    update() {
        this.currentLevel.update()
    }

}