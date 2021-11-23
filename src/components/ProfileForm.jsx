import React, {useState} from 'react'

function ProfileForm({Update, emailDetail}) {

    const [details, setDetails] = useState({
        name: "", surname: "", degree: "", email: emailDetail.email, telNmb: "", 
        password: "", organisation: "", field: "", country: "",
        birthday: ""
    });

    const submitHandler = e => {
        e.preventDefault();

        Update(details);
    }

    return (
        <form onSubmit={submitHandler} class="needs-validation" novalidate="">
            <div className="form-inner">
            <h1 class="h3 mb-3 fw-normal">Registrace</h1>

                <div class="row g-3">
                    <div class="col-sm-6">
                        <label for="name" class="form-label">Jméno</label>
                        <input type="text" class="form-control" id="name"
                        onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                        <div class="invalid-feedback">
                            Jméno není validní.
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <label for="surname" class="form-label">Příjmení</label>
                        <input type="text" class="form-control" id="surname"
                        onChange={e => setDetails({...details, surname: e.target.value})} value={details.surname}/>
                        <div class="invalid-feedback">
                            Příjmení není validní.
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <label for="degree" class="form-label">Titul</label>
                        <br />
                        <select class="form-select" id="degree" 
                        onChange={e => setDetails({...details, degree: e.target.value})} value={details.degree}>
                            <option value="">Vybrat...</option>
                            <option>-</option>
                            <option>Bc.</option>
                            <option>Ing.</option>
                            <option>Mgr.</option>
                            <option>Phd.</option>
                        </select>

                        {/* <!--                                <div class="invalid-feedback">-->
                        <!--                                    Titul není validní.-->
                        <!--                                </div>--> */}
                    </div>

                    <div class="col-12">
                        <label for="password" class="form-label">Heslo</label>
                        <input type="password" class="form-control" id="password" required=""
                        onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                        <div class="invalid-feedback">
                            Zadejte prosím validní email
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email"
                        onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                        <div class="invalid-feedback">
                            Zadejte prosím validní email
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="telNmb" class="form-label">Telefonní číslo<span class="text-muted">(Nepovinné)</span></label>
                        <input type="tel" class="form-control" id="telNmb"
                        onChange={e => setDetails({...details, telNmb: e.target.value})} value={details.telNmb}/>
                        <div class="invalid-feedback">
                            Zadejte prosím validní telefononní číslo
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="organisation" class="form-label">Organizace</label>
                        <input type="text" class="form-control" id="organisation"
                        onChange={e => setDetails({...details, organisation: e.target.value})} value={details.organisation}/>
                        <div class="invalid-feedback">
                            Zadejte existující organizaci
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="field" class="form-label">Obor</label>
                        <input type="text" class="form-control" id="field"
                        onChange={e => setDetails({...details, field: e.target.value})} value={details.field}/>
                        <div class="invalid-feedback">
                            Zadejte platnou organizaci
                        </div>
                    </div>

                    {/* <!--                            TODO možno selectbox na zemi--> */}
                    <div class="col-12">
                        <label for="zeme" class="form-label">Země</label>
                        <input type="text" class="form-control" id="zeme"
                        onChange={e => setDetails({...details, country: e.target.value})} value={details.country}/>
                        <div class="invalid-feedback">
                            Zadejte existujíci zemi
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="birthday" class="form-label">Datum narození</label>
                        <input type="date" class="form-control" id="birthday"
                        onChange={e => setDetails({...details, birthday: e.target.value})} value={details.birthday}/>
                        <div class="invalid-feedback">
                            Zadejte validní datum narození
                        </div>
                    </div>
                </div>

                {/* This is just horizontal break.. */}
                {/* <hr class="my-4"/> */}
                <br/>

                <button class="w-100 btn btn-lg btn-primary" type="submit">Potvrdit nové údaje</button>

            </div>
        </form>
    )
}

export default ProfileForm
