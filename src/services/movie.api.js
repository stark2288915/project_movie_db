import axios from "axios";
import {baseURL} from "../constants/urls";

const getMovies =  axios.create({
    baseURL: `${baseURL}/discover/movie`,
    headers:{}
})


const getMoviesPage = (page='1') =>  {
    return getMovies.get('', {params: {page}});
}


getMovies.interceptors.request.use(request => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWNkODg3ODY0Yzk3Mjk5NGUyY2RhMjMxOTU5YmNiMCIsInN1YiI6IjY0NjhiOTEyYTUwNDZlMDE0NzRjZGVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sy7w3Bml3bdBo8FvjO2kE1dIxExT7ZV9lg68H4eku7w'
    if(token){
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
})

export {getMovies, getMoviesPage}



   // let number = ?page=1;