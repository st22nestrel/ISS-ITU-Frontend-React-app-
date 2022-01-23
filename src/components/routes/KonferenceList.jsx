/**
 * ITU - projekt, VUT FIT Brno
 * @author Tereza Burianová, xburia28
 * @file KonferenceList.jsx
 */
import React, { useState } from "react";
import KonferenceCard from "../cards/KonferenceCard.jsx";
import KonferenceCardNotRegistered from "../cards/KonferenceCardNotRegistered.jsx";
import {useGet, Post, Get} from '../../static/Loaders';
import Authentificate from "../Authentificate.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faList } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * 
 * @param {*} datas data to display
 * @param {*} isAuth is logged in
 * @returns 
 */
function InnerHtml({datas, isAuth, likeConference, dislikeConference, showFavourite, setShowFavourite}){

    const [filter1, setFilter1] = useState(null)
    const [filter2, setFilter2] = useState(null)
    const [filter3, setFilter3] = useState(null)
    const [filter4, setFilter4] = useState(null)    

    const data = (datas.filter(konf =>
        (filter1 ? konf.Nazev.toLowerCase().includes(filter1.toLowerCase()) : true) &&
        (filter2 ? konf.Obor.toLowerCase().includes(filter2.toLowerCase()) : true) &&
        (filter3 ? konf.Zeme.toLowerCase().includes(filter3.toLowerCase()) : true) &&
        (filter4 ? konf.Mesto.toLowerCase().includes(filter4.toLowerCase()) : true)
    ))
    

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
                <label class="form-label" for="form1">Zadej název konference</label>
                <input type="search" id="form1" class="form-control" 
                onChange={(e) => setFilter1(e.target.value)}/>
            </div>

            <div class="form-outline">
                <label class="form-label" for="form1">Zadej obor</label>
                <input type="search" id="form1" class="form-control" 
                onChange={(e) => setFilter2(e.target.value)}/>
            </div>

            <div class="form-outline">
                <label class="form-label" for="form1">Zadej zemi</label>
                <input type="search" id="form1" class="form-control" 
                onChange={(e) => setFilter3(e.target.value)}/>
            </div>

            <div class="form-outline">
                <label class="form-label" for="form1">Zadej město</label>
                <input type="search" id="form1" class="form-control" 
                onChange={(e) => setFilter4(e.target.value)}/>
            </div>
            <div class="form-outline">
                <label class="form-label" for="form1">&nbsp;</label>
                <button 
                    class="ml-5 form-control btn btn-round btn-fill btn-secondary show-hide-btn-sm"
                    onClick={() => setShowFavourite(!showFavourite)}
                >
                    {showFavourite 
                        ? <FontAwesomeIcon icon={faList} /> 
                        : <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
                    }
                    &nbsp;
                    {showFavourite ? "Zobrazit všechny konference" : "Zobrazit oblíbené konference"}
                </button>
            </div>
                    </div>
                </div>
            </div>
            </div>

            { 
                data && isAuth && data.map((konference)=>(
                    <div className="konference-card" key={konference.Nazev}>
                        <KonferenceCard
                            data={konference}
                            likeConference={likeConference}
                            dislikeConference={dislikeConference}
                            showFavourite={showFavourite}
                        />
                    </div>
            ))}

            { 
                data && !isAuth && data.map((konference)=>(
                    <div className="konference-card" key={konference.Nazev}>
                        <KonferenceCardNotRegistered data={konference}/>
                    </div>
            ))}

                {
                !data  &&
                <div className="">
                    <h2>Zadanému filtru žádná konference</h2>
                </div>
                }

        </div>
    )
}

/**
 * Container for list of conference cards
 * @param {*} url url to use to obtain data
 * @returns 
 */
function KonferenceList({url}) {

    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [pending, setPending] = useState(true);
    const [showFavourite, setShowFavourite] = useState(false);


    const likeConference = async (name) => {
        let {dataToReturn, pending, error} = await Post('http://ituprojekt.fun:8000/konference/'+name+'/oblibene/pridat', null, null);
        let confToUpdate = data.find(konf => konf.Nazev === name);
        console.log(confToUpdate);

        const newData = data.map(a => {
            if (a.Nazev === name) {
                return {...a, oblibena: true}
            }
            return a;
        });
        
        setData(newData);
    }
    
    const dislikeConference = async (name) => {
        let {dataToReturn, pending, error} = await Post('http://ituprojekt.fun:8000/konference/'+name+'/oblibene/odebrat', null, null);
        if (showFavourite) {
            const newData = data.filter(konf => konf.Nazev !== name);
            setData(newData);
        }
    }


    const fetchFavouriteData = async () => {
        setPending(true);
        let {dataToReturn, pending, error} = await Get(url);
        setError(error);
        setPending(false);
        const newData = dataToReturn.filter(konf => konf.oblibena);
        setData(newData);
    };

    useEffect(() => {
        const fetchData = async () => {
            let {dataToReturn, pending, error} = await Get(url);
            setData(dataToReturn);
            setError(error);
            setPending(false);
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (!pending) {
            if (showFavourite) {
                fetchFavouriteData();
            } else {
                setPending(true);
                const fetchData = async () => {
                    let {dataToReturn, pending, error} = await Get(url);
                    setData(dataToReturn);
                    setError(error);
                    setPending(false);
                };
        
                fetchData();
            }
        }
    }, [showFavourite]);
    
    const isAuth = Authentificate.isAuth();

    if(data && data.length == 0){
        setData(null);
    }

    return (
    <div className="konference">
        <div class="container-fluid content">
            <div class="row mb-3 justify-content-center">

                { error && <div>{ error }</div> }
                { pending && 
                <div>Loading...
                    <div class="spinner-border text-secondary" role="status">
                    </div>
                </div> }

                {(!pending && data) &&
                <InnerHtml 
                    datas={data} 
                    isAuth={isAuth} 
                    error={error} 
                    pending={pending}
                    likeConference={likeConference}
                    dislikeConference={dislikeConference}
                    showFavourite={showFavourite}
                    setShowFavourite={setShowFavourite}
                /> 
                }

                {
                !data  && !pending &&
                <div className="" class="errorText">
                    <h2>Konference odpovídající daným požadavkům nenalezeny.</h2>
                    <button 
                    class="form-control btn btn-round btn-fill btn-secondary show-hide-btn-sm showAllBtn"
                    onClick={() => {
                        window.location.href=window.location
                    }}
                    >
                        <FontAwesomeIcon icon={faList} /> 
                        &nbsp;
                        {"Zobrazit všechny konference"}
                    </button>
                </div>
                }

            </div>
        </div>
    </div>
  );
}

export default KonferenceList;