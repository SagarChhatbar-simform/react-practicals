import styles from './UserPopup.module.css';


const UserPopup = (props) => {

    return (
        <div className={styles.Popupdiv} >
            <img src={props.listId.avatar} alt='' />
            <h4>
                {props.listId.first_name} {props.listId.last_name}
            </h4>
            <p>
                {props.listId.email}
            </p>
            <h4>Your Plan : Standard</h4>
            <button>Active User</button>

            <h5>Plan Uses</h5>

            <div className={styles.prog}>
            </div>

            <div className={styles.numbersParent}>
                <div>
                    <h2>
                        {props.listId.clicksReviewed}
                    </h2>
                    <p>Clicks Reviewed</p>
                </div>
                <hr />
                <div>
                    <h2>
                    {props.listId.monthlyClicks}
                    </h2>
                    <p>Monthly Clicks</p>
                </div>
            </div>
        </div>
    );
};

export default UserPopup;