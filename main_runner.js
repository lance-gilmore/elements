import Bunny from './bunny.js'
import GameLoop from './game_loop.js'
import Background from './background.js'
import Platform from './platform.js'
import House from './house.js'
import Controlls from './controlls.js'

export default class {
    #ctx

    constructor(canvas) {
        const ctx = canvas.getContext("2d")
        this.#ctx = ctx
    }

    async run() {
        const s = new Bunny(this.#ctx)
        await s.loadImages()
        
        const b = new Background(this.#ctx)
        await b.loadImage()

        const p = new Platform(this.#ctx,100,420)
        await p.loadImage()

        const p2 = new Platform(this.#ctx,250,420)
        await p2.loadImage()

        const h = new House(this.#ctx)
        await h.loadImage()

        const controlls = new Controlls()

        const loop = new GameLoop(this.#ctx, controlls)
        loop.addEntity(b)
        loop.addEntity(p)
        loop.addEntity(p2)
        loop.addEntity(h)
        loop.addEntity(s)
        
        loop.start()
    }


}