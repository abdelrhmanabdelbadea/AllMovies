import React , {useState , useEffect} from 'react'
import Header from './components/Header'
import MoviesList from './components/MoviesList'

import Footer from './components/Footer'
import axios from 'axios'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from './components/MovieDetails'

function App() {
const [movies , setMovies] = useState([]);

const getMovies = async () =>{
  const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`);
  setMovies(res.data.results)
} //getMovies

const search = async (word) =>{
  if(word === ""){
    getMovies()
  }else{
     const res = await axios.get(`
  https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&query=${word}`);
  setMovies(res.data.results)
  }
 
} //search


const getPage = async (page) =>{
  const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`);
  setMovies(res.data.results)
} //getPage

useEffect( ()=>{
  getMovies()
} ,[] )

  return (
    <div className=''>
      <Header search={search} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<MoviesList movies={movies} getPage={getPage}/>} />
          <Route path='/movie/:id' element = {<MovieDetails/>} />
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  )
}

export default App