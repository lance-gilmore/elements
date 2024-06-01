import Level from '../level.js'
import Bunny from '../player_charicters/bunny.js'
import Girl from '../player_charicters/girl.js'
import Background from '../layers/background.js'
import Platforms from '../layers/platforms.js'
import Foreground from '../layers/forground_static.js'

export default class extends Level {

    levelWidth = 800
    levelHeight = 600

    viewWidth = 800
    viewHeight = 600
    
    controlls
    #ctx

    playerCharicters = []
    layers = []

    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h)
        this.controlls = controlls
        this.#ctx = ctx
    }

    async load() {
        const b = new Background(this.#ctx,0,0,this.viewWidth,this.viewHeight,this.controlls)
        await b.load()
        this.layers.push(b)

        const p = new Platforms(this.#ctx,0,0,this.viewWidth,this.viewHeight,this.controlls)
        await p.load()
        this.layers.push(p)

        const h = new Foreground(this.#ctx,0,0,this.viewWidth,this.viewHeight,this.controlls)
        await h.load()
        this.layers.push(h)

        const s = new Bunny(this.#ctx, this.controlls, [p], this.viewWidth,this.viewHeight)
        await s.load()

        const g = new Girl(this.#ctx, this.controlls, [p], this.viewWidth,this.viewHeight)
        await g.load()

        this.playerCharicters.push(s)
        this.playerCharicters.push(g)

    }

    draw() {
        for (const layer of this.layers) {
            layer.move(-this.viewx, this.viewy)
            layer.draw()
        }

        for (const charicter of this.playerCharicters) {
            if (charicter.positionx - this.viewx < 0) {
                charicter.positionx = this.viewx
            }
            if (charicter.positionx - this.viewx > this.viewWidth - charicter.canvasw) {
                charicter.positionx = this.viewx + this.viewWidth - charicter.canvasw
            }
            charicter.move(charicter.positionx - this.viewx, charicter.positiony - this.viewy)
            charicter.draw()
        }

    }

    update() {
        let charictersCenter = 0
        for (const charicter of this.playerCharicters) {
            charictersCenter += charicter.positionx + (charicter.canvasw / 2)
        }
        const centerPoint = charictersCenter / 2
        this.viewx = centerPoint - (this.viewWidth / 2)

        for (const charicter of this.playerCharicters) {
            charicter.update()
        }
    }

}