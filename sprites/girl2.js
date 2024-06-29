import Sprite from '../engine/sprite_drawable.js'

export default class extends Sprite {
    imageLocation = "bunny_sprites.png"
    spriteLocation = [361,154,21,32]
    
    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

}