import Drawable from '../layer.js'
import Platform from '../sprites/platform.js'

export default class extends Drawable {

    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h, controlls)
    }

    async load() {
        const p = new Platform(this.ctx,100,420)
        await p.load()
        this.elements.push(p)

        const p2 = new Platform(this.ctx,250,420)
        await p2.load()
        this.elements.push(p2)

        const p3 = new Platform(this.ctx,500,420)
        await p3.load()
        this.elements.push(p3)
        
        const p4 = new Platform(this.ctx,-50,300)
        await p4.load()
        this.elements.push(p4)

        const p5 = new Platform(this.ctx,-400,0)
        await p5.load()
        this.elements.push(p5)

        const p6 = new Platform(this.ctx,-400,150)
        await p6.load()
        this.elements.push(p6)

        const p7 = new Platform(this.ctx,-400,300)
        await p7.load()
        this.elements.push(p7)

        const p8 = new Platform(this.ctx,-400,450)
        await p8.load()
        this.elements.push(p8)

        
    }

    update() {
        
    }

}