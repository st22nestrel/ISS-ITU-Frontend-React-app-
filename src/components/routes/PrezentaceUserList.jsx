import React, {useState} from "react";
import KonferenceFormButton from "../cards/KonferenceDetailsEditable";
import MistnostiTable from "../cards/MistnostiTable";
import { useParams } from 'react-router';
import { useGet } from '../../static/Loaders'
import PrezentaceUserEdit from "../cards/PrezentaceTableUserEdit";

function PrezentaceUserList() {

    const { id } = useParams();


    //+id
    let {data, pending, error} = useGet('http://iisprojekt.fun:8000/uzivatel/prispevky', null)


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
                                <h3 class="card-title text-bold"> Prispevky v konferenciach: </h3>

                                <PrezentaceUserEdit data={data}/>

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

export default PrezentaceUserList;
