/**
 * ITU - projekt, VUT FIT Brno
 * @author Timotej Ponek, xponek00
 * @file KonferenceCard.jsx
 */
import React from 'react';
import { NavLink } from "react-router-dom";
import {useGet, Put, Post} from '../../static/Loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

/**
 * Class representing card containg conference details and other tabs related to conference 
 * -> logged in user
 */
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
                        <NavLink className="nav-link btn-warning" to={
                            "/konference/"+konference.Nazev+"/rezervace"}>
                            Rezervovat vstupenku
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link btn-outline-primary" to={
                            "/konference/"+konference.Nazev+"/harmonogram"}>
                            Harmonogram
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link btn-primary" to={"/konference/"+konference.Nazev+"/novyPrispevek"}>
                            Přidej příspěvek
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link btn-primary" to={"/konference/"+konference.Nazev}>
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
                <p>Konec:  {konference.Konec_cas}</p>
                <p>Poplatek: {konference.Poplatek}</p>
                <p>Vstupné: {konference.Cena_vstup}</p>
                <p>Kapacita: {konference.Kapacita}</p>
                <p>Další údaje: {konference.Doplnujici_udaje}</p>
            </div>
                
        </div>)
        } else {
            card = null;
        }

        return (
        <div class="card">
            <div class="card-header card-header-flex">
                <h3 class="card-title text-bold"> {konference.Nazev} </h3>
                <button class="btn btn-round btn-fill btn-primary show-hide-btn-sm"
                        onClick={(() => this.setState({ open: !this.state.open }))}>
                    <i class="nc-icon nc-stre-up"></i>
                    {opened ? "Skrýt" : "Zobrazit"}
                </button>
                {
                konference.oblibena ? 
                    <button class="likeBtn">
                        <FontAwesomeIcon icon={faHeart} style={{ color: "gray" }} />
                    </button>
                    : 
                    <button class="likeBtn">
                        <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
                    </button>
                }
            </div>
    
            {card}

        </div>
        )
    }

}

export default KonferenceCard;