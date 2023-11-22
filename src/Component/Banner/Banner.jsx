import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../utlis/axios.js';
import requests from '../../utlis/Request.js';

const Banner = () => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                const randomMovie =
                    request.data.results[
                        Math.floor(Math.random() * request.data.results.length - 1)
                    ];
                setMovies(randomMovie);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovie();
    }, []);

    // console.log(movies);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header
            className='banner'
            style={{
                backgroundImage: movies
                    ? `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`
                    : '',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }}
        >
            {movies && (
                <div className="banner-content">
                    <h1 className='banner-Title'>
                        {movies.title || movies.name || movies.original_name}
                    </h1>
                    <div className="banner-btns">
                        <button className='banner-btn'>Play</button>
                        <button className='banner-btn'>My List</button>
                    </div>
                    <h1 className="banner-description">
                        {truncate(movies.overview, 150)}
                    </h1>
                </div>
            )}
            <div className="banner-fadeBottom"></div>
        </header>
    );
};

export default Banner;
