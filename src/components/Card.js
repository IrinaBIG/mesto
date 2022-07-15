export class Card {

    constructor(name, link, templateSelector, handleCardClick, deleteCardHendler) {
        this._name = name;
        this._link = link;
        // this._id = id;
        this._template = document.querySelector(templateSelector).content;
        this._handleCardClick = handleCardClick;
        this._deleteCardHendler = deleteCardHendler;
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
        this._cardImage.alt = this._name;
        // Вернём элемент наружу
        return this._element;
    }

    _handleLikeClick() {
        this._cardsCounter = document.querySelector('.cards__counter')
        this._cardsButton.classList.toggle('cards__button_active');
        // if (this._cardsButton.classList.contains('cards__button_active')) {
        //     this._cardsCounter =+1;
        // } else {
        //     this._cardsCounter =-1;
        // }
        
    };
    
    // getId() {
    //     return this._id;
    // }

    // removeCard() {
    //     this._element.remove('cards__item');
    // };

    _setEventListeners() {
        this._cardsButton = this._element.querySelector('.cards__button');

        this._cardsButton.addEventListener('click', () => {
            this._handleLikeClick();
        });

        this._element.querySelector('.button__remove').addEventListener('click', () => {
            this._deleteCardHendler(this);
        });

        // this._element.querySelector('.button__remove').addEventListener('click', () => {
        //     this._handleRemoveCard();
        // });

        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    }
}
