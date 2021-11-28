import React, {useState} from "react";


function PrispevekForm({Update, setErr}) {    

    const [details, setDetails] = useState({
        Nazev: "", Konference: "", Uzivatel: "", Popis: "",
        Tagy: "", Grafika: "" ,
        Soubor: "", Mistnost: "", Zacatek_cas: null, Konec_cas: null,
        Datum: null, poznamkyPoradatele: ""
    });

    const submitHandler = e => {
        e.preventDefault();

        console.log(details)

        if(!details.Nazev )
        {
            setErr("Zadejte název prezentace")
        }
        else{
            Update(details)
        }
    }

    let form = (
        <form onSubmit={submitHandler} class="needs-validation" novalidate="">
        <div className="form-inner">
            <h1 class="h3 mb-3 fw-normal">Nový prispevek do konference</h1>

                <div class="row g-3">
                    <div class="col-12">
                        <label for="Nazev" class="form-label">Název </label>
                        <input type="text" class="form-control" id="Nazev"
                        onChange={e => setDetails({...details, Nazev: e.target.value})} value={details.Nazev}/>
                    </div>

                    <div class="col-12">
                        <label for="Popis" class="form-label">Popis </label>
                        <input type="text" class="form-control" id="Popis"
                        onChange={e => setDetails({...details, Popis: e.target.value})} value={details.Popis}/>
                    </div>

                    <div class="col-12">
                        <label for="Tagy" class="form-label">Tagy </label>
                        <input type="text" class="form-control" id="Tagy"
                        onChange={e => setDetails({...details, Tagy: e.target.value})} value={details.Tagy}/>
                    </div>

                    <div class="col-12">
                        <label for="Grafika" class="form-label">Grafika </label>
                        <input type="text" class="form-control" id="Grafika"
                        onChange={e => setDetails({...details, Grafika: e.target.value})} value={details.Grafika}/>
                    </div>
{/* 
                    <div class="col-12">
                        <label for="Soubor" class="form-label">Soubor </label>
                        <input type="text" class="form-control" id="Soubor"
                        onChange={e => setDetails({...details, Soubor: e.target.value})} value={details.Soubor}/>
                    </div> */}

                    {/* <div class="col-12">
                        <label class="form-label">Start</label>
                        <input type="time" class="form-control" id="Zacatek_cas"
                        onChange={e => setDetails({...details, Zacatek_cas: e.target.value})} value={details.Zacatek_cas}/>
                    </div>

                    <div class="col-12">
                        <label class="form-label">Konec</label>
                        <input type="time" class="form-control" id="Konec_cas"
                        onChange={e => setDetails({...details, Konec_cas: e.target.value})} value={details.Konec_cas}/>
                    </div> */}

                </div>

                {/* This is just horizontal break.. */}
                {/* <hr class="my-4"/> */}
                <br/>

                <button class="w-100 btn btn-lg btn-primary" type="submit">Potvrdit prispevek</button>

            </div>
        </form>
    )

return (
   
        form
    
  );
}

export default PrispevekForm;
