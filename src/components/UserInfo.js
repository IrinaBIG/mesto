export default class UserInfo {

    constructor({nameSelector, activitySelector}) {
        this._nameSelector = document.querySelector(nameSelector);
        this._activitySelector = document.querySelector(activitySelector);
    };

    getUserInfo() {
        return {
            firstname: this._nameSelector.textContent,
            work: this._activitySelector.textContent
        }
    };

    setUserInfo(data) {
        this._nameSelector.textContent = data.firstname;
        this._activitySelector.textContent = data.work;
    }
}