import Sprite from './sprite.js'
import GameLoop from './game_loop.js'
import Background from './background.js'

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

        const loop = new GameLoop(this.#ctx)
        loop.addEntity(b)
        loop.addEntity(s)
        
        loop.start()
    }


}