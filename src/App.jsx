import './1.CSS/Main.css';
//pages
import Home from "./2.Pages/Homepage"
import Favourite from './2.Pages/favourite'
//header
import NavBar from './3.Component/header'
//state hooks
import { Routes, Route } from 'react-router-dom'
import { useState } from "react";
import { MovieProvider } from './4.Context/MovieContext';

function App() {
  // State to keep track of the current search query
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <MovieProvider>
      <div>
        {/* Navigation bar with search state passed as props */}
        <NavBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
        {/* Main content area for routing */}
        <main className='main-content'>
          <Routes>
            {/* Home page route with search query */}
            <Route 
              path='/' 
              element={<Home searchQuery={searchQuery} />} 
            />

            {/* Favourite page route */}
            <Route 
              path='/favourite' 
              element={<Favourite />} 
            />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
