import Drawable from '../engine/layer.js'
import ImageDrawable from '../engine/image_drawable.js'
import TextDrawable from '../engine/text_drawable.js'

export default class extends Drawable {

    #positionx = 0
    #positiony = 0
    neutrons = 0
    protons = 0
    electrons = 0
    level

    constructor(ctx, x, y, w, h, positionx, positiony, level) {
        super(ctx, x, y, w, h)
       
        this.#positionx = positionx
        this.#positiony = positiony
        this.level = level
    }

    async load() {

        const doorimg = "https://lance-gilmore.github.io/elements/images/portal.png"
        const door = new ImageDrawable(this.ctx,this.#positionx,this.#positiony,140,140)
        door.imageLocation = doorimg
        await door.load()
        this.elements.push(door)


        const img = "https://lance-gilmore.github.io/elements/images/neutron1.png"
        const layerImage1 = new ImageDrawable(this.ctx,this.#positionx,this.#positiony,20,20)
        layerImage1.imageLocation = img
        await layerImage1.load()
        this.elements.push(layerImage1)

        const img2 = "https://lance-gilmore.github.io/elements/images/red_sphere.png"
        const layerImage2 = new ImageDrawable(this.ctx,50+this.#positionx,this.#positiony,20,20)
        layerImage2.imageLocation = img2
        await layerImage2.load()
        this.elements.push(layerImage2)

        const img3 = "https://lance-gilmore.github.io/elements/images/electron1.png"
        const layerImage3 = new ImageDrawable(this.ctx,100+this.#positionx,this.#positiony,10,10)
        layerImage3.imageLocation = img3
        await layerImage3.load()
        this.elements.push(layerImage3)

        const txt1 = new TextDrawable(this.ctx,30+this.#positionx,18+this.#positiony)
        txt1.text = this.neutrons
        this.elements.push(txt1)

        const txt2 = new TextDrawable(this.ctx,80+this.#positionx,18+this.#positiony)
        txt2.text = this.protons
        this.elements.push(txt2)

        const txt3 = new TextDrawable(this.ctx,130+this.#positionx,18+this.#positiony)
        txt3.text = this.electrons
        this.elements.push(txt3)
    }

    update() {
        
    }

}