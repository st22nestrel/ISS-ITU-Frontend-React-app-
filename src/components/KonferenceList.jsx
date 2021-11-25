import React, { useState } from "react";
/* import hide from "./../static/index.js"; */
import KonferenceCard from "./cards/KonferenceCard.jsx";
/* import hideShowCardBody from './../static/index.js'; */

function Konference() {

    const JSONmock = [
        {
            "Nazev": "Excel@FIT",
            "Popis": "konference pro všechny IT experty jako jsem například já teď tady",
            "Obor": "IT",
            "Zeme": "Česká Republika",
            "Mesto": "Brno",
            "Misto": "VUT FIT, Božetěchova 1/2, 612 00 Brno-Královo Pole",
            "Zacatek_datum": "2022-01-20",
            "Konec_datum": "2022-01-22",
            "Zacatek_cas": "09:00",
            "Konec_cas": "20:00",
            "Poplatek": "8000",
            "Cena_vstup": "500",
            "Kapacita": "300",
            "Doplnujici_udaje": "pivo zdarma"
        },
        {
            "Nazev": "Ema ma rada Konference",
            "Popis": "konference pro všechny IT experty jako jsem například já teď tady",
            "Obor": "IT",
            "Zeme": "Česká Republika",
            "Mesto": "Brno",
            "Misto": "VUT FIT, Božetěchova 1/2, 612 00 Brno-Královo Pole",
            "Zacatek_datum": "2022-01-20",
            "Konec_datum": "2022-01-22",
            "Zacatek_cas": "09:00",
            "Konec_cas": "20:00",
            "Poplatek": "8000",
            "Cena_vstup": "500",
            "Kapacita": "300",
            "Doplnujici_udaje": "pivo zdarma"
        }
    ]

    return (
    <div className="konference">
        <div class="container-fluid content">
            <div class="row mb-3 justify-content-center">
                <div class="col-md-12">

                    {JSONmock.map((konference)=>(
                        <div className="konference-card" key={konference.Nazev}>
                            <KonferenceCard data={konference}/>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    </div>
  );
}

export default Konference;
