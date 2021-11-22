import React from "react";
import './SignIn.css';

function SignIn() {
  return (
    <div className="signIn">
        <div class="content container-fluid">
            <div class="row mb-3 justify-content-center" style={{marginTop: 20}}>
                {/* <!--<main class="form-signin">--> */}
                <div class="col-sm-4 themed-grid-col">

                    <form class="form-signin">
                        {/* <!--<img class="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">--> */}
                        <h1 class="h3 mb-3 fw-normal">Přihlášení</h1>

                        <div class="form-floating">
                            <label for="floatingInput">Email</label>
                            <input type="email" class="form-control" id="floatingInput" placeholder="smth@example.com"/>
                        </div>
                        <div class="form-floating">
                            <label for="password">Heslo</label>
                            <input type="password" class="form-control" id="password" placeholder="Password"/>
                        </div>

                        <div class="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> Zapamatuj si mně
                            </label>
                        </div>
                        <button class="w-100 btn btn-lg btn-primary" type="submit">Přihlásit</button>
                    </form>

                </div>
                <div class="col-sm-4 themed-grid-col">
                    {/* <!--                <div class="col-md-7 col-lg-8">--> */}
                    <h1 class="h3 mb-3 fw-normal">Registrace</h1>
                    <form class="needs-validation" novalidate="">
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <label for="firstName" class="form-label">Jméno</label>
                                <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""/>
                                <div class="invalid-feedback">
                                    Jméno není validní.
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <label for="lastName" class="form-label">Příjmení</label>
                                <input type="text" class="form-control" id="lastName" placeholder="" value="" required=""/>
                                <div class="invalid-feedback">
                                    Příjmení není validní.
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <label for="titul" class="form-label">Titul</label>
                                {/* <!--                                <input type="text" class="form-control" id="titul" placeholder="" value="" required="">--> */}
                                <select class="form-select" id="titul" >
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

                            <div class="col-sm-6">
                                <label for="role" class="form-label">Role</label>
                                <select class="form-select" id="role" >
                                    <option value="">Vybrat...</option>
                                    <option>uživatel</option>
                                    <option>správce</option>
                                </select>
                            </div>

                            <div class="col-12">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="smth@example.com" value="" required=""/>
                                <div class="invalid-feedback">
                                    Zadejte prosím validní email
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="telNMB" class="form-label">Telefonní číslo<span class="text-muted">(Nepovinné)</span></label>
                                <input type="email" class="form-control" id="telNMB" placeholder="" value="" required=""/>
                                <div class="invalid-feedback">
                                    Zadejte prosím validní telefononní číslo
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="organizace" class="form-label">Organizace</label>
                                <input type="text" class="form-control" id="organizace" placeholder="VUT FIT"/>
                                <div class="invalid-feedback">
                                    Zadejte existující organizaci
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="obor" class="form-label">Obor</label>
                                <input type="text" class="form-control" id="obor" placeholder="informatika"/>
                                <div class="invalid-feedback">
                                    Zadejte platnou organizaci
                                </div>
                            </div>

                            {/* <!--                            TODO možno selectbox na zemi--> */}
                            <div class="col-12">
                                <label for="zeme" class="form-label">Země</label>
                                <input type="text" class="form-control" id="zeme" placeholder="Česko"/>
                                <div class="invalid-feedback">
                                    Zadejte existujíci zemi
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="birthday" class="form-label">Datum narození</label>
                                <input type="text" class="form-control" id="birthday" placeholder=""/>
                                <div class="invalid-feedback">
                                    Zadejte validní datum narození
                                </div>
                            </div>
                        </div>

                        {/* This is just horizontal break.. */}
                        {/* <hr class="my-4"/> */}
                        <br/>

                        <button class="w-100 btn btn-lg btn-primary" type="submit">Zaregistrovat</button>
                    </form>
                </div>
            </div>
        </div>
    </div>  
    
  );
}

export default SignIn;
