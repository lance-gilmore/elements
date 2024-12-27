import AnimatedSprite from './animated_sprite.js'

export default class extends AnimatedSprite {
    #controlls
    #collidables
    #borderx
    #bordery
    #downSpeed = 0
    keymap
    positionx
    positiony
    #bounce

    constructor(ctx, x, y, controlls, collidables, borderx, bordery, bounce) {
        super(ctx, x, y, 40, 70)
        this.#controlls = controlls
        this.#collidables = collidables
        this.#borderx = borderx
        this.#bordery = bordery
        this.positionx = x
        this.positiony = y
        this.#bounce = bounce
    }

    checkCollisions() {
        for (const collidable of this.#collidables) {
            if (collidable.checkCollision(this.positionx, this.positiony, this.positionx + this.canvasw, this.positiony + this.canvash)) {
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
        const bounceSpeed = -30

        this.#downSpeed = this.#downSpeed + gravity

        if (this.#downSpeed > terminalVelocity) {
            this.#downSpeed = terminalVelocity
        }

        this.positiony = this.positiony + this.#downSpeed
        if (this.checkCollisions() || this.positiony < 0 || this.positiony + this.canvash > this.#bordery) {
            this.positiony = this.positiony - this.#downSpeed
            this.#downSpeed = 0
        }
        
        let moving = false
        if (this.#controlls[this.keymap.up]) {
            if (this.#downSpeed == 0) {
                this.#downSpeed = jumpSpeed
            }
             
        }

        
        if (this.#bounce && this.#bounce.checkCollision(this.positionx, this.positiony, this.positionx + this.canvasw, this.positiony + this.canvash)) {
            this.#downSpeed = bounceSpeed
        }
        
        if (this.#controlls[this.keymap.left]) {
            this.positionx = this.positionx - movementSpeed
            moving = true
            if (this.checkCollisions() || this.canvasx < 0) {
                this.positionx = this.positionx + movementSpeed
            }
            this.setFlipx(true)
        }
        if (this.#controlls[this.keymap.right]) {
            this.positionx = this.positionx + movementSpeed
            moving = true
            if (this.checkCollisions()) {
                this.positionx = this.positionx - movementSpeed
            }
            this.setFlipx(false)
        }

        
        //this.move(this.canvasx, this.canvasy)
        if (moving) {
            super.update()
        } else {
            this.currentSprite = 0
        }
    }

}