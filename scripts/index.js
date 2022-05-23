import { Card } from './Card.js';
import { cards } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { openPopup } from './utilits.js';
import { closePopup } from './utilits.js';

const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_visible'
};

const linkEditProfile = document.querySelector('.profile__button-edit');
const popupProfile = document.querySelector('.popup_place_profile');
const popupCloseBtn = popupProfile.querySelector('.popup__close');
const formElementProfile = document.querySelector('.form');
const nameProfileInput = document.querySelector('.profile__name');
const addNameProfileForm = document.querySelector('.form__input_type_name');
const activityProfileInput = document.querySelector('.profile__activity');
const addActivityProfile = document.querySelector('.form__input_type_activity');
const listContainer = document.querySelector('.cards');
const buttonAddProfile = document.querySelector('.profile__button-add');
const popupAddCard = document.querySelector('.popup_place_add-card');
const btnClosePopupCard = popupAddCard.querySelector('.popup__close');
const formAddCard = popupAddCard.querySelector('.form');
const popupImage = document.querySelector('.popup_place_image-card');
const btnClosePopupImage = popupImage.querySelector('.popup__close');
const addCardPlace = document.querySelector('.form__input_type_place');
const addCardLink = document.querySelector('.form__input_type_link-place');
const profileButton = popupProfile.querySelector(config.submitButtonSelector);
const addButton = popupAddCard.querySelector(config.submitButtonSelector);
const inputsProfileForm = Array.from(formElementProfile.querySelectorAll(config.inputSelector));
const inputsAddCardForm = Array.from(formAddCard.querySelectorAll(config.inputSelector));

const cardFormValidator = new FormValidator(config, formElementProfile);
cardFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, formAddCard);
editFormValidator.enableValidation();

function handleSubmitFormProfile(ev) {
    ev.preventDefault();
    nameProfileInput.textContent = addNameProfileForm.value;
    activityProfileInput.textContent = addActivityProfile.value;
    closePopup(popupProfile);
}

const template = document.querySelector('.template').content;

function handleCreateCardElement(item, template) {
    const card = new Card(item.name, item.link, template);
    const cardElement = card.generateCard();
    return cardElement;
}

cards.forEach((item) => {
    document.querySelector('.cards').append(handleCreateCardElement(item, template));
});

function handleAddCard(ev) {
    ev.preventDefault();
    listContainer.prepend(handleCreateCardElement({ name: addCardPlace.value, link: addCardLink.value }, template));
    closePopup(popupAddCard);
}

linkEditProfile.addEventListener('click', () => {
    addNameProfileForm.value = nameProfileInput.textContent;
    addActivityProfile.value = activityProfileInput.textContent;
    cardFormValidator.toggleButtonState(config, inputsProfileForm, profileButton);
    openPopup(popupProfile);
});

popupCloseBtn.addEventListener('click', () => {
    closePopup(popupProfile);
});

formElementProfile.addEventListener('submit', handleSubmitFormProfile);

formAddCard.addEventListener('submit', handleAddCard);

buttonAddProfile.addEventListener('click', () => {
    formAddCard.reset();
    cardFormValidator.toggleButtonState(config, inputsAddCardForm, addButton);
    openPopup(popupAddCard);
});

btnClosePopupCard.addEventListener('click', () => {
    closePopup(popupAddCard);
});

btnClosePopupImage.addEventListener('click', () => {
    closePopup(popupImage);
});