import Sprite from '../engine/sprite_drawable.js'

export default class extends Sprite {
    imageLocation = "images/bunny_sprites.png"
    spriteLocation = [329,154,21,32]
    
    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

}