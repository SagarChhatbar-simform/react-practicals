import styles from './UserPopup.module.css';


const UserPopup = (props) => {

    var monthlyClicks = Math.ceil(Math.random() * 10000);
    var clicksReviewed = Math.ceil(Math.random() * 10000);
    var progress = Math.ceil(Math.random() * 100);

    const progressRandomize = {
        width: progress + '%'
    }

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

            <div className={styles.prog} style={progressRandomize}>
            </div>

            <div className={styles.numbersParent}>
                <div>
                    <h2>
                        {clicksReviewed}
                    </h2>
                    <p>Clicks Reviewed</p>
                </div>
                <hr />
                <div>
                    <h2>
                        {monthlyClicks}
                    </h2>
                    <p>Monthly Clicks</p>
                </div>
            </div>
        </div>
    );
};

export default UserPopup;