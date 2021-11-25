import React from "react";

const ReadOnlyRow = ({ data, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{data.Kod}</td>
      <td>{data.Popis}</td>
      <td>{data.Kapacita}</td>
      <td>{data.Vybaveni}</td>
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

        <button 
          type="button" class="btn btn-round btn-fill btn-secondary show-hide-btn-sm"
          onClick=""
        >
          Zobraz prezentace
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;