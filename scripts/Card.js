import { openPopup } from './Utils/utils.js';

export class Card {
    _name;
    _link;
   
    constructor(name, link, templateSelector) {
        this._name = name;
        this._link = link;
        this._template = templateSelector;
    }

    _getTemplate() {
        const cardElement = this._template.querySelector('.cards__item').cloneNode(true);
        return cardElement;
    };

    generateCard() {
        // Запишем разметку в приватное поле _element. 
        // Так у других элементов появится доступ к ней.
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.cards__image');
        this._cardPlace = this._element.querySelector('.cards__place');
        this._setEventListeners();
        // Добавим данные
        this._cardImage.src = this._link;
        this._cardPlace.textContent = this._name;
        this._cardPlace.alt = this._name;
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
        this._popupImage.src = this._link;
        this._popupImage.alt = this._name;
        this._popupTitle.textContent = this._name;
        openPopup(document.querySelector('.popup_place_image-card'));
    };

    _setEventListeners() {
        this._popupImage = document.querySelector('.popup__image-card');
        this._popupTitle = document.querySelector('.popup__title_place_image');
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