import React, { useState } from "react";
/* import hide from "./../static/index.js"; */
import KonferenceCard from "../cards/KonferenceCard.jsx";
/* import hideShowCardBody from './../static/index.js'; */
import {useGet} from '../../static/Loaders';

function KonferenceList({url}) {

//    let {data, pending, error} = {data: null, pending: null, error: null};
    let {data, pending, error} = useGet('http://iisprojekt.fun:8000/konference/', null)
    let displayErr;



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
                    
                    { data && data.map((konference)=>(
                        <div className="konference-card" key={konference.Nazev}>
                            <KonferenceCard data={konference}/>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    </div>
  );
}

export default KonferenceList;
