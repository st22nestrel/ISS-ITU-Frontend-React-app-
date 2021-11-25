import React, {useEffect, useState} from 'react'
import Authentificate from './Authentificate';
import ProfileForm from './ProfileForm';
import {useGet} from './../static/Loaders.jsx'

function CurrentUserProfile(credentials) {

    const {data: userInfo, pending, error} = useGet('http://iisprojekt.fun:8000/uzivatel/'+Authentificate.email)

    const Update = async details => {
        console.log("details");
    }

    return (
    <div className="currentUserProfile">
        <div class="content container-fluid">
            <div class="row mb-3 justify-content-center" style={{marginTop: 20}}>
                <div class="col-sm-4 themed-grid-col">

                    { error && <div>{ error }</div> }
                    { pending && 
                      <div>Loading...
                        <div class="spinner-border text-secondary" role="status">
                        </div>
                      </div> }
                    {userInfo && <ProfileForm Update={Update} userInfo={userInfo}/>}

                </div>
            </div>
        </div>
    </div>
    )
}

export default CurrentUserProfile;