import React from "react";
import { useSelector } from "react-redux";

const MealDisplay = () => {
  const meals = useSelector((state) => state.allMeals.meals);

  let renderList = meals.map((meal) => {
    const { idMeal, strMealThumb, strMeal, strArea, strInstructions } = meal;

    return (
      <div className="card" key={idMeal}>
        <img src={strMealThumb} alt={strMeal}></img>
        <h2>{strMeal}</h2>
        <h3>{strArea}</h3>
        <p>{strInstructions}</p>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default MealDisplay;
