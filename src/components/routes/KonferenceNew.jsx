import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {Post} from '../../static/Loaders';
import KonferenceForm from '../KonferenceForm';




export default function KonferenceNew() {

    const navigate = useNavigate();
    const [msg, setMsg] = useState(null);

    

    const NewKonf = async details => {

        let {dataToReturn, pending, error} = await Post('http://ituprojekt.fun:8000/konference/vytvorit', null, JSON.stringify(details));
    
        if(error) {
            //reload get user info again
            setMsg(error);
        }
        else{
            //TODO navigate to created konference
            setMsg(null);
            navigate('/konference/'+details.Nazev);
        }
    }

    return (
        <div className="KonferenceNew">
            <div class="content container-fluid">
                <div class="row mb-3 justify-content-center" style={{marginTop: 20}}>
                    {/* <!--<main class="form-signin">--> */}
                    <div class="col-4 themed-grid-col">
                        
                        <KonferenceForm Update={NewKonf} setErr={setMsg}/>

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
