import { Link } from 'react-router-dom';
import React, { useCallback, useState } from 'react';

import Main from '../../components/layouts/main/main.components'
import {
    HomeHeaderContainer,
    HomeHeaderImageContainer,
    HomeHeaderMainContainer,
    HomeHeaderImageBackgroundContainer,
    HomeHeaderImageContentContainer,
    HomeHeaderImageContentBoxContainer,
    HomeHeaderImageContentNavContainer,
    HomeHeaderImageContentNavItemContainer,
    HomeHeaderImageContentItemContainer,
    HomeHeaderPassengersContainer,
    HomeHeaderPassengersItemContainer,
    HomeHeaderImageContentParentContainer,
    HomeHeaderPassengersButtonContainer,
    HomeHeaderNavContainer,
    HomeHeaderNavItemsContainer,
    HomeHeaderNavItemContainer,
    HomeHeaderMainBackgroundContainer,
    HomeHeaderNavItemPopupContainer,
    HomeHeaderNavItemPopupItemsContainer,
    HomeHeaderNavItemPopupItemContainer
} from './home.styles';

import { ReactComponent as Plane } from '../../assets/icons/plane.svg';
import { ReactComponent as Hotel } from '../../assets/icons/hotel.svg';
import { ReactComponent as Tour } from '../../assets/icons/tour.svg';
import { ReactComponent as Train } from '../../assets/icons/train.svg';
import { ReactComponent as Bus } from '../../assets/icons/bus.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as Minus } from '../../assets/icons/minus.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as ThreeDots } from '../../assets/icons/three-dots.svg';

