import Bunny from './animations/bunny.js'
import Girl from './animations/girl.js'
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
        const maxw = 800
        const maxh = 600

        const controlls = new Controlls()
        
        const b = new Background(this.#ctx,0,0,maxw,maxh,controlls)
        await b.load()

        const p = new Platforms(this.#ctx,0,0,maxw,maxh,controlls)
        await p.load()

        const h = new Foreground(this.#ctx,0,0,maxw,maxh,controlls)
        await h.load()

        const s = new Bunny(this.#ctx, controlls, [p], maxw, maxh)
        await s.load()

        const g = new Girl(this.#ctx, controlls, [p], maxw, maxh)
        await g.load()

        const loop = new GameLoop(this.#ctx, controlls)
        loop.addEntity(b)
        loop.addEntity(p)
        loop.addEntity(h)
        loop.addEntity(s)
        loop.addEntity(g)
        
        loop.start()
    }


}