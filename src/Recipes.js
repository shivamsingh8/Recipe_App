import React from "react";
import style from './recipe.module.css';
const Recipes=({calories,title,image,ingredients})=>{
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <h4>Ingredients are : </h4>
            <ul>
                {
                    ingredients.map(ingre=><li  >{ingre.text}</li>)
                }
            </ul>
            <h2>Calories - {calories}</h2>
            <img className={style.image} src={image} alt="image" />
            
        </div>
    );
}

export default Recipes;