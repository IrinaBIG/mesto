export default class Api {
    constructor(url, token) {
      this._url = url;
      this._token = token;
    }
  

    getCards() {
        return fetch(this._url, {
          headers: {
            // authorization: this._token,
            authorization: '95e5bb8d-852f-4443-ae3b-fcac38693ef0',
            'Content-Type': 'application/json'
          }
        })
            .then((res) =>  {
              if (res.ok) {
                return res.json();
              }
              return Promise.reject('Возникла ошибка');
            })
    }
  }