import { Card } from '../components/Card.js';
import { cards } from '../scripts/Utils/constants.js';
import Section from '../components/Section.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
    config,
    linkEditProfile,
    formElementProfile,
    listContainer,
    buttonAddProfile,
    formAddCard,
    addCardPlace,
    addCardLink,
    profileButton,
    addButton,
    inputsProfileForm,
    inputsAddCardForm,
    template
} from '../scripts/Utils/constants.js';

const cardFormValidator = new FormValidator(config, formAddCard);
cardFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, formElementProfile);
editFormValidator.enableValidation();

const imagePopupForm = new PopupWithImage('.popup_place_image-card');
imagePopupForm.setEventListeners();

const cardList = new Section({ data: cards, renderer: (item) => {
    handleCreateCardElement(item, template);    
    },
}, listContainer);

const addPopupForm = new PopupWithForm('.popup_place_add-card', () => {
    // cardList.addItem(item.name, item.link);
    listContainer.prepend(handleCreateCardElement({ name: addCardPlace.value, link: addCardLink.value }, template));    
});

// const user = new UserInfo ('.form__input_type_name','.form__input_type_activity');
const user = new UserInfo ('.profile__name','.profile__activity');

const profilePopupForm = new PopupWithForm('.popup_place_profile', (data) => {
    user.setUserInfo(data);
});

profilePopupForm.setEventListeners();

addPopupForm.setEventListeners();

function handleCreateCardElement(item, template) {
    const card = new Card(item.name, item.link, template, handleCardClick);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
    return cardElement;    
}

cardList.renderItems();

function handleCardClick (name, link) {
    imagePopupForm.openPopup(name, link);
};

buttonAddProfile.addEventListener('click', () => {
    cardFormValidator.toggleButtonState(config, inputsAddCardForm, addButton);
    cardFormValidator.resetValidation();
    addPopupForm.openPopup();
});

linkEditProfile.addEventListener('click', (name, activity) => {
    
    editFormValidator.toggleButtonState(config, inputsProfileForm, profileButton);
    editFormValidator.resetValidation();
    profilePopupForm.openPopup();
    user.getUserInfo('.profile__name','.profile__activity');
});
