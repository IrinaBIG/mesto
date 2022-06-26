export default class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
    this._headers = {
      authorization: '95e5bb8d-852f-4443-ae3b-fcac38693ef0',
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


  getAvatar() {
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

  editAvatar(nameUser, aboutUser) {
    const body = {
      name: nameUser,
      about: aboutUser
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


  addCard (cardName, linkPlace) {
    const body = {
      name: cardName,
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
}

