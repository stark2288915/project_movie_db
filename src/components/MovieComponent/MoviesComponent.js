import React, {useEffect, useState} from 'react';
import {MovieComponent} from "./MovieComponent";
import {getMovies} from "../../services/movie.api";
import {request} from "axios";

const MoviesComponent = () => {


    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies().then(value => setMovies(value.data)).then(value => console.log(movies))
    }, [])


    return (
        <div>
            {/*{movies.map(movie => <MovieComponent movie={movie} key={movie.id}/>)}*/}
        </div>
    );
};

export {MoviesComponent};