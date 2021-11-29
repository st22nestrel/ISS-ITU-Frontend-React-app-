import React from "react";
import UserButton from "../../../static/UserButton";

const ReadOnlyRow = ({data}) => {
  return (
    <tr>
      <td>{data.Nazev}</td>
      <td>{data.Konference}</td>
      <td>
        <UserButton id={data.Uzivatel}>
        </UserButton>
      </td>
      <td>{data.Popis}</td>
      <td>{data.Tagy}</td>
      <td>{data.Grafika}</td>
      <td>{data.Soubor}</td>
      <td>{data.Mistnost}</td>
      <td>{data.jeSchvalena}</td>
      {/* <td>{data.Datum}</td> */}
      <td>{data.Zacatek_cas}</td>
      <td>{data.Konec_cas}</td>
      <td>{data.poznamkyPoradatele}</td>
    </tr>
  );
};

export default ReadOnlyRow;