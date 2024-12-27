import JsonLayer from '../engine/json_layer.js'
import LayerData from '../layers/layer_data.js'

export default class extends JsonLayer {

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load() {
        const ld = new LayerData()

        super.load(ld.exit)
    }

    update() {
        
    }

}