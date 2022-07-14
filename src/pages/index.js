import './index.css'; // добавьте импорт главного файла стилей 
import { Card } from '../components/Card.js';
import { cards } from '../scripts/Utils/constants.js';
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
    formAddCard,
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
import { data } from 'autoprefixer';

const cardFormValidator = new FormValidator(config, formAddCard);
cardFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, formElementProfile);
editFormValidator.enableValidation();

const imagePopupForm = new PopupWithImage('.popup_place_image-card');
imagePopupForm.setEventListeners();

const confirmationPopupForm = new PopupWithConfirmation('.popup_confirmation');

confirmationPopupForm.setEventListeners();

const cardList = new Section({
    renderer: (item) => {
        // console.log(item);
        cardList.addItem(createCard(item));
    },
}, '.cards');

// cardList.renderItems();

const popupAddForm = new PopupWithForm('.popup_place_add-card', addCardHandler);

// const popupAddForm = new PopupWithForm('.popup_place_add-card', (data) => {
//     const cardData = { name: data['newPlace'], link: data['linkPlace'] };
//     addCardHandler(cardData);
//     // cardList.addItem(createCard(api.addCard(data['newPlace'], data['linkPlace'])));
//     // cardList.addItem(createCard(cardData));
// });
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

const profilePopupForm = new PopupWithForm('.popup_place_profile', editAvatarHandler);
// const profilePopupForm = new PopupWithForm('.popup_place_profile', (data) => {
//     user.setUserInfo(data); 
// });

// cardList.renderItems();
profilePopupForm.setEventListeners();

function editAvatarHandler(data) {
    api.editAvatar(data.firstname, data.work)
    .then((res) => {
        user.setUserInfo(res);
        console.log(res)
    })
    .catch((err) => {
        console.log(err);
    })
}

function createCard(item) {
    const card = new Card(item.name, item.link, '.template', handleCardClick);
    const cardElement = card.generateCard();
    return cardElement;
}

function handleCardClick(name, link) {
    imagePopupForm.openPopup(name, link);
};



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
    api.getCards();
    profilePopupForm.openPopup();
});

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-45');



api.getCards()
.then((cards) => {
    cardList.renderItems(cards);
})
.catch((err) => {
    console.log(err);
})

// api.getUserCards()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })


api.getAvatar()
.then((user) => {
    nameProfileInput.textContent = user.name;
    activityProfileInput.textContent = user.about;
    avatarProfileInput.src = user.avatar;
    // console.log(user);
})
.catch((err) => {
    console.log(err);
})

// api.editAvatar()
// .then((user) => {
//     const profilePopupForm = new PopupWithForm('.popup_place_profile', (data) => {
//         user.setUserInfo(data.name, data.about);
//     });
//     profilePopupForm.setEventListeners();
// })
// .catch((err) => {
//     console.log(err);
// })

// api.getCards()
// .then((cards) => {
//     const cardList = new Section({
//         data: cards, renderer: (card) => {
//             cardList.addItem(createCard(card));
//         },
//     }, '.cards');
//     console.log(cardList);
//     cardList.renderItems();
//     return cardList;
// })
// // .then (() => {
// //     addCardHandler();
// // })
// .catch((err) => {
//     console.log(err);
// })
