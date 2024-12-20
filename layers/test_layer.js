import JsonLayer from '../engine/json_layer.js'

export default class extends JsonLayer {

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load() {
        const json = 
        [{"w":700,"h":40,"x":641.3999633789062,"y":570.0000267028809,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":700,"h":40,"x":1341.399990081787,"y":568.0000267028809,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"}]        



        super.load(json)
    }

    update() {
        
    }

}