import React from "react";
import Header from "./common/Header";
import BanerSlider from "./Sliders/BanerSlider";
import Popular from "./Sliders/Popular";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {

    const [title,setTitle] = useState("")
    const [image,setImage] = useState("")
    

    const fetchMovies = async () => {
      try {
        const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";
        const IMG_API = "https://image.tmdb.org/t/p/w500";
        const response = await axios
          .get(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
          .catch((err) => console.log(err));
  
           const {title,poster_path,backdrop_path} = response.data;
          
           setImage(`${IMG_API}/${poster_path}`)
           setTitle(title)
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
    <div>
      <Header />
      <BanerSlider image={image} title={title} />
      <Popular />
    </div>
  );
};

export default Home;
