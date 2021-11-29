import React, { useState } from "react";
import { useGet } from '../../static/Loaders';
import { useParams } from 'react-router';
import NotAdmin from "../cards/NotAdmin";
import YesAdmin from "../cards/YesAdmin";

function Admin() {

    const { id } = useParams();
    let { data, pending, error } = useGet('http://iisprojekt.fun:8000/admin/' + id, null)

    let jeAdmin = data.admin;

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <div>
            {
                jeAdmin ?
                    <div class="card">
                        <div class="card-header card-header-flex">
                            <h3 class="card-title text-bold"> Detaily konference: {data.Nazev} </h3>

                            <YesAdmin data={data}></YesAdmin>

                        </div>
                    </div> :
                    <div class="card">
                        <div class="card-header card-header-flex">
                            <h3 class="card-title text-bold"> Detaily konference: {data.Nazev} </h3>

                            <NotAdmin data={data}></NotAdmin>

                        </div>
                    </div>
            }
        </div>

    );
}

export default Admin;
