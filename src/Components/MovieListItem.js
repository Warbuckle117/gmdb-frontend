import '../App.css';

function MovieListItem({movieListItem, key}) {
    let title = movieListItem.title;
    let poster = movieListItem.poster;

    console.log(" ", key + ": " + title)
    console.log(" ", key + ": " + poster)
    return (
        <div>
            <div id="movie-title">
                title: {title}
                
            </div>
            <div>
                <img src={poster} alt="image"/>
            </div>
        </div>
    )
}

export default MovieListItem