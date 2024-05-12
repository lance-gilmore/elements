import Sprite from '../sprite_drawable.js'

export default class extends Sprite {
    imageLocation = "bunny_sprites.png"
    spriteLocation = [647,811,25,21]
    
    constructor(ctx, x, y, w, h) {
        super(ctx, 150, 400, 25, 21)
    }

}