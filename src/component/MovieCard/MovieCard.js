import React from 'react';

const MovieCard = ({movie}) => {
    const {title, backdrop_path, poster_path
    } = movie
    return (
        <div className='col-3'>
            <div className="img">
                <img className="movie-img" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`} alt=""/>
            </div>
            <p>{title}</p>
        </div>
    );
};

export default MovieCard;