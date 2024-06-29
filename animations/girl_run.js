import AnimatedSprite from '../engine/animated_sprite.js'
import Girl1 from '../sprites/girl1.js'
import Girl2 from '../sprites/girl2.js'

export default class extends AnimatedSprite {
    #controlls
    #collidables
    #borderx
    #bordery

    constructor(ctx, controlls, collidables, borderx, bordery) {
        super(ctx, 200, 350, 40, 70)
        this.#controlls = controlls
        this.#collidables = collidables
        this.#borderx = borderx
        this.#bordery = bordery
    }

    checkCollisions() {
        for (const collidable of this.#collidables) {
            if (collidable.checkCollision(this.canvasx, this.canvasy, this.canvasx + this.canvasw, this.canvasy + this.canvash)) {
                return true
            }
        }
        return false
    }

    async load() {
        const b1 = new Girl1(this.ctx,this.canvasx,this.canvasy,this.canvasw,this.canvash)
        await b1.load()
        this.images.push(b1)
        const b2 = new Girl2(this.ctx,this.canvasx,this.canvasy,this.canvasw,this.canvash)
        await b2.load()
        this.images.push(b2)
    }

    update() {
        const movementSpeed = 8
        
        let moving = false
        if (this.#controlls.wPressed) {
            this.canvasy = this.canvasy - movementSpeed
            moving = true
            if (this.checkCollisions() || this.canvasy < 0) {
                this.canvasy = this.canvasy + movementSpeed
            }
        }
        if (this.#controlls.sPressed) {
            this.canvasy = this.canvasy + movementSpeed
            moving = true
            if (this.checkCollisions() || this.canvasy + this.canvash > this.#bordery) {
                this.canvasy = this.canvasy - movementSpeed
            }
        }
        if (this.#controlls.aPressed) {
            this.canvasx = this.canvasx - movementSpeed
            moving = true
            if (this.checkCollisions() || this.canvasx < 0) {
                this.canvasx = this.canvasx + movementSpeed
            }
        }
        if (this.#controlls.dPressed) {
            this.canvasx = this.canvasx + movementSpeed
            moving = true
            if (this.checkCollisions() || this.canvasx + this.canvasw > this.#borderx) {
                this.canvasx = this.canvasx - movementSpeed
            }
        }

        if (moving) {
            this.move(this.canvasx, this.canvasy)
            super.update()
        } else {
            this.currentSprite = 0
        }
    }

}