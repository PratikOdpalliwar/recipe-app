import React from 'react'
import Header from './components/Header'
import RecipeContainer from './components/RecipeContainer'
import "./App.css";

const App = () => {
  return (
    <div>
    <Header/>

    <div className="recipies">
    <div className="recipe-component"> <RecipeContainer/></div>
    <div className="recipe-component"> <RecipeContainer/></div>
    <div className="recipe-component"> <RecipeContainer/></div>
    <div className="recipe-component"> <RecipeContainer/></div>
    <div className="recipe-component"> <RecipeContainer/></div>
    <div className="recipe-component"> <RecipeContainer/></div>
    <div className="recipe-component"> <RecipeContainer/></div>
    <div className="recipe-component"> <RecipeContainer/></div>
    <div className="recipe-component"> <RecipeContainer/></div>
    <div className="recipe-component"> <RecipeContainer/></div>
    
    </div>
    
    </div>
  )
}

export default App
