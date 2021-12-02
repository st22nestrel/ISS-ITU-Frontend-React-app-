import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {Post} from '../../static/Loaders';
import { useParams } from 'react-router';
import PrispevekForm from '../PrispevekForm';


export default function KonferenceNew() {

    let {id} = useParams()

    const navigate = useNavigate();
    const [msg, setMsg] = useState(null);
    const userID = window.localStorage.getItem("userID");

    const NewKonf = async details => {

        details.Konference = id;
        details.Uzivatel = userID;

        let {dataToReturn, pending, error} = await Post('http://ituprojekt.fun:8000/konference/'+id+'/novyPrispevek', null, JSON.stringify(details));
    
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
        <div className="KonferenceNew">
            <div class="content container-fluid">
                <div class="row mb-3 justify-content-center" style={{marginTop: 20}}>
                    {/* <!--<main class="form-signin">--> */}
                    <div class="col-4 themed-grid-col">
                        
                        <PrispevekForm Update={NewKonf} setErr={setMsg}/>

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
