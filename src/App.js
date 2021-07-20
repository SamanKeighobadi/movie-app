import { useState, useEffect } from "react";
import axios from "axios";
import "./assets/main.css";

function App() {
  const [title, setTitle] = useState("");

  const fetchMovies = async () => {
    try {
      const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";
      const response = await axios
        .get(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
        .catch((err) => console.log(err));
        const {title} = response.data;
        setTitle(title)
        
        console.log(response.data)
        
    } catch (error) {}
  };


  useEffect(() => {
    fetchMovies();
  },[])

  return (
    <div className="bg-gray-900">
      <h1 className="text-2xl">{title}</h1>
    </div>
  );
}

export default App;
