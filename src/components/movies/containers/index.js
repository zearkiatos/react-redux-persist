import React, {Component, Fragment} from "react";
import { connect } from "react-redux";
import MovieList from "../components/movieList";
import * as movieActions from "../../../redux/actions/movieActions";
import Error from "../../Error";
import Loading from "../../Loading";

const { getMovies } = movieActions;

class MovieContainer extends Component{
    componentDidMount() {
        const { getMovies } = this.props;
        getMovies();
    }
    renderMovieList = (movies) => <MovieList movies={movies}  />
    renderError = (error, errorMessage) => error && <Error message={errorMessage} />
    renderLoading = (loading) => loading && <Loading /> 
    render() {
        const {movies, error, errorMessage, loading} = this.props;
        const showMovieList = !error && !loading;
        return (
            <Fragment>
                {this.renderLoading(loading)}
                {this.renderError(error, errorMessage)}
                {showMovieList && this.renderMovieList(movies)}
            </Fragment>
        )
    }
}
const mapStateToProps = ({ movieReducers }) => {
    
    return {
        movies: movieReducers.movies,
        error: movieReducers.error,
        loading: movieReducers.loading,
        errorMessage: movieReducers.errorMessage
    };
  };
  const mapDispatchToProps = {
    getMovies,
  };
  export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);