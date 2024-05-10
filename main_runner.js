import Sprite from './sprite.js'
import GameLoop from './game_loop.js'
import Background from './background.js'
import Platform from './platform.js'
import House from './house.js'

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

        const p = new Platform(this.#ctx)
        await p.loadImages()

        const h = new House(this.#ctx)
        await h.loadImages()

        const loop = new GameLoop(this.#ctx)
        loop.addEntity(b)
        loop.addEntity(p)
        loop.addEntity(h)
        loop.addEntity(s)
        
        loop.start()
    }


}