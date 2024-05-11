import Bunny from './animations/bunny.js'
import GameLoop from './game_loop.js'
import Background from './layers/background.js'
import Platforms from './layers/platforms.js'
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
        
        const b = new Background(this.#ctx,0,0,800,600,controlls)
        await b.load()

        const p = new Platforms(this.#ctx,0,0,800,600,controlls)
        await p.load()

        const h = new House(this.#ctx)
        await h.load()

        const loop = new GameLoop(this.#ctx, controlls)
        loop.addEntity(b)
        loop.addEntity(p)
        loop.addEntity(h)
        loop.addEntity(s)
        
        loop.start()
    }


}