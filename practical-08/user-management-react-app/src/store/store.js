import { createStore } from 'redux'

const initialValues = {
    email: '',
    password: '',
    username: '',
    phone: '',
    file: '',
}

const userValReducer = (state = initialValues, action) => {

    if (action.type === "Data") {
        return {
            username: action.username,
            email: action.email,
            phone: action.phone,
            file: action.file,
        }

    }


}


const store = createStore(userValReducer);

export default store;