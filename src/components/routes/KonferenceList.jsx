import React, { useState } from "react";
/* import hide from "./../static/index.js"; */
import KonferenceCard from "../cards/KonferenceCard.jsx";
import KonferenceCardNotRegistered from "../cards/KonferenceCardNotRegistered.jsx";
/* import hideShowCardBody from './../static/index.js'; */
import {useGet} from '../../static/Loaders';
import Authentificate from "../Authentificate.jsx";

function KonferenceList({url}) {

    let {data, pending, error} = useGet(url, null)
    let displayErr;
    const isAuth = Authentificate.isAuth();


    if(data && data.length == 0){
        data = null;
    }

    return (
    <div className="konference">
        <div class="container-fluid content">
            <div class="row mb-3 justify-content-center">
                <div class="col-12">


                    { error && <div>{ error }</div> }
                    { pending && 
                      <div>Loading...
                        <div class="spinner-border text-secondary" role="status">
                        </div>
                      </div> }
                    
                    { 
                        data && isAuth && data.map((konference)=>(
                            <div className="konference-card" key={konference.Nazev}>
                                <KonferenceCard data={konference}/>
                            </div>
                    ))}

                    { 
                        data && !isAuth && data.map((konference)=>(
                            <div className="konference-card" key={konference.Nazev}>
                                <KonferenceCardNotRegistered data={konference}/>
                            </div>
                    ))}

                    {
                        !data  &&
                        <div className="">
                            <h2>Žádné konference v systému, zadejte nejaké</h2>
                        </div>
                    }

                </div>
            </div>
        </div>
    </div>
  );
}

export default KonferenceList;
