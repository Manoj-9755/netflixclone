import React from 'react'
import './home.scss'
import Nav from './nav'
import Banner from './banner'
import requests from './request'
import Row from './row'

const Home = () => {
  return (
    <div className='home'>
        <Nav/>
        <Banner/>
        <Row
        title='Netflix Orginals'
        fetchurl={requests.fetchnetflixoriginals}
        islargerow
        />
        <Row title='Trending Now'
        fetchurl={requests.fetchtrending}/>
        <Row title='Top Rated'
        fetchurl={requests.fetchttoprated}/>
        <Row title='Action Movies'
        fetchurl={requests.fetchtactionmovies}/>
        <Row title='Comedy Movies'
        fetchurl={requests.fetchcomedymovie}/>
        <Row title='Horror Movie'
        fetchurl={requests.fetchhorrormovie}/>
        <Row title='Romance Movie'
        fetchurl={requests.fetchtromancemovie}/>
        <Row title='Documataried'
        fetchurl={requests.fetchtdocumentaries}/>


    </div>
  )
}

export default Home