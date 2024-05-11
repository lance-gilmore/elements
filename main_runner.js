import Bunny from './animations/bunny.js'
import GameLoop from './game_loop.js'
import Background from './sprites/background.js'
import Platform from './sprites/platform.js'
import House from './sprites/house.js'
import Controlls from './controlls.js'

export default class {
    #ctx

    constructor(canvas) {
        const ctx = canvas.getContext("2d")
        this.#ctx = ctx
    }

    async run() {
        const controlls = new Controlls()

        const s = new Bunny(this.#ctx, controlls)
        await s.load()
        
        const b = new Background(this.#ctx)
        await b.load()

        const p = new Platform(this.#ctx,100,420)
        await p.load()

        const p2 = new Platform(this.#ctx,250,420)
        await p2.load()

        const h = new House(this.#ctx)
        await h.load()

        

        const loop = new GameLoop(this.#ctx, controlls)
        loop.addEntity(b)
        loop.addEntity(p)
        loop.addEntity(p2)
        loop.addEntity(h)
        loop.addEntity(s)
        
        loop.start()
    }


}