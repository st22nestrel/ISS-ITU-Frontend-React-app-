import React from "react";



const ReadOnlyRow = ({data}) => {
    const TableRow = key =>{
        return<td>{data[key]}</td>
    }


    let table;

    for(let key in data){
        table += TableRow(key)
    }

  return (
    <tr>
      {table}
    </tr>
  );
};

export default ReadOnlyRow;