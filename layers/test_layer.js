import JsonLayer from '../engine/json_layer.js'

export default class extends JsonLayer {

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load() {
        const json = 
        [{"w":100,"h":100,"x":-1346.612548828125,"y":69.2249984741211,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":100,"h":100,"x":-1347.5875244140625,"y":549.2374877929688,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":100,"h":100,"x":-665.6000366210938,"y":68.2249984741211,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":100,"h":100,"x":-667.6000366210938,"y":547.2374877929688,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":100,"h":100,"x":17.80000114440918,"y":69.2249984741211,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":100,"h":100,"x":15.800000190734863,"y":547.2374877929688,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":100,"h":100,"x":691.4000244140625,"y":67.23750305175781,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":100,"h":100,"x":690.4000244140625,"y":548.2374877929688,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"}]        
        
        
        
        super.load(json)
    }

    update() {
        
    }

}