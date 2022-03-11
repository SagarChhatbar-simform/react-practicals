import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';



function Home() {



  const username = useSelector((state) => state.username);
  const email = useSelector((state) => state.email);
  const phone = useSelector((state) => state.phone);
  const file = useSelector((state) => state.file);
  const Navigate = useNavigate();



  const logoutHandler = (event) => {
    Navigate('/');
  };


  return (
    <div>
      
        <p>{username}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <img src={file} alt='' />

        <button onClick={logoutHandler}>logout</button>
      

    </div>
  )
}

export default Home