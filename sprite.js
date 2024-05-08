
export default class {
    #ctx
    #imageLocations = ["test_img.png"]
    #images = []

    constructor(ctx) {
        this.#ctx = ctx
    }

    async loadImages() {
        for (const location of this.#imageLocations) {
            const img = new Image();
            img.src = location
            await img.decode();
            this.#images.push(img)
        }
    }

    drawImage() {
        this.#ctx.drawImage(this.#images[0], 10, 10, 100, 100)
    }

}