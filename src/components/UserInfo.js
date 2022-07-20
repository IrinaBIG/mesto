export default class UserInfo {

    constructor({ nameSelector, activitySelector, avatarSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._activityElement = document.querySelector(activitySelector);
        // console.log(`'${avatarSelector}'`);
        this._avatarElement = document.querySelector(avatarSelector);     
        this.getUserInfo = this.getUserInfo.bind(this);
        this.setUserInfo = this.setUserInfo.bind(this);

    };

    getUserInfo() {
        return {
            firstname: this._nameElement.textContent,
            work: this._activityElement.textContent
        }
    };

    setUserInfo({ name, about, avatar, _id }) {
        this._nameElement.textContent = name;
        this._activityElement.textContent = about;
        this._avatarElement.style.backgroundImage = `url(${avatar})`;
        this._name = name;
        this._about = about;
        this._avatar = avatar;
        // console.dir(this._avatarElement);
        this._id = _id;
    }
    
    getUserAvatar () {
        return {
            avatar: this._avatar,
        }
    }

    getUserId() {
        return this._id;
    }
}