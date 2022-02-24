import classes from './AddTodoList.module.css';
import { useState } from 'react';


function AddTodoList(props) {

    const [showTodoForm, setShowTodoForm] = useState(true);

    function showFormHandler(event) {
        setShowTodoForm(false);
    }

    const todosubmitHandler = (event) => {
        event.preventDefault();
        if (event.target.value === '') {
            alert('Enter Some Text');
            return;
        }
        props.AddTodoListHandler(event.target.value, Math.random());
    };
    
    function hideFormHandler(event) {
        if (event.key === "Enter") {
            todosubmitHandler(event);
            event.target.value = null;
        }

        if (event.key === "Escape") {
            setShowTodoForm(true);
        }
    }

    return (
        <div>
            {!showTodoForm && <div className={classes.formsegment}>
                <form onSubmit={todosubmitHandler}>
                    <div className={classes.inputfield}>
                        <input type="text" placeholder='Enter Some Text' name='todo' onKeyDown={hideFormHandler} autoFocus/>
                    </div>
                </form>
            </div>}
            {showTodoForm && <div className={classes.addtodo}>
                <button onClick={showFormHandler}>+</button>
            </div>}
        </div>
    );
};

export default AddTodoList;