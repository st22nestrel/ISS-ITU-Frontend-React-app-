import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./MistnostiTable.css";
import data from "./mock-data.json";
import ReadDeleteRow from "./components/PrezentaceReadDeleteRow";
import EditableRow from "./components/PrezentaceEditableRowUser";
import { useGet, Post } from "../../static/Loaders";
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

  let {dataToReturn, pending, error} = await Post('http://iisprojekt.fun:8000/konference/'+details.Konference+'/prispevky/'+details.ID+'/upravit', null, JSON.stringify(details));
  
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

function GenerateHtml({Konference, Mistnost, data}){
  const [opened, setOpened] = useState(false);
  const [prezentace, setPrezentace] = useState(data);

  const [addFormData, setAddFormData] = useState({
    Nazev: "",
    Konference: "",
    Uzivatel: "",
    Popis: "",
    Tagy: "",
    Grafika: "",
    Soubor: "",
    Mistnost: "",
    jeSchvalena: "",
    Datum: "",
    Zacatek_cas: "",
    Konec_cas: "",
    poznamkyPoradatele: ""
  });

  const [editFormData, setEditFormData] = useState({
    Nazev: "",
    Konference: "",
    Uzivatel: "",
    Popis: "",
    Tagy: "",
    Grafika: "",
    Soubor: "",
    Mistnost: "",
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
      Uzivatel: null, //todo-store email in localstorage :D
      Popis: addFormData.Popis,
      Tagy: addFormData.Tagy,
      Grafika: addFormData.Grafika,
      Soubor: addFormData.Soubor,
      Mistnost: addFormData.Mistnost,
      jeSchvalena: addFormData.jeSchvalena,
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

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const newPrezentace = {
      Nazev: addFormData.Nazev,
      Konference: Konference,
      Uzivatel: null, //todo-store email in localstorage :D
      Popis: addFormData.Popis,
      Tagy: addFormData.Tagy,
      Grafika: addFormData.Grafika,
      Soubor: addFormData.Soubor,
      Mistnost: addFormData.Mistnost,
      jeSchvalena: addFormData.jeSchvalena,
      Datum: addFormData.Datum === "" ? null : addFormData.Datum,
      Zacatek_cas: addFormData.Zacatek_cas === "" ? null : addFormData.Zacatek_cas,
      Konec_cas: addFormData.Konec_cas === "" ? null : addFormData.Konec_cas,
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
      Uzivatel: "placeholder Email", //todo-store email in localstorage :D
      Popis: addFormData.Popis,
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

  const handleDeleteClick = (roomNazev) => {
    const newDatas = [...prezentace];

    const index = prezentace.findIndex((room) => room.Nazev === roomNazev);

    newDatas.splice(index, 1);

    setPrezentace(newDatas);
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
}

function PrezentaceUserEdit ({Konference, Mistnost, url}) {

  let {id, kod} = useParams();

  let {data, pending, error} = useGet(url, null)


  const userID = window.localStorage.getItem("userID");


  if(data){
    let filteredData = data.filter(e => e.Uzivatel == userID );

    data = filteredData;
  }
    

  return(data && 
    <div>
      <GenerateHtml data={data} Konference={id} Mistnost={kod}></GenerateHtml>
    </div>
    
    )

};

export default PrezentaceUserEdit;