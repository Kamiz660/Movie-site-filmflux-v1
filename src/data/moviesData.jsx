import { useEffect, useState } from "react";
import { getPopularMovie,searchMovie } from "../service/API";

function usePopularMoviesArray()
{
 const [moviesArray, setMovies] = useState([]);
 const [error,setError] = useState(null)
 const [loading,setLoading] = useState(true)

 useEffect(() => 
  {
   const loadPopularMovies = async () => 
    {
     try
     {
      const popular_Movies = await getPopularMovie()
      setMovies(popular_Movies)
     }
     catch (err)
     {
      console.log(err)
      setError("Failed to Load..")  
     }
     finally 
     {
      setLoading(false)
     }
    }
   loadPopularMovies()
 },[])
 return { moviesArray, error, loading };
}
// useState is instial state declaration
// and useEffect is is what gets run on render, empty array means run once when mounts
// logs whaetevr err is and sets error = failed to load...
export default usePopularMoviesArray;
