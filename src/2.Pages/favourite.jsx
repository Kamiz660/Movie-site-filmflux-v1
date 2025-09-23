import { useMovieContext } from "../4.Context/MovieContext";
import MovieCard from "../3.Component/MovieCard";

function Favourite() {
    const { favourites } = useMovieContext();

    if (favourites && favourites.length > 0) {
        return (
            <div className='fav-h'>
                <h1>Your Favourites</h1>
            <div className="movie-grid">
                {favourites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
          </div>

        );
    }

    return (
        <div className="favourites-page">
            <h2>No favourite added</h2>
            <p>Your favourites will show up here</p>
        </div>
    );
}

export default Favourite;
