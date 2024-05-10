import Sprite from './sprite.js'
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
        const s = new Sprite(this.#ctx)
        await s.loadImages()
        
        const b = new Background(this.#ctx)
        await b.loadImages()

        const p = new Platform(this.#ctx,100,420)
        await p.loadImages()

        const p2 = new Platform(this.#ctx,250,420)
        await p2.loadImages()

        const h = new House(this.#ctx)
        await h.loadImages()

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