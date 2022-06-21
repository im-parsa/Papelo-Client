import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';
import Blog from './routes/blog/blog.component';
import Blogs from './routes/blogs/blogs.component';
import Rules from './routes/rules/rules.component';
import Contact from './routes/contact/contact.component';
import AboutUs from './routes/about-us/about-us.component';
import SearchHotel from './routes/search/hotel/hotel.component';
import SearchTrain from './routes/search/train/train.component';

import PopupLogin from "./components/popup/popup-login";
import Navbar from './components/layouts/mobile-nav/navbar.component';

function App()
{
    const hiddenLogin = useSelector(((state: any) => state.popup.hiddenLogin));

    return (
        <>
            { hiddenLogin ? null : <PopupLogin /> }
            <Navbar />
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/rules' element={ <Rules /> }/>
                <Route path='/contact' element={ <Contact /> }/>
                <Route path='/about-us' element={ <AboutUs /> }/>
                <Route path='/blog/:id' element={ <Blog /> }/>
                <Route path='/blogs' element={ <Blogs /> }/>
                <Route path='/search/hotel' element={ <SearchHotel /> }/>
                <Route path='/search/train' element={ <SearchTrain /> }/>
            </Routes>
        </>
    );
}

export default App;
