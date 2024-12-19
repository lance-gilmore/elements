import JsonLayer from '../engine/json_layer.js'

export default class extends JsonLayer {

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load() {
        const json = 
        [{"w":700,"h":40,"x":3209.39990234375,"y":569.9999847412109,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":700,"h":40,"x":3909.39990234375,"y":567.9999847412109,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":700,"h":40,"x":4608.5999755859375,"y":567.9999847412109,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":700,"h":40,"x":5310.4000244140625,"y":568.9999847412109,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":700,"h":40,"x":6010.600036621094,"y":568.9999847412109,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":700,"h":40,"x":6707.200042724609,"y":567.9999847412109,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"}]        
        


        
        super.load(json)
    }

    update() {
        
    }

}