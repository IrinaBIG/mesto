import { openPopup } from './utilits.js';
// import { closePopup } from './utilits.js';

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

export class Card {
    _name;
    _link;
    _template;

    constructor(name, link, template) {
        this._name = name;
        this._link = link;
        this._template = template;
    }

    _getTemplate() {
        const cardElement = document.querySelector('.template').content.querySelector('.cards__item').cloneNode(true);
        return cardElement;
    };

    generateCard() {
        // Запишем разметку в приватное поле _element. 
        // Так у других элементов появится доступ к ней.
        this._element = this._getTemplate();
        this._setEventListeners();
        // Добавим данные
        this._element.querySelector('.cards__image').src = this._link;
        this._element.querySelector('.cards__place').textContent = this._name;
        this._element.querySelector('.cards__place').alt = this._name;
        // Вернём элемент наружу
        return this._element;
    }

    _handleLikeClick() {
        this._element.querySelector('.cards__button').classList.toggle('cards__button_active');
    };

    _handleRemoveCard() {
        this._element.remove('cards__item');
    };

    _handleOpenImage() {
        document.querySelector('.popup__image-card').src = this._link;
        document.querySelector('.popup__title_place_image').textContent = this._name;
        document.querySelector('.popup__image-card').alt = this._name;
        openPopup(document.querySelector('.popup_place_image-card'));
    };

    _setEventListeners() {

        this._element.querySelector('.cards__button').addEventListener('click', () => {
            this._handleLikeClick();
        });

        this._element.querySelector('.button__remove').addEventListener('click', () => {
            this._handleRemoveCard();
        });

        this._element.querySelector('.cards__image').addEventListener('click', () => {
            this._handleOpenImage();
        });
    }
} 