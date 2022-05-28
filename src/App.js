import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './pages/Authentication/LogIn/LogIn';
import Register from './pages/Authentication/Register/Register';
import RequireAuth from './pages/Authentication/RequireAuth/RequireAuth';
import Deshboard from './pages/Deshboard/Deshboard';
import Home from './pages/Home/Home/Home';
import PurchasePage from './pages/Home/PurchasePage/PurchasePage';
import Navbar from './pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='part/:id' element={
          <RequireAuth>
            <PurchasePage></PurchasePage>
          </RequireAuth>
        }></Route>

        <Route path='deshboard' element={
          <RequireAuth>
            <Deshboard />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
