import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {Post} from '../../static/Loaders';
import { useParams } from 'react-router';
import PrispevekForm from '../PrispevekForm';
import RezervaceFormNotRegistered from '../RezervaceFormNotRegistered';
import { useGet } from '../../static/Loaders';
import Authentificate from '../Authentificate';


export default function KonferenceNew() {

    

    return (

        data &&
        <div className="KonferenceRezervace">
            <div class="content container-fluid">
                <div class="row mb-3 justify-content-center" style={{marginTop: 20}}>
                    {/* <!--<main class="form-signin">--> */}
                    <div class="col-4 themed-grid-col">
                        

                        {
                            !isAuth ?
                            <RezervaceFormNotRegistered konfData={data}/> :
                            null

                        }

                        { msg && 
                        <div>
                            <h2>Error: {msg}</h2>
                            {/* <div class="spinner-border text-secondary" role="status">
                            </div> */}
                        </div>
                        }

                    </div>
                </div>
            </div>
        </div>      
        
    );
}
