import { combineReducers } from "redux";
import { mealReducer } from "./mealReducer";

const reducer = combineReducers({
    allMeals: mealReducer,
 
})

export default reducer;