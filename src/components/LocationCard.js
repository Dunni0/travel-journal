import React from "react";
import Body from "./Body";
import Items from "./Item";

function LocationCard(){
    const card = Items.map(item => {
        return(
            <Body
            key={item.id}
            {...item}
            />
        )
    })

    return(
        <div> 
           {card}
        </div>
    )
}

export default LocationCard