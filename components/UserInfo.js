export default class UserInfo {
    constructor ( {name, job}) {
        this._name = document.querySelector(name);
        this._job = document.querySelector(job);
    }
    
    getUserInfo () {
        return {
            name: this._userName.textContent,
            job: this._userJob.textContent
        }
    }

    setUserInfo(userData) {
        this._userName.textContent = userData.name;
        this._userJob.textContent = userData.job;
    }

}