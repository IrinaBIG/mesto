export default class UserInfo {

    constructor({nameSelector, activitySelector}) {
        this._nameElement = document.querySelector(nameSelector);
        this._activityElement = document.querySelector(activitySelector);
    };

    getUserInfo() {
        return {
            firstname: this._nameElement.textContent,
            work: this._activityElement.textContent
        }
    };

    setUserInfo(data) {
        this._nameElement.textContent = data.firstname;
        this._activityElement.textContent = data.work;
    }
}