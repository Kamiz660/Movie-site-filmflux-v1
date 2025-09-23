import MovieCard from "../3.Component/MovieCard";
import usePopularMoviesArray from "../data/moviesData";
import '../1.CSS/Moviecard.css'; 

function Home({ searchQuery }) {
  const { moviesArray, error, loading } = usePopularMoviesArray();

  if (loading) return <p className="loadingpm" >Loading popular movies...</p>;
  if (error) return <p className="error">{error}</p>;

  const filteredMovies = (moviesArray || []).filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="movie-grid">
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))
      ) : (
        <p className="no-results">No matching movies found.</p>
      )}
    </div>
  );
}

export default Home;
