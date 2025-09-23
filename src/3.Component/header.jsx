import {Link} from "react-router-dom"
import '../1.CSS/header.css'
import gradient from "../data/gradient.png"

function NavBar({searchQuery, setSearchQuery})
 { 
  const searchText = (e) =>
  {
    e.preventDefault()
  }
  return <>
  <img className="image-gradient" src={gradient} alt="gradient" /> 
  <img className="image-gradient-2" src={gradient} alt="gradient2" /> 

   <nav className="nav-bar">

    <div className="brandnsearch">
      <div className="navbar-brand">
      <Link to="/">Film Flux</Link></div>  
     <form className="search-bar" onSubmit={searchText}> {/*on submit it runs variable search*/}
      <input className="search-field"
       type="text" 
       placeholder="Name of the movie..." 
       value ={searchQuery}
       onChange ={(e) => setSearchQuery(e.target.value)} />{/*on change set e to value*/}
<button type="submit" className="search-btn">
  <i className="fa fa-search"></i>
</button>
     </form>  
    </div>
     <div className="navbar-links">
      <Link to="/" className="home-link">🏠︎</Link>
      <Link to="/favourite" className="fav-link">🤍</Link>
     </div>
    </nav>
</>
}
export default NavBar;


    ///here we call the array(movies) again, then use map to map each array and give output that is mapped o/p
    //the mapping is done with help of imported movie card jshtml structure which is applied to the array before o/p it 
    //here for each movie is a prop containing one array item at a time
    //key=id means the id becomes the key aka unique identifier
    // value is just a property of input 