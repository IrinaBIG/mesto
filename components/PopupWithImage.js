import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = document.querySelector('.popup__image-card');
        this._popupTitle = document.querySelector('.popup__title_place_image');
    };

    openPopup(name, link) {
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupTitle.textContent = name;
        // console.log(data.link);
        // handleCardClick();
        super.openPopup();        
    }
}