import JsonLayer from '../engine/json_layer.js'

export default class extends JsonLayer {

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load() {
        const json = 
        [{"w":350,"h":40,"x":-3128.587646484375,"y":339.0249938964844,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":350,"h":40,"x":-2776.60009765625,"y":337.0375061035156,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":350,"h":40,"x":-2426.60009765625,"y":337.0375061035156,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":350,"h":40,"x":-2074.800048828125,"y":333.0375061035156,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":350,"h":40,"x":-1725.800048828125,"y":331.0375061035156,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":350,"h":40,"x":-1376.5999755859375,"y":331.2375183105469,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":350,"h":40,"x":-1026.5999755859375,"y":334.2375183105469,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":790,"h":40,"x":-682,"y":334.01251220703125,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"},{"w":790,"h":40,"x":107.80000305175781,"y":344.01251220703125,"img":"https://cdnb.artstation.com/p/assets/images/images/010/604/427/large/nick-rossi-gam322-nrossi-m11-lava.jpg"}]        super.load(json)
    }

    update() {
        
    }

}