import React , {useState , useEffect} from 'react'

import { useParams } from "react-router-dom";
import axios from 'axios'

function MovieDetails() {
    const [movie , setMovie] = useState([]);

    const param = useParams();
    //console.log(param.id);

    const getMoviesDetails = async () =>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`);

        // console.log(res.data);

        setMovie(res.data);
      } //getMoviesDetails

      useEffect( ()=>{
        getMoviesDetails() 
      } ,[] )
      

  return (
    <>
       <section className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-3">
        <div className="card p-3 text-center">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        </div>{/*  card */}
      </div>
      <div className="col-9">
        <div className="card p-3 text-start">
        <h3> {movie.title}</h3>
    <h5> تاريخ الانتاج:     {movie.release_date}</h5>
    <h5> التقييم :  {movie.vote_average}</h5>

          <p> {movie.overview} </p>

        
        </div>{/*  card */}
      </div>
    </div>{/* row */}
  </div>
</section>

    </>
  )
}

export default MovieDetails