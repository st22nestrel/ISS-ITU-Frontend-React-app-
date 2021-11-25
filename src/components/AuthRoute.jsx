import React, { Component } from "react";
import {Route, Navigate} from "react-router-dom";
import Auth from "./Authentificate"

function ProtectedRoute({ children }) {
    const isAuth = Auth.authentificated;
    return isAuth ? children : <Navigate to="/signIn" />;
}

function UnprotectedRoute({ children }) {
    const isAuth = Auth.authentificated;
    return !isAuth ? children : null;
}

export default ProtectedRoute;
export {UnprotectedRoute}


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