import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';





function App() {
  const dispatch = useDispatch();

  dispatch({
    type:'Loggedout'
  });

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
