
export default class {
    #ctx
    #imageLocations = ["bunny_sprites.png"]
    #currentSprite = 0
    #images = []
    #spriteLocations = [
        [0,445,483,242]
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

    update() {
        this.#currentSprite++
        if (this.#currentSprite > this.#spriteLocations.length -1) {
            this.#currentSprite = 0
        }
    }

    draw() {
        const canvasx = 0
        const canvasy = 0
        const canvasw = 700
        const canvash = 500

        const imagex = this.#spriteLocations[this.#currentSprite][0]
        const imagey = this.#spriteLocations[this.#currentSprite][1]
        const imagew = this.#spriteLocations[this.#currentSprite][2]
        const imageh = this.#spriteLocations[this.#currentSprite][3]

        this.#ctx.beginPath();
        this.#ctx.rect(canvasx-1, canvasy-1, canvasw+1, canvash+1);
        this.#ctx.stroke();

        this.#ctx.drawImage(this.#images[0], imagex, imagey, imagew, imageh, canvasx, canvasy, canvasw, canvash)
    }

}