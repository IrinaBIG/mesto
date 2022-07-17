// import Api from "../components/Api";
// import Section from '../components/Section.js';
// import FormValidator from '../components/FormValidator.js';
// import PopupWithImage from '../components/PopupWithImage.js';
// import PopupWithForm from '../components/PopupWithForm.js';
// import PopupWithConfirmation from '../components/PopupWithConfirmation';
// import UserInfo from '../components/UserInfo.js';

// import { 
//     addCardHandler, 
//     createCard, 
//     updateAvatarHandler, 
//     deleteCardHandler, 
//     editUserInfoHandler,
    
// } from '../utils/utils';

export const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_visible'
};

export const createButtonCaptions = {
    normalCaption: 'Создать',
    activeCaption: 'Создаю...'
}

export const confirmDeleteButtonCaptions = {
    normalCaption: 'Да',
    activeCaption: 'Удаляю...'
}

export const saveButtonCaptions = {
    normalCaption: 'Сохранить',
    activeCaption: 'Сохраняю...'
}

// export const api = new Api('https://mesto.nomoreparties.co/v1/cohort-45');
export const linkEditProfile = document.querySelector('.profile__button-edit');
// export const popupProfile = document.querySelector('.popup_place_profile');
// export const popupCloseBtn = popupProfile.querySelector('.popup__close');
export const formElementProfile = document.querySelector('#profile-form');
// export const nameProfileInput = document.querySelector('.profile__name');
export const avatarProfileInput = document.querySelector('.profile__avatar');
// export const addNameProfileForm = document.querySelector('.form__input_type_name');
// export const activityProfileInput = document.querySelector('.profile__activity');
// export const addActivityProfile = document.querySelector('.form__input_type_activity');
export const buttonAddProfile = document.querySelector('.profile__button-add');
export const buttonConfirmation = document.querySelector('.button__remove');
export const popupAddCard = document.querySelector('.popup_place_add-card');
export const btnClosePopupCard = popupAddCard.querySelector('.popup__close');
export const formAddCard = popupAddCard.querySelector('#place-form');
export const popupUpdateAvatar = document.querySelector('.popup_place_avatar');
export const formUpdateAvatar = popupUpdateAvatar.querySelector('#avatar-form');
export const popupImage = document.querySelector('.popup_place_image-card');
export const btnClosePopupImage = popupImage.querySelector('.popup__close');
// export const profileButton = popupProfile.querySelector(config.submitButtonSelector);
export const addButton = popupAddCard.querySelector(config.submitButtonSelector);
// export const inputsProfileForm = Array.from(formElementProfile.querySelectorAll(config.inputSelector));
export const inputsAddCardForm = Array.from(formAddCard.querySelectorAll(config.inputSelector));
// export const cardFormValidator = new FormValidator(config, formAddCard);
// export const editFormValidator = new FormValidator(config, formElementProfile);
// export const avatarFormValidator = new FormValidator(config, formUpdateAvatar);
// export const imagePopupForm = new PopupWithImage('.popup_place_image-card');
// export const confirmationPopupForm = new PopupWithConfirmation('.popup_confirmation', deleteCardHandler, confirmDeleteButtonCaptions);
// export const cardList = new Section({
//     renderer: createCard,
//     }, '.cards');

// export const popupAddForm = new PopupWithForm('.popup_place_add-card', addCardHandler, createButtonCaptions);
// export const user = new UserInfo({ nameSelector: '.profile__name', activitySelector: '.profile__activity', avatarSelector: '.profile__avatar' });
// export const profilePopupForm = new PopupWithForm('.popup_place_profile', editUserInfoHandler, saveButtonCaptions);
// export const avatarUpdateForm = new PopupWithForm('.popup_place_avatar', updateAvatarHandler, saveButtonCaptions);