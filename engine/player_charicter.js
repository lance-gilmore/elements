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
    #levelExit
    #exitLevelListeners = []
    #damages = []
    #damageListeners = []
    #coins
    #coinListeners = []

    constructor(ctx, x, y, controlls, collidables, borderx, bordery, bounce, levelExit, damages, coins) {
        super(ctx, x, y, 40, 70)
        this.#controlls = controlls
        this.#collidables = collidables
        this.#borderx = borderx
        this.#bordery = bordery
        this.positionx = x
        this.positiony = y
        this.#bounce = bounce
        this.#levelExit = levelExit
        this.#damages = damages
        this.#coins = coins
    }

    checkCollisions() {
        for (const collidable of this.#collidables) {
            if (collidable.checkCollision(this.positionx, this.positiony, this.positionx + this.canvasw, this.positiony + this.canvash)) {
                return true
            }
        }
        return false
    }

    checkDamages() {
        let damage = false
        for (const collidable of this.#damages) {
            if (collidable.checkCollision(this.positionx, this.positiony, this.positionx + this.canvasw, this.positiony + this.canvash)) {
                damage = true
            }
        }
        if (damage) {
            this.triggerDamageListeners()
            return true
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
        const damageSpeed = -15

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

        if (this.#coins && this.#coins.checkCollision(this.positionx, this.positiony, this.positionx + this.canvasw, this.positiony + this.canvash)) {
            this.triggerCoinListeners()
        }

        
        if (this.#bounce && this.#bounce.checkCollision(this.positionx, this.positiony, this.positionx + this.canvasw, this.positiony + this.canvash)) {
            this.#downSpeed = bounceSpeed
        }

        if (this.checkDamages()) {
            this.#downSpeed = damageSpeed
        }

        if (this.#levelExit && this.#levelExit.checkCollision(this.positionx, this.positiony, this.positionx + this.canvasw, this.positiony + this.canvash)) {
            this.triggerExitLevelListeners()
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

    addExitLevelListener(listener) {
        this.#exitLevelListeners.push(listener)
    }

    triggerExitLevelListeners(info) {
        for (const listener of this.#exitLevelListeners) {
            listener(info)
        }
    }

    addDamageListener(listener) {
        this.#damageListeners.push(listener)
    }

    triggerDamageListeners(info) {
        for (const listener of this.#damageListeners) {
            listener(info)
        }
    }

    addCoinListener(listener) {
        this.#coinListeners.push(listener)
    }

    triggerCoinListeners(info) {
        for (const listener of this.#coinListeners) {
            listener(info)
        }
    }

}