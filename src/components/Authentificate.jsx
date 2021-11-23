//import React from "react";

export default class Authentificate{
    static instance = Authentificate.instance || new Authentificate();

    constructor(){
        this.authentificated = false;
        this.token = "";
    }

    login(token){
        this.authentificated = true;
        this.token = token;
    }

    logout(token){
        this.authentificated = false;
        this.token = "";
    }

    isAuth(){
        return this.authentificated;
    }
    
    getToken(){
        return this.token;
    }
}

//export default new Authentificate();