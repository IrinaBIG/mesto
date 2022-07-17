import './index.css'; // добавьте импорт главного файла стилей
import Card from "../components/Card";
import Api from "../components/Api";
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import {
    config,
    formAddCard,
    formElementProfile,
    formUpdateAvatar,
    createButtonCaptions,
    confirmDeleteButtonCaptions,
    saveButtonCaptions,
    buttonAddProfile,
    linkEditProfile,
    avatarProfileInput,
} from '../utils/constants.js'

const cardFormValidator = new FormValidator(config, formAddCard);

const editFormValidator = new FormValidator(config, formElementProfile);
const avatarFormValidator = new FormValidator(config, formUpdateAvatar);
const imagePopupForm = new PopupWithImage('.popup_place_image-card');
const confirmationPopupForm = new PopupWithConfirmation('.popup_confirmation', deleteCardHandler, confirmDeleteButtonCaptions);
const cardList = new Section({
    renderer: createCard,
}, '.cards');
const popupAddForm = new PopupWithForm('.popup_place_add-card', addCardHandler, createButtonCaptions);
const user = new UserInfo({ nameSelector: '.profile__name', activitySelector: '.profile__activity', avatarSelector: '.profile__avatar' });
const profilePopupForm = new PopupWithForm('.popup_place_profile', editUserInfoHandler, saveButtonCaptions);
const avatarUpdateForm = new PopupWithForm('.popup_place_avatar', updateAvatarHandler, saveButtonCaptions);
const api = new Api('https://mesto.nomoreparties.co/v1/cohort-45');

avatarFormValidator.enableValidation();
editFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarUpdateForm.setEventListeners();

profilePopupForm.setEventListeners();
popupAddForm.setEventListeners();
imagePopupForm.setEventListeners();
confirmationPopupForm.setEventListeners();

function createCard(item) {
    const card = new Card(item, user.getUserId(), '.template', { openViewHandler: handleCardClick, deleteCardHandler: handleDeleteConfirm, cardLikeHandler: handleCardLike });
    const cardElement = card.generateCard();
    return cardElement;
}

function handleCardClick(name, link) {
    imagePopupForm.openPopup(name, link);
};

function handleDeleteConfirm(cardId, removeCardCallback) {
    confirmationPopupForm.openPopup(cardId, removeCardCallback);

}

function addCardHandler(item, toggleButtonCaptionCallback, closePopupCallback) {
    toggleButtonCaptionCallback(true);
    api.addCard(item.newPlace, item.linkPlace)
        .then((res) => {

            cardList.addItem(res);
            closePopupCallback();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            toggleButtonCaptionCallback(false);
        })
}

function updateAvatarHandler(data, toggleButtonCaptionCallback, closePopupCallback) {
    toggleButtonCaptionCallback(true);
    api.updateAvatar(data.avatarPlace)
        .then((profile) => {
            user.setUserInfo(profile);
            closePopupCallback();
        })
        .catch((err) => {
            console.dir(err);
        })
        .finally(() => {
            toggleButtonCaptionCallback(false);
        })
}

function editUserInfoHandler(data, toggleButtonCaptionCallback, closePopupCallback) {
    toggleButtonCaptionCallback(true);
    api.editUserInfo(data.firstname, data.work)
        .then((res) => {
            user.setUserInfo(res);
            closePopupCallback();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            toggleButtonCaptionCallback(false);
        })
}

function handleCardLike(cardId, isLiked, setLikesCallback) {
    api.toggleLike(cardId, isLiked)
        .then(({ likes }) => setLikesCallback(likes))
        .catch((err) => {
            console.log(err);
        })
}

function deleteCardHandler(cardId, removeCardCallback, toggleButtonCaptionCallback, closePopupCallback) {
    toggleButtonCaptionCallback(true);
    api.deleteCard(cardId)
        .then(() => {
            removeCardCallback();
            closePopupCallback();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            toggleButtonCaptionCallback(false);
        })
}

buttonAddProfile.addEventListener('click', () => {
    cardFormValidator.toggleButtonState();
    cardFormValidator.resetValidation();
    popupAddForm.openPopup();
});

linkEditProfile.addEventListener('click', () => {
    // const userData = user.getUserInfo();
    // addNameProfileForm.value = userData.firstname;
    // addActivityProfile.value = userData.work;
    profilePopupForm.setInputValues(user.getUserInfo());
    editFormValidator.toggleButtonState();
    editFormValidator.resetValidation();
    // api.getCards();
    profilePopupForm.openPopup();
});

avatarProfileInput.addEventListener('click', () => {
    avatarFormValidator.toggleButtonState();
    avatarFormValidator.resetValidation();
    avatarUpdateForm.openPopup();
});

Promise.all([api.getUser(), api.getCards()])
    .then(([profile, cards]) => {
        user.setUserInfo(profile);
        cardList.renderItems(cards);
    })
    .catch((err) => {
        console.log(err);
    })