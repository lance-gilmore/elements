
export default class {
    #ctx
    #imageLocations = ["test_img.png"]
    #images = []

    constructor(ctx) {
        this.#ctx = ctx
    }

    async loadImages() {
        const img = new Image(); // Create new img element
        img.src = "test_img.png"
        await img.decode();
        this.#images.push(img)
    }

    drawImage() {
        this.#ctx.drawImage(this.#images[0], 10, 10, 100, 100)
    }

}