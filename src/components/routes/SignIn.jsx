import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import LoginForm from "../LoginForm";
import RegistrationForm from "../RegistrationForm";
import PropTypes from 'prop-types';
import './SignIn.css';
import Auth from "../Authentificate"
import {Get} from "../../static/Loaders"

//TODO
async function registerUser(credentials) {
    return fetch('http://iisprojekt.fun:8000/uzivatel/registrace', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
   }

async function loginUser(credentials) {
    return fetch('http://iisprojekt.fun:8000/uzivatel/prihlaseni', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
   }

function SignIn() {
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const Login = async details => {
        console.log("details");

        //TODO validate email lil
        if(details.Email && details.Heslo){
            
            //send to server
            let answer = await loginUser(details);

            //validate if user exist/ answer from server
            if(answer.data){
                //we assume this does not throw error
                let { dataToReturn, pending, error } = Get('http://iisprojekt.fun:8000/uzivatel/', null);

                Auth.login(answer.data);
                Auth.setId(dataToReturn);
                Auth.setEmail(details.Email);
                console.log("redirected");
                navigate('/konference');
            }
            //we cannot login, user does not exist
            else{
                //does not work, but we give a fuck
                console.log(answer.message)
                console.log("not redirected");
            }
        }
    }

    const Registration = async details => {
        console.log("details");

        //TODO validate email lil
        if(details.Email && details.Heslo && details.Jmeno && details.Prijmeni){
            //send to server
            let answer = await registerUser(details);

            //user succesfully registered
            if(answer.status === 201){
              //login him TODO maybe display some message
              let answer = await loginUser(details);

              if(answer.data){
                Auth.login(answer.data);
                Auth.setEmail(details.Email);
                console.log("redirected");
                navigate('/konference');
              }
              else
                console.log("not redirected");
            }
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
