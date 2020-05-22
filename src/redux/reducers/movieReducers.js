import {
    GET_MOVIES,
    ERROR_MOVIE,
    LOADING_MOVIE,
  } from "../types/movieTypes";
  
  const initial_state = {
    payload: {},
    error: false,
    loading: true,
    errorMessage: ""
  };
  
  const movieReducers = (state = initial_state, action) => {
    switch (action.type) {
      case GET_MOVIES:
        return {...state, movies: action.payload.movies, error: false, loading: false};
      case LOADING_MOVIE:
        return {...state, loading: true, error: false};
      case ERROR_MOVIE:
        return {...state, error: true, errorMessage: action.payload.error};
      default:
        return state;
    }
  };
  
  export default movieReducers;