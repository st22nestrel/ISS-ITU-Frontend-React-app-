import React from 'react';
import {useNavigate} from 'react-router-dom';
import { NavLink } from "react-router-dom";


class YesAdmin extends React.Component{
    state = {
        open: false
    }

    uzivatelia = this.props.allUsers;
    

    render(){

        let card;
        let uzivatelia = this.props.allUsers;
        const opened = this.state.open;

        if (opened){
            card = (
        <div className="cardBody">           
            <div class="bg-light px-3">
                <p>ID: {uzivatelia.ID}</p>
                <p>Jmeno: {uzivatelia.Jmeno}</p>
                <p>Prijmeni: {uzivatelia.Prijmeni}</p>
                <p>Heslo: {uzivatelia.Heslo}</p>
                <p>Titul: {uzivatelia.Titul}</p>
                <p>Role: {uzivatelia.Role}</p>
                <p>Organizace: {uzivatelia.Organizace}</p>
                <p>Obor: {uzivatelia.Obor}</p>
                <p>Zeme: {uzivatelia.Zeme}</p>
                <p>Datum narozeni: {uzivatelia.Datum_narozeni}</p>
                <p>Email: {uzivatelia.Email}</p>
                <p>Tel. cislo: {uzivatelia.TelCislo}</p>
            </div>
                
            {/* {konference.map((el)=>(<p>{el}</p>))} */}
        </div>)
        } else {
            card = null;
        }

        //(() => this.setState({ open: true/* !this.state.open */ })
        return (
        <div class="card">
            <div class="card-header card-header-flex">
                <h3 class="card-title text-bold"> {uzivatelia.ID} </h3>
                <button class="btn btn-round btn-fill btn-primary show-hide-btn-sm"
                        onClick={(() => this.setState({ open: !this.state.open }))}>
                    <i class="nc-icon nc-stre-up"></i>
                </button>
            </div>
    
            {card}

        </div>
        )
    }

}

export default YesAdmin;