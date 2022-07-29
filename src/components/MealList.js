import React, {useEffect} from 'react'
import MealDisplay from './MealDisplay'
import axios from 'axios';
import  {useDispatch} from 'react-redux';
import { setMeal } from '../redux/actions/productActions';

const MealList = () => {
const dispatch = useDispatch();


    const fetchMeals = async()=>{
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c').catch((error)=>{
            console.log("Error is: ", error);
        })

       dispatch(setMeal(response.data.meals))
    }

    useEffect(() => {
     fetchMeals();
    }, [])
    
  return (
    <div className='productList container'> 
        <MealDisplay />
    </div>
  )
}

export default MealList