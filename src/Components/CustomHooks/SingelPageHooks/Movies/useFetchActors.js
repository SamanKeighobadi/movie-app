import axios from 'axios';
import {useState,useEffect} from 'react';

const useFetchActors = (url) => {

    const [actors, setActors] = useState([]);
    const [director, setDirector] = useState("");

    const fetchActors = async () => {
        try {
          const response = await axios
            .get(url)
            .catch((err) => console.log(err));
          //* Destructure the cast who has actors and crew who has director
          const { cast, crew } = response.data;
          //* find and slice just main actors
          const actors = cast.slice(0, 3);
          setActors(actors);
          //* find and filter the Director from crew array
          const director = crew.filter((c) => c.job === "Director");
          setDirector(director[0].name);
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(() =>{
          fetchActors()
      },[])


    return {actors,director}
};

export default useFetchActors;