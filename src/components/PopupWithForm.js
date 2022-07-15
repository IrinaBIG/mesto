import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitHandler, {normalCaption, activeCaption}) {
        super(popupSelector);
        this._handleSubmit = submitHandler;
        this._form = this._popup.querySelector('.form');
        // достаём все элементы полей
        this._inputList = this._form.querySelectorAll('.form__input');
        this._normalCaption = normalCaption;
        this._activeCaption = activeCaption;
        this._submitButton = this._form.querySelector('.form__button');
        this._handleFormSubmit = this._handleFormSubmit.bind(this);
        this.toggleButtonCaption = this.toggleButtonCaption.bind(this);
        this.closePopup = this.closePopup.bind(this);

    };

    _getInputValues() {
        // создаём пустой объект
        this._formValues = {};
        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        
        // возвращаем объект значений
        return this._formValues;
    }

    setInputValues(formValues) {
        
        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
            input.value = formValues[input.name];
        });
    }

    toggleButtonCaption(isSaving){
        this._submitButton.textContent = isSaving ? this._activeCaption : this._normalCaption;
    }

    closePopup() {
        super.closePopup();
        this._form.reset();
    }

    _handleFormSubmit = (evt) => {
        evt.preventDefault();
        this._handleSubmit(this._getInputValues(), this.toggleButtonCaption, this.closePopup);
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleFormSubmit);
    }
}