import React, {useState} from 'react';
import { useGet } from '../../static/Loaders';
import UserDetailPortfolio from '../cards/UserDetailPortfolio';

function InnerHtml({datas, isAuth, error, pending}){

  const [data, setData] = useState(datas);

  return(
      <div class="col-12">

          <div class="content container-fluid">
              <div class="row mb-3 " style={{marginTop: 20}}>
                  <div class="col-12 themed-grid-col">
          
          <div class="input-group">

          <div class="form-outline" style={{marginRight: 20}}>
              <h2>Filtr: </h2>
          </div>

          <div class="form-outline">
              <label class="form-label" for="form1">Zadej id</label>
              <input type="search" id="form1" class="form-control" 
              onChange={(e) => setData(datas.filter(uzivatel => e.target.value ? uzivatel.ID == Number(e.target.value) : true))}/>
          </div>

          <div class="form-outline">
              <label class="form-label" for="form1">Zadej email</label>
              <input type="search" id="form1" class="form-control" 
              onChange={(e) => setData(datas.filter(uzivatel => e.target.value ? uzivatel.Email.toLowerCase().includes(e.target.value.toLowerCase()) : true))}/>
          </div>

          <div class="form-outline">
              <label class="form-label" for="form1">Zadej jméno</label>
              <input type="search" id="form1" class="form-control" 
              onChange={(e) => setData(datas.filter(uzivatel => e.target.value ? uzivatel.Jmeno.toLowerCase().includes(e.target.value.toLowerCase()) : true))}/>
          </div>

          <div class="form-outline">
              <label class="form-label" for="form1">Zadej přijmení</label>
              <input type="search" id="form1" class="form-control" 
              onChange={(e) => setData(datas.filter(uzivatel => e.target.value ? uzivatel.Prijmeni.toLowerCase().includes(e.target.value.toLowerCase()) : true))}/>
          </div>
                  </div>
              </div>
          </div>
          </div>

        {
        data &&
        data.map((uzivatel) => (
            <div className={uzivatel} key={uzivatel.ID}>
                <UserDetailPortfolio uzivatel={uzivatel} />
            </div>
            )
         )
        }

        {
        !data  &&
        <div className="">
            <h2>Zadanému filtru neodpovídá žadný uživatel</h2>
        </div>
        }

      </div>
  )
}

function Users() {

    let { data, pending, error } = useGet('http://ituprojekt.fun:8000/uzivatel/seznam', null)
    
  return (
    <div class="card">
    {
        data &&
        <InnerHtml datas={data}/>
    }
    </div>
  )
}

export default Users;