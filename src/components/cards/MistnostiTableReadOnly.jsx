import React, { useState, Fragment } from "react";
import "./MistnostiTable.css";
import ReadOnlyRow from "./components/MistnostiReadRow";
import { useGet } from "../../static/Loaders";


function GenerateHtml({data, Konference}){
  const [opened, setOpened] = useState(false);

  let card = (
    data &&
    <div className="app-container">
      <form onSubmit="">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Kod</th>
                <th>Popis</th>
                <th>Vybaveni</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((room) => (
                <Fragment>
                  <ReadOnlyRow
                    data={room}
                  />
              </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );

  return(
        
        
    <div>
            <button class="btn btn-round btn-fill btn-primary show-hide-btn-sm"
                    onClick={(() => setOpened(!opened))}>
                <i class="nc-icon nc-stre-up"></i>
            </button>
            {opened && card}
    </div>

);
};

function MistnostiTable ({Konference}) {

  //useEffect na nacitanie miestnosti
  let {data, pending, error} = useGet('http://iisprojekt.fun:8000/konference/'+Konference+'/mistnosti', null)

  return(data && 
    <div>
      <GenerateHtml data={data} Konference={Konference}></GenerateHtml>
    </div>
    
    )
};

export default MistnostiTable;