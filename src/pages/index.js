import './index.css'; // добавьте импорт главного файла стилей 
import { Card } from '../components/Card.js';
import Section from '../components/Section.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {
    config,
    linkEditProfile,
    formElementProfile,
    buttonAddProfile,
    buttonConfirmation,
    formAddCard,
    formUpdateAvatar,
    profileButton,
    addButton,
    inputsProfileForm,
    addActivityProfile,
    addNameProfileForm,
    inputsAddCardForm,
    nameProfileInput,
    activityProfileInput,
    avatarProfileInput,
} from '../scripts/Utils/constants.js';
// import { data } from 'autoprefixer';

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-45');

const cardFormValidator = new FormValidator(config, formAddCard);
cardFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, formElementProfile);
editFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(config, formUpdateAvatar);
avatarFormValidator.enableValidation();

const imagePopupForm = new PopupWithImage('.popup_place_image-card');
imagePopupForm.setEventListeners();

const confirmationPopupForm = new PopupWithConfirmation('.popup_confirmation');

const cardList = new Section({
    renderer: (item) => {
        // console.log(item);
        cardList.addItem(createCard(item));
    },
}, '.cards');

const popupAddForm = new PopupWithForm('.popup_place_add-card', addCardHandler);

popupAddForm.setEventListeners();

function addCardHandler(item) {
    api.addCard(item.newPlace, item.linkPlace)
    .then((res) => {
        cardList.addItem(createCard(res));
        console.log(res)
    })
    .catch((err) => {
        console.log(err);
    })
}

const user = new UserInfo({ nameSelector: '.profile__name', activitySelector: '.profile__activity' });

const profilePopupForm = new PopupWithForm('.popup_place_profile', editUserInfoHandler);
const avatarUpdateForm = new PopupWithForm('.popup_place_avatar', updateAvatarHandler);
avatarUpdateForm.setEventListeners();

function updateAvatarHandler(src) {
    api.updateAvatar(src)
    .then((img) => {
        avatarProfileInput.src = img.avatar;
        console.log(img)
    })
    .catch((err) => {
        console.log(err);
    })
}


profilePopupForm.setEventListeners();

function editUserInfoHandler(data) {
    api.editUserInfo(data.firstname, data.work)
    .then((res) => {
        user.setUserInfo(res);
        console.log(res)
    })
    .catch((err) => {
        console.log(err);
    })
}

function createCard(item) {
    const card = new Card(item.name, item.link, '.template', handleCardClick, deleteCardHandler);
    const cardElement = card.generateCard();
    return cardElement;
}

function handleCardClick(name, link) {
    imagePopupForm.openPopup(name, link);
};

function deleteCardHandler(card) {
    api.deleteCard(card.getId())
    .then(() => {
        card.removeCard();
    })
    .catch((err) => {
        console.log(err);
    })
}

// console.log(buttonConfirmation);
// buttonConfirmation.addEventListener('click', () => {
//     // confirmationPopupForm.openPopup();
// })

buttonAddProfile.addEventListener('click', () => {
    cardFormValidator.toggleButtonState();
    cardFormValidator.resetValidation();
    popupAddForm.openPopup();
});

linkEditProfile.addEventListener('click', () => {
    const userData = user.getUserInfo({ firstname: nameProfileInput, work: activityProfileInput });
    addNameProfileForm.value = userData.firstname;
    addActivityProfile.value = userData.work;
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

confirmationPopupForm.setEventListeners();

// api.getCards()
// .then((cards) => {
//     cardList.renderItems(cards);
// })
// .catch((err) => {
//     console.log(err);
// })

// api.getUser()
// .then((user) => {
//     nameProfileInput.textContent = user.name;
//     activityProfileInput.textContent = user.about;
//     avatarProfileInput.src = user.avatar;
// })
// .catch((err) => {
//     console.log(err);
// })

Promise.all([api.getUser(), api.getCards()])
.then(([user, cards]) => {
    nameProfileInput.textContent = user.name;
    activityProfileInput.textContent = user.about;
    avatarProfileInput.src = user.avatar;
    cardList.renderItems(cards);
    // console.log(['user', 'cards']);
    
})
.catch((err) => {
    console.log(err);
})