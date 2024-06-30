import Sprite from '../engine/sprite_drawable.js'

export default class extends Sprite {
    imageLocation = "images/inside_house.png"
    spriteLocation = [0,0,354,490]
    
    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

}