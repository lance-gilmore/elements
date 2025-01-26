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
    levelData
    scores

    constructor(ctx, x, y, w, h, positionx, positiony, level, levelData, scores) {
        super(ctx, x, y, w, h)
       
        this.#positionx = positionx
        this.#positiony = positiony
        this.level = level
        this.levelData = levelData
        this.protons = levelData.protons.length
        this.neutrons = levelData.neutrons.length
        this.electrons = levelData.electrons.length
        this.scores = scores
    }

    async load() {

        const doorimg = "https://lance-gilmore.github.io/elements/images/portal.png"
        const door = new ImageDrawable(this.ctx,50+this.#positionx,70+this.#positiony,80,100)
        door.imageLocation = doorimg
        await door.load()
        this.elements.push(door)

        const arcimg = "https://lance-gilmore.github.io/elements/images/archway.png"
        const arc = new ImageDrawable(this.ctx,this.#positionx,this.#positiony,180,180)
        arc.imageLocation = arcimg
        await arc.load()
        this.elements.push(arc)


        const infoOffsetTop = 23

        const img = "https://lance-gilmore.github.io/elements/images/neutron1.png"
        const layerImage1 = new ImageDrawable(this.ctx,15+this.#positionx,infoOffsetTop+this.#positiony,20,20)
        layerImage1.imageLocation = img
        await layerImage1.load()
        this.elements.push(layerImage1)

        const img2 = "https://lance-gilmore.github.io/elements/images/proton1.png"
        const layerImage2 = new ImageDrawable(this.ctx,70+this.#positionx,infoOffsetTop+this.#positiony,20,20)
        layerImage2.imageLocation = img2
        await layerImage2.load()
        this.elements.push(layerImage2)

        const img3 = "https://lance-gilmore.github.io/elements/images/electron1.png"
        const layerImage3 = new ImageDrawable(this.ctx,125+this.#positionx,5+infoOffsetTop+this.#positiony,10,10)
        layerImage3.imageLocation = img3
        await layerImage3.load()
        this.elements.push(layerImage3)

        const textOffsetTop = 75
        const fontSize = "14"

        const txt1 = new TextDrawable(this.ctx,10+this.#positionx,textOffsetTop+this.#positiony,fontSize)
        txt1.text = this.scores.neutrons + "/" + this.neutrons
        this.elements.push(txt1)

        const txt2 = new TextDrawable(this.ctx,60+this.#positionx,textOffsetTop+this.#positiony,fontSize)
        txt2.text = this.scores.protons + "/" + this.protons
        this.elements.push(txt2)

        const txt3 = new TextDrawable(this.ctx,110+this.#positionx,textOffsetTop+this.#positiony,fontSize)
        txt3.text = this.scores.electrons + "/" + this.electrons
        this.elements.push(txt3)
    }

    update() {
        
    }

}