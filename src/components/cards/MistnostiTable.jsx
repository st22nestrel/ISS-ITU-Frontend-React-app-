import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./MistnostiTable.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/MistnostiReadDeleteRow";
import EditableRow from "./components/MistnostiEditableRow";
import { Post } from "../../static/Loaders";

async function Add(details){
  console.log("details");

  let {dataToReturn, pending, error} = await Post('http://iisprojekt.fun:8000/konference/'+details.Konference+'/novaMistnost', null, JSON.stringify(details));
  
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

  //let {dataToReturn, pending, error} = await Post('http://iisprojekt.fun:8000/konference/'+details.Konference+'/'+details.Kod+'/upravit', null, JSON.stringify(details));
  
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

  //let {dataToReturn, pending, error} = await Post('http://iisprojekt.fun:8000/konference/'+details.Konference+'/'+details.Kod+'/zmazat', null, null);
  
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

function MistnostiTable ({Konference}) {

  //useEffect na nacitanie miestnosti

  const [opened, setOpened] = useState(false);
  const [rooms, setRooms] = useState([]);

  const [addFormData, setAddFormData] = useState({
    Kod: "",
    Popis: "",
    Kapacita: "",
    Vybaveni: "",
    Konference: Konference
  });

  const [editFormData, setEditFormData] = useState({
    Kod: "",
    Popis: "",
    Kapacita: "",
    Vybaveni: "",
    Konference: Konference
  });

  const [editRoomKod, setEditRoomKod] = useState(null);

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

    //TODO maybe sort newRooms :)
    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = async (event) => {
    event.preventDefault();

    //TODO poslať na server požiadavok o upravu miestnosti
    const newRoom = {
        Kod: addFormData.Kod,
        Popis: addFormData.Popis,
        Kapacita: addFormData.Kapacita,
        Vybaveni: addFormData.Vybaveni,
        Konference: Konference
    };

    let error = await Add(newRoom);

    if(!error){
      const newRooms = [...rooms, newRoom];
      //TODO maybe sort newRooms :)
      setRooms(newRooms);
    }
    else{
      //we can display error
    }

  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedRoom = {
        Kod: addFormData.Kod,
        Popis: addFormData.Popis,
        Kapacita: addFormData.Kapacita,
        Vybaveni: addFormData.Vybaveni,
        Konference: Konference
    };

    const newRooms = [...rooms];

    const index = rooms.findIndex((room) => room === editRoomKod);

    newRooms[index] = editedRoom;

    setRooms(newRooms);
    setEditRoomKod(null);
  };

  const handleEditClick = (event, room) => {
    event.preventDefault();
    setEditRoomKod(room.Kod);

    const formValues = {
        Kod: room.Kod,
        Popis: room.Popis,
        Kapacita: room.Kapacita,
        Vybaveni: room.Vybaveni,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditRoomKod(null);
  };

  const handleDeleteClick = (roomKod) => {
    const newRooms = [...rooms];

    const index = rooms.findIndex((room) => room.Kod === roomKod);

    newRooms.splice(index, 1);

    setRooms(newRooms);
  };

  let card = (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Kod</th>
              <th>Popis</th>
              <th>Kapacita</th>
              <th>Vybaveni</th>
              <th>Tlačidlá</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <Fragment>
              {editRoomKod === room.Kod ? (
                <EditableRow
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                />
              ) : (
                <ReadOnlyRow
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

      <h4>Přidat místnost</h4>
      <form onSubmit={handleAddFormSubmit}>
        <div >
          <label for="Kod" class="form-label">Kód místnosti</label>
          <input id="Kod" class="form-control"
            type="text"
            name="Kod"
            required="required"
            placeholder=""
            onChange={handleAddFormChange}
          />
        </div>
        <div>
          <label for="Popis" class="form-label">Popis</label>
          <input id="Popis" class="form-control"
            type="text"
            name="Popis"
            required=""
            placeholder=""
            onChange={handleAddFormChange}
          />
        </div>
        <div>
          <label for="Kapacita" class="form-label">Kapacita</label>
          <input id="Kapacita" class="form-control"
            type="number"
            name="Kapacita"
            required="required"
            placeholder=""
            onChange={handleAddFormChange}
          />
        </div>
        
        <div>
          <label for="Vybavení" class="form-label">Vybavení</label>
          <input id="Vybavení" class="form-control"
            type="text"
            name="Vybaveni"
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

export default MistnostiTable;