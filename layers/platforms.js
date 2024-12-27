import JsonLayer from '../engine/json_layer.js'
import LayerData from '../layers/layer_data.js'

export default class extends JsonLayer {

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load() {
        const ld = new LayerData()

        super.load(ld.platforms)
    }

    update() {
        
    }

}

// import Drawable from '../engine/layer.js'
// import Platform from '../sprites/platform.js'

// export default class extends Drawable {

//     constructor(ctx, x, y, w, h) {
//         super(ctx, x, y, w, h)
//     }

//     async load() {
//         const platformLocations =[
//             [100,420],
//             [250,420],
//             [500,420],
//             [-50,300],
//             [-400,0],
//             [-400,150],
//             [-400,300],
//             [-400,450]
//         ]

//         for (const location of platformLocations) {
//             const p = new Platform(this.ctx,location[0],location[1])
//             await p.load()
//             this.elements.push(p)
//         }

//     }

//     update() {
        
//     }

// }