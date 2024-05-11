import Bunny from './animations/bunny.js'
import GameLoop from './game_loop.js'
import Background from './layers/background.js'
import Platforms from './layers/platforms.js'
import Foreground from './layers/forground_static.js'
import Controlls from './controlls.js'

export default class {
    #ctx

    constructor(canvas) {
        const ctx = canvas.getContext("2d")
        this.#ctx = ctx
    }

    async run() {
        const controlls = new Controlls()

        
        
        const b = new Background(this.#ctx,0,0,800,600,controlls)
        await b.load()

        const p = new Platforms(this.#ctx,0,0,800,600,controlls)
        await p.load()

        const h = new Foreground(this.#ctx,0,0,800,600,controlls)
        await h.load()

        const s = new Bunny(this.#ctx, controlls, [p])
        await s.load()

        const loop = new GameLoop(this.#ctx, controlls)
        loop.addEntity(b)
        loop.addEntity(p)
        loop.addEntity(h)
        loop.addEntity(s)
        
        loop.start()
    }


}