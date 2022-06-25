export const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_visible'
};

// export const cards = [
//     {
//         name: 'Архыз',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//     },
//     {
//         name: 'Челябинская область',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//     },
//     {
//         name: 'Иваново',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//     },
//     {
//         name: 'Камчатка',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//     },
//     {
//         name: 'Холмогорский район',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//     },
//     {
//         name: 'Байкал',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//     },
// ]; 

export const linkEditProfile = document.querySelector('.profile__button-edit');
export const popupProfile = document.querySelector('.popup_place_profile');
export const popupCloseBtn = popupProfile.querySelector('.popup__close');
export const formElementProfile = document.querySelector('.form');
export const nameProfileInput = document.querySelector('.profile__name');
export const avatarProfileInput = document.querySelector('.profile__avatar');
export const addNameProfileForm = document.querySelector('.form__input_type_name');
export const activityProfileInput = document.querySelector('.profile__activity');
export const addActivityProfile = document.querySelector('.form__input_type_activity');
export const buttonAddProfile = document.querySelector('.profile__button-add');
export const popupAddCard = document.querySelector('.popup_place_add-card');
export const btnClosePopupCard = popupAddCard.querySelector('.popup__close');
export const formAddCard = popupAddCard.querySelector('.form');
export const popupImage = document.querySelector('.popup_place_image-card');
export const btnClosePopupImage = popupImage.querySelector('.popup__close');
export const profileButton = popupProfile.querySelector(config.submitButtonSelector);
export const addButton = popupAddCard.querySelector(config.submitButtonSelector);
export const inputsProfileForm = Array.from(formElementProfile.querySelectorAll(config.inputSelector));
export const inputsAddCardForm = Array.from(formAddCard.querySelectorAll(config.inputSelector));