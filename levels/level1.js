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

    async load() {
        const b = new Background(this.#ctx,0,0,this.levelWidth,this.levelHeight,this.controlls)
        await b.load()
        this.background = b

        const p = new Platforms(this.#ctx,0,0,this.levelWidth,this.levelHeight,this.controlls)
        await p.load()
        this.platforms = p

        const h = new Foreground(this.#ctx,0,0,this.levelWidth,this.levelHeight,this.controlls)
        await h.load()
        this.foreground = h

        const s = new Bunny(this.#ctx, this.controlls, [p], this.levelWidth,this.levelHeight)
        await s.load()
        this.bunny = s

        const g = new Girl(this.#ctx, this.controlls, [p], this.levelWidth,this.levelHeight)
        await g.load()
        this.girl = g


        this.viewx = 50
    }

    draw() {
        this.background.move(-this.viewx, this.viewy)
        this.background.draw()
        this.platforms.move(-this.viewx, this.viewy)
        this.platforms.draw()
        this.foreground.move(-this.viewx, this.viewy)
        this.foreground.draw()
        this.bunny.move(this.bunny.positionx - this.viewx, this.bunny.positiony - this.viewy)
        this.bunny.draw()
        this.girl.move(this.girl.positionx - this.viewx, this.girl.positiony - this.viewy)
        this.girl.draw()
    }

    update() {
        const centerPoint = (this.bunny.positionx + this.girl.positionx) / 2
        //this.viewx = (this.viewWidth / 2) + centerPoint

        this.bunny.update()
        this.girl.update()
    }

}