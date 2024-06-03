import GameLoop from './game_loop.js'
import Controlls from './controlls.js'
import LevelController from './level_controller.js'

export default class {
    #ctx

    constructor(canvas) {
        const ctx = canvas.getContext("2d")
        this.#ctx = ctx
    }

    async run() {
        const canvasW = 800
        const canvasH = 600

        const controlls = new Controlls()

        const l = new LevelController(this.#ctx, 0, 0, canvasW, canvasH, controlls)
        await l.load()

        const loop = new GameLoop(this.#ctx, controlls)
        loop.addEntity(l)
        
        loop.start()
    }


}