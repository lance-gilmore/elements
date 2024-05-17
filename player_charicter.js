import AnimatedSprite from './animated_sprite.js'

export default class extends AnimatedSprite {
    #controlls
    #collidables
    #borderx
    #bordery
    #downSpeed = 0
    keymap

    constructor(ctx, x, y, controlls, collidables, borderx, bordery) {
        super(ctx, x, y, 40, 70)
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
        if (this.checkCollisions() || this.canvasy < 0 || this.canvasy + this.canvash > this.#bordery) {
            this.canvasy = this.canvasy - this.#downSpeed
            this.#downSpeed = 0
        }
        
        let moving = false
        if (this.#controlls[this.keymap.up]) {
            if (this.#downSpeed == 0) {
                this.#downSpeed = jumpSpeed
            }
             
        }
        
        if (this.#controlls[this.keymap.left]) {
            this.canvasx = this.canvasx - movementSpeed
            moving = true
            if (this.checkCollisions() || this.canvasx < 0) {
                this.canvasx = this.canvasx + movementSpeed
            }
            this.setFlipx(true)
        }
        if (this.#controlls[this.keymap.right]) {
            this.canvasx = this.canvasx + movementSpeed
            moving = true
            if (this.checkCollisions() || this.canvasx + this.canvasw > this.#borderx) {
                this.canvasx = this.canvasx - movementSpeed
            }
            this.setFlipx(false)
        }

        
        this.move(this.canvasx, this.canvasy)
        if (moving) {
            super.update()
        } else {
            this.currentSprite = 0
        }
    }



}