import JsonLayer from '../engine/json_layer.js'
import LayerData from '../layers/level1_layer_data.js'

export default class extends JsonLayer {

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load() {
        const ld = new LayerData()

        super.load(ld.foreground)
    }

    update() {
        
    }

}

// import Drawable from '../engine/layer.js'
// import House from '../sprites/house.js'
// import Mushroom from '../sprites/mushroom.js'

// export default class extends Drawable {

//     constructor(ctx, x, y, w, h) {
//         super(ctx, x, y, w, h)
//     }

//     async load() {
//         const h = new House(this.ctx)
//         await h.load()
//         this.elements.push(h)

//         const m = new Mushroom(this.ctx)
//         await m.load()
//         this.elements.push(m)
//     }

//     update() {
        
//     }

// }