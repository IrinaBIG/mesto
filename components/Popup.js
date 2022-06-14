export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._CloseBtn = document.querySelector(this._popupSelector).querySelector('.popup__close');
        // console.log(this._CloseBtn);
        // console.log(this._popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleClosePopupOverlay = this._handleClosePopupOverlay.bind(this);
    };

    openPopup() {
        document.querySelector(this._popupSelector).classList.add('popup_is-active');
        // console.log(this._popupSelector);  
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
            // this._popupOpened = document.querySelector(this._popupSelector).querySelector('.popup_is-active');
            // this.closePopup(this._popupOpened);
            this.closePopup();
        }
    }
    
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            // this._popupOpened = document.querySelector(this._popupSelector).querySelector('.popup_is-active');
            // console.log(this._popupOpened);
            // this.closePopup(this._popupOpened);
            this.closePopup();
        }
    }

    setEventListeners () {       
        this._CloseBtn.addEventListener('click', () => {
            this.closePopup()
        });       
    }
}