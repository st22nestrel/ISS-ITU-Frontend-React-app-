import React, {useState} from "react";
import { Post } from "../static/Loaders";
import { useLocation} from "react-router-dom"


async function Rezervace(details, id, setTransakce){

    if(details.Pocet_vstupenek < 1 || !details.Jmeno || !details.Prijmeni)
        return;

    let {dataToReturn, pending, error} = await Post('http://iisprojekt.fun:8000/konference/'+id+'/novaRezervace/nereg', null, JSON.stringify(details));

    /* if(error) {
        //reload get user info again
        setMsg(error);
    }
    else{
        //TODO navigate to created konference
        setMsg(null);
        navigate('/konference/'+id);
    } */
    if(!error){
        setTransakce(dataToReturn);
    }
    return {error, dataToReturn}
}


function RezervaceFormNotRegistered({Update, setErr, konfData}) {

    //const [dokoncena, setDokokoncena] = useState(false);
    const [transakce, setTransakce] = useState(null);

    let locationData = useLocation();

    const [details, setDetails] = useState({
        Konfenerce: "",  Uzivatel: "", Jmeno: "", Prijmeni: "",
        Email: "", Pocet_vstupenek: "", Celkova_cena: "", Stav: ""
    });

    //const [transakce, setTransakce] = useState(null)
    //let transakce;

    const _Rezervace = async () =>{
        let {error, dataToReturn: transakce} = await Rezervace(details, konfData.Nazev, setTransakce)

        /* if(!error){
            setDokokoncena(true);
        } */
    }

    let form = (
        <form onSubmit="" class="needs-validation" novalidate="">
        <div className="form-inner">
            <h1 class="h3 mb-3 fw-normal">Rezervace vstupenek</h1>

                <div class="row g-3">
                    <div class="col-12">
                        Konference: {konfData.Nazev}
                        <br/>
                        Cena vstupenky: {konfData.Cena_vstup}
                        <br/>
                        Zbývající kapacita: {konfData.ZbyvajiciKapacita ? konfData.ZbyvajiciKapacita : konfData.Kapacita }
                        <br/>
                        <br/>
                    </div>

                    <div class="col-12">
                        <label for="Pocet_vstupenek" class="form-label">Počet vstupenek</label>
                        <input type="number" class="form-control" id="Pocet vstupenek" required=""
                        onChange={e => setDetails({...details, Pocet_vstupenek: e.target.value > 0 ? e.target.value : 0})} value={details.Pocet_vstupenek}/>
                    </div>

                </div>

                {/* This is just horizontal break.. */}
                {/* <hr class="my-4"/> */}
                <br/>


                    {/* {() => /* await  RezervaceARegistrovat(details, konfData.Nazev)} */}
                <button class="w-10 btn btn-lg btn-primary" type="button" onClick={_RezervaceARegistrovat}>Potvrdit rezervaci</button>
            </div>
        </form>
    )

    let dokoncenaMsg = transakce ? (
        <div class="fa fa-transgender" aria-hidden="true" >
            Uchovajte si nasledujúce údaje:  <br/>
            id transakcie: {transakce.ID} <br/>
            Stav svojej transakcie môžte sledovať na (TODO tlačítko s linkom) <br/>
            Ak ste sa registrovali, stav svojej trasakcie môžte sledovať aj cez svoj profil
        </div>
    ) : null;

return (
        transakce ?
        dokoncenaMsg : 
        form
    
  );
}

export default RezervaceFormNotRegistered;
