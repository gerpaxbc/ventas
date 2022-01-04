import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import About from './components/About';
import Contacto from './components/Contacto';
import Registro from './components/Registro';
import Footer from './components/Footer';
import BikesGrid from './components/BikesGrid'
import ProductDetails from './pages/ProductDetails'
import NewProduct from './components/NewProduct'
import Login from './components/Login'
import Logout from './components/Logout'
import Service from './components/Service'
import Top from './components/Top'
import Cart from './components/Cart'
import './components/styles/layout.css'

export default function App() {
    return (
        <Router>
            <div>
                <Top /> 
                <NavBar />
                <header>
                   
                </header>
                <Routes>
                    <Route exact path='/about' element={<About/>} />
                    <Route exact path='/servicio' element={<Service/>} />
                    <Route exact path='/contacto' element={<Contacto/>} />
                    <Route exact path='/registro'  element={<Registro/>}  />
                    <Route exact path='/bicis'  element={<BikesGrid tipo='bike'/>}  />
                    <Route exact path='/cascos'  element={<BikesGrid tipo='Helmets'/>}  />
                    <Route exact path='/refacciones'  element={<BikesGrid tipo='Refacciones'/>}  />
                    <Route exact path='/accesorios'  element={<BikesGrid tipo='Accesorios'/>}  />
                    <Route exact path='/llantas'  element={<BikesGrid tipo='Llantas'/>}  />
                    <Route exact path='/newproduct'  element={<NewProduct/>}  />
                    <Route exact path='/ropa'  element={<BikesGrid tipo='Ropa'/>}  />
                    <Route exact path='/acount' Acount />
                    <Route path='/' element={<Layout/>} /> 
                    <Route path='/producto/:productoId' element={<ProductDetails/>} /> 
                    <Route exact path='/login' element={<Login/>} />
                    <Route exact path='/logout' element={<Logout/>} />
                    <Route exact path='/Cart' element={<Cart/>} />
                </Routes> 
            </div>
            <Footer/>
        </Router>
    )
}
