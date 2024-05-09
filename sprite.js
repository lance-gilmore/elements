
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

    update() {
        
    }

    draw() {
        const canvasx = 10
        const canvasy = 10
        const canvasw = 100
        const canvash = 100
        const imagex = 683
        const imagey = 641
        const imagew = 20
        const imageh = 29

        this.#ctx.beginPath();
        this.#ctx.rect(canvasx-1, canvasy-1, canvasw+1, canvash+1);
        this.#ctx.stroke();

        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        this.#ctx.drawImage(this.#images[1], imagex, imagey, imagew, imageh, canvasx, canvasy, canvasw, canvash)
    }

}