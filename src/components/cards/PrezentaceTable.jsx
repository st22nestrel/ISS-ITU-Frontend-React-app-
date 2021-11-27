import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./MistnostiTable.css";
import data from "./mock-data.json";
import ReadDeleteRow from "./components/MistnostiReadDeleteRow";
import EditableRow from "./components/MistnostiEditableRow";
import { Post } from "../../static/Loaders";
import Authentificate from "../Authentificate";

async function Add(details){
  console.log("details");

  let {dataToReturn, pending, error} = await Post('http://iisprojekt.fun:8000/konference/'+details.Konference+'/novyPrispevek', null, JSON.stringify(details));
  
  /* if(_error) {
      //reload get user info again
      console.log(error);
      window.location.reload(false);
  }
  else{
      setUpdated(true)
      setTimeout(() => {
          setUpdated(false);
          }, 500);
  } */
  return error
}


const Update = async details => {
  console.log("updating room");

  //let {dataToReturn, pending, error} = await Post('http://iisprojekt.fun:8000/konference/'+details.Konference+'/'+details.Nazev+'/upravit', null, JSON.stringify(details));
  
  /* if(_error) {
      //reload get user info again
      console.log(error);
      window.location.reload(false);
  }
  else{
      setUpdated(true)
      setTimeout(() => {
          setUpdated(false);
          }, 500);
  } */
  //return error
}

const Delete = async details => {
  console.log("deleting room");

  //let {dataToReturn, pending, error} = await Post('http://iisprojekt.fun:8000/konference/'+details.Konference+'/'+details.Nazev+'/zmazat', null, null);
  
  /* if(_error) {
      //reload get user info again
      console.log(error);
      window.location.reload(false);
  }
  else{
      setUpdated(true)
      setTimeout(() => {
          setUpdated(false);
          }, 500);
  } */
  //return error
}

