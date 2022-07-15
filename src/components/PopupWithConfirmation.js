import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, submitHandler, {normalCaption, activeCaption}) {
        super(popupSelector);
        this._handleSubmit = submitHandler;
        this._normalCaption = normalCaption;
        this._activeCaption = activeCaption;
        this._form = this._popup.querySelector('.form');
        this._submitButton = this._form.querySelector('.form__button');
        this._handleFormSubmit = this._handleFormSubmit.bind(this);
        this.toggleButtonCaption = this.toggleButtonCaption.bind(this);
        this.closePopup = this.closePopup.bind(this);
    };

    toggleButtonCaption(isSaving){
        this._submitButton.textContent = isSaving ? this._activeCaption : this._normalCaption;
    }

    openPopup(cardId, removeCardCallback) {
        this._cardId = cardId;
        this._removeCardCallback = removeCardCallback;
        super.openPopup();
    }

    closePopup() {
        super.closePopup();
        // this._form.reset();
    }

    _handleFormSubmit = (evt) => {
        evt.preventDefault();
        this._handleSubmit(this._cardId, this._removeCardCallback, this.toggleButtonCaption, this.closePopup);
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleFormSubmit);
    }
}