// import Card from "../components/Card";
// import {
//     api,
//     user,
//     cardList,
//     popupImage,
//     popupProfile,
//     popupAddForm,
//     popupUpdateAvatar,
//     confirmationPopupForm,
//     cardFormValidator,
//     editFormValidator,
//     avatarFormValidator,
//     avatarUpdateForm,
//     profilePopupForm,
//     imagePopupForm,
//     buttonAddProfile,
//     linkEditProfile,
//     avatarProfileInput,



// } from "./constants"

// export function handleDeleteConfirm(cardId, removeCardCallback) {
//     confirmationPopupForm.openPopup(cardId, removeCardCallback);

// }

// export function addCardHandler(item, toggleButtonCaptionCallback, closePopupCallback) {
//     toggleButtonCaptionCallback(true);
//     api.addCard(item.newPlace, item.linkPlace)
//         .then((res) => {

//             cardList.addItem(res);
//             closePopupCallback();
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//         .finally(() => {
//             toggleButtonCaptionCallback(false);
//         })
// }

// export function createCard(item) {
//     const card = new Card(item, user.getUserId(), '.template', { openViewHandler: handleCardClick, deleteCardHandler: handleDeleteConfirm, cardLikeHandler: handleCardLike });
//     const cardElement = card.generateCard();
//     return cardElement;
// }

// export function updateAvatarHandler(data, toggleButtonCaptionCallback, closePopupCallback) {
//     toggleButtonCaptionCallback(true);
//     api.updateAvatar(data.avatarPlace)
//         .then((profile) => {
//             user.setUserInfo(profile);
//             closePopupCallback();
//         })
//         .catch((err) => {
//             console.dir(err);
//         })
//         .finally(() => {
//             toggleButtonCaptionCallback(false);
//         })
// }

// export function editUserInfoHandler(data, toggleButtonCaptionCallback, closePopupCallback) {
//     toggleButtonCaptionCallback(true);
//     api.editUserInfo(data.firstname, data.work)
//         .then((res) => {
//             user.setUserInfo(res);
//             closePopupCallback();
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//         .finally(() => {
//             toggleButtonCaptionCallback(false);
//         })
// }

// export function handleCardClick(name, link) {
//     imagePopupForm.openPopup(name, link);
// };

// export function handleCardLike(cardId, isLiked, setLikesCallback) {
//     api.toggleLike(cardId, isLiked)
//         .then(({ likes }) => setLikesCallback(likes))
//         .catch((err) => {
//             console.log(err);
//         })
// }

// export function deleteCardHandler(cardId, removeCardCallback, toggleButtonCaptionCallback, closePopupCallback) {
//     toggleButtonCaptionCallback(true);
//     api.deleteCard(cardId)
//         .then(() => {
//             removeCardCallback();
//             closePopupCallback();
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//         .finally(() => {
//             toggleButtonCaptionCallback(false);
//         })
// }

// export function init() {
//     avatarFormValidator.enableValidation();
//     editFormValidator.enableValidation();
//     cardFormValidator.enableValidation();
//     avatarUpdateForm.setEventListeners();

//     profilePopupForm.setEventListeners();
//     popupAddForm.setEventListeners();
//     imagePopupForm.setEventListeners();
//     confirmationPopupForm.setEventListeners();
//     buttonAddProfile.addEventListener('click', () => {
//         cardFormValidator.toggleButtonState();
//         cardFormValidator.resetValidation();
//         popupAddForm.openPopup();
//     });

//     linkEditProfile.addEventListener('click', () => {
//         // const userData = user.getUserInfo();
//         // addNameProfileForm.value = userData.firstname;
//         // addActivityProfile.value = userData.work;
//         profilePopupForm.setInputValues(user.getUserInfo());
//         editFormValidator.toggleButtonState();
//         editFormValidator.resetValidation();
//         // api.getCards();
//         profilePopupForm.openPopup();
//     });

//     avatarProfileInput.addEventListener('click', () => {
//         avatarFormValidator.toggleButtonState();
//         avatarFormValidator.resetValidation();
//         avatarUpdateForm.openPopup();
//     });

// }

// export function loadInitial() {
//     Promise.all([api.getUser(), api.getCards()])
//         .then(([profile, cards]) => {
//             user.setUserInfo(profile);
//             cardList.renderItems(cards);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }