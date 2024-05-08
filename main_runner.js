

export default class {
    #ctx

    constructor(canvas) {
        const ctx = canvas.getContext("2d");
        this.#ctx = ctx
    }

    loadImages() {
        const img = new Image(); // Create new img element
        img.addEventListener("load", () => {
            #ctx.drawImage(img, 10, 10, 100, 100);
        });
        img.src = "test_img.png";
    }

}