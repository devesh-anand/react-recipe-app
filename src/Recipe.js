import React from 'react';
import styles from './recipe.module.css';

const Recipe = ({title, calories, image, key, ingredients, link}) => {
    return(
        <div className={styles.recipe}>
            <a href={link} target="_blank" rel="noopener noreferrer"><h2>{title}</h2></a>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p><b>Calories:</b> {calories}</p>
            <img className={styles.img} src={image} alt="" />
        </div>
    );
}

export default Recipe;