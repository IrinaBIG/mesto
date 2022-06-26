export default class Section {
    constructor({ renderer }, containerSelector) {
         this._renderer = renderer;    
         this._container = document.querySelector(containerSelector);
    };

    renderItems(items) {
        
        items.forEach((item) => {
            this._renderer(item); // вызываем renderer, передав item
        });
    }

    addItem(element) {
        this._container.prepend(element);
        // console.log(element);
    };

}

// export default class Section {
//     constructor({ data, renderer }, containerSelector) {
//         this._items = data;
//         this._renderer = renderer;    
//          this._container = document.querySelector(containerSelector);
//     };

//     renderItems(){
        
        
//         this._items.forEach((item) => {
//             this._renderer(item); // вызываем renderer, передав item
//         });
//     }

//     addItem(element) {
//         this._container.prepend(element);
//         console.log(element);
//     };
