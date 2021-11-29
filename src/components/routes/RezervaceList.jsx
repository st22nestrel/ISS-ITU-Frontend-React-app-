import React, {useState} from "react";
import RezervaceTable from "../cards/RezervaceTable";
import { useParams } from 'react-router';
import { useGet } from '../../static/Loaders'


//bude iba pre poradatele

function RezervaceList({poradatel}) {

    const { id } = useParams();

    const submitHandler = e => {
        e.preventDefault();
    }

return (
    <div className="Rezervace">
        <div class="content container-fluid">
            <div class="row mb-3 justify-content-center" style={{marginTop: 20}}>
                {/* <!--<main class="form-signin">--> */}
                <div class="col-12 themed-grid-col">
                    
                <RezervaceTable Konference={id} poradatel={poradatel} ></RezervaceTable>

                </div>
            </div>
        </div>
    </div>
    
  );
}

export default RezervaceList;
