import './index.css'; // добавьте импорт главного файла стилей 
import { Card } from '../components/Card.js';
import { cards } from '../scripts/Utils/constants.js';
import Section from '../components/Section.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
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

const cardFormValidator = new FormValidator(config, formAddCard);
cardFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, formElementProfile);
editFormValidator.enableValidation();

const imagePopupForm = new PopupWithImage('.popup_place_image-card');
imagePopupForm.setEventListeners();


// const cardList = new Section({
//   renderer: (cards) => {
//         cardList.addItem(createCard(cards));
//     },
// }, '.cards');
// cardList.renderItems();


const cardList = new Section({
    renderer: (item) => {
        cardList.addItem(createCard(item));
    },
}, '.cards');

// cardList.renderItems();


// const cardList = new Section('.cards');
// cardList.addItem(createCard(item));

// cardList.renderItems();
// const cardSection = api.getCards();
 const popupAddForm = new PopupWithForm('.popup_place_add-card', (data) =>{

 });

// const popupAddForm = new PopupWithForm('.popup_place_add-card', (data) => {
//     const cardData = { name: data['newPlace'], link: data['linkPlace'] };
//     // api.getCards().addItem(createCard(api.addCard(data['newPlace'], data['linkPlace'])));
//     cardSection.addItem(createCard(cardData));
// });
popupAddForm.setEventListeners();


const user = new UserInfo({ nameSelector: '.profile__name', activitySelector: '.profile__activity' });

function editAvatarHandler (nameUser, aboutUser) {
    api.editAvatar(nameUser, aboutUser)
    // .then((res) => {
    //     cardList.addItem(res);
    // });
}

const profilePopupForm = new PopupWithForm('.popup_place_profile', (data) => {
    user.setUserInfo(data); 
}, editAvatarHandler);

// cardList.renderItems();

function createCard(item) {
    const card = new Card(item.name, item.link, '.template', handleCardClick);
    const cardElement = card.generateCard();
    return cardElement;
}

function handleCardClick(name, link) {
    imagePopupForm.openPopup(name, link);
};

// profilePopupForm.setEventListeners();

// function addCardHandler (cardName, linkPlace) {
//     api.addCard(cardName, linkPlace);
// }


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
    profilePopupForm.openPopup();
});



const api = new Api('https://mesto.nomoreparties.co/v1/cohort-43');

api.getCards()
.then((cards) => {
    cardList.renderItems(cards);
})
.catch((err) => {
    console.log(err);
})


api.getAvatar ()
.then((user) => {
    nameProfileInput.textContent = user.name;
    activityProfileInput.textContent = user.about;
    avatarProfileInput.src = user.avatar;
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
