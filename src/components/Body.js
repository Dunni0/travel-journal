import React from "react";

function Body(props){
    console.log(props)
    return(
        <div className="continer">
            <img
            className="country_image"
            src={props.country_image}
            alt="country"
            />

            <div className="info">
                
            <div className="location_container"> 
                <div className="location">
                <span > 
                    <img 
                    className="location_icon"
                    src = {require(`../images/${props.location_icon}`)}
                    alt ="location_logo" 
                    /> 
                </span>
                <span> <h3> {props.country} </h3> </span>
                </div>

                <span> <a href={props.location.link}> {props.location.text}</a></span>
            </div>

            <div className="location_info">
                <h2> {props.location_name} </h2>
                <p className="date"> {props.date}  </p>
                <p> {props.description} </p>
            </div>
            </div>
        </div>
    )
}

export default Body