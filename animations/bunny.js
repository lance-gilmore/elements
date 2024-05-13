import AnimatedSprite from '../animated_sprite.js'
import Bunny1 from '../sprites/bunny1.js'
import Bunny2 from '../sprites/bunny2.js'

export default class extends AnimatedSprite {
    #controlls
    #collidables
    #borderx
    #bordery
    #downSpeed = 0

    constructor(ctx, controlls, collidables, borderx, bordery) {
        super(ctx, 100, 350, 40, 70)
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
        const b1 = new Bunny1(this.ctx,this.canvasx,this.canvasy,this.canvasw,this.canvash)
        await b1.load()
        this.images.push(b1)
        const b2 = new Bunny2(this.ctx,this.canvasx,this.canvasy,this.canvasw,this.canvash)
        await b2.load()
        this.images.push(b2)
    }

    update() {
        const movementSpeed = 8
        const gravity = 2;
        const jumpSpeed = -20;
        const terminalVelocity = 20

        this.#downSpeed = this.#downSpeed + gravity

        if (this.#downSpeed > terminalVelocity) {
            this.#downSpeed = terminalVelocity
        }

        this.canvasy = this.canvasy + this.#downSpeed
        if (this.checkCollisions() || this.canvasy < 0) {
            this.canvasy = this.canvasy - this.#downSpeed
            this.#downSpeed = 0
        }
        
        let moving = false
        if (this.#controlls.upPressed) {
            if (this.#downSpeed == 0) {
                this.#downSpeed = jumpSpeed
            }
             
        }
        if (this.#controlls.downPressed) {
            this.canvasy = this.canvasy + movementSpeed
            moving = true
            if (this.checkCollisions() || this.canvasy + this.canvash > this.#bordery) {
                this.canvasy = this.canvasy - movementSpeed
            }
        }
        if (this.#controlls.leftPressed) {
            this.canvasx = this.canvasx - movementSpeed
            moving = true
            if (this.checkCollisions() || this.canvasx < 0) {
                this.canvasx = this.canvasx + movementSpeed
            }
        }
        if (this.#controlls.rightPressed) {
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