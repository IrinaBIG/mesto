export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._CloseBtn = document.querySelector(this._popupSelector).querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleClosePopupOverlay = this._handleClosePopupOverlay.bind(this);
    };

    openPopup() {
        document.querySelector(this._popupSelector).classList.add('popup_is-active');
        document.addEventListener('keydown', this._handleEscClose);
        document.querySelector(this._popupSelector).addEventListener('mousedown', this._handleClosePopupOverlay);
    }

    closePopup() {
        document.querySelector(this._popupSelector).classList.remove('popup_is-active');
        document.removeEventListener('keydown', this._handleEscClose);
        document.querySelector(this._popupSelector).removeEventListener('mousedown', this._handleClosePopupOverlay);
    }

    _handleClosePopupOverlay(evt) {
        if (evt.target === evt.currentTarget) {
            this.closePopup();
        }
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    setEventListeners() {
        this._CloseBtn.addEventListener('click', () => {
            this.closePopup();
        });
    }
}