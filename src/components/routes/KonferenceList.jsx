import React, { useState } from "react";
/* import hide from "./../static/index.js"; */
import KonferenceCard from "../cards/KonferenceCard.jsx";
import KonferenceCardNotRegistered from "../cards/KonferenceCardNotRegistered.jsx";
/* import hideShowCardBody from './../static/index.js'; */
import {useGet} from '../../static/Loaders';
import Authentificate from "../Authentificate.jsx";


function InnerHtml({datas, isAuth, error, pending}){

    const [data, setData] = useState(datas);

    return(
        <div class="col-12">

            <div class="content container-fluid">
                <div class="row mb-3 " style={{marginTop: 20}}>
                    <div class="col-12 themed-grid-col">
            <div class="form-outline">
                <label class="form-label" for="form1">Zadej název konference</label>
                <input type="search" id="form1" class="form-control" 
                onChange={(e) => setData(datas.filter(konf => e.target.value ? konf.Nazev.toLowerCase().includes(e.target.value.toLowerCase()) : true))}/>
            </div>
                    </div>
                </div>
            </div>

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
                    <h2>Zadanému názvu neodpovídá žádná konference</h2>
                </div>
                }

        </div>
    )
}


function KonferenceList({url}) {

    let {data, pending, error} = useGet(url, null)
    
    const isAuth = Authentificate.isAuth();

    if(data && data.length == 0){
        data = null;
    }

    return (
    <div className="konference">
        <div class="container-fluid content">
            <div class="row mb-3 justify-content-center">

                { error && <div>{ error }</div> }
                { pending && 
                <div>Loading...
                    <div class="spinner-border text-secondary" role="status">
                    </div>
                </div> }

                {data &&
                <InnerHtml datas={data} isAuth={isAuth} error={error} pending={pending}/> 
                }

                {
                !data  &&
                <div className="">
                    <h2>Žádné konference v systému, přidejte nějaké</h2>
                </div>
                }

            </div>
        </div>
    </div>
  );
}

export default KonferenceList;
