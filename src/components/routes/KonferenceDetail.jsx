import React, {useState} from "react";
import KonferenceDetailsEditable from "../cards/KonferenceDetailsEditable";
import KonferenceDetailsReadOnly from "../cards/KonferenceDetailsReadOnly";
import MistnostiTable from "../cards/MistnostiTable";
import MistnostiTableReadOnly from "../cards/MistnostiTableReadOnly";
import PrezentaceTable from "../cards/PrezentaceTable";
import PrezentaceTableReadOnly from "../cards/PrezentaceTableReadOnly";
import { useParams } from 'react-router';
import { useGet } from '../../static/Loaders'


function KonferenceDetail() {

    const { id } = useParams();


    //+id
    let {data, pending, error} = useGet('http://iisprojekt.fun:8000/konference/' + id, null)

    let jePoradatel = data ? window.localStorage.getItem("userID") == data.Poradatel : null

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
                    (
                    <div>
                        {  //detaily Konference
                        jePoradatel ?
                        <div class="card">
                            <div class="card-header card-header-flex">
                                <h3 class="card-title text-bold"> Detaily konference: {data.Nazev} </h3>

                                <KonferenceDetailsEditable data={data}></KonferenceDetailsEditable>

                            </div>
                        </div> :
                        <div class="card">
                            <div class="card-header card-header-flex">
                                <h3 class="card-title text-bold"> Detaily konference: {data.Nazev} </h3>

                                <KonferenceDetailsReadOnly data={data}></KonferenceDetailsReadOnly>

                            </div>
                        </div>
                        }

                        {  //Mistnosti
                        jePoradatel ?
                        <div class="card">
                            <div class="card-header card-header-flex">
                                <h3 class="card-title text-bold"> Místnosti </h3>

                                <MistnostiTable Konference={data.Nazev}></MistnostiTable>

                            </div>
                        </div> :
                        <div class="card">
                            <div class="card-header card-header-flex">
                                <h3 class="card-title text-bold"> Místnosti </h3>

                                <MistnostiTableReadOnly Konference={data.Nazev}></MistnostiTableReadOnly>

                            </div>
                        </div>
                        }

                        {  //Prezentace
                            jePoradatel ?
                            <div class="card">
                                <div class="card-header card-header-flex">
                                    <h3 class="card-title text-bold"> Prispevky </h3>
                                    <PrezentaceTable Konference={data.Nazev}
                                    url={'http://iisprojekt.fun:8000/konference/'+id+'/prispevky'}
                                    ></PrezentaceTable>
                                </div>
                            </div>
                            :
                            <div class="card">
                                <div class="card-header card-header-flex">
                                    <h3 class="card-title text-bold"> Prispevky </h3>
                                    <PrezentaceTableReadOnly Konference={data.Nazev}></PrezentaceTableReadOnly>
                                </div>
                            </div>
                        }

                        {  //Prezentace neschvalene
                            jePoradatel ?
                            <div class="card">
                                <div class="card-header card-header-flex">
                                    <h3 class="card-title text-bold"> Prispevky </h3>
                                    <PrezentaceTable Konference={data.Nazev}
                                    url={'http://iisprojekt.fun:8000/konference/'+id+'/prispevky/neschvalene'}
                                    ></PrezentaceTable>
                                </div>
                            </div>
                            :
                            <div class="card">
                                <div class="card-header card-header-flex">
                                    <h3 class="card-title text-bold"> Prispevky </h3>
                                    <PrezentaceTableReadOnly Konference={data.Nazev}></PrezentaceTableReadOnly>
                                </div>
                            </div>
                        }

                        
                    </div>
                    )
                    
                }
                

                </div>
            </div>
        </div>
    </div>
    
  );
}

export default KonferenceDetail;
