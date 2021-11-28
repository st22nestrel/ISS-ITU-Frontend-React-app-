import React, { useState, Fragment } from "react";
import "./MistnostiTable.css";
import ReadRow from "./components/PrezentaceReadRow";
import {useGet} from '../../static/Loaders'


function GenerateHtml({data}){
  const [opened, setOpened] = useState(false);

  let card = (
    <div className="app-container">
      <form onSubmit="">
        <div class="table-responsive">

        <table class="table table-striped">
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

  return(

    <div>
      <button class="btn btn-round btn-fill btn-primary show-hide-btn-sm"
              onClick={(() => setOpened(!opened))}>
          <i class="nc-icon nc-stre-up"></i>
      </button>
      {opened && card}
    </div>
  );
}

function PrezentaceTableReadOnly ({Konference}) {


  let {data, pending, error} = useGet('http://iisprojekt.fun:8000/konference/'+Konference+'/prispevky', null)

  //useEffect na nacitanie miestnosti

  return (
    data ?
    <GenerateHtml data={data}/>
    :
    (
    <div>
      Zadne prispevky :(
    </div>
    )
    
  );
};

export default PrezentaceTableReadOnly;