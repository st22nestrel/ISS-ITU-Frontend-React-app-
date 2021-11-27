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
        <div>

        <table>
          <thead>
            <tr>
              <th>Konference</th>
              <th>Uzivatel</th>
              <th>Datum vytvoreni</th>
              <th>Celkova cena</th>
              <th>Stav</th>
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
  );
};

export default PrezentaceShowTable;