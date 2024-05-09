
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
        const canvasx = 0
        const canvasy = 10
        const canvasw = 700
        const canvash = 500
        const imagex = 600
        const imagey = 600
        const imagew = 300
        const imageh = 300

        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        this.#ctx.drawImage(this.#images[1], imagex, imagey, imagew, imageh, canvasx, canvasy, canvasw, canvash)
    }

}