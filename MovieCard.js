import React from 'react'
import { Link } from "react-router-dom";
function MovieCard({movie}) {
  return (
    <>
       <div className="col-md-3 col-sm-6 mb-1">
  <div className="card p-3 text-center">
    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
    <h3> {movie.title}</h3>
    <h5> تاريخ الانتاج:     {movie.release_date}</h5>
    <h5> التقييم :  {movie.vote_average}</h5>
    <Link to={`/movie/${movie.id}`} className="btn btn-warning">تفاصيل الفيلم</Link>
  </div>{/*  card */}
</div>{/* # Movie */}

    </>
  )
}

export default MovieCard