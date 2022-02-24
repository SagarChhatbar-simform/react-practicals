import classes from './DayDate.module.css';
import React from 'react';



class DayDate extends React.Component {
    render() {
        const date = new Date();
        const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
        const weekday = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

        return (
            <div className={classes.mainDate}>
                <div className={classes.datediv}>
                    <h1>{date.getDate().toString()}</h1>
                    <div className={classes.monthyear}>
                        <p>{month[date.getMonth().toString()]}</p>
                        <span>{date.getFullYear().toString()}</span>
                    </div>
                </div >
                <div className={classes.day}>
                    <p>{weekday[date.getDay().toString()]}</p>
                </div>
            </div>
        );
    }
}



export default DayDate;