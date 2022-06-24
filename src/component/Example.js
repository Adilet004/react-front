import {useState} from "react";
import {Meals} from "./Meals";

const Example = () => {
    const [meal, setMeal] = useState(Meals)
    return <>
<div className="container">
    <h1>Вкусные рецепты</h1>

    {
        meal.map(el => (
            <>
            <h2>{el.name}</h2>

                <ol>
                    {
                        el.ingredients.map(ingredient => (
                          <>
                          <li>{ingredient.name}</li>
                          </>
                        ))
                    }
                </ol>
                <h3>Инструкция по приготовлению</h3>
                <ul>
                    {
                        el.steps.map(step => (
                            <li>{step}</li>
                        ))
                    }
                </ul>
            </>
        ))
    }

</div>
    </>
}

export default Example