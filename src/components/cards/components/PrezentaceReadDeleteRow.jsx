import React from "react";

const ReadDeleteRow = ({ data, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{data.Nazev}</td>
      <td>{data.Konference}</td>
      <td>{data.Uzivatel}</td>
      <td>{data.Popis}</td>
      <td>{data.Tagy}</td>
      <td>{data.Grafika}</td>
      <td>{data.Soubor}</td>
      <td>{data.Mistnost}</td>
      <td>{data.jeSchvalena}</td>
      <td>{data.Datum}</td>
      <td>{data.Zacatek_cas}</td>
      <td>{data.Konec_cas}</td>
      <td>{data.poznamkyPoradatele}</td>
      <td>
        <button
          type="button" class="btn btn-round btn-fill btn-primary show-hide-btn-sm"
          onClick={(event) => handleEditClick(event, data)}
        >
          Uprav
        </button>
        <button 
          type="button" class="btn btn-round btn-fill btn-danger show-hide-btn-sm"
          onClick={() => handleDeleteClick(data.Kod)}
        >
          Zmaž
        </button>
      </td>
    </tr>
  );
};

export default ReadDeleteRow;