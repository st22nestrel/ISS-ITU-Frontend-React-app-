import React, { useState, Fragment } from "react";
import "./MistnostiTable.css";
import ReadDeleteRow from "./components/PrezentaceReadDeleteRow";
import EditableRow from "./components/PrezentaceEditableRowAdmin";
import { useGet, Post, Put } from "../../static/Loaders";
import Authentificate from "../Authentificate";
import { useParams } from "react-router";

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

  let {dataToReturn, pending, error} = await Put('http://iisprojekt.fun:8000/konference/'+details.Konference+'/prispevky/'+details.ID+'/schvalit', null, JSON.stringify(details));
  
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

const Delete = async details => {
  console.log("deleting room");

  let {dataToReturn, pending, error} = await Post('http://iisprojekt.fun:8000/konference/'+details.Konference+'/prispevky/'+details.ID+'/odstranit', null, null);
  
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

function GenerateHtml ({Konference, Mistnost, data}) {


  const [opened, setOpened] = useState(false);
  const [prezentace, setPrezentace] = useState(data);

  const [addFormData, setAddFormData] = useState({
    ID: null,
    Nazev: "",
    Konference: Konference,
    Uzivatel: null,
    Popis: "",
    Tagy: "",
    Grafika: "",
    Soubor: "",
    Mistnost: Mistnost,
    jeSchvalena: 0,
    Datum: null,
    Zacatek_cas: null,
    Konec_cas: null,
    poznamkyPoradatele: ""
  });

  const [editFormData, setEditFormData] = useState({
    ID: null,
    Nazev: "",
    Konference: Konference,
    Uzivatel: null,
    Popis: "",
    Tagy: "",
    Grafika: "",
    Soubor: "",
    Mistnost: Mistnost,
    jeSchvalena: "",
    Datum: null,
    Zacatek_cas: null,
    Konec_cas: null,
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
      Uzivatel: null, //todo-store email in localstorage :D
      Popis: addFormData.Popis,
      Tagy: addFormData.Tagy,
      Grafika: addFormData.Grafika,
      Soubor: addFormData.Soubor,
      Mistnost: addFormData.Mistnost,
      jeSchvalena: null,//addFormData.jeSchvalena,
      Datum: addFormData.Datum === "" ? null : addFormData.Datum,
      Zacatek_cas: addFormData.Zacatek_cas === "" ? null : addFormData.Zacatek_cas,
      Konec_cas: addFormData.Konec_cas === "" ? null : addFormData.Konec_cas,
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

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editPrezentace = {
      ID: editFormData.ID,
      Nazev: editFormData.Nazev,
      Konference: Konference,
      Uzivatel: editFormData.Uzivatel, //todo-store email in localstorage :D
      Popis: editFormData.Popis,
      Tagy: editFormData.Tagy,
      Grafika: editFormData.Grafika,
      Soubor: editFormData.Soubor,
      Mistnost: editFormData.Mistnost,
      jeSchvalena: editFormData.jeSchvalena,
      Datum: editFormData.Datum === "" ? null : editFormData.Datum,
      Zacatek_cas: editFormData.Zacatek_cas === "" ? null : editFormData.Zacatek_cas,
      Konec_cas: editFormData.Konec_cas === "" ? null : editFormData.Konec_cas,
      poznamkyPoradatele: editFormData.poznamkyPoradatele
    };

    let error = await Update(editPrezentace)

    if(!error){
      const newDatas = [...prezentace];

      const index = prezentace.findIndex((room) => room.ID === editRoomNazev);
  
      newDatas[index] = editPrezentace;
  
      setPrezentace(newDatas);
      setEditRoomNazev(null);
    }
    else{
      //we can display error
    }

  };

  const handleEditClick = (event, room) => {
    event.preventDefault();
    setEditRoomNazev(room.ID);

    const formValues = {
      ID: room.ID,
      Nazev: room.Nazev,
      Konference: Konference,
      Uzivatel: null, //todo-store email in localstorage :D
      Popis: room.Popis,
      Tagy: room.Tagy,
      Grafika: room.Grafika,
      Soubor: room.Soubor,
      Mistnost: room.Mistnost,
      jeSchvalena: room.jeSchvalena,
      Datum: room.Datum === "" ? null : room.Datum,
      Zacatek_cas: room.Zacatek_cas === "" ? null : room.Zacatek_cas,
      Konec_cas: room.Konec_cas === "" ? null : room.Konec_cas,
      poznamkyPoradatele: room.poznamkyPoradatele
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditRoomNazev(null);
  };

  const handleDeleteClick = async (prezentKod) => {
    const newDatas = [...prezentace];

    const index = prezentace.findIndex((prez) => prez.Kod === prezentKod);

    let details = newDatas[index];

    let error = await Delete({ID: prezentKod});

    if(!error){
      newDatas.splice(index, 1);

      setPrezentace(newDatas);
    }
    
  };

  let card = (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <td>Nazev</td>
                <td>Konference</td>
                <td>Uzivatel</td>
                <td>Popis</td>
                <td>Tagy</td>
                <td>Grafika</td>
                <td>Soubor</td>
                <td>Mistnost</td>
                <td>Schvalena</td>
                {/* <td>Datum</td> */}
                <td>Zacatek cas</td>
                <td>Konec cas</td>
                <td>poznamkyPoradatele</td>
              </tr>
            </thead>
            <tbody>
              {prezentace.map((room) => (
                <Fragment>
                { //by this we make even nazev unique -> at least for room, which is ???
                editRoomNazev === room.ID ? (
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
        </div>
        
      </form>

      <h4>Přidat prezentaci k místnosti</h4>
      <form onSubmit={handleAddFormSubmit} class="table-striped">
        <div >
          <label for="Nazev" class="form-label">Název</label>
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
            value={Konference}
            /* onChange={handleAddFormChange} */
          />
        </div>
        {/* <div>
          <label for="Uzivatel" class="form-label">Uzivatel</label>
          <input id="Uzivatel" class="form-control"
            type="number"
            name="Uzivatel"
            required=""
            placeholder="zadaj svôj email"
            onChange={handleAddFormChange}
          />
        </div> */}
        <div>
          <label for="Popis" class="form-label">Popis</label>
          <input id="Popis" class="form-control"
            type="text"
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
          <select id="jeSchvalena" class="form-control"
            type="text"
            name="jeSchvalena"
            required=""
            placeholder=""
            onChange={handleAddFormChange}
          >
          <option value={editFormData.jeSchvalena}></option>
            <option value={1}>ano</option>
            <option value={0}>ne</option>
          </select>
        </div>

        {/* <div>
          <label for="Datum" class="form-label">Datum</label>
          <input id="Datum" class="form-control"
            type="date"
            name="Datum"
            required=""
            placeholder=""
            onChange={handleAddFormChange}
          />
        </div> */}

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
          <label for="poznamkyPoradatele" class="form-label">poznamky poradatele</label>
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

function PrezentaceTable({Konference, url}){
  let {id, kod} = useParams();

  let {data, pending, error} = useGet(url, null)

  return(data && 
    <div>
      <GenerateHtml data={data} Konference={id} Mistnost={kod}></GenerateHtml>
    </div>
    
    )

}

export default PrezentaceTable;