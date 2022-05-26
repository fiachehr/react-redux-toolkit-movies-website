import React, { useEffect } from "react";
import MovieList from "../MovieList/MovieList";

import { useDispatch } from "react-redux";
import {
  fetchAsyncMovie,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovie());
    dispatch(fetchAsyncSeries());
  }, [dispatch]);
  return (
    <div>
      <div className="banner"></div>
      <MovieList />
    </div>
  );
};

export default Home;
