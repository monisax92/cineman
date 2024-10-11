import { useState, useEffect } from 'react'

export const useFetch = (api, queryTerm="") => {

  const [data, setData] = useState([]);

  const baseUrl = "https://api.themoviedb.org/3/";

  let url = baseUrl;
  if (queryTerm.length === 0) {
    url += api;
  } else {
    url += `search/movie?query=${queryTerm}`;
  }
  // const url = `https://api.themoviedb.org/3/${queryTerm.length==0 ? api : }`;

  useEffect(() => {
    async function fetchMovies(){
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_AUTH
        }
      };
      const resp = await fetch(url,options);
      const json = await resp.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url])

  return {data}
}
