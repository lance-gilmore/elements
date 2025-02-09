import Drawable from '../engine/layer.js'
import ImageDrawable from '../engine/image_drawable.js'

export default class extends Drawable {

    electrons
    atomicNumber
    nucleusImage
    electronImages = []

    constructor(ctx, x, y, w, h, electrons, atomicNumber, nucleusImage, electronImage) {
        super(ctx, x, y, w, h)
       
        this.electrons = electrons
        this.atomicNumber = atomicNumber
        this.nucleusImage = nucleusImage
        this.electronImage = electronImage
    }

    async load() {

        const nucleusImg = new ImageDrawable(this.ctx,this.canvasx,this.canvasy,this.canvasw,this.canvash)
        nucleusImg.imageLocation = this.nucleusImage
        await nucleusImg.load()
        this.elements.push(nucleusImg)

        const electronImg = new ImageDrawable(this.ctx,this.canvasx+40,this.canvasy,5,5)
        electronImg.imageLocation = this.electronImage
        await electronImg.load()
        this.elements.push(electronImg)

        const electronOrbit = {
            img: electronImg,
            startx: electronImg.canvasx,
            starty: electronImg.canvasy,
            radius: 30,
            h: this.w/2, 
            k: this.y/2,
            theta: 0
        }

        //this.electronImages.push(electronOrbit)

    }

    // update() {
    //     const step = 2*Math.PI/20;
    //     for (const e of this.electronImages) {
    //         e.theta += step
    //         e.img.x = e.h + e.radius*Math.cos(e.theta);
    //         e.img.y = e.k - e.radius*Math.sin(e.theta);
    //     }
    // }

}