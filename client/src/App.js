import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Sell from './pages/Sell';
import { ToastContainer } from "react-toastify";
import Cart from './pages/Cart';
import TrackOrders from './pages/TrackOrders';
import MyProducts from './pages/MyProducts';
import EditProduct from './pages/EditProduct';
import SoilTesting from './pages/SoilTesting';
import About from './pages/About';
import { useEffect, useState } from 'react';
import { api } from './api';
import { useCookies } from "react-cookie";

function App() {

  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [user, setUser] = useState(null);

  useEffect(()=>{
    api.getSelf(cookies["UserId"]).then((res)=>setUser(res.data)).catch((e)=>{
      console.log(e.response.data);
    })
  },[cookies["UserId"]])

  return (
    <>
    <ToastContainer
        className="mt-14"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar user={user}/><Home /><Footer/></>} />
        <Route path="/about" element={<><Navbar user={user}/><About /><Footer/></>} />
        <Route path="/signup" element={<div className='h-screen'><Navbar user={user}/><Signup /></div>} />
        <Route path="/login" element={<div className='h-screen'><Navbar user={user}/><Login /></div>} />
        <Route path="/category/:category" element={<><Navbar user={user}/><CategoryPage/><Footer/></>} />
        <Route path="/category/:category/:id" element={<><Navbar user={user}/><ProductPage/><Footer/></>} />
        <Route path="/sell" element={<div className='h-screen'><Navbar user={user}/><Sell /></div>} />
        <Route path="/cart" element={<div className='h-screen'><Navbar user={user}/><Cart /></div>} />
        <Route path="/trackorders" element={<div className='h-screen'><Navbar user={user}/><TrackOrders /></div>} />
        <Route path="/myproducts" element={<div className='h-screen'><Navbar user={user}/><MyProducts /></div>} />
        <Route path="/myproducts/:id" element={<div className='h-screen'><Navbar user={user}/><EditProduct /></div>} />
        <Route path="/soiltesting" element={<div className='h-screen'><Navbar user={user}/><SoilTesting /></div>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
