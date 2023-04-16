import React, { useEffect, useState } from "react";
import "./row.scss";
import axios from "./axio";

const Row = ({ title, fetchurl, islargerow = false }) => {
  const [movie, setmovie] = useState([]);
  const base_url="https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchurl);
      setmovie(request.data.results);
      return request;
    }
    fetchdata();
  }, [fetchurl]);
  console.log(movie)
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="pic-poster">
      {
        movie.map(movie=>(
          <>
            <img className={`pic ${islargerow&& 'piclarge'}`} key={movie.id} src={`${base_url}${
                islargerow?movie.poster_path:movie.backdrop_path
            }`} alt="" />
            </>
        ))
      }
      </div>
      

    </div>
  );
};

export default Row;
