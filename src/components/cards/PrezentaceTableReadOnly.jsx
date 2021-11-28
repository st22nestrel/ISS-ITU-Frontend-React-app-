import React, { useState, Fragment } from "react";
import "./MistnostiTable.css";
import ReadRow from "./components/PrezentaceReadRow";
import {useGet} from '../../static/Loaders'


function GenerateHtml(data){
  return(
    <div className="app-container">
      <form onSubmit="">
        <div>

        <table>
          <thead>
            <tr>
              <th>Nazev</th>
              <th>Konference</th>
              <th>Prednasajuci</th>
              <th>Popis</th>
              <th>Tagy</th>
              <th>Grafika</th>
              <th>Soubor</th>
              <th>Mistnost</th>
              <th>Schavalena</th>
              <th>Datum</th>
              <th>Zacatek cas</th>
              <th>Konec cas</th>
              <th>Poznamky poradatele</th>
            </tr>
          </thead>
          <tbody>
            {data.map((room) => (
              <Fragment>
                <ReadRow data={room}/>
            </Fragment>
            ))}
          </tbody>
        </table>

        </div>
      </form>
    </div>
  )
}

function PrezentaceTableReadOnly ({Konference}) {


  let {data, pending, error} = useGet('http://iisprojekt.fun:8000/konference/'+Konference+'/mistnosti', null)

  //useEffect na nacitanie miestnosti

  return (
    data && 
    <GenerateHtml data={data}/>
    
  );
};

export default PrezentaceTableReadOnly;