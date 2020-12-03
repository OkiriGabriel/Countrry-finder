import React from 'react'

function Card (props) {
    const {movie} = props;
  return (
      <div className='card'>
        
            <img src={movie.Poster} alt={movie.Title} />
        
        <h4 className='prdr'>{movie.Title}</h4>
        <span  className='prd'>{movie.Year}</span>

      </div>
  ) 
}
export default Card