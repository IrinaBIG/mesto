import {Popup} from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = document.querySelector('.popup__image-card');
        this._popupTitle = document.querySelector('.popup__title_place_image');
        // this._handleCardClick = handleCardClick;
        // console.log(popupSelector);
    };

    openPopup(data) {
        this._popupImage.src = data.link;
        this._popupImage.alt = data.name;
        this._popupTitle.textContent = data.name;
        console.log(data.link);
        super.openPopup();        
    }
}