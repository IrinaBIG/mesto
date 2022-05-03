const linkEditProfile = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_place_profile');
const popupCloseBtn = popupProfile.querySelector('.popup__close');
const formElementProfile = document.querySelector('.form');
const nameProfileInput = document.querySelector('.profile__name');
const addNameProfileForm = document.querySelector('.form__input_type_name');
const activityProfileInput = document.querySelector('.profile__activity');
const addActivityProfile = document.querySelector('.form__input_type_activity');
const listContainer = document.querySelector('.cards');
const template = document.querySelector('.template');
const buttonAddProfile = document.querySelector('.profile__button-add');
const popupAddCard = document.querySelector('.popup_place_add-card');
const btnClosePopupCard = popupAddCard.querySelector('.popup__close');
const formAddCard = popupAddCard.querySelector('.form');
const popupImage = document.querySelector('.popup_place_image-card');
const btnClosePopupImage = popupImage.querySelector('.popup__close');
const imagePopupCard = document.querySelector('.popup__image-card');
const titlePopupImage = document.querySelector('.popup__title_place_image');
const addCardPlace = document.querySelector('.form__input_type_place');
const addCardLink = document.querySelector('.form__input_type_link-place');
const profileButton = popupProfile.querySelector(config.submitButtonSelector);
const addButton = popupAddCard.querySelector(config.submitButtonSelector);
const inputsProfileForm = Array.from(formElementProfile.querySelectorAll(config.inputSelector));
const inputsAddCardForm = Array.from(formAddCard.querySelectorAll(config.inputSelector));

function openPopup(popup) {
    popup.classList.add('popup_is-active');
    document.addEventListener('keydown', handleClosePopupByEsc);
    popup.addEventListener('mousedown', handleClosePopupOverlay); 
}

function closePopup(popup) {
    popup.classList.remove('popup_is-active');
    document.removeEventListener('keydown', handleClosePopupByEsc);
    popup.removeEventListener('mousedown', handleClosePopupOverlay); 
}

function handleSubmitFormProfile(ev) {
    ev.preventDefault();
    nameProfileInput.textContent = addNameProfileForm.value;
    activityProfileInput.textContent = addActivityProfile.value;
    closePopup(popupProfile);
}

function render() {
    const html = cards.map(getElement);
    listContainer.append(...html);
}

function getElement(item) {
    const getElementTemplate = template.content.cloneNode(true);
    const removeBtn = getElementTemplate.querySelector('.button__remove');
    const likeBtn = getElementTemplate.querySelector('.cards__button');
    const cardsImage = getElementTemplate.querySelector('.cards__image');
    const cardsTitle = getElementTemplate.querySelector('.cards__place');

    cardsImage.src = item.link;
    cardsImage.alt = item.name;
    cardsTitle.textContent = item.name;

    cardsImage.addEventListener('click', () => {
        imagePopupCard.src = item.link;
        imagePopupCard.alt = item.name;
        titlePopupImage.textContent = item.name;
        openPopup(popupImage);
    });

    likeBtn.addEventListener('click', function (evt) {
        evt.target.classList.toggle('cards__button_active');
    });

    removeBtn.addEventListener('click', handleRemoveCard);

    return getElementTemplate;
}

function handleAddCard(ev) {
    ev.preventDefault();
    const element = getElement({ name: addCardPlace.value, link: addCardLink.value });
    listContainer.prepend(element);
    closePopup(popupAddCard);
}

function handleRemoveCard(evt) {
    const cardRemove = evt.target.closest('.cards__item');
    cardRemove.remove();
}

function handleClosePopupOverlay(evt) {
    const popupOpened = document.querySelector('.popup_is-active');
    if (evt.target === evt.currentTarget) {
        closePopup(popupOpened);
    }
}

function handleClosePopupByEsc(evt) {
    const popupOpened = document.querySelector('.popup_is-active');
    if (evt.key === 'Escape') {
        closePopup(popupOpened);
    }
}

linkEditProfile.addEventListener('click', () => {
    addNameProfileForm.value = nameProfileInput.textContent;
    addActivityProfile.value = activityProfileInput.textContent;       
    toggleButtonState(config, inputsProfileForm, profileButton);
    openPopup(popupProfile);
});

popupCloseBtn.addEventListener('click', () => {
    closePopup(popupProfile);
});

formElementProfile.addEventListener('submit', handleSubmitFormProfile);

formAddCard.addEventListener('submit', handleAddCard);

buttonAddProfile.addEventListener('click', () => {
    formAddCard.reset();
    toggleButtonState(config, inputsAddCardForm, addButton);
    openPopup(popupAddCard);
});

btnClosePopupCard.addEventListener('click', () => {
    closePopup(popupAddCard);
});

btnClosePopupImage.addEventListener('click', () => {
    closePopup(popupImage);
});

render();