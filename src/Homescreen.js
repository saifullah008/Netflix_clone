import React from "react";
import request from './requests';
import Navbar from "./Navbar";
import Banner from "./Banner";
import Row from "./Row";


const HomeScreen=()=>{
    return(
    <>
      <Navbar/>
      <Banner/>
      <Row title="netflix original"
       fetchUrl={request.fetchNetflixOriginals}
       isLargeRow={true}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="trending row" fetchUrl={request.fetchTrending}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
    </>
    )
}
export default HomeScreen;