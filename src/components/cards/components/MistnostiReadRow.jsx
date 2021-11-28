import React from "react";
import { useNavigate } from "react-router";

const ReadDeleteRow = ({ data, handleEditClick, handleDeleteClick }) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td>{data.Kod}</td>
      <td>{data.Popis}</td>
      <td>{data.Vybaveni}</td>
      <td>
          {/* {TODO zbraz ich v read only mode} */}
        <button 
          type="button" class="btn btn-round btn-fill btn-secondary show-hide-btn-sm"
          onClick={() => navigate("/konference/"+data.Konference+'/'+data.Kod)}
        >
          Zobraz prezentace
        </button>
      </td>
    </tr>
  );
};

export default ReadDeleteRow;