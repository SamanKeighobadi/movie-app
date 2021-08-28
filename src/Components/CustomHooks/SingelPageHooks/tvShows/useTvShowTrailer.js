import axios from 'axios';
import {useState,useEffect} from 'react';

const useTvShowTrailer = (url) => {
    
    const [video,setVideo] = useState("")

    const fetchTvVideo = async () => {
        try {
          const response = await axios
            .get(url )
            .catch((err) => console.log(err));
    
          // console.log(response.data)
          //* get the last season key video
          setVideo(response.data.results[0]?.key);
        } catch (err) {
          console.log(err);
        }
      };

      useEffect(() =>{
          fetchTvVideo();
      },[])

    return {video}
};

export default useTvShowTrailer;