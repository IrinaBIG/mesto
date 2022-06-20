import './index.css'; // добавьте импорт главного файла стилей 
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
    addActivityProfile,
    addNameProfileForm,
    inputsAddCardForm,
    nameProfileInput,
    activityProfileInput,
    // template
} from '../scripts/Utils/constants.js';

const cardFormValidator = new FormValidator(config, formAddCard);
cardFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, formElementProfile);
editFormValidator.enableValidation();

const imagePopupForm = new PopupWithImage('.popup_place_image-card');
imagePopupForm.setEventListeners();

const cardList = new Section({
    data: cards, renderer: (item) => {
        cardList.addItem(createCard(item));
    },
}, '.cards');

const popupAddForm = new PopupWithForm('.popup_place_add-card', (item) => {
    console.log(item);
    createCard(item, '.template', handleCardClick);
    cardList.addItem(createCard(item, '.template', handleCardClick));
});

const user = new UserInfo({ nameSelector: '.profile__name', activitySelector: '.profile__activity' });
// console.log(user);

const profilePopupForm = new PopupWithForm('.popup_place_profile', (data) => {
    console.log(data);
    user.setUserInfo(data);
    // user.setUserInfo({ nameSelector: addNameProfileForm.value, activitySelector: addActivityProfile.value });
});

cardList.renderItems();

function createCard(item) {
    const card = new Card(item.name, item.link, '.template', handleCardClick);
    const cardElement = card.generateCard();
    return cardElement;
}

function handleCardClick(name, link) {
    imagePopupForm.openPopup(name, link);
};

profilePopupForm.setEventListeners();

popupAddForm.setEventListeners();

buttonAddProfile.addEventListener('click', () => {
    cardFormValidator.toggleButtonState(config, inputsAddCardForm, addButton);
    cardFormValidator.resetValidation();
    popupAddForm.openPopup();
});

linkEditProfile.addEventListener('click', () => {
    editFormValidator.toggleButtonState(config, inputsProfileForm, profileButton);
    editFormValidator.resetValidation();
    profilePopupForm.openPopup(user.getUserInfo());
});