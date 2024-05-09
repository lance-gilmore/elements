
export default class {
    #ctx
    #imageLocations = ["test_img.png","bunny_sprites.png"]
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

    draw() {
        const x = 10
        const y = 10
        const width = 100
        const height = 100
        const offsetx = 10
        const offsety = 10
        const dwidth = 100
        const dheight = 100

        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        this.#ctx.drawImage(this.#images[1], x, y, width, height, offsetx, offsety, dwidth, dheight)
    }

}