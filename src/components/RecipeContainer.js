import React from 'react'
import "./recipeContainer.css";

const RecipeContainer = () => {
  return (
    <div className="container">
    <div className="img-container">
        <img className='recipe-img' src="./img/hamburger.png"/>
    </div>

<div className="container2">
    <div className="recipe-name">
        Panner Ki Sbji
    </div>

    <div className="box1">
        Ingridients
    </div>

    <div className="box2">
        See Complete Recipe
    </div>
    </div>
    </div>
  )
}

export default RecipeContainer;