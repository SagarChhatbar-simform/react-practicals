import classes from './ShowTodoList.module.css';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

function ShowTodoList(props) {


    return (

        <div className={classes.showlist}>
            {props.list.length === 0 ? "No Todos" :
                props.list.map(todo => {
                    var curDateObj = new Date();
                    var curDate = curDateObj.getDate();

                    var style = todo.taskComplete ? classes.taskCompletedText : null;
                    var styleicon = todo.taskComplete ? classes.taskCompletedIcon : classes.delIcon;

                    if (todo.curDate !== curDate) {
                        props.clearList();
                        console.log(curDate,todo.curdate);
                    }
                    

                    return (
                        <div key={todo.id}>
                            { <p className={style}>{todo.todovalue}</p>}
                            <CheckCircleOutlineOutlinedIcon onClick={()=>{props.completed(todo)}} className={styleicon} />
                        </div>
                    );
                })

            }

        </div>

    );
};

export default ShowTodoList;