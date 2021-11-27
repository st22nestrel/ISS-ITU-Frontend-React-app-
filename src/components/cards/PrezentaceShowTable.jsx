import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./MistnostiTable.css";
import data from "./mock-prezentace.json";
import ReadRow from "./components/ReadRow";

function PrezentaceShowTable ({Konference}) {

  //useEffect na nacitanie miestnosti
  const [prezentace, setPrezentace] = useState(data);

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Nazev</th>
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
            {prezentace.map((room) => (
              <Fragment>
                <ReadRow data={data}/>
            </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default PrezentaceShowTable;