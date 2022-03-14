import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import styles from './Home.module.css';


function Home() {

  const useInfo = JSON.parse(localStorage.getItem("data"));
  const nav = useNavigate();


  const logoutHandler = (event) => {

    nav('/');
    localStorage.clear();
  };

  return (
    <div>
      {useInfo === null ? <Navigate to='/' /> :
        <div>
          <div className={styles.logoutdiv}>
            <button onClick={logoutHandler}>logout</button>
          </div>
          <div className={styles.navbarinfo}>
            Hello <h3>{useInfo.username}</h3>, you are registered with the email id <h3>{useInfo.email}</h3> and phone number  <h3>{useInfo.phone}</h3>
          </div>
          <div className={styles.carddiv}>
            <div className={styles.card}>
            <img src={useInfo.file} alt='' />

              <h3>{useInfo.username}</h3>
              <h3>{useInfo.email}</h3>
              <h3>{useInfo.phone}</h3>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Home