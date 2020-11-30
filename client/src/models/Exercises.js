
import { myFetch } from "./my-fetch";
import session from "./session";

export const getExercises = ()=> myFetch(`exercises/byUser/1`);

export function addexercise(exercise_id, user_id){
    return myFetch('Exercises', {Exercise_id: exercise_id, User_id: user_id})
}
export function updateexercise(exercise_id, user_id){
    return myFetch('Exercises', {Exercise_id: exercise_id, User_id: user_id})
}
export function deleteexercise(exercise_id, user_id){
    return myFetch('Exercises', {Exercise_id: exercise_id, User_id: user_id})
}
export function react(exercise_id){
    //console.log(session.user)
    return myFetch('reactions', { Exercise_id: exercise_id, Owner_id: 1 })
}
export function comment(exercise_id, text){
    return myFetch('comments', { Exercise_id: exercise_id, Owner_id: 1, Text: text })
}