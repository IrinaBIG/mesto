export default class Section {
    constructor({ renderer }, containerSelector) {
         this._renderer = renderer;    
         this._container = document.querySelector(containerSelector);
    };

    renderItems(items) {
        items.reverse().forEach((item) => {   
            this.addItem(item); // вызываем renderer, передав item
        });
    }

    addItem(card) {
        this._container.prepend(this._renderer(card));
        // console.log(element);
    };
}