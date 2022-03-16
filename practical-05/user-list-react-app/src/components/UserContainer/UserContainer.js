import UserHeader from '../UserHeader/UserHeader';
import styles from './UserContainer.module.css';
import UserList from '../UserList/UserList';
import UserPopup from '../UserPopup/UserPopup';
import { useState } from 'react';


const UserContainer = () => {

    const [popup, setPopup] = useState(false);

   const [listId, setListId] = useState();

    const onHoverHandler = (list) => {
        setPopup(true);
       setListId(list); 
    };

    const onLeaveHandler = ()=>{
        setPopup(false);

    }




    return (
        <div onMouseLeave={onLeaveHandler}>
            <div className={styles.Users}>
                <div style={{ width: '77%' }}>
                    <UserHeader />
                    <UserList onHoverHandler={onHoverHandler} />
                </div>
            </div>
            {popup && <UserPopup listId={listId} />}
        </div>
    );

};

export default UserContainer;