import Sprite from './sprite.js'

export default class {
    #ctx

    constructor(canvas) {
        const ctx = canvas.getContext("2d")
        this.#ctx = ctx
    }

    async run() {
        const s = new Sprite(this.#ctx)
        await s.loadImages()
        s.drawImage()
    }


}