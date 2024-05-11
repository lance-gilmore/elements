import Sprite from '../sprite_drawable.js'

export default class extends Sprite {
    imageLocation = "bunny_sprites.png"
    spriteLocation = [0,445,482,241]
    
    constructor(ctx) {
        super(ctx, 0, 0, 800, 600)
    }

}