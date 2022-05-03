const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_visible'
};

function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, config);
    });
};

const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const button = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(config, inputList, button);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(config, formElement, inputElement);
            toggleButtonState(config, inputList, button);
        });
    });
};

const isValid = (config, formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(config, formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(config, formElement, inputElement);
    };
};

const showInputError = (config, formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
};

const hideInputError = (config, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

function toggleButtonState(config, inputList, button) {
    if (hasInvalidInput(inputList)) {
        button.classList.add(config.inactiveButtonClass);
        button.setAttribute('disabled', true);
    } else {
        button.classList.remove(config.inactiveButtonClass);
        button.removeAttribute('disabled', true);
    }
};

enableValidation(config);