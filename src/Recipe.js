import React from 'react';
import style from './recipe.module.css';

//passing data from App component's state to Recipe component through props
const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1 className="p-3">{title}</h1>
            <img className={style.image} src={image} alt="not available" />
            <p>Calories: {Math.round(calories)}g</p>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Recipe;