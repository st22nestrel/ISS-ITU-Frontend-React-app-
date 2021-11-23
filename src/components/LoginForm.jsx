import React, { useState } from 'react'

/**
 * 
 * @param Login login fnc
 * @returns 
 */
function LoginForm({Login, error}) {

    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h1 class="h3 mb-3 fw-normal">Přihlášení</h1>
                <div className="form-group">
                    <div class="form-floating">
                        <label htmlFor="floatingInput">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="smth@example.com"
                        onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div>
                    <div class="form-floating">
                        <label htmlFor="password">Heslo</label>
                        <input type="password" class="form-control" id="password" placeholder="Password"
                        onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit">Přihlásit</button>

            </div>
        </form>
    )
}

export default LoginForm
