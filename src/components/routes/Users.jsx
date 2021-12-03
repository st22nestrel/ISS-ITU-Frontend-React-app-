import React, {useState} from 'react';
import { useGet } from '../../static/Loaders';
import UserDetailPortfolio from '../cards/UserDetailPortfolio';

function Users() {

    let { data, pending, error } = useGet('http://ituprojekt.fun:8000/uzivatel/seznam', null)
    
  return (
    <div class="card">
    {
        data &&
        data.map((uzivatel) => (
            <div className={uzivatel} key={uzivatel.ID}>
                <UserDetailPortfolio uzivatel={uzivatel} />
            </div>
            )
        )
    }
    </div>
  )
}

export default Users;