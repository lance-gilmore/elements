import Level from '../level.js'
import Bunny from '../player_charicters/bunny.js'
import Girl from '../player_charicters/girl.js'
import Background from '../layers/background.js'
import Platforms from '../layers/platforms.js'
import Foreground from '../layers/forground_static.js'

export default class extends Level {

    levelWidth = 10000
    levelHeight = 600
    viewx = 0
    controlls
    #ctx

    platforms
    foreground
    background
    bunny
    girl

    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h)
        this.controlls = controlls
        this.#ctx = ctx
    }

    load() {
        const b = new Background(this.#ctx,0,0,this.levelWidth,this.levelHeight,this.controlls)
        await b.load()
        this.background = b

        const p = new Platforms(this.#ctx,0,0,this.levelWidth,this.levelHeigh,this.controlls)
        await p.load()
        this.platforms = p

        const h = new Foreground(this.#ctx,0,0,this.levelWidth,this.levelHeigh,this.controlls)
        await h.load()
        this.foreground = h

        const s = new Bunny(this.#ctx, this.controlls, [p], this.levelWidth,this.levelHeigh)
        await s.load()
        this.bunny = s

        const g = new Girl(this.#ctx, this.controlls, [p], this.levelWidth,this.levelHeigh)
        await g.load()
        this.girl = g
    }

    draw() {
        this.background.move(this.viewx,0)
        this.background.draw()
        this.platforms.move(this.viewx,0)
        this.platforms.draw()
        this.foreground.move(this.viewx,0)
        this.foreground.draw()
        this.bunny.move(this.viewx,0)
        this.bunny.draw()
        this.girl.move(this.viewx,0)
        this.girl.draw()
    }

    update() {
        this.bunny.update()
        this.girl.update()
    }


}