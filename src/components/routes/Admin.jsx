import React, { useState } from "react";
import { useGet } from '../../static/Loaders';
import { useParams } from 'react-router';
import NotAdmin from "../cards/NotAdmin";
import YesAdmin from "../cards/YesAdmin";

function Admin() {

    const { id } = useParams();

    let { data, pending, error } = useGet('http://iisprojekt.fun:8000/admin', null)

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
                            <h3 class="card-title text-bold"> Admin page </h3>

                            {/* <YesAdmin data={jeAdmin}></YesAdmin> */}

                        </div>
                    </div> :
                    <div class="card">
                        <div class="card-header card-header-flex">
                            <h3 class="card-title text-bold"> Not admin page </h3>

                            {/* <NotAdmin data={jeAdmin}></NotAdmin> */}

                        </div>
                    </div>
            }
        </div>

    );
}

export default Admin;
