//import React from "react";

import { Navigate } from "react-router";

class Authentificate{

    //static wit = window.localStorage.setItem("token", null);
    static authentificated = window.localStorage.getItem("token") || false;
    static token = window.localStorage.getItem("token");
    static email = "";

    static setEmail(email){
        this.email = email;
    }

    static login(token){
        this.authentificated = true;
        this.token = token;
        window.localStorage.setItem("token", token);
        window.location.reload(false);
    
    }
    static setId(details){
        window.localStorage.setItem("userID", details.ID);
        window.localStorage.setItem("isAdmin", details.Role === "admin");
    }

    static logout(){
        window.localStorage.setItem("token", "");
        window.localStorage.setItem("userID", "")
        this.authentificated = false;
        this.token = "";
        window.location.reload(false);
    }

    static isAuth(){
        return this.authentificated;
    }
    
    static getToken(){
        return window.localStorage.getItem("token")
    }

    static getUserId(){
        return window.localStorage.getItem("userID")
    }

    static getIsAdmin(){
        return window.localStorage.getItem("userID")
    }
}

export default Authentificate;