import React, {useState} from "react";

function NewKonference() {

    const [details, setDetails] = useState({
        name: "", description: "", field: "", country: "", 
        city: "", organisation: "", place: "" ,
        startDate: "", endDate: "", startTime: "", endTime: "",
        fee: "", ticketPrice: "", seating: "", addInfo: ""
    });

    const submitHandler = e => {
        e.preventDefault();

        console.log(details)
    }

    let form = (
        <form onSubmit={submitHandler} class="needs-validation" novalidate="">
        <div className="form-inner">
            <h1 class="h3 mb-3 fw-normal">Nová konference</h1>

                <div class="row g-3">
                    <div class="col-12">
                        <label for="name" class="form-label">Název</label>
                        <input type="text" class="form-control" id="name"
                        onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                    </div>

                    <div class="col-12">
                        <label for="description" class="form-label">Popis</label>
                        <input type="text" class="form-control" id="description"
                        onChange={e => setDetails({...details, description: e.target.value})} value={details.description}/>
                    </div>

                    <div class="col-12">
                        <label for="field" class="form-label">Obor</label>
                        <input type="text" class="form-control" id="description"
                        onChange={e => setDetails({...details, description: e.target.value})} value={details.field}/>

                        {/* <br />
                        <select class="form-select" id="degree" 
                        onChange={e => setDetails({...details, degree: e.target.value})} value={details.degree}>
                            <option value="">Vybrat...</option>
                            <option>-</option>
                            <option>Bc.</option>
                            <option>Ing.</option>
                            <option>Mgr.</option>
                            <option>Phd.</option>
                        </select> */}
                    </div>

                    <div class="col-12">
                        <label for="country" class="form-label">Zeme</label>
                        <input type="country" class="form-control" id="country"
                        onChange="" value={details.country}/>
                        <div class="invalid-feedback">
                            Zadejte prosím validní Zemi
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="city" class="form-label">Mesto</label>
                        <input type="city" class="form-control" id="city"
                        onChange="" value={details.city}/>
                    </div>


                    <div class="col-12">
                        <label for="place" class="form-label">Místo</label>
                        <input type="place" class="form-control" id="place"
                        onChange="" value={details.place}/>
                    </div>

                    <div class="col-12">
                        <label class="form-label">Start</label>
                        <input type="date" class="form-control" id="startDate"
                        onChange={e => setDetails({...details, startDate: e.target.value})} value={details.startDate}/>
                        <input type="time" class="form-control" id="startTime"
                        onChange={e => setDetails({...details, startTime: e.target.value})} value={details.startTime}/>
                    </div>

                    <div class="col-12">
                        <label class="form-label">End</label>
                        <input type="date" class="form-control" id="endDate"
                        onChange={e => setDetails({...details, endDate: e.target.value})} value={details.endtDate}/>
                        <input type="time" class="form-control" id="endTime"
                        onChange={e => setDetails({...details, endTime: e.target.value})} value={details.endTime}/>
                    </div>

                    <div class="col-12">
                        <label for="fee" class="form-label">Poplatek</label>
                        <input type="number" class="form-control" id="fee"
                        onChange={e => setDetails({...details, fee: e.target.value})} value={details.fee}/>
                    </div>

                    <div class="col-12">
                        <label for="ticketPrice" class="form-label">Cena vstupenky</label>
                        <input type="number" class="form-control" id="ticketPrice"
                        onChange={e => setDetails({...details, ticketPrice: e.target.value})} value={details.ticketPrice}/>
                    </div>

                    <div class="col-12">
                        <label for="seating" class="form-label">Kapacita</label>
                        <input type="number" class="form-control" id="seating"
                        onChange={e => setDetails({...details, seating: e.target.value})} value={details.seating}/>
                    </div>

                    <div class="col-12">
                        <label for="addInfo" class="form-label">Doplnujici udaje</label>
                        <input type="text" class="form-control" id="addInfo"
                        onChange={e => setDetails({...details, addInfo: e.target.value})} value={details.addInfo}/>
                    </div>
                </div>

                {/* This is just horizontal break.. */}
                {/* <hr class="my-4"/> */}
                <br/>

                <button class="w-100 btn btn-lg btn-primary" type="submit">Potvrdit novou konferenci</button>

            </div>
        </form>
    )

return (
    <div className="KonferenceNew">
        <div class="content container-fluid">
            <div class="row mb-3 justify-content-center" style={{marginTop: 20}}>
                {/* <!--<main class="form-signin">--> */}
                <div class="col-4 themed-grid-col">
                    {form}
                </div>
            </div>
        </div>
    </div>      
    
  );
}

export default NewKonference;
