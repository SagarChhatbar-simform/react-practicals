import React from "react";

    const UserHeader = () => {
    return (
        <div>
            <ul>
                <li><h4>Name</h4></li>
                <li><h4>Status</h4></li>
                <li><h4>Access</h4></li>
            </ul>
        </div>
    );
};

export default React.memo(UserHeader);