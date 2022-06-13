import {Popup} from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        // console.log(popupSelector);
    };

    _getInputValues() {
        // достаём все элементы полей
        this._inputList = this._form.querySelectorAll('.form__input');
        // создаём пустой объект
        this._formValues = {};
        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        // возвращаем объект значений
        return this._formValues;
    } 
  
    _setEventListeners() {
        // при сабмите формы
        // super.setEventListeners();
        this._popupElement.addEventListener('submit', () => {
            // отменим стандартное поведение
            // evt.preventDefault();
            // this._submitHandler();
            this._handleFormSubmit(this._getInputValues());

        })
    } 

    close(){
        this._popupElement.reset();
        super.close();
    }

}