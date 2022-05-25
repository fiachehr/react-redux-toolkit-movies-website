import React,{useEffect} from 'react';
import MovieList from '../MovieList/MovieList';
import {APIKey} from '../../common/APIs/movieAPIKey'
import movieAPI from '../../common/APIs/movieAPI'
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {

    const dispatch =useDispatch();
    useEffect(()=>{
        const MovieFilter = "Harry";
        const fetchMovies = async () => {
            const response = await movieAPI
            .get(`?apikey=${APIKey}&s=${MovieFilter}&type=movie`)
            .catch((error)=> {
                console.log('Error :' , error);
            });
            dispatch(addMovies(response.data));
        };
        fetchMovies();
    },[]);
    return (
        <div>
            <div className='banner'></div>
            <MovieList/>
        </div>
    );
};

export default Home;