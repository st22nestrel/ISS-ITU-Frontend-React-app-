import { useState, useEffect } from 'react';

/**
 * 
 * @param {*} url server url route
 * @param {*} token authorization token
 * @returns {*} { data, pending, error }
 */
const useGet = (url, token) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const abortCont = new AbortController();
  
      fetch(url, { 
          signal: abortCont.signal,
          method: 'GET',
          headers: {
              /* "Authorization" : `Bearer ${token}` */
              "Authorization" : token
            }
        })
      .then(res => {
          if (!res.ok) { // error coming back from server
              throw Error('could not fetch the data for that resource');
          } 
          return res.json();
        })
      .then(data => {
          setPending(false);
          setData(data);
          setError(null);
        })
      .catch(err => {
          if (err.name === 'AbortError') {
              console.log('fetch aborted')
          } else {
              // auto catches network / connection error
              setPending(false);
              setError(err.message);
          }
        })
  
      // abort the fetch
      return () => abortCont.abort();
    }, [url])
  
    return { data, pending, error };
}

/**
 * 
 * @param {*} url server url route
 * @param {*} token authorization token
 * @param {*} dataToPost should be stringified json 
 * @returns {*} data, pending, error
 */
const usePost = (url, token, dataToPost) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const abortCont = new AbortController();
  
      fetch(url, { 
          signal: abortCont.signal,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            /* "Authorization" : `Bearer ${token}` */
            "Authorization" : token
          },
          body: dataToPost
        })
      .then(res => {
          if (!res.ok) { // error coming back from server
              throw Error('could not fetch the data for that resource');
          } 
          return res.json();
        })
      .then(data => {
          setPending(false);
          setData(data);
          setError(null);
        })
      .catch(err => {
          if (err.name === 'AbortError') {
              console.log('fetch aborted')
          } else {
              // auto catches network / connection error
              setPending(false);
              setError(err.message);
          }
        })
  
      // abort the fetch
      return () => abortCont.abort();
    }, [url])
  
    return { data, pending, error };
}

export {useGet, usePost};