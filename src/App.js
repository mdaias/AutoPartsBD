import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './pages/Authentication/LogIn/LogIn';
import Register from './pages/Authentication/Register/Register';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<LogIn></LogIn>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>

        <h1 className='text-3xl font-bold underline text-violet-500'>welcome to AutoPartsBd</h1> 
    </div>
  );
}

export default App;
