import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import PropTypes from 'prop-types';
import './SignIn.css';

//TODO
async function registerUser(credentials) {
    return fetch('http://iisprojekt.fun:8000/uzivatel/registrace', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }


async function loginUser(credentials) {
    return fetch('http://iisprojekt.fun:8000/uzivatel/prihlaseni', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({Email: credentials.email, Heslo: credentials.password, Logon: credentials.Email})
    })
      .then(data => data.json())
   }

function SignIn() {

    const [loginInfo, setLoginInfo] = useState({token: ""});
    const [error, setError] = useState("");
    

    const navigate = useNavigate();

    const Login = async details => {
        console.log("details");

        //TODO validate email lil
        if(details.email && details.password){
            
            //send to server
            let answer = await loginUser(details);

            //validate if user exist/ answer from server
            if(answer.data){
                //if yes, yey чувак
                setLoginInfo({token: answer.data});
                console.log("redirected");
                navigate('/konference');
            }
            //we cannot loogin, user does not exist
            else{
                //does not work, but we give a fuck
                console.log(answer.message)
                console.log("not redirected");
            }
        }
    }

    const Registration = details => {
        console.log("details");

        //TODO validate email lil
        if(details.email && details.password){
            //send to server

            //validate if user exist

                //if yes, jump da muthafacker
                setLoginInfo({token: "some token from server"});
        }

    }

  return (
    <div className="signIn">
        <div class="content container-fluid">
            <div class="row mb-3 justify-content-center" style={{marginTop: 20}}>
                {/* <!--<main class="form-signin">--> */}
                <div class="col-sm-4 themed-grid-col">

                    <LoginForm Login={Login} error={error}/>

                </div>
                <div class="col-sm-4 themed-grid-col">
                    
                    <RegistrationForm Registration={Registration} error={error}/>

                </div>
            </div>
        </div>
    </div>  
    
  );
}

export default SignIn;
