export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        // this._popup = document.querySelector(this._popupSelector).querySelector('.popup')
        this._closeBtn = this._popup.querySelector('.popup__close');
        // this._closeBtn = document.querySelector(this._popupSelector).querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleClosePopupOverlay = this._handleClosePopupOverlay.bind(this);
    };

    openPopup() {
        this._popup.classList.add('popup_is-active');
        // document.querySelector(this._popupSelector).classList.add('popup_is-active');

        document.addEventListener('keydown', this._handleEscClose);
    }

    closePopup() {
        this._popup.classList.remove('popup_is-active');
        // document.querySelector(this._popupSelector).classList.remove('popup_is-active');
       
        document.removeEventListener('keydown', this._handleEscClose);
        // document.querySelector(this._popupSelector).removeEventListener('mousedown', this._handleClosePopupOverlay);
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
        
        this._popup.addEventListener('mousedown', this._handleClosePopupOverlay);
        // document.querySelector(this._popupSelector).addEventListener('mousedown', this._handleClosePopupOverlay);

        this._closeBtn.addEventListener('click', () => {
            this.closePopup();
        });
    }
}