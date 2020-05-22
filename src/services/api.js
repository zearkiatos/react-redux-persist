import AsyncStorage from '@react-native-community/async-storage';

const BASE_API = 'https://yts.mx/api/v2/';

class Api {
  async getSuggestion(id) {
    const query = await fetch(`${BASE_API}list_movies.json?movie_id=${id}`);
    const {data} = await query.json();
    return data.movies;
  }

  async getMovies() {
    try{
      const query = await fetch(`${BASE_API}list_movie.json?`);
      const {data} = await query.json();
      return data.movies;
    }
    catch(e){
      console.info(`Error: ${e.message}, Get Persist Data`)
      return this.getMoviesPersist()
    }
  }

  async searchMovie(title) {
    const query = await fetch(
      `${BASE_API}list_movies.json?limit=1&sort_by=rating&query_term=${title}`,
    );
    const {data} = await query.json();
    return data.movies;
  }

  getMoviesPersist = async () => {
    const { movieReducers } = JSON.parse(await AsyncStorage.getItem("persist:root"))
    console.log(JSON.parse(movieReducers))
    const { movies } = JSON.parse(movieReducers)
    return movies
  }
}

export default new Api();