import classes from './TodoContainer.module.css';
import DayDate from '../Date/DayDate';
import AddTodoList from '../AddTodoList/AddTodoList';
import ShowTodoList from '../ShowTodoList/ShowTodoList';
import { useEffect, useState } from 'react';

function TodoContainer() {
    var curDateObj = new Date();
    var curDate = curDateObj.getDate();
    
    

    function clearTodoList() {
        localStorage.clear();
        setList([]);
    }

    var local = JSON.parse(localStorage.getItem('listOfTodo'));

    const [list, setList] = useState(local || []);


    useEffect(() => {
        localStorage.setItem("listOfTodo", JSON.stringify(list));
    }, [list]);
    var id = Math.random();
    function AddTodoListHandler(todovalue) {
        const temp = {
            todovalue,
            id,
            curDate,
            taskComplete:false,
        };
        setList([...list, temp]);
    }

    function completed(todo){
        setList(
            list.filter((e) => {
                if(e === todo){
                    return todo.taskComplete = true;
                }
                else{
                    return todo;
                }
            })
        );
    }


    return (
        <div className={classes.todomain}>
            <DayDate />
            <ShowTodoList list={list} clearList={clearTodoList} completed={completed} />
            <AddTodoList AddTodoListHandler={AddTodoListHandler} />
        </div>
    );
};

export default TodoContainer;