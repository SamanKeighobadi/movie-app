import React from "react";
import PropTypes from 'prop-types'
import {Img} from "react-image";
import { ScaleLoader } from "react-spinners";
import { IMG_300 } from "./Config/config";
const ShowImage = ({ image }) => {
  return (
    <Img className='rounded-t w-full max-w-md' src={[`${IMG_300}${image}`]} loading={
      <div className="mx-auto text-center">
        <ScaleLoader loading={true} color={"#00d1fc"} />
      </div>
    } />
  ); 
};

ShowImage.prototype = {
  image:PropTypes.string
}

export default ShowImage;
