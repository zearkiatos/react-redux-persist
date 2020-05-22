import React, { Fragment } from "react";
import "./movieList.css";

const renderMovies = (movies) => {
    console.log(movies);
    const renderMovies = movies.map(movie => {
        return (
            <Fragment key={movie.id}>
                <img src={movie.medium_cover_image} />
                <section>
                <h3>
                    {movie.title}
                </h3>
                <p>
                    {movie.description_full}
                </p>
                </section>
            </Fragment>
        )
    });
    return renderMovies;
} 
const MovieList = ({movies}) => {
    return (
        <Fragment>
            {renderMovies(movies)}
        </Fragment>
    );
}

export default MovieList;