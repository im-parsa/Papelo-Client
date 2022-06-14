import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navbar from './components/layouts/mobile-nav/navbar.component';

function App()
{
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={ <Home /> }/>
            </Routes>
        </>
    );
}

export default App;
