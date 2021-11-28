import React, {useState} from "react";
import KoferenceDetailsReadOnly from "../cards/KoferenceDetailsReadOnly";
import MistnostiTableReadOnly from "../cards/MistnostiTableReadOnly";
import PrezentaceTableReadOnly from "../cards/PrezentaceTableReadOnly";
import { useParams } from 'react-router';
import { useGet } from '../../static/Loaders'

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

                                <KoferenceDetailsReadOnly data={data}></KoferenceDetailsReadOnly>

                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header card-header-flex">
                                <h3 class="card-title text-bold"> Místnosti </h3>

                                <MistnostiTableReadOnly Konference={data.Nazev}></MistnostiTableReadOnly>

                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header card-header-flex">
                                <h3 class="card-title text-bold"> Prispevky </h3>

                                <PrezentaceTableReadOnly></PrezentaceTableReadOnly>

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
