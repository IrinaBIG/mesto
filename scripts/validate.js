const formSelector = document.querySelector('.form');
const inputSelector = document.querySelector('.form__input');
const buttonElement = formSelector.querySelector('.form__button');

function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((formSelector) => {
        formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        const fieldsetList = Array.from(formSelector.querySelectorAll('.form__popup'));
        fieldsetList.forEach((fieldset) => {
            setEventListeners(fieldset);
        });
    });
};

const isValid = (formSelector, inputSelector) => {
    if (!inputSelector.validity.valid) {
        showInputError(formSelector, inputSelector, inputSelector.validationMessage);
    } else {
        hideInputError(formSelector, inputSelector);
    };
};

const showInputError = (formSelector, inputSelector, errorMessage) => {
    const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
    inputSelector.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input_error-active');
};

const hideInputError = (formSelector, inputSelector) => {
    const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
    inputSelector.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input_error-active');
    errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputSelector) => {
        return !inputSelector.validity.valid;
    });
};

function setEventListeners(formSelector) {
    const inputList = Array.from(formSelector.querySelectorAll('.form__input'));
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', () => {
            isValid(formSelector, inputSelector);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

function toggleButtonState(inputList) {
    const buttons = document.querySelectorAll('.form__button')
    buttons.forEach((buttonElement) => {
        if (hasInvalidInput(inputList)) {
            buttonElement.classList.add('form__button_disabled');
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove('form__button_disabled');
            buttonElement.removeAttribute('disabled', true);
        }
    });
};

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input_error-active'
});