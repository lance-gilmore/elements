import Drawable from './drawable.js'

export default class extends Drawable {

    viewx = 0
    viewy = 0

    playerCharicters = []
    layers = []
    foregroundLayers = []

    viewWidth
    viewHeight

    exitLevelListeners = []
    storeListeners = []

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
        this.viewWidth = w
        this.viewHeight = h
    }

    moveView(x) {
        this.viewx += x
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

        for (const layer of this.foregroundLayers) {
            layer.move(-this.viewx, this.viewy)
            layer.draw()
        }

    }

    update() {
        
        let charictersCenter = 0
        const numCharicters = this.playerCharicters.length
        
        for (const charicter of this.playerCharicters) {
            charictersCenter += charicter.positionx + (charicter.canvasw / 2)
        }
        const centerPoint = charictersCenter / numCharicters
        this.viewx = centerPoint - (this.viewWidth / 2)

        for (const charicter of this.playerCharicters) {
            charicter.update()
        }

        for (const layer of this.layers) {
            layer.update()
        }

        for (const layer of this.foregroundLayers) {
            layer.update()
        }
    }

    addExitLevelListener(listener) {
        this.exitLevelListeners.push(listener)
    }

    triggerExitLevel(info) {
        for (const listener of this.exitLevelListeners) {
            listener(info)
        }
    }

    addStoreListener(listener) {
        this.storeListeners.push(listener)
    }

    triggerStore(info) {
        for (const listener of this.storeListeners) {
            listener(info)
        }
    }

}