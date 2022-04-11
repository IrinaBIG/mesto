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
const addName = document.querySelector('.form__text_name');
const activeInput = document.querySelector('.profile__activity');
const addActive = document.querySelector('.form__text_activity');

function formSubmitHandler (ev) {
    ev.preventDefault();
    nameInput.textContent = addName.value;
    activeInput.textContent = addActive.value;
    closeModalWindow();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
// закрываем кнопку после сохранения
// const closeSaveButton = document.querySelector('.form__button');

// closeSaveButton.addEventListener('click', onOverlayClick);

// делаем like

const cardElement = document.querySelector('.cards');
const buttonActive = cardElement.querySelector('.cards__button');