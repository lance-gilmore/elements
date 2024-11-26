import JsonLayer from '../engine/json_layer.js'

export default class extends JsonLayer {

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load() {
        const json = [
            {w:100,h:100,x:100,y:100,img:"images/inside_house.png"}
        ]
        super.load(json)
    }

    update() {
        
    }

}