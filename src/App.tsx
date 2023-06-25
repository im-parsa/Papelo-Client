import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';
import Blog from './routes/blog/blog.component';
import Blogs from './routes/blogs/blogs.component';
import Booking from './routes/booking/booking.component';
import Policy from './routes/policy/policy.component';
import Contact from './routes/contact/contact.component';
import AboutUs from './routes/about-us/about-us.component';
import SearchBus from './routes/search/bus/bus.component';
import SearchTour from './routes/search/tour/tour.component';
import SearchHotel from './routes/search/hotel/hotel.component';
import SearchTrain from './routes/search/train/train.component';
import SearchFlight from './routes/search/flight/flight.component';
import Factor from './routes/factor/factor.component';
import Factor2 from './routes/factor-2/factor-2.component';
import Factor3 from './routes/factor-3/factor-3.component';
import Hotel from './routes/hotel/hotel.component';
import Error from './routes/error/error.component';

import PopupLogin from './components/popup/popup-login';
import Navbar from './components/layouts/mobile-nav/navbar.component';

function App()
{
    const hiddenLogin = useSelector((state: any) => state.popup.hiddenLogin);

    return (
        <>
            { hiddenLogin ? null : <PopupLogin /> }
            <Navbar />
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/:page' element={ <Home /> }/>

                <Route path='/policy' element={ <Policy /> }/>
                <Route path='/contact-us' element={ <Contact /> }/>
                <Route path='/about-us' element={ <AboutUs /> }/>

                <Route path='/blog/:id' element={ <Blog /> }/>
                <Route path='/blogs' element={ <Blogs /> }/>

                <Route path='/booking' element={ <Booking /> }/>

                <Route path='/search/bus' element={ <SearchBus /> }/>
                <Route path='/search/tour' element={ <SearchTour /> }/>
                <Route path='/search/hotel' element={ <SearchHotel /> }/>
                <Route path='/search/train' element={ <SearchTrain /> }/>
                <Route path='/search/flight' element={ <SearchFlight /> }/>

                <Route path='/factor' element={ <Factor /> }/>
                <Route path='/factor-2' element={ <Factor2 /> }/>
                <Route path='/factor-3' element={ <Factor3 /> }/>

                <Route path='/hotel' element={ <Hotel /> }/>

                <Route path='*' element={ <Error /> }/>
            </Routes>
        </>
    );
}

export default App;
