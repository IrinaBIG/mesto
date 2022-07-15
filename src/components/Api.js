export default class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
    this._headers = {
      authorization: '90c75bce-c969-4e4d-866d-1b44dc526706',
      'Content-Type': 'application/json'
    }
  }


  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
      // 'authorization': this._token,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Возникла ошибка: ${res.status}`);
      })
  }

  getUser() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Возникла ошибка: ${res.status}`);
      })
  }

  editUserInfo(firstname, work) {
    const body = {
      name: firstname,
      about: work
    };

    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(body)
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Возникла ошибка: ${res.status}`);
      })
  }

  addCard(newPlace, linkPlace) {
    const body = {
      name: newPlace,
      link: linkPlace
    }

    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Возникла ошибка: ${res.status}`);
      })
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Возникла ошибка: ${res.status}`);
      })
  }

  countsLikes() {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Возникла ошибка: ${res.status}`);
      })
  }

  addLike() {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'PUT',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Возникла ошибка: ${res.status}`);
      })
  }

  deleteLike() {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Возникла ошибка: ${res.status}`);
      })
  }

  updateAvatar(avatarPlace) {
    const body = {
      avatar: avatarPlace
    };
    return fetch(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(body)
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Возникла ошибка: ${res.status}`);
      })
  }
}


