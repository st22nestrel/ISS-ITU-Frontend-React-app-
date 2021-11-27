import React, { useState, Fragment } from "react";
import "./MistnostiTable.css";
import ReadRow from "./components/PrezentaceReadRow";
import {useGet} from '../../static/Loaders'

function PrezentaceShowTable ({Konference, data}) {

  //useEffect na nacitanie miestnosti

  return (
    data &&
    <div className="app-container">
      <form onSubmit="">
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
      </form>
    </div>
  );
};

export default PrezentaceShowTable;