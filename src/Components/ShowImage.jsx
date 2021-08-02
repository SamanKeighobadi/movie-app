import React from "react";
import {Img} from "react-image";
import { ScaleLoader } from "react-spinners";
import { IMG_300,unavailable_image } from "./Config/config";
const ShowImage = ({ image }) => {
  return (
    <Img className='rounded-t w-full max-w-md' src={[`${IMG_300}${image}`,unavailable_image]} loading={
      <div className="mx-auto text-center">
        <ScaleLoader loading={true} color={"#00d1fc"} />
      </div>
    } />
  ); 
};

export default ShowImage;
