
export default class {
    #ctx
    #imageLocations = ["bunny_sprites.png"]
    #currentSprite = 0
    #images = []

    #canvasx = 0
    #canvasy = 0

    #spriteLocations = [
        [483,800,48,47]
    ]

    constructor(ctx, x, y) {
        this.#ctx = ctx
        this.#canvasx = x
        this.#canvasx = y
    }

    async loadImages() {
        for (const location of this.#imageLocations) {
            const img = new Image();
            img.src = location
            await img.decode();
            this.#images.push(img)
        }
    }

    update() {
        this.#currentSprite++
        if (this.#currentSprite > this.#spriteLocations.length -1) {
            this.#currentSprite = 0
        }
    }

    draw() {
        const canvasx = this.#canvasx
        const canvasy = this.#canvasy
        const canvasw = 150
        const canvash = 150

        const imagex = this.#spriteLocations[this.#currentSprite][0]
        const imagey = this.#spriteLocations[this.#currentSprite][1]
        const imagew = this.#spriteLocations[this.#currentSprite][2]
        const imageh = this.#spriteLocations[this.#currentSprite][3]

        this.#ctx.drawImage(this.#images[0], imagex, imagey, imagew, imageh, canvasx, canvasy, canvasw, canvash)
    }

}