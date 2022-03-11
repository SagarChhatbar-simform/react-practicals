import { createStore } from 'redux'

const initialValues = {
    email: '',
    password: '',
    username: '',
    phone: '',
    file: null,
    isLoggedIn:false,
}

const userValReducer = (state = initialValues,action)=>{

    if(action.type === "Data"){
        return{
            username: action.username,
            email:action.email,
            phone:action.phone,
            file:action.file,
            isLoggedIn:true
        }
    }

    if(action.type === "Loggedout"){
        return{
            isLoggedIn:false
        }
    }
} 


const store = createStore(userValReducer);

export default store;