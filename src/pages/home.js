import React from 'react';
import MovieContainer from "../components/movies/containers/index";
class Home extends React.Component{
    render(){
        return(
            <h1>
                <MovieContainer />
            </h1>
        )
    }
}
export default Home;