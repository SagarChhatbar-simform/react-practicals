import styles from './UserList.module.css';
import { Trash, Lock, ChevronDown } from 'react-feather';
import { UserData } from '../../UserData';

const UserList = (props) => {
    return (
        <div className={styles.Parentdiv}>
            <div className={styles.Listdiv} >
                {
                    UserData.map((list) => (
                        <div key={list.id} onMouseEnter={() => { props.onHoverHandler(list) }} className={styles.Particular}>
                            <ul>
                                <li className={styles.alignuser}>
                                    <img src={list.image} alt="user" />
                                    <div className={styles.username}>
                                        <h4>{list.name}</h4>
                                        <p>{list.email}</p>
                                    </div>
                                </li>
                                <li >{list.status === 'Active' ? <p className={styles.active}>Active </p> : <p className={styles.state}>Inactive <ChevronDown /></p>}</li>
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
            </div>

        </div>
    );
};

export default UserList;