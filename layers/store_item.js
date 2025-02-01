import Drawable from '../engine/layer.js'
import ImageDrawable from '../engine/image_drawable.js'
import TextDrawable from '../engine/text_drawable.js'

export default class extends Drawable {

    #positionx = 0
    #positiony = 0
    neutrons = 1
    protons = 2
    electrons = 3
    symbol = 'Mm'
    name = ''
    image

    constructor(ctx, x, y, w, h, positionx, positiony) {
        super(ctx, x, y, w, h)
       
        this.#positionx = positionx
        this.#positiony = positiony
    }

    async load() {

        const itemBackground = this.image
        const arc = new ImageDrawable(this.ctx,this.#positionx,this.#positiony,this.canvasw,this.canvash)
        arc.imageLocation = itemBackground
        await arc.load()
        this.elements.push(arc)


        const infoOffsetTop = 5

        const img = "https://lance-gilmore.github.io/elements/images/neutron1.png"
        const layerImage1 = new ImageDrawable(this.ctx,35+this.#positionx,infoOffsetTop+this.#positiony,12,12)
        layerImage1.imageLocation = img
        await layerImage1.load()
        this.elements.push(layerImage1)

        const img3 = "https://lance-gilmore.github.io/elements/images/electron1.png"
        const layerImage3 = new ImageDrawable(this.ctx,10+this.#positionx,-2+infoOffsetTop+this.#positiony,8,8)
        layerImage3.imageLocation = img3
        await layerImage3.load()
        this.elements.push(layerImage3)

        const img2 = "https://lance-gilmore.github.io/elements/images/proton1.png"
        const layerImage2 = new ImageDrawable(this.ctx,12+this.#positionx,infoOffsetTop+this.#positiony,12,12)
        layerImage2.imageLocation = img2
        await layerImage2.load()
        this.elements.push(layerImage2)


        const textOffsetTop = 20
        const fontSize = "14"

        const txt1 = new TextDrawable(this.ctx,30+this.#positionx,textOffsetTop+this.#positiony,fontSize)
        txt1.text =  this.neutrons
        this.elements.push(txt1)


        const txt3 = new TextDrawable(this.ctx,10+this.#positionx,textOffsetTop+this.#positiony,fontSize)
        txt3.text =  this.protons
        this.elements.push(txt3)

        const symbolText = new TextDrawable(this.ctx,5+this.#positionx,50+this.#positiony,"30")
        symbolText.text =  this.symbol
        this.elements.push(symbolText)
    }

    update() {
        
    }

}