import Api from '../../services/api';
import {
    GET_MOVIES,
    ERROR_MOVIE,
    LOADING_MOVIE
} from '../types/movieTypes';

export const getMovies = () => async dispatch => {
    dispatch({
      type: LOADING_MOVIE,
    });
    try {
      const movies = await Api.getMovies();
      dispatch({
        type: GET_MOVIES,
        payload: { movies },
      });
    } catch (e) {
      console.error(e);
      dispatch({
        type: ERROR_MOVIE,
        payload: {
          errorMessage: 'Error: Something was wrong!',
        },
      });
    }
  };