export default class UserInfo {

    constructor({nameSelector, activitySelector}) {
        this._nameElement = document.querySelector(nameSelector);
        this._activityElement = document.querySelector(activitySelector);
        // this._avatarElement = document.querySelector(avatarSelector);
    };

    getUserInfo() {
        return {
            firstname: this._nameElement.textContent,
            work: this._activityElement.textContent,
            // avatar: this._avatarElement.src
        }
    };

    setUserInfo(data) {
        this._nameElement.textContent = data.firstname;
        this._activityElement.textContent = data.work;
    }
}