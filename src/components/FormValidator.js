export class FormValidator {

    constructor(config, form) {
        this._config = config;
        this._form = form;

    }

    enableValidation() {
        // this._form.addEventListener('submit', (evt) => {
        //     evt.preventDefault();
        // });
        this._setEventListeners();
    };

    _setEventListeners = () => {
        this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        this._button = this._form.querySelector(this._config.submitButtonSelector);
        this.toggleButtonState(this._inputList, this._button);
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this.toggleButtonState(this._inputList, this._button);
            });
        });
    };

    _isValid = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        };
    };

    _showInputError = (inputElement, errorMessage) => {
        this._errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._config.inputErrorClass);
        this._errorElement.textContent = errorMessage;
        this._errorElement.classList.add(this._config.errorClass);
    };

    _hideInputError = (inputElement) => {
        this._errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._config.inputErrorClass);
        this._errorElement.classList.remove(this._config.errorClass);
        this._errorElement.textContent = '';
    };

    _hasInvalidInput = (_inputList) => {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    resetValidation() {
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
    }

    toggleButtonState(_config, inputList, _button) {
        if (this._hasInvalidInput(inputList)) {
            this._button.classList.add(this._config.inactiveButtonClass);
            this._button.setAttribute('disabled', true);
        } else {
            this._button.classList.remove(this._config.inactiveButtonClass);
            this._button.removeAttribute('disabled', true);
        }
    };
}