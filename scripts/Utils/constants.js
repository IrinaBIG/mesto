export const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_visible'
};

export const cards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
];

// const globals = {
// linkEditProfile = document.querySelector('.profile__button-edit'),
// popupProfile = document.querySelector('.popup_place_profile'),
// popupCloseBtn = popupProfile.querySelector('.popup__close'),
// formElementProfile = document.querySelector('.form'),
// const nameProfileInput = document.querySelector('.profile__name');
// const addNameProfileForm = document.querySelector('.form__input_type_name');
// const activityProfileInput = document.querySelector('.profile__activity');
// const addActivityProfile = document.querySelector('.form__input_type_activity');
// const listContainer = document.querySelector('.cards');
// const buttonAddProfile = document.querySelector('.profile__button-add');
// const popupAddCard = document.querySelector('.popup_place_add-card');
// const btnClosePopupCard = popupAddCard.querySelector('.popup__close');
// const formAddCard = popupAddCard.querySelector('.form');
// const popupImage = document.querySelector('.popup_place_image-card');
// const btnClosePopupImage = popupImage.querySelector('.popup__close');
// const addCardPlace = document.querySelector('.form__input_type_place');
// const addCardLink = document.querySelector('.form__input_type_link-place');
// const profileButton = popupProfile.querySelector(config.submitButtonSelector);
// const addButton = popupAddCard.querySelector(config.submitButtonSelector);
// const inputsProfileForm = Array.from(formElementProfile.querySelectorAll(config.inputSelector));
// const inputsAddCardForm = Array.from(formAddCard.querySelectorAll(config.inputSelector));
// const cardFormValidator = new FormValidator(config, formAddCard);
// const editFormValidator = new FormValidator(config, formElementProfile);
// } 