
export default class {
    #ctx
    #imageLocations = ["test_img.png","bunny_sprites.png"]
    #currentSprite = 0
    #images = []
    #spriteLocations = [
        [685,641,17,29],
        [717,641,17,29]
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
        console.log(this.#currentSprite)
    }

    draw() {
        const canvasx = 10
        const canvasy = 10
        const canvasw = 60
        const canvash = 100

        const imagex = this.#spriteLocations[this.#currentSprite][0]
        const imagey = this.#spriteLocations[this.#currentSprite][1]
        const imagew = this.#spriteLocations[this.#currentSprite][2]
        const imageh = this.#spriteLocations[this.#currentSprite][3]

        this.#ctx.beginPath();
        this.#ctx.rect(canvasx-1, canvasy-1, canvasw+1, canvash+1);
        this.#ctx.stroke();

        this.#ctx.drawImage(this.#images[1], imagex, imagey, imagew, imageh, canvasx, canvasy, canvasw, canvash)
    }

}