import React, {useEffect, useState} from 'react';
import {MovieComponent} from "./MovieComponent";
import {getMovies, getMoviesPage} from "../../services/movie.api";
import {request} from "axios";
import {useSearchParams} from "react-router-dom";

const MoviesComponent = () => {


    const [query, setQuery] = useSearchParams({page:'1'})

    console.log(query)

    //функции кнопок


    const next = () => {
        setQuery(prev => {
            query.set('page', (+prev.get('') + 1).toString())
            return query
        } )
    }

    const prev = () => {
        setQuery(prev => {
            query.set('page', (+prev.get('') - 1).toString())
            return query
        } )
    }


    const [prevNext, setPrevNext] = useState({prev: null, next: null})

    const [movies, setMovies] = useState([])

     useEffect(() => {
         getMoviesPage(query.get('page'))
             .then(({data}) => {
                 setMovies(data.results)
                 setPrevNext({
                     prev: data.page < 0 ? null : data.page,
                     next: data.page === 501 ? null : data.page})
                 console.log(data)
             })
    }, [query.get('page')])














    return (
        <div>
            {movies.map(movie => <MovieComponent movie={movie} key={movie.id}/>)}
            <button disabled={!prevNext.prev} onClick={prev}>prev</button>
            <button disabled={!prevNext.next} onClick={next}>next</button>
        </div>
    );
};

export {MoviesComponent};