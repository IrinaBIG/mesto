import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        // this._form = this._popup.querySelector('.form');
    };

    // setEventListeners() {
    //     super.setEventListeners();
    //     // this._form.querySelector('.button__remove').addEventListener('click', () => {
    //     //     this.openPopup();
    //     // });
    // }
}