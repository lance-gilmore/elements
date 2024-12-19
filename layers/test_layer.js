import JsonLayer from '../engine/json_layer.js'

export default class extends JsonLayer {

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load() {
        const json = [{"w":250,"h":80,"x":-3147.400146484375,"y":370.2250061035156,"img":"https://www.kindpng.com/picc/m/127-1274331_grass-platform-grass-platform-png-transparent-png.png"},{"w":250,"h":80,"x":-2917.400146484375,"y":361.2250061035156,"img":"https://www.kindpng.com/picc/m/127-1274331_grass-platform-grass-platform-png-transparent-png.png"},{"w":250,"h":80,"x":-2658.400146484375,"y":207.22500610351562,"img":"https://www.kindpng.com/picc/m/127-1274331_grass-platform-grass-platform-png-transparent-png.png"},{"w":250,"h":80,"x":-2417.60009765625,"y":515.2374877929688,"img":"https://www.kindpng.com/picc/m/127-1274331_grass-platform-grass-platform-png-transparent-png.png"},{"w":250,"h":80,"x":-2112.60009765625,"y":529.2374877929688,"img":"https://www.kindpng.com/picc/m/127-1274331_grass-platform-grass-platform-png-transparent-png.png"},{"w":250,"h":80,"x":-2154.60009765625,"y":218.22500610351562,"img":"https://www.kindpng.com/picc/m/127-1274331_grass-platform-grass-platform-png-transparent-png.png"},{"w":250,"h":80,"x":-1721.2000732421875,"y":538.2374877929688,"img":"https://www.kindpng.com/picc/m/127-1274331_grass-platform-grass-platform-png-transparent-png.png"},{"w":250,"h":80,"x":-1742.2000732421875,"y":197.22500610351562,"img":"https://www.kindpng.com/picc/m/127-1274331_grass-platform-grass-platform-png-transparent-png.png"},{"w":250,"h":80,"x":-1533.2000732421875,"y":378.2250061035156,"img":"https://www.kindpng.com/picc/m/127-1274331_grass-platform-grass-platform-png-transparent-png.png"},{"w":250,"h":80,"x":-1285.800048828125,"y":471.2250061035156,"img":"https://www.kindpng.com/picc/m/127-1274331_grass-platform-grass-platform-png-transparent-png.png"},{"w":250,"h":80,"x":-990.7999877929688,"y":277.2250061035156,"img":"https://www.kindpng.com/picc/m/127-1274331_grass-platform-grass-platform-png-transparent-png.png"},{"w":250,"h":80,"x":-583.7999877929688,"y":489.2375183105469,"img":"https://www.kindpng.com/picc/m/127-1274331_grass-platform-grass-platform-png-transparent-png.png"},{"w":250,"h":80,"x":-567.7999877929688,"y":183.22500610351562,"img":"https://www.kindpng.com/picc/m/127-1274331_grass-platform-grass-platform-png-transparent-png.png"},{"w":250,"h":80,"x":-246.8000030517578,"y":346.2250061035156,"img":"https://www.kindpng.com/picc/m/127-1274331_grass-platform-grass-platform-png-transparent-png.png"},{"w":250,"h":80,"x":74.20000457763672,"y":480.2375183105469,"img":"https://www.kindpng.com/picc/m/127-1274331_grass-platform-grass-platform-png-transparent-png.png"},{"w":250,"h":80,"x":353.20001220703125,"y":216.22500610351562,"img":"https://www.kindpng.com/picc/m/127-1274331_grass-platform-grass-platform-png-transparent-png.png"},{"w":250,"h":80,"x":466.3999938964844,"y":472.2250061035156,"img":"https://www.kindpng.com/picc/m/127-1274331_grass-platform-grass-platform-png-transparent-png.png"}]
        super.load(json)
    }

    update() {
        
    }

}