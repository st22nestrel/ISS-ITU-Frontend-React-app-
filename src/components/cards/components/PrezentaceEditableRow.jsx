import React from "react";

//MistnostRow
//TODO make 

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {

    //TODO maybe make selectbox for rooms?? :/

  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder=""
          name="Nazev"
          value={editFormData.Nazev}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <input
          type="text"
          required="required"
          placeholder=""
          name="Prednasajuci"
          value={editFormData.Konference}
          onChange={handleEditFormChange}
        ></input>
      </td>

    { //TODO make rendering of this conditional :)
      <td>
        <input
          type="text"
          required="required"
          placeholder=""
          name="Prednasajuci"
          value={editFormData.Uzivatel}
          onChange={handleEditFormChange}
        ></input>
      </td>
    }

      <td>
        <input
          type="text"
          required="required"
          placeholder=""
          name="Popis"
          value={editFormData.Popis}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <input
          type="text"
          required="required"
          placeholder=""
          name="Tagy"
          value={editFormData.Tagy}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <input
          type="text"
          required="required"
          placeholder=""
          name="Grafika"
          value={editFormData.Grafika}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <input
          type="text"
          required="required"
          placeholder=""
          name="Soubor"
          value={editFormData.Soubor}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <input
          type="text"
          required="required"
          placeholder=""
          name="Mistnost"
          value={editFormData.Mistnost}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <select
          type="text"
          required="required"
          placeholder=""
          name="Schvalena"
          value={editFormData.jeSchvalena}
          onChange={handleEditFormChange}
        >
            <option value={editFormData.jeSchvalena}></option>
            <option value="true">ano</option>
            <option value="false">ne</option>
        </select>
      </td>
      
      <td>
        <input
          type="date"
          required="required"
          placeholder=""
          name="Datum"
          value={editFormData.Datum}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <input
          type="time"
          required="required"
          placeholder=""
          name="Zacatek cas"
          value={editFormData.Zacatek_cas}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <input
          type="time"
          required="required"
          placeholder=""
          name="Konec cas"
          value={editFormData.Konec_cas}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <input
          type="text"
          required="required"
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