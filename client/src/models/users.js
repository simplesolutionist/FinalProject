import { myFetch } from "./my-fetch";
export function getList(){
    return myFetch('users');
}

export function login(email){
   return myFetch('users/login', {email})
}

export function signup(firstname, lastname, email, username, password){
    return myFetch('users/signup', {FirstName: firstname, LastName: lastname,  Email: email, UserName: username,  Password: password})
}
