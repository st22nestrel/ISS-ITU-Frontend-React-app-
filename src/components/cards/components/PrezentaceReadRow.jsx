import React from "react";



const ReadOnlyRow = ({data}) => {
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
    </tr>
  );
};

export default ReadOnlyRow;