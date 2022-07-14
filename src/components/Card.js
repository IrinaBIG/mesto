export class Card {

    constructor(name, link, templateSelector, handleCardClick) {
        this._name = name;
        this._link = link;
        this._template = document.querySelector(templateSelector).content;
        this._handleCardClick = handleCardClick;
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
        this._cradsLike = document.querySelector('.cards__like')
        this._cardsButton.classList.toggle('cards__button_active');
        // button.classList.toggle("is-active");
        const current = Number(this._cradsLike[index].innerHTML);
        const inc = button.classList.contains("is-active") ? 1 : -1;
        this._cradsLike[index].innerHTML = current + inc;
    };
    

    _handleRemoveCard() {
        this._element.remove('cards__item');
    };

    _setEventListeners() {
        this._cardsButton = this._element.querySelector('.cards__button');

        this._cardsButton.addEventListener('click', () => {
            this._handleLikeClick();
        });

        this._element.querySelector('.button__remove').addEventListener('click', () => {
            this._handleRemoveCard();
        });

        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    }
}
