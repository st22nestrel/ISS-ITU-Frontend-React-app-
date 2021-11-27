import React, {useState} from "react";
import KonferenceFormButton from "./cards/KonferenceFormDetail";
import MistnostiTable from "./cards/MistnostiTable";
import { useParams } from 'react-router';
import { useGet } from '../static/Loaders'

function KonferenceDetail() {

    const { id } = useParams();


    //+id
    let {data, pending, error} = useGet('http://iisprojekt.fun:8000/konference/' + id, null)


    const submitHandler = e => {
        e.preventDefault();

        
    }

return (
    <div className="Konference">
        <div class="content container-fluid">
            <div class="row mb-3 justify-content-center" style={{marginTop: 20}}>
                {/* <!--<main class="form-signin">--> */}
                <div class="col-12 themed-grid-col">
                    
                {
                    data && 
                    <div>
                        <div class="card">
                            <div class="card-header card-header-flex">
                                <h3 class="card-title text-bold"> Detaily konference: {data.Nazev} </h3>

                                <KonferenceFormButton data={data}></KonferenceFormButton>

                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header card-header-flex">
                                <h3 class="card-title text-bold"> Místnosti </h3>

                                <MistnostiTable data={data}></MistnostiTable>

                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header card-header-flex">
                                <h3 class="card-title text-bold"> TODO </h3>

                                <KonferenceFormButton data={data}></KonferenceFormButton>

                            </div>
                        </div>
                    </div>
                }
                

                </div>
            </div>
        </div>
    </div>
    
  );
}

export default KonferenceDetail;
