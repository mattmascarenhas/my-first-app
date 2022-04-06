import React, { Fragment } from "react";
import DescriptionWithLink from "../../shared/DescriptionWithLink";
import GrayImg from "../../shared/gray-img";

function Planet(props) {
    
    return <div>
        <h4>{props.name}</h4>
        <DescriptionWithLink description={props.description} link={props.link}></DescriptionWithLink>
        <GrayImg img_url={props.img_url}></GrayImg>
    </div>
}


export default Planet;
