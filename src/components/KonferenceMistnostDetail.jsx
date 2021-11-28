import React, {useState} from "react";
import PrezentaceTable from "./cards/PrezentaceTable";
import { useParams } from 'react-router';
import { useGet } from '../static/Loaders'

function KonferenceMistnostDetail() {

    const { id, kod } = useParams();


    //+id
    //let {data, pending, error} = useGet('http://iisprojekt.fun:8000/konference/'+id +'/'+'kod', null)

    let data

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
                    (data || true) && 
                    <div>
                        <div class="card">
                            <div class="card-header card-header-flex">
                                <h3 class="card-title text-bold"> Prezentace v místnosti + {kod} v konferenci {id} </h3>

                                <PrezentaceTable Konference={id} Mistnost={kod}></PrezentaceTable>

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

export default KonferenceMistnostDetail;
