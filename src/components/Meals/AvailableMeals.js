import classes from '../Meals/AvailableMeals.module.css'
// import Card from "../UI/Card";
// import MealItem from "./MealItem/MealItem";
import DUMMY_MEALS from './Dummymeals';


const AvailableMeals = () => {
    // const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name}
    //                                                     description={meal.description} price={meal.price}/>)
    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>)
    return (
        <section className={classes.meals}>
            {/* <Card> */}
                <ul>
                    {mealsList}
                </ul>
            {/* </Card> */}

        </section>
    )
}
export default AvailableMeals