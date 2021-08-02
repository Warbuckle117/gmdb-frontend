import '../App.css';
import MovieListItem from './MovieListItem';



function MovieList ({movieListSource}) {
    //create a for each loop to display the movie list from the service, 
    //`GET movies` - returns a list of all movies http://localhost:3001/movies
    //let testMovieItem = MovieListSource[0];
    //let movieItem = movieListSource[0];
    //let title = movieListSource[0].title;
    // let poster = movieListSource[0].poster;

    // console.log("title: ", title)
    // console.log("poster: ", poster)
    // console.log("Movie item: ", movieItem)

    return (
        <div id="movie-list">
            

            {           
            movieListSource.map((movieListItem, key) => {
                return <MovieListItem class="movie-item" movieListItem={movieListItem} key={key}>This should be an array of movies</MovieListItem>
            })
            }
        </div>
    )
}

// https://coursework.vschool.io/mapping-components-in-react/
export default MovieList