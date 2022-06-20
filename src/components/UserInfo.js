export default class UserInfo {
    constructor({nameSelector, activitySelector}) {
        this._nameSelector = document.querySelector(nameSelector);
        this._activitySelector = document.querySelector(activitySelector);
    }

    getUserInfo() {
        return {
            nameSelector: this._nameSelector.textContent,
            activitySelector: this._activitySelector.textContent
        }
    }

    setUserInfo(data) {
        this._nameSelector.textContent = data.nameSelector;
        this._activitySelector.textContent = data.activitySelector;
    }
}