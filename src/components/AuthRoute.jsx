import React, { Component } from "react";
import {Route, Navigate} from "react-router-dom";
import Auth from "./Authentificate"

function ProtectedRoute({ noAuth: NoAuth = false, children }) {
    const isAuth = Auth.authentificated;
    if (NoAuth && isAuth){
        return;
    }
    else{
        return isAuth ? children : <Navigate to="/signIn" />;
    }
}

export default ProtectedRoute;


/* export const ProtectedRoute = ({ component: Component, ...otherParams}) => {
    return(
        <Route
        {...otherParams}
        render={props => {
            if(Auth.isAuth()){
                return <Component {...props} />;
            }
            else {
                return <Navigate to={
                {
                    pathname: "/SignIn",
                    state: {
                        from: props.location
                    }
                }
                }></Navigate>
            }
        }}
        ></Route>
    );
}; */