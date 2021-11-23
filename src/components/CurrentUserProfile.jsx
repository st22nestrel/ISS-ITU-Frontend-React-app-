import React, {useEffect, useState} from 'react'
import Authentificate from './Authentificate';
import ProfileForm from './ProfileForm';

async function getUserInfo(credentials) {
    return await fetch('http://iisprojekt.fun:8000/uzivatel/'+credentials.email, {
      method: 'GET',
      })
}

function CurrentUserProfile(credentials) {

    const [userInfo, setUserInfo] = useState(null);

    useEffect(()=>{
        async function getUserInfo() {
            let response = await fetch('http://iisprojekt.fun:8000/uzivatel/'+Authentificate.email, {
                method: 'GET',
                })
            if(response.status == 200){
                response = await response.json()
                setUserInfo(response);
            }
        }
        getUserInfo()
    }, [])

    /* let token = Authentificate.getToken();
    let mail = Authentificate.email; */
    /* credentials.email = Authentificate.email; */

    /* async info(){
        return await getUserInfo({email: Authentificate.email});
    } */

    // let userInfo;

    /* const asyncUserInfo = async () =>  {userInfo = await getUserInfo({email: Authentificate.email})}; */
    // async function asyncUserInfo () {
    //     let resp = await getUserInfo({email: Authentificate.email});

    //     return resp;
    // }

    // let userInfo = getUserInfo({email: Authentificate.email});

    // if(userInfo.status == 200)
    //     userInfo = userInfo.json();

    

    const Update = async details => {
        console.log("details");
    }

    return (
    <div className="currentUserProfile">
        <div class="content container-fluid">
            <div class="row mb-3 justify-content-center" style={{marginTop: 20}}>
                <div class="col-sm-4 themed-grid-col">

                    <ProfileForm Update={Update} emailDetail={userInfo}/>

                </div>
            </div>
        </div>
    </div>
    )
}

export default CurrentUserProfile;