function PrezentaceTable ({Konference, Mistnost, data}) {

  //useEffect na nacitanie miestnosti


  data = [{
    Nazev: "hell",
    Konference: "is",
    Uzivatel: "this",
    Tagy: "projex",
    Grafika: "s",
    Soubor: "s",
    Mistnost: "CO90",
    jeSchvalena: "ne",
    Datum: "2022-01-20",
    Zacatek_cas: "10:00",
    Konec_cas: "20:00",
    poznamkyPoradatele: "nic vic"
  }]

  const [opened, setOpened] = useState(false);
  const [prezentace, setPrezentace] = useState(data);

  const [addFormData, setAddFormData] = useState({
    Nazev: "",
    Konference: Konference,
    Uzivatel: Authentificate.email,
    Tagy: "",
    Grafika: "",
    Soubor: "",
    Mistnost: Mistnost,
    jeSchvalena: "",
    Datum: "",
    Zacatek_cas: "",
    Konec_cas: "",
    poznamkyPoradatele: ""
  });

  const [editFormData, setEditFormData] = useState({
    Nazev: "",
    Konference: Konference,
    Uzivatel: Authentificate.email,
    Tagy: "",
    Grafika: "",
    Soubor: "",
    Mistnost: Mistnost,
    jeSchvalena: "",
    Datum: "",
    Zacatek_cas: "",
    Konec_cas: "",
    poznamkyPoradatele: ""
  });

  const [editRoomNazev, setEditRoomNazev] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    //TODO poslať na server požiadavok o pridanie miestnosti
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    //TODO maybe sort newDatas :)
    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = async (event) => {
    event.preventDefault();

    //TODO poslať na server požiadavok o upravu miestnosti
    const newPrezentace = {
      Nazev: addFormData.Nazev,
      Konference: Konference,
      Uzivatel: Authentificate.email,
      Tagy: addFormData.Tagy,
      Grafika: addFormData.Grafika,
      Soubor: addFormData.Soubor,
      Mistnost: addFormData.Mistnost,
      jeSchvalena: addFormData.jeSchvalena,
      Datum: addFormData.Datum,
      Zacatek_cas: addFormData.Zacatek_cas,
      Konec_cas: addFormData.Konec_cas,
      poznamkyPoradatele: addFormData.poznamkyPoradatele
    };

    let error = await Add(newPrezentace);

    if(!error){
      const newDatas = [...prezentace, newPrezentace];
      //TODO maybe sort newDatas :)
      setPrezentace(newDatas);
    }
    else{
      //we can display error
    }

  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const newPrezentace = {
      Nazev: addFormData.Nazev,
      Konference: Konference,
      Uzivatel: Authentificate.email,
      Tagy: addFormData.Tagy,
      Grafika: addFormData.Grafika,
      Soubor: addFormData.Soubor,
      Mistnost: addFormData.Mistnost,
      jeSchvalena: addFormData.jeSchvalena,
      Datum: addFormData.Datum,
      Zacatek_cas: addFormData.Zacatek_cas,
      Konec_cas: addFormData.Konec_cas,
      poznamkyPoradatele: addFormData.poznamkyPoradatele
    };

    const newDatas = [...prezentace];

    const index = prezentace.findIndex((room) => room === editRoomNazev);

    newDatas[index] = newPrezentace;

    setPrezentace(newDatas);
    setEditRoomNazev(null);
  };

  const handleEditClick = (event, room) => {
    event.preventDefault();
    setEditRoomNazev(room.Nazev);

    const formValues = {
      Nazev: room.Nazev,
      Konference: Konference,
      Uzivatel: Authentificate.email,
      Tagy: room.Tagy,
      Grafika: room.Grafika,
      Soubor: room.Soubor,
      Mistnost: room.Mistnost,
      jeSchvalena: room.jeSchvalena,
      Datum: room.Datum,
      Zacatek_cas: room.Zacatek_cas,
      Konec_cas: room.Konec_cas,
      poznamkyPoradatele: room.poznamkyPoradatele
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditRoomNazev(null);
  };

  const handleDeleteClick = (roomNazev) => {
    const newDatas = [...prezentace];

    const index = prezentace.findIndex((room) => room.Nazev === roomNazev);

    newDatas.splice(index, 1);

    setPrezentace(newDatas);
  };

  let card = (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <td>Nazev</td>
              <td>Konference</td>
              <td>Uzivatel</td>
              <td>Tagy</td>
              <td>Grafika</td>
              <td>Soubor</td>
              <td>Mistnost</td>
              <td>Schvalena</td>
              <td>Datum</td>
              <td>Zacatek cas</td>
              <td>Konec cas</td>
              <td>poznamkyPoradatele</td>
            </tr>
          </thead>
          <tbody>
            {prezentace.map((room) => (
              <Fragment>
              { //by this we make even nazev unique -> at least for room, which is ???
              editRoomNazev === room.Nazev ? (
                <EditableRow
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                />
              ) : (
                <ReadDeleteRow
                  data={room}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
              )}
            </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h4>Přidat Prezentaci k místnosti</h4>
      <form onSubmit={handleAddFormSubmit}>
        <div >
          <label for="Nazev" class="form-label">Název prezentace</label>
          <input id="Nazev" class="form-control"
            type="text"
            name="Nazev"
            required="required"
            placeholder=""
            onChange={handleAddFormChange}
          />
        </div>
        <div>
          <label for="Konference" class="form-label">Konference</label>
          <input id="Konference" class="form-control"
            type="text"
            name="Konference"
            required=""
            placeholder=""
            value="Konf"
            /* onChange={handleAddFormChange} */
          />
        </div>
        <div>
          <label for="Uzivatel" class="form-label">Uzivatel</label>
          <input id="Uzivatel" class="form-control"
            type="email"
            name="Uzivatel"
            required=""
            placeholder="zadaj svôj email"
            onChange={handleAddFormChange}
          />
        </div>
        <div>
          <label for="Popis" class="form-label">Popis</label>
          <input id="Popis" class="form-control"
            type="number"
            name="Popis"
            required="required"
            placeholder=""
            onChange={handleAddFormChange}
          />
        </div>
        
        <div>
          <label for="Tagy" class="form-label">Tagy</label>
          <input id="Tagy" class="form-control"
            type="text"
            name="Tagy"
            required=""
            placeholder=""
            onChange={handleAddFormChange}
          />
        </div>
        
        <div>
          <label for="Grafika" class="form-label">Grafika</label>
          <input id="Grafika" class="form-control"
            type="text"
            name="Grafika"
            required=""
            placeholder=""
            onChange={handleAddFormChange}
          />
        </div>

        <div>
          <label for="Soubor" class="form-label">Soubor</label>
          <input id="Soubor" class="form-control"
            type="text"
            name="Soubor"
            required=""
            placeholder=""
            onChange={handleAddFormChange}
          />
        </div>

        <div>
          <label for="Mistnost" class="form-label">Mistnost</label>
          <input id="Mistnost" class="form-control"
            type="text"
            name="Mistnost"
            required=""
            placeholder=""
            onChange={handleAddFormChange}
          />
        </div>

        <div>
          <label for="jeSchvalena" class="form-label">Schvalena</label>
          <input id="jeSchvalena" class="form-control"
            type="text"
            name="jeSchvalena"
            required=""
            placeholder=""
            onChange={handleAddFormChange}
          />
        </div>

        <div>
          <label for="Datum" class="form-label">Datum</label>
          <input id="Datum" class="form-control"
            type="date"
            name="Datum"
            required=""
            placeholder=""
            onChange={handleAddFormChange}
          />
        </div>

        <div>
          <label for="Zacatek_cas" class="form-label">Zacatek cas</label>
          <input id="Zacatek_cas" class="form-control"
            type="time"
            name="Zacatek_cas"
            required=""
            placeholder=""
            onChange={handleAddFormChange}
          />
        </div>

        <div>
          <label for="Konec_cas" class="form-label">Konec cas</label>
          <input id="Mistnost" class="form-control"
            type="time"
            name="Konec_cas"
            required=""
            placeholder=""
            onChange={handleAddFormChange}
          />
        </div>

        <div>
          <label for="poznamkyPoradatele" class="form-label">poznamky poradatele cas</label>
          <input id="Mistnost" class="form-control"
            type="text"
            name="poznamkyPoradatele"
            required=""
            placeholder=""
            onChange={handleAddFormChange}
          />
        </div>

        <div>
          {/* <label for="btn" class="form-label"></label> */}
          <br />
          <button type="submit" id="btn"
          class="btn btn-round btn-fill btn-outline-success show-hide-btn-sm">Pridať</button>
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

export default PrezentaceTable;