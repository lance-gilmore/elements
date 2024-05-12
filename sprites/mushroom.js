import Sprite from '../sprite_drawable.js'

export default class extends Sprite {
    imageLocation = "bunny_sprites.png"
    spriteLocation = [645,809,27,23]
    
    constructor(ctx, x, y, w, h) {
        super(ctx, 300, 380, 52, 45)
    }

}