
export default class {
    #ctx
    #imageLocations = ["test_img.png","bunny_sprites.png"]
    #images = []
    #spriteLocations = [
        []
    ]

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
        const canvasw = 50
        const canvash = 50
        const imagex = 670
        const imagey = 640
        const imagew = 30
        const imageh = 30

        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        this.#ctx.drawImage(this.#images[1], imagex, imagey, imagew, imageh, canvasx, canvasy, canvasw, canvash)
    }

}