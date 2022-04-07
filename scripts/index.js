// код всплывающего окна

const LinkEditProfile = document.querySelector('.profile__button-edit');
const modalWindow = document.querySelector('.popup');
const modalCloseBtn = modalWindow.querySelector('.popup__close');

function openModalWindow() {
    modalWindow.classList.add('popup_is-active');
}
LinkEditProfile.addEventListener('click', openModalWindow);

modalCloseBtn.addEventListener('click', function () {
    modalWindow.classList.remove('popup_is-active');
})

function onOverlayClick(event) {
    if (event.target === event.currentTarget) {

        modalWindow.classList.remove('popup_is-active');
    }
}
modalWindow.addEventListener('click', onOverlayClick);

// код редактирования данных

const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.profile__name');
const nameForm = document.querySelector('.form__name');
const addName = nameForm.querySelector('.form__text-name');
const activeInput = document.querySelector('.profile__activity');
const activeForm = document.querySelector('.form__activity');
const addActive = activeForm.querySelector('.form__text-activity');

function formSubmitHandler (ev) {
    ev.preventDefault();
    nameInput.textContent = addName.value;
    activeInput.textContent = addActive.value;
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
// после отправки на проверку сделала закрываем кнопку после сохранения
const closeSaveButton = document.querySelector('.form__button');

closeSaveButton.addEventListener('click', onOverlayClick);

// делаем like

const cardElement = document.querySelector('.cards');
const buttonActive = cardElement.querySelector('.cards__button');

function onChangeLikeColor () {
    buttonActive.classList.add('cards__button_active');
}

cardElement.addEventListener('click', onChangeLikeColor);