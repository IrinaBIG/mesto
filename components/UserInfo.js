export default class UserInfo {
    constructor ({ name, activity }) {
        this._name = document.querySelector(name);
        // console.log(this._name);
        this._activity = document.querySelector(activity);
        // console.log(this._activity);
        
    }
    

    getUserInfo() {
        return {
            name: this._name.textContent,  
            activity: this._activity.textContent
        }
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._activity.textContent = data.activity;
    }
}

    // addNameProfileForm.value = nameProfileInput.textContent;
    // addActivityProfile.value = activityProfileInput.textContent;