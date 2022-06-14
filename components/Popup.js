export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._CloseBtn = document.querySelector('.popup__close');
        console.log(popupSelector); // не пойму, почему здесь только один попап выводит
    };

   openPopup() {
        this._popupSelector.querySelector('.popup').classList.add('popup_is-active');       
        document.addEventListener('keydown', this._handleEscClose);
        document.addEventListener('mousedown', this._handleClosePopupOverlay);
    }
    
    closePopup() {
        this._popupSelector.classList.remove('popup_is-active');
        document.removeEventListener('keydown', this._handleEscClose);
        this._popup.removeEventListener('mousedown', this._handleClosePopupOverlay);
    }
    
    _handleClosePopupOverlay(evt) {
        if (evt.target === evt.currentTarget) {
            this._popupOpened = document.querySelector('.popup_is-active');
            this._closePopup(this._popupOpened);
        }
    }
    
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this._popupOpened = document.querySelector('.popup_is-active');
            this._closePopup(this._popupOpened);
        }
    }

    setEventListeners () {       
        this._CloseBtn.addEventListener('click', () => this.closePopup());       
    }
}