import Sprite from '../engine/sprite_drawable.js'

export default class extends Sprite {
    imageLocation = "bunny_sprites.png"
    spriteLocation = [483,800,48,47]
    
    constructor(ctx, x, y) {
        super(ctx, x, y, 150, 150)
    }

}