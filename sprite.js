
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
        const width = 200
        const height = 200
        const offsetx = 100
        const offsety = 100
        const dwidth = 300
        const dheight = 300

        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        this.#ctx.drawImage(this.#images[1], x, y, width, height, offsetx, offsety, dwidth, dheight)
    }

}