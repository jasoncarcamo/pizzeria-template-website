const UserServices = {
    getToken(){
        return window.localStorage.getItem("pizzeria-template-user");
    },
    hasToken(){
        return this.getToken();
    },
    saveToken(token){
        return window.localStorage.setItem("pizzeria-template-user", token);
    },
    removeToken(){
        return window.localStorage.removeItem("pizzeria-template-user");
    }
};

module.exports = UserServices;