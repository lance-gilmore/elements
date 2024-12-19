import JsonLayer from '../engine/json_layer.js'

export default class extends JsonLayer {

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load() {
        const json = 
        [{"w":100,"h":100,"x":-0.3874998092651367,"y":0.3874969482421875,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":100,"h":100,"x":678.9999876022339,"y":3.375,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":100,"h":100,"x":3.6000003814697266,"y":479.39998626708984,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":100,"h":100,"x":681.6000242233276,"y":482.39998626708984,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"}]        
        
        

        
        super.load(json)
    }

    update() {
        
    }

}