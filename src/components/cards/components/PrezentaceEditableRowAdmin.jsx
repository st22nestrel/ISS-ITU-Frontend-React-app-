import React from "react";

//MistnostRow
//TODO make 

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {

  const ID = window.localStorage.getItem("ID");
    //TODO maybe make selectbox for rooms?? :/

  return (
    <tr>
      <td>
        {editFormData.Nazev}
        {/* <input
          type="text"
          required="required"
          placeholder=""
          name="Nazev"
          value={editFormData.Nazev}
          onChange={handleEditFormChange}
        ></input> */}
      </td>

      <td>
        {editFormData.Konference}
        {/* <input
          type="text"
          required="required"
          placeholder=""
          name="Konference"
          value={editFormData.Konference}
          onChange={handleEditFormChange}
        ></input> */}
      </td>

     {//TODO make rendering of this conditional :)
     true &&
      <td>
        {editFormData.Uzivatel}
        {/* <input
          type="text"
          required=""
          placeholder=""
          name="Prednasajuci"
          value="Nejde měnit"
          onChange=""
        ></input> */}
      </td>
    }

      <td>
        {editFormData.Popis}
        {/* <input
          type="text"
          required="required"
          placeholder=""
          name="Popis"
          value={editFormData.Popis}
          onChange={handleEditFormChange}
        ></input> */}
      </td>

      <td>
        {editFormData.Tagy}
        {/* <input
          type="text"
          required=""
          placeholder=""
          name="Tagy"
          value={editFormData.Tagy}
          onChange={handleEditFormChange}
        ></input> */}
      </td>

      <td>
        {editFormData.Grafika}
        {/* <input
          type="text"
          required=""
          placeholder=""
          name="Grafika"
          value={editFormData.Grafika}
          onChange={handleEditFormChange}
        ></input> */}
      </td>

      <td>
        {editFormData.Soubor}
        {/* <input
          type="text"
          required=""
          placeholder=""
          name="Soubor"
          value={editFormData.Soubor}
          onChange={handleEditFormChange}
        ></input> */}
      </td>

      <td>
        <input
          type="text"
          required=""
          placeholder=""
          name="Mistnost"
          value={editFormData.Mistnost}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <select
          type="text"
          required=""
          placeholder=""
          name="jeSchvalena"
          value={editFormData.jeSchvalena}
          onChange={handleEditFormChange}
        >
            <option value="true">ano</option>
            <option value="false">ne</option>
        </select>
      </td>
      
      <td>
        <input
          type="date"
          required=""
          placeholder=""
          name="Datum"
          value={editFormData.Datum}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <input
          type="time"
          required=""
          placeholder=""
          name="Zacatek cas"
          value={editFormData.Zacatek_cas}
          onChange={handleEditFormChange}
        ></input>
      </td>

      {/* <td>
        <input
          type="time"
          required=""
          placeholder=""
          name="Konec cas"
          value={editFormData.Konec_cas}
          onChange={handleEditFormChange}
        ></input>
      </td> */}

      <td>
        <input
          type="text"
          required=""
          placeholder=""
          name="poznamkyPoradatele"
          value={editFormData.poznamkyPoradatele}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <button type="submit"
            class="btn btn-round btn-fill btn-success show-hide-btn-sm">Uložit</button>
        <button type="button" onClick={handleCancelClick}
            class="btn btn-round btn-fill btn-outline-danger show-hide-btn-sm">
          Zrušit
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;