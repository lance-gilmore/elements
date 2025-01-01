import JsonLayer from '../engine/json_layer.js'
import LayerData from '../layers/layer_data.js'
import AnimatedSprite from '../engine/animated_sprite.js'
import ImageDrawable from '../engine/image_drawable.js'


export default class extends JsonLayer {

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load() {
        const ld = new LayerData()
        super.load(ld.coins)

        let as = new AnimatedSprite(this.ctx,100,100,40,40)

        const layerImage = new ImageDrawable(this.ctx,100,100,40,40)
        layerImage.imageLocation = "https://lance-gilmore.github.io/elements/images/coin.png"
        await layerImage.load()
        as.images.push(layerImage)

        const layerImage2 = new ImageDrawable(this.ctx,100,100,40,40)
        layerImage2.imageLocation = "https://lance-gilmore.github.io/elements/images/coin2.png"
        await layerImage2.load()
        as.images.push(layerImage2)

        const layerImage3 = new ImageDrawable(this.ctx,100,100,40,40)
        layerImage3.imageLocation = "https://lance-gilmore.github.io/elements/images/coin3.png"
        await layerImage3.load()
        as.images.push(layerImage3)



        this.elements.push(as)
    }

    update() {
        
    }

    checkCollision(x,y,r,b) {
        for (const element of this.elements) {

            const ex = element.startx
            const ey = element.starty
            const er = element.startx + element.canvasw
            const eb = element.starty + element.canvash
            
            if (x < er && r > ex && y < eb && b > ey) {
                const index = this.elements.indexOf(element);
                if (index > -1) {
                    this.elements.splice(index, 1)
                }
                return true
            }

        }
        return false
    }

}