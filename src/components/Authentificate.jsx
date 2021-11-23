//import React from "react";

class Authentificate{

    static authentificated = false;
    static token = "";
    static email = "";

    static setEmail(email){
        this.email = email;
    }

    static login(token){
        this.authentificated = true;
        this.token = token;
    }

    static logout(token){
        this.authentificated = false;
        this.token = "";
    }

    static isAuth(){
        return this.authentificated;
    }
    
    static getToken(){
        return this.token;
    }
}

export default Authentificate;