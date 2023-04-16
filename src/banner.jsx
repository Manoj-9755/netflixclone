import React, { useEffect, useState } from 'react';
import './banner.scss';
import axios from './axio';
import requests from './request';

const Banner = () => {
    const[movie,setmovie]=useState([]);

    useEffect(()=>{
        async function fetchdata(){
            const request=await axios.get(requests.fetchnetflixoriginals);
            setmovie(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length-1)
                ]
            )
            return request;
        }
         
        fetchdata();
    },[])
    console.log(movie)
    

    function truncate(string,n){
        return  string?.length>n?string.substr(0,n-1)+'...':string;
    }
  return (
    <div className='banner' style={{
        backgroundSize:'cover',
        backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
        backgroundPosition:'center center'
    }}>
    <div className="banner-content">
        <h1 className="banner-title" >{movie?.name || movie.overview||movie.title}</h1>
        <div className="banner-button">
            <button>play</button>
            <button>My list</button>
        </div>
        <h1 className="banner-des">
           { truncate( movie.overview,100) }
        </h1>
    </div>
    <div className="banner-fadebutton"/>
    </div>
  )
}



export default Banner