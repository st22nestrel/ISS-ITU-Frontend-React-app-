import React from 'react';
import {useNavigate} from 'react-router-dom';
import { NavLink } from "react-router-dom";


class KonferenceCard extends React.Component{
    state = {
        open: false
    }

    konference = this.props.data;
    

    render(){

        let card;
        let konference = this.props.data;
        const opened = this.state.open;

        if (opened){
            card = (
        <div className="cardBody">
            <nav id="navbar" class="navbar navbar-light bg-light px-3">
                <a class="navbar-brand"></a>
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <NavLink className="nav-link btn-warning" to={"/konference/"+konference.Nazev+"/prispevkySchvalene"}>
                            Rezervovat vstupenku
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link btn-primary" to={"/konference/"+konference.Nazev+"/prispevkySchvalene"}>
                            Zobraz harmonogram
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link btn-primary" to={"/konference/notRegistered/"+konference.Nazev}>
                            Zobraz mistnosti a příspěvky
                        </NavLink>
                    </li>
                </ul>
            </nav>
            
            <div class="bg-light px-3">
                <p>Popis: {konference.Popis}</p>
                <p>Obor: {konference.Obor}</p>
                <p>Zeme: {konference.Zeme}</p>
                <p>Mesto: {konference.Mesto}</p>
                <p>Misto: {konference.Misto}</p>
                <p>Zacatek: {konference.Zacatek_datum}, {konference.Zacatek_cas}</p>
                <p>Konec: {konference.Konec_datum}, {konference.Konec_cas}</p>
                <p>Poplatek: {konference.Poplatek}</p>
                <p>Vstupné: {konference.Cena_vstup}</p>
                <p>Kapacita: {konference.Kapacita}</p>
                <p>Další údaje: {konference.Doplnujici_udaje}</p>
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
                <h3 class="card-title text-bold"> {konference.Nazev} </h3>
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

export default KonferenceCard;