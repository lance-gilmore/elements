import Sprite from '../sprite_drawable.js'

export default class extends Sprite {
    imageLocation = "bunny_sprites.png"
    spriteLocation = [646,810,26,22]
    
    constructor(ctx, x, y, w, h) {
        super(ctx, 300, 380, 52, 45)
    }

}