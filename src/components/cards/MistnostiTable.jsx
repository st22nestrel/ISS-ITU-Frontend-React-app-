import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./MistnostiTable.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

function MistnostiTable ({Konference}) {

    //useEffect na nacitanie miestnosti


  const [rooms, setRooms] = useState(data);

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

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    //TODO poslať na server požiadavok o upravu miestnosti

    const newRoom = {
        Kod: addFormData.Kod,
        Popis: addFormData.Popis,
        Kapacita: addFormData.Kapacita,
        Vybaveni: addFormData.Vybaveni,
        Konference: Konference
    };

    const newRooms = [...rooms, newRoom];
    //TODO maybe sort newRooms :)
    setRooms(newRooms);
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

  return (
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
        <input
          type="text"
          name="Kod"
          required="required"
          placeholder=""
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Popis"
          required=""
          placeholder=""
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="Kapacita"
          required="required"
          placeholder=""
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Vybaveni"
          required=""
          placeholder=""
          onChange={handleAddFormChange}
        />
        <button type="submit"
        class="btn btn-round btn-fill btn-outline-success show-hide-btn-sm">Pridať</button>
      </form>
    </div>
  );
};

export default MistnostiTable;