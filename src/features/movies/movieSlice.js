import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/APIs/movieAPIKey";
import movieAPI from "../../common/APIs/movieAPI";

export const fetchAsyncMovie = createAsyncThunk("movies/fetchAsyncMovie", async () => {
  const movieFilter = "Harry";
  const response = await movieAPI.get(
    `?apikey=${APIKey}&s=${movieFilter}&type=movie`
  );
  return response.data;
});

export const fetchAsyncSeries = createAsyncThunk("movies/fetchAsyncSeries", async () => {
    const seriesFilter = "friends";
    const response = await movieAPI.get(
      `?apikey=${APIKey}&s=${seriesFilter}&type=series`
    );
    return response.data;
  });

const initialState = {
  movies: {},
  series: {}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovie.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovie.fulfilled]: (state, { payload }) => {
      console.log("fetched data successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovie.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
        console.log("fetched data successfully");
        return { ...state, series: payload };
      },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;

export default movieSlice.reducer;
