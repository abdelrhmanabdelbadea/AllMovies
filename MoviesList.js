import React from 'react'
import MovieCard from './MovieCard'
import Pagination from './Pagination'
function MoviesList( {movies , getPage} ) {
  return (
    <>
<section id="movies-list" className="py-5">
  <div className="container">
    <div className="row">
      {
        movies.length >=1 ? 
        movies.map( (movie)=>{
          return(<MovieCard movie={movie} key={movie.id}/>)
        } )
         : 'NoData'
      }
        
    </div>{/*  row */}

    <Pagination getPage={getPage} />


  </div>{/*  container */}
</section>{/* #movies-list */}
</>
  )
}

export default MoviesList