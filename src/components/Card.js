export default class Card {

    constructor({ name, link, _id, likes, owner: { _id: ownerId } }, userId, templateSelector, { openViewHandler, deleteCardHandler, cardLikeHandler }) {
        this._name = name;
        this._link = link;
        this._id = _id;
        this._likes = likes;
        this._isOwner = userId === ownerId;
        this._template = document.querySelector(templateSelector).content;
        this._handleOpenView = openViewHandler;
        this._handleDeleteCard = deleteCardHandler;
        this._userId = userId;
        this._handleCardLike = cardLikeHandler;
        this.generateCard = this.generateCard.bind(this);
        this.setLikes = this.setLikes.bind(this);
        this.removeCard = this.removeCard.bind(this);
        this._handleLikeClick = this._handleLikeClick.bind(this);
        this._handleDeleteClick = this._handleDeleteClick.bind(this);
        this._handleCardClick = this._handleCardClick.bind(this);
    }

    _getTemplate() {
        const cardElement = this._template.querySelector('.cards__item').cloneNode(true);
        return cardElement;
    };

    generateCard() {
        // Запишем разметку в приватное поле _element. 
        // Так у других элементов появится доступ к ней.
        this._element = this._getTemplate();
        this._cardsButton = this._element.querySelector('.cards__button');
        this._cardsCounter = this._element.querySelector('.cards__counter');
        this._removeButton = this._element.querySelector('.button__remove');
        this._cardImage = this._element.querySelector('.cards__image');
        this._cardPlace = this._element.querySelector('.cards__place');
        this._setEventListeners();
        // Добавим данные
        this._cardImage.src = this._link;
        this._cardPlace.textContent = this._name;
        this._cardImage.alt = this._name;
        this._renderLikes();
        // Вернём элемент наружу
        return this._element;
    }

    _isLiked() {
        return this._likes.map((item) => item._id).includes(this._userId)
    }

    _renderLikes(){
        if (this._isLiked()) {
            this._cardsButton.classList.add('cards__button_active');
        } else {
            this._cardsButton.classList.remove('cards__button_active');
        }
        this._cardsCounter.textContent = this._likes.length;

    }

    _handleLikeClick() {
    //   console.log(`this._id = '${this._id}', this._isLiked() = '${this._isLiked()}'.`);
        this._handleCardLike(this._id, this._isLiked(), this.setLikes);
        
    };
    
    setLikes(newLikes){
        this._likes = newLikes;
        this._renderLikes();
    }
  
    removeCard() {
        this._element.remove('cards__item');
    };

    _handleDeleteClick () {
        this._handleDeleteCard(this._id, this.removeCard);
        
    }

    _handleCardClick () {
        this._handleOpenView(this._name, this._link);
    };

    _setEventListeners() {
        this._cardsButton.addEventListener('click', () => {
            this._handleLikeClick();
        });

        if (this._isOwner) {
            this._removeButton.addEventListener('click', this._handleDeleteClick);
        } else {
            this._removeButton.remove();
        }
        this._cardImage.addEventListener('click', this._handleCardClick);
    }
}