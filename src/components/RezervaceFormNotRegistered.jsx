import React, {useState} from "react";


async function Rezervace(details){

    if(details.Pocet_vstupenek < 1)
        return;

    let {dataToReturn, pending, error} = await Post('http://iisprojekt.fun:8000/konference/'+id+'/novaRezervace/nereg', null, JSON.stringify(details));

    if(error) {
        //reload get user info again
        setMsg(error);
    }
    else{
        //TODO navigate to created konference
        setMsg(null);
        navigate('/konference/'+id);
    }

}

async function RezervaceARegistrovat({details, id}){

    if(details.Pocet_vstupenek < 1)
        return;

    let {dataToReturn, pending, error} = await Post('http://iisprojekt.fun:8000/konference/'+id+'/novaRezervace/reg', null, JSON.stringify(details));

    if(error) {
        //reload get user info again
        setMsg(error);
    }
    else{
        //TODO navigate to created konference
        setMsg(null);
        navigate('/konference/'+id);
    }

}

function PrispevekForm({Update, setErr}) {

    const [details, setDetails] = useState({
        Konfenerce: "",  Uzivatel: "", Jmeno: "", Prijmeni: "",
        Email: "", Pocet_vstupenek: "", Celkova_cena: "", Stav: ""
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
                        {Konfenerce}
                        <br/>
                        Cena vstupenky: {cena}
                        Zbývající kapacita: {kapacita}
                    </div>

                    <div class="col-12">
                        <label for="Popis" class="form-label">Cena vstupenky</label>
                        <input type="number" class="form-control" id="Popis"
                        onChange={e => setDetails({...details, Popis: e.target.value > 0 ? e.target.value : 0})} value={details.Popis}/>
                    </div>

                    <div class="col-12">
                        <label for="Jmeno" class="form-label">Jmeno </label>
                        <input type="text" class="form-control" id="Jmeno"
                        onChange={e => setDetails({...details, Jmeno: e.target.value})} value={details.Jmeno}/>
                    </div>

                    <div class="col-12">
                        <label for="Prijmeni" class="form-label">Prijmeni </label>
                        <input type="text" class="form-control" id="Prijmeni"
                        onChange={e => setDetails({...details, Prijmeni: e.target.value})} value={details.Prijmeni}/>
                    </div>

                    <div class="col-12">
                        <label for="Email" class="form-label">Email </label>
                        <input type="email" class="form-control" id="Email"
                        onChange={e => setDetails({...details, Email: e.target.value})} value={details.Email}/>
                    </div>

                    <div class="col-12">
                        <label for="Heslo" class="form-label">Heslo <span class="text-muted">(Jenom v případe registrace)</span> </label>
                        <input type="text" class="form-control" id="Heslo"
                        onChange={e => setDetails({...details, Heslo: e.target.value})} value={details.Heslo}/>
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


                <button class="w-10 btn btn-lg btn-primary" onClick={() => await RezervaceARegistrovat(details)}>Potvrdit a registrovat</button>
                <button class="w-10 btn btn-lg btn-primary" onClick={() => await Rezervace(details)}>Potvrdit bez registrace</button>
            </div>
        </form>
    )

return (
   
        form
    
  );
}

export default PrispevekForm;
