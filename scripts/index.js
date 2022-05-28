import { Card } from './Card.js';
import { cards } from './Utils/constants.js';
import { FormValidator } from './FormValidator.js';
import { openPopup, closePopup } from './Utils/utils.js';
import {
    config,
    linkEditProfile,
    popupProfile,
    popupCloseBtn,
    formElementProfile,
    nameProfileInput,
    addNameProfileForm,
    activityProfileInput,
    addActivityProfile,
    listContainer,
    popupAddCard,
    buttonAddProfile,
    btnClosePopupCard,
    formAddCard,
    popupImage,
    btnClosePopupImage,
    addCardPlace,
    addCardLink,
    profileButton,
    addButton,
    inputsProfileForm,
    inputsAddCardForm,
    template
} from '././Utils/constants.js';

const cardFormValidator = new FormValidator(config, formAddCard);
cardFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, formElementProfile);
editFormValidator.enableValidation();

function handleSubmitFormProfile(ev) {
    ev.preventDefault();
    nameProfileInput.textContent = addNameProfileForm.value;
    activityProfileInput.textContent = addActivityProfile.value;
    closePopup(popupProfile);
}

function handleCreateCardElement(item, template) {
    const card = new Card(item.name, item.link, template, handleCardClick);
    const cardElement = card.generateCard();
    return cardElement;
}

cards.forEach((item) => {
    listContainer.append(handleCreateCardElement(item, template));
});

function handleAddCard(ev) {
    ev.preventDefault();
    listContainer.prepend(handleCreateCardElement({ name: addCardPlace.value, link: addCardLink.value }, template));
    closePopup(popupAddCard);
}

function handleCardClick() {
    openPopup(popupImage);
}

linkEditProfile.addEventListener('click', () => {
    addNameProfileForm.value = nameProfileInput.textContent;
    addActivityProfile.value = activityProfileInput.textContent;
    editFormValidator.toggleButtonState(config, inputsProfileForm, profileButton);
    editFormValidator.resetValidation();
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
    cardFormValidator.resetValidation();
    openPopup(popupAddCard);
});

btnClosePopupCard.addEventListener('click', () => {
    closePopup(popupAddCard);
});

btnClosePopupImage.addEventListener('click', () => {
    closePopup(popupImage);
});