import Drawable from '../engine/layer.js'
import ImageDrawable from '../engine/image_drawable.js'

export default class extends Drawable {

    #offset = 0
    neutrons = 0
    protons = 0
    electrons = 0

    constructor(ctx, x, y, w, h, offset) {
        super(ctx, x, y, w, h)
        this.#offset = offset
    }

    async load() {
        const img = "https://lance-gilmore.github.io/elements/images/neutron1.png"
        const layerImage1 = new ImageDrawable(this.ctx,90+this.#offset,10,20,20)
        layerImage1.imageLocation = img
        await layerImage1.load()
        this.elements.push(layerImage1)

        const img2 = "https://lance-gilmore.github.io/elements/images/proton1.png"
        const layerImage2 = new ImageDrawable(this.ctx,145+this.#offset,10,20,20)
        layerImage2.imageLocation = img2
        await layerImage2.load()
        this.elements.push(layerImage2)

        const img3 = "https://lance-gilmore.github.io/elements/images/electron1.png"
        const layerImage3 = new ImageDrawable(this.ctx,200+this.#offset,15,10,10)
        layerImage3.imageLocation = img3
        await layerImage3.load()
        this.elements.push(layerImage3)
    }

    addNeutron() {
        this.neutrons++
    }

    addProton() {
        this.protons++
    }

    addElectron() {
        this.electrons++
    }

    draw() {
        super.draw()

        this.ctx.font = "20px Arial";
        this.ctx.fillText(this.neutrons,115+this.#offset,28);

        this.ctx.fillText(this.protons,170+this.#offset,28);

        this.ctx.fillText(this.electrons,217+this.#offset,28);
    }

    update() {
        
    }

    move(x, y) {
        // overwrite to make it not move
    }

}