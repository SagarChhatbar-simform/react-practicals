import React from 'react';
import styles from './UserList.module.css';
import { FaChevronDown,FaLock,FaTrash } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const UserList = (props) => {


    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(() => {

        const fetchUser = async () => {
            const res = await fetch(process.env.REACT_APP_API_ENDPOINT + page.toString());
            const json = await res.json();
            setUsers(json.data);
        };
        fetchUser()

    }, [page]);

    const onPage1 = () => {
        setPage(1);
    };
    const onPage2 = () => {
        setPage(2);
    };

    return (
        <div className={styles.Parentdiv}>
            <div className={styles.Listdiv} >
                {
                    users.map((list) => (
                        <div key={list.id} onMouseEnter={() => { props.onHoverHandler(list) }} className={styles.Particular}>
                            <ul>
                                <li className={styles.alignuser}>
                                    <img src={list.avatar} alt="user" />
                                    <div className={styles.username}>
                                        <h4>{list.first_name} {list.last_name}</h4>
                                        <p>{list.email}</p>
                                    </div>
                                </li>
                                <li >{list.status === 'Active' ? <p className={styles.active}>Active </p> : <p className={styles.state}>Inactive <FaChevronDown /></p>}</li>
                                <li>
                                    <div className={styles.accessIcon}>
                                        {list.access === 'Owner' ? <p>Owner</p> : <p className={styles.access}>{list.access} <ChevronDown /></p>}
                                        {list.access === 'Owner' ? <Lock /> : <Trash />}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    ))
                }
                <div className={styles.pagebtn}>
                    <button onClick={onPage1}>1</button>
                    <button onClick={onPage2}>2</button>
                </div>
            </div>



        </div>
    );
};

export default React.memo(UserList);