import React, {Fragment} from "react";
import './style.css';

function GrayImg(props){
    return <img class = "gray-img" src={props.img_url}></img>;
}

export default GrayImg;