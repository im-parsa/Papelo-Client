import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';
import Rules from './routes/rules/rules.component';
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
                <Route path='/search/hotel' element={ <SearchHotel /> }/>
                <Route path='/search/train' element={ <SearchTrain /> }/>
            </Routes>
        </>
    );
}

export default App;
