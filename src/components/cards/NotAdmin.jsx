import React, {useState} from 'react';
import reactDom from 'react-dom';

function NotAdmin({data}){

    const [opened, setOpened] = useState(false);

    const [details, setDetails] = useState({
        name: data.Nazev, description: data.Popis, field: data.Obor, country: data.Zeme, 
        city: data.Mesto, place: data.Misto,
        startDate: data.Zacatek_datum, endDate: data.Konec_datum, startTime: data.Zacatek_cas, endTime: data.Misto.Konec_cas,
        fee: data.Poplatek, ticketPrice: data.Cena_vstup, seating: data.Kapacita, addInfo: data.Doplnujici_udaje
    });

    let card;


    card = (
        <form onSubmit={null} class="needs-validation" novalidate="">
        <div className="form-inner">
                <div class="row g-3">

                    <div class="col-12">
                        <label for="description" class="form-label">NESI ADMIN!</label>
                        <input type="text" class="form-control" id="description"
                        onChange={e => setDetails({...details, description: e.target.value})} value={details.description}/>
                    </div>

                    <div class="col-12">
                        <label for="field" class="form-label">NESI ADMIN!</label>
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
                        <label for="country" class="form-label">NESI ADMIN!</label>
                        <input type="country" class="form-control" id="country"
                        onChange="" value={details.country}/>
                        <div class="invalid-feedback">
                        NESI ADMIN!
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="city" class="form-label">NESI ADMIN!</label>
                        <input type="city" class="form-control" id="city"
                        onChange="" value={details.city}/>
                    </div>


                    <div class="col-12">
                        <label for="place" class="form-label">NESI ADMIN!</label>
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


    return(
        
        
        <div>
                <button class="btn btn-round btn-fill btn-primary show-hide-btn-sm"
                        onClick={(() => setOpened(!opened))}>
                    <i class="nc-icon nc-stre-up"></i>
                </button>
                {opened && card}
        </div>

    );

}

export default NotAdmin;