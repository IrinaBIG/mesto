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

//  getUserCards() {
//   return fetch(`${this._url}/cards/0545d24564d46fc92613a7bd`, {
//     headers: this._headers
//       // 'authorization': this._token,
//   })
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//       return Promise.reject(`Возникла ошибка: ${res.status}`);
//     })
//  }

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

  editAvatar(firstname, work) {
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

  addCard (newPlace, linkPlace) {
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
}

