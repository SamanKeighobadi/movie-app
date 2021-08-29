import React from "react";
import { IMG_500, unavailable_image } from "../../Config/config";
import PropTypes from 'prop-types'
import { HashLoader } from "react-spinners";

const SingelPageMovieImage = ({ image, title }) => {
  const [loading, setLoading] = React.useState(true);
  const [images, setImages] = React.useState("");

  React.useEffect(() => {
    setImages(`${IMG_500}/${image.poster_path}`);
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <HashLoader size={30} color={"#fff"} />
      ) : (
        <img className=" h-auto rounded-r-lg  " src={images} alt={title} />
      )}
    </div>
  );
};

//? Prop Types 
SingelPageMovieImage.propTypes = {
  image:PropTypes.string,
  title:PropTypes.string
}

export default SingelPageMovieImage;
