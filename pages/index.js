import { Card } from '../components/Card.js';
import { cards } from '../scripts/Utils/constants.js';
import Section from '../components/Section.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
// import UserInfo from '../components/UserInfo.js';
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
} from '../scripts/Utils/constants.js';
// import { openPopup } from '../scripts/Utils/utils.js';

const cardFormValidator = new FormValidator(config, formAddCard);
cardFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, formElementProfile);
editFormValidator.enableValidation();

const cardList = new Section({ data: cards, renderer: (item) => {
    const card = new Card(item.name, item.link, template, handleCardClick);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
    return cardElement;          
    },
}, listContainer);

cardList.renderItems();

const imagePopupForm = new PopupWithImage('.popup_place_image-card');
// const imagePopupForm = new PopupWithImage(popupImage);
imagePopupForm.setEventListeners();

function handleCardClick () {
    openPopup(data);
};

// function handleFormSubmit() {

// }

// const user = new UserInfo ();

const profilePopupForm = new PopupWithForm({handleFormSubmit: (data) => {
    user.setUserInfo(data);
}});
profilePopupForm.setEventListeners();

const addPopupForm = new PopupWithForm({handleFormSubmit: (data) => {
    cardList.addItem(data);
}});

// const profilePopupForm = new PopupWithForm({ popupSelector: popupAddCard,  
//     handleAddCard: (formData) => {
//         const card = new Card(formData);
//         const cardElement = card.generateCard();
//         cardList.addItem(cardElement);
//     }
// });

buttonAddProfile.addEventListener('click', () => {
    formAddCard.reset();
    cardFormValidator.toggleButtonState(config, inputsAddCardForm, addButton);
    cardFormValidator.resetValidation();
    openPopup(addPopupForm);
});


function handleSubmitFormProfile(ev) {
    ev.preventDefault();
    nameProfileInput.textContent = addNameProfileForm.value;
    activityProfileInput.textContent = addActivityProfile.value;
    closePopup(popupProfile);
}

// function handleCreateCardElement(item, template) {
//     const card = new Card(item.name, item.link, template, handleCardClick);
//     const cardElement = card.generateCard();
//     cardList.addItem(cardElement);
//     return cardElement;    
// }

function handleAddCard(ev) {
    ev.preventDefault();
    listContainer.prepend(handleCreateCardElement({ name: addCardPlace.value, link: addCardLink.value }, template));
    close(popupAddCard);
}

linkEditProfile.addEventListener('click', () => {
    addNameProfileForm.value = nameProfileInput.textContent;
    addActivityProfile.value = activityProfileInput.textContent;
    editFormValidator.toggleButtonState(config, inputsProfileForm, profileButton);
    editFormValidator.resetValidation();
    openPopup(popupProfile);
});

formElementProfile.addEventListener('submit', handleSubmitFormProfile);

formAddCard.addEventListener('submit', handleAddCard);



// btnClosePopupCard.addEventListener('click', () => {
//     closePopup(popupAddCard);
// });

// btnClosePopupImage.addEventListener('click', () => {
//     closePopup(popupImage);
// });