import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {Post} from '../../static/Loaders';
import { useParams } from 'react-router';
import PrispevekForm from '../PrispevekForm';
import RezervaceFormNotRegistered from '../RezervaceFormNotRegistered';
import { useGet } from '../../static/Loaders';
import Authentificate from '../Authentificate';


export default function KonferenceNew() {

    let {id} = useParams()

    let {data, pending, error} = useGet('http://iisprojekt.fun:8000/konference/' + id, null);

    const navigate = useNavigate();
    const [msg, setMsg] = useState(null);

    const userID = window.localStorage.getItem("userID");
    const isAuth = Authentificate.isAuth();

    const NewKonf = async details => {

        details.Konference = id;
        details.Uzivatel = userID;

        let {dataToReturn, pending, error} = await Post('http://iisprojekt.fun:8000/konference/'+id+'/novyPrispevek', null, JSON.stringify(details));
    
        if(error) {
            //reload get user info again
            setMsg(error);
        }
        else{
            //TODO navigate to created konference
            setMsg(null);
            navigate('/konference/'+id);
        }
    }

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
