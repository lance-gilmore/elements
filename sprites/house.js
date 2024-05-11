import Sprite from '../sprite_drawable.js'

export default class extends Sprite {
    imageLocation = "bunny_sprites.png"
    spriteLocation = [725,186,70,90]
    
    constructor(ctx) {
        super(ctx, 150, 230, 120, 190)
    }

}