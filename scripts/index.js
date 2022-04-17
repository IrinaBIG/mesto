// код всплывающего окна

const linkEditProfile = document.querySelector('.profile__button-edit');
const modalWindow = document.querySelector('.popup');
const modalCloseBtn = modalWindow.querySelector('.popup__close');

function openModalWindow() {
    modalWindow.classList.add('popup_is-active');
    addName.value = nameInput.textContent;
    addActive.value = activeInput.textContent;
}

linkEditProfile.addEventListener('click', openModalWindow);

function closeModalWindow() {
    modalWindow.classList.remove('popup_is-active');
}

modalCloseBtn.addEventListener('click', closeModalWindow)

// код редактирования данных

const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.profile__name');
const addName = document.querySelector('.form__text_type_name');
const activeInput = document.querySelector('.profile__activity');
const addActive = document.querySelector('.form__text_type_activity');

function formSubmitHandler(ev) {
    ev.preventDefault();
    nameInput.textContent = addName.value;
    activeInput.textContent = addActive.value;
    closeModalWindow();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
// закрываем кнопку после сохранения

const cardElement = document.querySelector('.cards');
const buttonActive = cardElement.querySelector('.cards__button');

const CARDS = [
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
    }
];

const listContainer = document.querySelector(".cards");
const template = document.querySelector(".template");
const buttonAddCard = document.querySelector('.profile__button-add');
const modalWindowCard = document.querySelector('.popup_place_add-card');
const btnCloseCard = modalWindowCard.querySelector('.popup__close');
const addCard = modalWindowCard.querySelector('.form');
const modalWindowImage = document.querySelector('.popup__place_image-card');
const btnCloseImage = modalWindowImage.querySelector('.popup__close');
const cardsImagePopup = document.querySelector('.cards__image-popup');
const titlePopupImage = document.querySelector('.popup__title_place_image');

function render() {
    const html = CARDS.map(getElement);
    listContainer.append(...html);
}

function getElement(item) {
    const getElementTemplate = template.content.cloneNode(true);
    const removeBtn = getElementTemplate.querySelector('.button__remove');
    const likeBtn = getElementTemplate.querySelector('.cards__button');
    const image = getElementTemplate.querySelector('.cards__image');
    const name = getElementTemplate.querySelector('.cards__place');

    image.src = item.link;
    image.alt = item.name;
    name.textContent = item.name;

    removeBtn.addEventListener('click', handleRemoveCard);

    image.addEventListener('click', function () {
        toggleModalWindowImage();
        cardsImagePopup.src = item.link;
        titlePopupImage.textContent = item.name;
    });
    // toggleModalWindowImage);
    likeBtn.addEventListener('click', function (evt) {
        evt.target.classList.toggle('cards__button_active');
    });

    return getElementTemplate;
}

function toggleModalWindowCard() {
    modalWindowCard.classList.toggle('popup_is-active');
}

buttonAddCard.addEventListener('click', toggleModalWindowCard);
btnCloseCard.addEventListener('click', toggleModalWindowCard);

function handleAddCard(ev) {
    ev.preventDefault();
    const addCardPlace = document.querySelector('.form__text_type_place');
    const addCardLink = document.querySelector('.form__text_type_link-place');
    const element = getElement({ name: addCardPlace.value, link: addCardLink.value });
    listContainer.prepend(element);
    toggleModalWindowCard();
    addCardPlace.value = '';
    addCardLink.value = '';
}

addCard.addEventListener('submit', handleAddCard);

function handleRemoveCard(evt) {
    const cardRemove = evt.target.closest('.cards__item');
    cardRemove.remove();
}

function toggleModalWindowImage() {
    modalWindowImage.classList.toggle('popup_is-active');
}

btnCloseImage.addEventListener('click', toggleModalWindowImage);

render();