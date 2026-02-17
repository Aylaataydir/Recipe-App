import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import Footer from '../components/Footer'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/recipes' element={<Recipes/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRouter