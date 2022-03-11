import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import Home from './pages/Home';






function App() {
  
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
