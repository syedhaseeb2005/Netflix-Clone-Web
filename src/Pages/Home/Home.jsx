import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Banner from '../../Component/Banner/Banner';
import Row from '../../Component/Row/Row';
import requests from '../../utlis/Request.js';

const Home = () => {
    return (
        <div className="homeScreen">
        {/* Nav  */}
        <Navbar/>

        {/* Banner  */}
        <Banner/>

        {/* Row  */}
        <Row
            title = "NETFLIX ORIGINALS"
            fetchUrl = {requests.fetchNetflixOriginals}
            isLargeRow
        />
        <Row
            title= 'Trending Now'
            fetchUrl = {requests.fetchTrending}
        />
        <Row
            title = 'Top Rated'
            fetchUrl= {requests.fetchTopRated}
        />
        <Row
            title= 'Action Movies'
            fetchUrl = {requests.fetchActionMovies}
        />
        <Row
            title = 'Comedy Movies'
            fetchUrl = {requests.fetchComedyMovies}
        />
        <Row
            title= 'Horror Movies'
            fetchUrl= {requests.fetchHorrorMovies}
        />
        <Row
            title= 'Romance Movies'
            fetchUrl= {requests.fetchRomanceMovies}
        />
        <Row
            title= 'Documentaries'
            fetchUrl= {requests.fetchDocumentaries}
        />



        </div>
        
    );
};

export default Home;