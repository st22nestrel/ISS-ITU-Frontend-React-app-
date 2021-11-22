import React, { useState } from "react";
/* import hide from "./../static/index.js"; */
import KonferenceCard from "./cards/KonferenceCard.jsx";
/* import hideShowCardBody from './../static/index.js'; */

function Konference() {

    return (
    <div className="konference">
        <div class="container-fluid content">
            <div class="row mb-3 justify-content-center">
                <div class="col-md-12">

                    {/* <React.StrictMode> */}
                        <KonferenceCard/>
                    {/* </React.StrictMode> */}

                </div>
            </div>
        </div>
    </div>
  );
}

export default Konference;
