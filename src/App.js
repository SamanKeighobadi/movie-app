import { useState, useEffect } from "react";
import axios from "axios";
import Header from './common/Header'
import "./assets/main.css";
import BanerSlider from "./Sliders/BanerSlider";
import Popular from "./Sliders/Popular";

function App() {

  const fetchMovies = async () => {
    try {
      const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";
      const IMG_API = "https://image.tmdb.org/t/p/w500";
      const response = await axios
        .get(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
        .catch((err) => console.log(err));

        
        console.log(response.data)
        console.log(process.env.API_KEY)

    } catch (error) {
      console.log(error)
    }
  };


  useEffect(() => {
    fetchMovies();
  },[])

  return (
    <div className="bg-gray-900 h-full">
    <Header />
    <BanerSlider />
    <Popular />
    </div>
  );
}

export default App;
