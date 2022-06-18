import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';
import SearchTrain from './routes/search/train/train.component';
import Navbar from './components/layouts/mobile-nav/navbar.component';
import PopupLogin from "./components/popup/popup-login";

function App()
{
    const hiddenLogin = useSelector(((state: any) => state.popup.hiddenLogin));

    return (
        <>
            { hiddenLogin ? null : <PopupLogin /> }
            <Navbar />
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/search/train' element={ <SearchTrain /> }/>
            </Routes>
        </>
    );
}

export default App;
