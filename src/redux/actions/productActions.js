import { ActionTypes } from "../constants/action-types";

export const setMeal = (meals)=>{
    return {
        type: ActionTypes.SET_MEALS,
        payload: meals,
    };
};

