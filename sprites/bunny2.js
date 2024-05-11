import Sprite from '../sprite_drawable.js'

export default class extends Sprite {
    imageLocation = "bunny_sprites.png"
    spriteLocation = [717,641,17,29]
    
    constructor(ctx) {
        super(ctx, 150, 230, 120, 190)
    }

}