const Home = () =>
{
    const [page, setPage] = useState('plane');
    const [passengers, setPassengers] = useState(false);
    const [international, setInternational] = useState(false);
    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    const [babyCount, setBabyCount] = useState(0);
    const [countActive, setCountActive] = useState('');
    const handlePage = useCallback(
        (page: string) =>
        {
            setPage(page);
        }, [setPage]);

    return (
        <Main>
            <HomeHeaderContainer>
                <HomeHeaderMainContainer>
                    <HomeHeaderMainBackgroundContainer />
                    <HomeHeaderNavContainer>
                        <Logo />
                        <HomeHeaderNavItemsContainer>
                            <HomeHeaderNavItemContainer className='active'>
                                صفحه اصلی
                            </HomeHeaderNavItemContainer>
                            <HomeHeaderNavItemContainer className='arrow'>
                                خدمات سفر
                                <HomeHeaderNavItemPopupContainer>
                                    <h3>
                                        خدمات سفر
                                    </h3>
                                    <HomeHeaderNavItemPopupItemsContainer>
                                        <HomeHeaderNavItemPopupItemContainer>
                                            <span>
                                                <Plane />
                                            </span>
                                            <div>
                                                <Link to='/'>
                                                    بلیط هواپیما
                                                </Link>
                                                <p>
                                                    تجربه خریدی ارزان
                                                </p>
                                            </div>
                                        </HomeHeaderNavItemPopupItemContainer>
                                        <HomeHeaderNavItemPopupItemContainer>
                                            <span>
                                                <Bus />
                                            </span>
                                            <div>
                                                <Link to='/'>
                                                    بلیط اتوبوس
                                                </Link>
                                                <p>
                                                    همکاری با سازمان اتوبوس رانی
                                                </p>
                                            </div>
                                        </HomeHeaderNavItemPopupItemContainer>
                                        <HomeHeaderNavItemPopupItemContainer>
                                            <span>
                                                <Train />
                                            </span>
                                            <div>
                                                <Link to='/'>
                                                    بلیط قطار
                                                </Link>
                                                <p>
                                                    با خیالی راحت سفر کنید
                                                </p>
                                            </div>
                                        </HomeHeaderNavItemPopupItemContainer>
                                        <HomeHeaderNavItemPopupItemContainer>
                                            <span>
                                                <Hotel />
                                            </span>
                                            <div>
                                                <Link to='/'>
                                                    رزرو هتل
                                                </Link>
                                                <p>
                                                    رتبه بندی برترین هتل ها
                                                </p>
                                            </div>
                                        </HomeHeaderNavItemPopupItemContainer>
                                        <HomeHeaderNavItemPopupItemContainer>
                                            <span>
                                                <Tour />
                                            </span>
                                            <div>
                                                <Link to='/'>
                                                    رزرو تور
                                                </Link>
                                                <p>
                                                    در سفر باشید
                                                </p>
                                            </div>
                                        </HomeHeaderNavItemPopupItemContainer>
                                    </HomeHeaderNavItemPopupItemsContainer>
                                </HomeHeaderNavItemPopupContainer>
                            </HomeHeaderNavItemContainer>
                            <HomeHeaderNavItemContainer>
                                راهنمایی و پشتیبانی
                            </HomeHeaderNavItemContainer>
                            <HomeHeaderNavItemContainer>
                                <ThreeDots />
                            </HomeHeaderNavItemContainer>
                        </HomeHeaderNavItemsContainer>
                    </HomeHeaderNavContainer>
                </HomeHeaderMainContainer>
                <HomeHeaderImageContainer>
                    <HomeHeaderImageBackgroundContainer className={page} />
                    <HomeHeaderImageContentParentContainer>
                        <HomeHeaderImageContentBoxContainer>
                            <HomeHeaderImageContentNavContainer>
                                <HomeHeaderImageContentNavItemContainer className={page ===  'plane' ? 'active' : ''} onClick={() => handlePage('plane')}>
                                    {
                                        page ===  'plane'
                                            ?
                                            <Plane />
                                            :
                                            null
                                    }
                                    هواپیما
                                </HomeHeaderImageContentNavItemContainer>
                                <HomeHeaderImageContentNavItemContainer className={page ===  'hotel' ? 'active' : ''} onClick={() => handlePage('hotel')}>
                                    {
                                        page ===  'hotel'
                                            ?
                                            <Hotel />
                                            :
                                            null
                                    }
                                    هتل
                                </HomeHeaderImageContentNavItemContainer>
                                <HomeHeaderImageContentNavItemContainer className={page ===  'tour' ? 'active' : ''} onClick={() => handlePage('tour')}>
                                    {
                                        page ===  'tour'
                                            ?
                                            <Tour />
                                            :
                                            null
                                    }
                                    تور
                                </HomeHeaderImageContentNavItemContainer>
                                <HomeHeaderImageContentNavItemContainer className={page ===  'train' ? 'active' : ''} onClick={() => handlePage('train')}>
                                    {
                                        page ===  'train'
                                            ?
                                            <Train />
                                            :
                                            null
                                    }
                                    قطار
                                </HomeHeaderImageContentNavItemContainer>
                                <HomeHeaderImageContentNavItemContainer className={page ===  'bus' ? 'active' : ''} onClick={() => handlePage('bus')}>
                                    {
                                        page ===  'bus'
                                            ?
                                            <Bus />
                                            :
                                            null
                                    }
                                    اتوبوس
                                </HomeHeaderImageContentNavItemContainer>
                            </HomeHeaderImageContentNavContainer>
                            <HomeHeaderImageContentContainer>
                                <HomeHeaderImageContentItemContainer>
                                    <p>
                                        <input type='radio' id='domestic' onChange={() => { setInternational(false) }} checked={!international}/>
                                        <label htmlFor='domestic'>
                                            داخلی
                                        </label>
                                    </p>
                                    <p>
                                        <input type='radio' id='international' onChange={() => { setInternational(true) }} checked={international}/>
                                        <label htmlFor='international'>
                                            خارجی
                                        </label>
                                    </p>
                                    <div className='custom-select-menu'>
                                        <details className='custom-select'>
                                            <summary className='radios'>
                                                <input type='radio' name='item' id='item1' title='یک طرفه' onChange={(event: any) => event.preventDefault()} checked={true}/>
                                                <input type='radio' name='item' id='item2' title='رفت و برگشت' onChange={(event: any) => event.preventDefault()}/>
                                            </summary>
                                            <ul className='list'>
                                                <li>
                                                    <label htmlFor='item1'>
                                                        یک طرفه
                                                    </label>
                                                </li>
                                                <li>
                                                    <label htmlFor='item2'>
                                                        رفت و برگشت
                                                    </label>
                                                </li>
                                            </ul>
                                        </details>
                                    </div>
                                    <div>
                                        <div className='custom-select-menu' onClick={() => setPassengers(!passengers)}>
                                            <details className='custom-select passengers'>
                                                <summary className='radios'>
                                                    مسافران
                                                </summary>
                                            </details>
                                        </div>
                                        {
                                            passengers
                                                ?
                                                <HomeHeaderPassengersContainer>
                                                    <HomeHeaderPassengersItemContainer>
                                                        <div>
                                                            <h2>
                                                                بزرگسال
                                                            </h2>
                                                            <p>
                                                                بزرگتر از 12 سال
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <HomeHeaderPassengersButtonContainer onClick={() => { setAdultCount(adultCount + 1); setCountActive('adult') }} className={countActive === 'adult' ? 'right active' : 'right'}>
                                                                <Plus />
                                                            </HomeHeaderPassengersButtonContainer>
                                                            <HomeHeaderPassengersButtonContainer onClick={() =>  setCountActive('adult')} className={countActive === 'adult' ? 'active' : ''}>
                                                                {adultCount}
                                                            </HomeHeaderPassengersButtonContainer>
                                                            <HomeHeaderPassengersButtonContainer onClick={() => { setAdultCount(adultCount <= 0 ? 0 : adultCount - 1); setCountActive('adult') }} className={countActive === 'adult' ? 'left active' : 'left'}>
                                                                <Minus />
                                                            </HomeHeaderPassengersButtonContainer>
                                                        </div>
                                                    </HomeHeaderPassengersItemContainer>
                                                    <HomeHeaderPassengersItemContainer>
                                                        <div>
                                                            <h2>
                                                                کودک
                                                            </h2>
                                                            <p>
                                                                بین ۲ الی 12 سال
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <HomeHeaderPassengersButtonContainer onClick={() => { setChildCount(childCount + 1); setCountActive('child') }} className={countActive === 'child' ? 'right active' : 'right'}>
                                                                <Plus />
                                                            </HomeHeaderPassengersButtonContainer>
                                                            <HomeHeaderPassengersButtonContainer onClick={() =>  setCountActive('child')} className={countActive === 'child' ? 'active' : ''}>
                                                                {childCount}
                                                            </HomeHeaderPassengersButtonContainer>
                                                            <HomeHeaderPassengersButtonContainer onClick={() => { setChildCount(childCount <= 0 ? 0 : childCount - 1); setCountActive('child') }} className={countActive === 'child' ? 'left active' : 'left'}>
                                                                <Minus />
                                                            </HomeHeaderPassengersButtonContainer>
                                                        </div>
                                                    </HomeHeaderPassengersItemContainer>
                                                    <HomeHeaderPassengersItemContainer>
                                                        <div>
                                                            <h2>
                                                                نوزاد
                                                            </h2>
                                                            <p>
                                                                کوچکتر از 2 سال
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <HomeHeaderPassengersButtonContainer onClick={() => { setBabyCount(babyCount + 1); setCountActive('baby') }} className={countActive === 'baby' ? 'right active' : 'right'}>
                                                                <Plus />
                                                            </HomeHeaderPassengersButtonContainer>
                                                            <HomeHeaderPassengersButtonContainer onClick={() =>  setCountActive('baby')} className={countActive === 'baby' ? 'active' : ''}>
                                                                {babyCount}
                                                            </HomeHeaderPassengersButtonContainer>
                                                            <HomeHeaderPassengersButtonContainer onClick={() => { setBabyCount(babyCount <= 0 ? 0 : babyCount - 1); setCountActive('baby') }} className={countActive === 'baby' ? 'left active' : 'left'}>
                                                                <Minus />
                                                            </HomeHeaderPassengersButtonContainer>
                                                        </div>
                                                    </HomeHeaderPassengersItemContainer>
                                                </HomeHeaderPassengersContainer>
                                                :
                                                null
                                        }
                                    </div>
                                </HomeHeaderImageContentItemContainer>

                            </HomeHeaderImageContentContainer>
                        </HomeHeaderImageContentBoxContainer>
                    </HomeHeaderImageContentParentContainer>
                </HomeHeaderImageContainer>
            </HomeHeaderContainer>
        </Main>
    );
};

export default Home;
