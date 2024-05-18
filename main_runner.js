import GameLoop from './game_loop.js'
import Controlls from './controlls.js'
import Level1 from './levels/level1.js'

export default class {
    #ctx

    constructor(canvas) {
        const ctx = canvas.getContext("2d")
        this.#ctx = ctx
    }

    async run() {

        const controlls = new Controlls()

        const l = new Level1(this.#ctx, 0, 0, 800, 600, controlls)
        await l.load()

        const loop = new GameLoop(this.#ctx, controlls)
        loop.addEntity(l)
        
        loop.start()
    }


}