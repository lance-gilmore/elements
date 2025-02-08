import Drawable from '../engine/layer.js'
import ImageDrawable from '../engine/image_drawable.js'

export default class extends Drawable {

    #positionx = 0
    #positiony = 0
    electrons
    atomicNumber
    nucleusImage
    electronImages = []

    constructor(ctx, x, y, w, h, positionx, positiony, electrons, atomicNumber, nucleusImage, electronImage) {
        super(ctx, x, y, w, h)
       
        this.#positionx = positionx
        this.#positiony = positiony
        this.electrons = electrons
        this.atomicNumber = atomicNumber
        this.nucleusImage = nucleusImage
        this.electronImage = electronImage
    }

    async load() {

        const nucleusImg = new ImageDrawable(this.ctx,this.#positionx,this.#positiony,20,20)
        nucleusImg.imageLocation = this.nucleusImage
        await nucleusImg.load()
        this.elements.push(nucleusImg)

        const electronImg = new ImageDrawable(this.ctx,this.#positionx+30,this.#positiony+30,5,5)
        electronImg.imageLocation = this.electronImage
        await electronImg.load()
        this.elements.push(electronImg)

        const electronOrbit = {
            img: electronImg,
            startx: electronImg.x,
            starty: electronImg.y,
            radius: 30,
            h: this.#positionx/2, 
            k: this.#positiony/2,
            theta: 0
        }

        this.electronImages.push(electronOrbit)

    }

    update() {
        const step = 2*Math.PI/20;
        for (const e of this.electronImages) {
            e.theta += step
            e.img.x = e.h + e.radius*Math.cos(e.theta);
            e.img.y = e.k - e.radius*Math.sin(e.theta);
        }
    }

}