import React, { useState } from "react";
import { useGet } from '../../static/Loaders';
import { useParams } from 'react-router';
import YesAdmin from "../cards/YesAdmin";

function Admin() {

    let id = window.localStorage.getItem("userID");

    let { data, pending, error } = useGet('http://iisprojekt.fun:8000/admin/check/' + id, null)

    let jeAdmin;

    if (error){
        jeAdmin = false;
    }
    else if (data)
        jeAdmin = data.admin;

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        !pending &&
        <div>
            {
                jeAdmin ?
                    <div class="card">
                        <div class="card-header card-header-flex">
                            <h3 class="card-title text-bold"> Vitaj Administrátor! </h3>

                            {/* <YesAdmin data={jeAdmin}></YesAdmin> */}

                        </div>
                    </div> :
                    <div class="card">
                        <div class="card-header card-header-flex">
                            <h3 class="card-title text-bold"> Nejste administrátor! </h3>
                        </div>
                    </div>
            }
        </div>

    );
}

export default Admin;
