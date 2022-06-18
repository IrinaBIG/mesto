export default class UserInfo {
    constructor({ nameSelector, activitySelector }) {
        this._nameSelector = nameSelector;
        this._activitySelector = activitySelector;
        this._userName = document.querySelector('.profile__name');
        this._userActivity = document.querySelector('.profile__activity');
    }

    getUserInfo() {
        return {
            nameSelector: this._nameSelector.value = this._userName.textContent,
            activitySelector: this._activitySelector.value = this._userActivity.textContent
        }
    }

    setUserInfo() {
        this._userName.textContent = this._nameSelector.value;
        this._userActivity.textContent = this._activitySelector.value;
    }
}