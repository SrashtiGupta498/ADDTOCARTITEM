import { useState , useEffect } from "react";

export const useFetch = (apiPath , queryTerm = "") =>{
    const [ data , setData]  = useState([]);
 
    const apiKey = 'b80d59c33d6d57ed9c7e3713f91c188a'
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${queryTerm}`


    useEffect(() =>{
        async function fetchMovies(){
        const response = await fetch(url);
        const json = await response.json()
        setData(json.results);    
        }
        fetchMovies()

    } , [url])

    return { data };
}