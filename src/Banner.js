import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';

const Banner = () => {
  const base_url = 'https://image.tmdb.org/t/p/original/';
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner-contents'>
        <h1 className='banner_title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        {/* desc */}
        <h1 className='banner_desc'>{movie?.overview}</h1>
      </div>
      <div className='banner_fadeBottom'></div>
    </header>
  );
};

export default Banner;
