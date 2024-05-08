import Sprite from './sprite.js'

export default class {
    #ctx

    constructor(canvas) {
        const ctx = canvas.getContext("2d")
        this.#ctx = ctx
    }

    run() {
        //this.#loadImages()
        const s = new Sprite(this.#ctx)
        s.loadImages()
        s.drawImage()
    }

    #loadImages() {
        const img = new Image(); // Create new img element
        img.addEventListener("load", () => {
            this.#ctx.drawImage(img, 10, 10, 100, 100)
        });
        img.src = "test_img.png"
    }

}