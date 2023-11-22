import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import './Row.css';

const Row = ({title , fetchUrl , isLargeRow = false  }) => {
    const [movies,setMovies] = useState([]);

    const baseUrl = `https://image.tmdb.org/t/p/original/`

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(fetchUrl);
                setMovies(response?.data?.results);
            } catch (error) {
              console.log(error);
            }
        }
    
        fetchData();
    }, [fetchUrl]);
    console.log(movies);

    return (
        <div className='rowContainer'>
           <h2>{title}</h2>

        <div className="row-posters">
            {
                movies.map((movies)=>
                // ((isLargeRow && movies.poster_path) ||
                // (!isLargeRow && movies.backdrop_path)) && (         
                    <img 
                    className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                    key={movies.id}
                    src= {`${baseUrl}${isLargeRow ? movies?.poster_path : movies?.backdrop_path} `}
                    alt="img" />
                // )
            )}
        </div>
        </div>
    );
};

export default Row;