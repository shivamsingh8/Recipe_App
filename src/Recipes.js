import React from "react";

const Recipes=({calories,title,image})=>{
    return (
        <div>
            <h1>{title}</h1>
            <h2>{calories}</h2>
            <img src={image} alt="image" />
        </div>
    );
}

export default Recipes;