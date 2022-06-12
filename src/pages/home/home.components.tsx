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
    HomeHeaderNavItemPopupItemContainer,
    HomeHeaderAsideContainer,
    HomeHeaderContentContainer,
    HomeHeaderImageContentItemParentInputContainer
} from './home.styles';

import { ReactComponent as Bell } from '../../assets/icons/bell.svg';
import { ReactComponent as Plane } from '../../assets/icons/plane.svg';
import { ReactComponent as Hotel } from '../../assets/icons/hotel.svg';
import { ReactComponent as Tour } from '../../assets/icons/tour.svg';
import { ReactComponent as Train } from '../../assets/icons/train.svg';
import { ReactComponent as Bus } from '../../assets/icons/bus.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as Minus } from '../../assets/icons/minus.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as ThreeDots } from '../../assets/icons/three-dots.svg';
import { ReactComponent as Plane2 } from '../../assets/icons/plane-2.svg';
import { ReactComponent as Plane3 } from '../../assets/icons/plane-3.svg';
import { ReactComponent as Exchange } from '../../assets/icons/exchange.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Reserve } from '../../assets/icons/reserve.svg';

const Home = () =>
{
    const [page, setPage] = useState('plane');
    const [passengers, setPassengers] = useState(false);
    const [international, setInternational] = useState(false);
    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    const [babyCount, setBabyCount] = useState(0);
    const [roomCount, setRoomCount] = useState(0);
    const [origin, setOrigin] = useState<string>('');
    const [destination, setDestination] = useState('');
    const [countActive, setCountActive] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const handlePage = useCallback(
        (page: string) =>
        {
            setPage(page);
        }, [setPage]);
    const onChangeOrigin = useCallback(
        (event: any) =>
        {
            event?.persist();

            setOrigin(event.target.value);

            const cities: NodeListOf<any> | any[] = document.querySelectorAll('.origin_options ul li') || [];

            // @ts-ignore
            for (const city of cities)
            {
                const cityName = city.getAttribute('data-name');

                if (cityName.includes(origin))
                {
                    city.classList.add('active');
                    city.scrollIntoView();
                }
                else
                {
                    city.classList.remove('active');
                }
            }
        }, [origin, setOrigin]);
    const onChangeDestination = useCallback(
        (event: any) =>
        {
            event?.persist();

            setDestination(event.target.value);

            const cities: NodeListOf<any> | any[] = document.querySelectorAll('.destination_options ul li') || [];

            // @ts-ignore
            for (const city of cities)
            {
                const cityName = city.getAttribute('data-name');

                if (cityName.includes(origin))
                {
                    city.classList.add('active');
                    city.scrollIntoView();
                }
                else
                {
                    city.classList.remove('active');
                }
            }
        }, [destination, setDestination]);
    const onFocusOrigin = useCallback(
        () =>
        {
            const destinationInputParent = document.querySelector('#destination_input_parent');

            if (!destinationInputParent?.classList?.contains('active'))
            {
                const inputParent = document.querySelector('#origin_input_parent');
                const options = document.querySelector('.origin_options');
                const exchangeIcon = document.querySelector('#exchange_icon');

                inputParent?.classList.add('active');
                options?.classList.add('active');
                exchangeIcon?.classList.remove('active');
            }
        }, []);
    const onFocusDestination = useCallback(
        () =>
        {
            const originInputParent = document.querySelector('#origin_input_parent');

            if (!originInputParent?.classList?.contains('active'))
            {
                const inputParent = document.querySelector('#destination_input_parent');
                const options = document.querySelector('.destination_options');
                const exchangeIcon = document.querySelector('#exchange_icon');

                inputParent?.classList.add('active');
                options?.classList.add('active');
                exchangeIcon?.classList.remove('active');
            }
        }, []);

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
                    <div>
                        <HomeHeaderAsideContainer>
                            <Link to='/'>
                                مشاهده پیشنهادات
                                <Arrow />
                            </Link>
                            <div>
                                <Link to='/'>
                                    <User />
                                </Link>
                                <a href='/'>
                                    <Instagram />
                                </a>
                            </div>
                        </HomeHeaderAsideContainer>
                        <HomeHeaderContentContainer>
                            <h1>
                                <strong>خرید ارزان</strong> و بصرفه بلیط پرواز داخلی و خارجی
                            </h1>
                            <p>
                                با خیالی آسوده بلیط پرواز خود را رزرو کنید
                            </p>
                            <div>
                                <Link to='/'>
                                    جستجوی سریع
                                </Link>
                                <Link to='/'>
                                    <Reserve />
                                    پیگیری رزرو
                                </Link>
                            </div>
                            <span>
                            <i>
                                <Bell />
                            </i>
                            اطلاع از آخرین شرایط سفر و استرداد با توجه به شیوع کرونا
                            <Arrow />
                        </span>
                        </HomeHeaderContentContainer>
                    </div>
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
                            {
                                page ===  'plane'
                                    ?
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
                                        <HomeHeaderImageContentItemContainer className='column'>
                                    <span className='active' id='exchange_icon'>
                                        <Exchange />
                                    </span>
                                            <HomeHeaderImageContentItemParentInputContainer id='origin_input_parent'>
                                                <div>
                                                    <label>
                                                        مبدا(شهر)
                                                    </label>
                                                    <input
                                                        type='text'
                                                        placeholder=''
                                                        autoComplete='off'
                                                        spellCheck='false'
                                                        name='origin'
                                                        onFocus={ onFocusOrigin }
                                                        // onBlur={() => { const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active') }}
                                                        onChange={ onChangeOrigin }
                                                        defaultValue={ origin || '' }
                                                    />
                                                </div>
                                                <Plane2 />
                                                <div className='origin_options' onBlur={() => { const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                    <ul>
                                                        <li data-name='شیراز - Shiraz' className={(origin === 'شیراز - Shiraz' ? 'active' : '') + (destination === 'شیراز - Shiraz' ? 'deactivate ' : '')} onClick={() => { setOrigin('شیراز - Shiraz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            شیراز - Shiraz
                                                        </li>
                                                        <li data-name='تهران - Tehran' className={(origin === 'تهران - Tehran' ? 'active' : '') + (destination === 'تهران - Tehran' ? 'deactivate ' : '')} onClick={() => { setOrigin('تهران - Tehran'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            تهران - Tehran
                                                        </li>
                                                        <li data-name='مشهد - Mashhad' className={(origin === 'مشهد - Mashhad' ? 'active' : '') + (destination === 'مشهد - Mashhad' ? 'deactivate ' : '')} onClick={() => { setOrigin('مشهد - Mashhad'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            مشهد - Mashhad
                                                        </li>
                                                        <li data-name='کیش - Kish' className={(origin === 'کیش - Kish' ? 'active' : '') + (destination === 'کیش - Kish' ? 'deactivate ' : '')} onClick={() => { setOrigin('کیش - Kish'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            کیش - Kish
                                                        </li>
                                                        <li data-name='آبادان - Abadan' className={(origin === 'آبادان - Abadan' ? 'active' : '') + (destination === 'آبادان - Abadan' ? 'deactivate ' : '')} onClick={() => { setOrigin('آبادان - Abadan'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            آبادان - Abadan
                                                        </li>
                                                        <li data-name='اهواز - Ahwaz' className={(origin === 'اهواز - Ahwaz' ? 'active' : '') + (destination === 'اهواز - Ahwaz' ? 'deactivate ' : '')} onClick={() => { setOrigin('اهواز - Ahwaz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            اهواز - Ahwaz
                                                        </li>
                                                        <li data-name='رشت - Rasht' className={(origin === 'رشت - Rasht' ? 'active' : '') + (destination === 'رشت - Rasht' ? 'deactivate ' : '')} onClick={() => { setOrigin('رشت - Rasht'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            رشت - Rasht
                                                        </li>
                                                    </ul>
                                                </div>
                                            </HomeHeaderImageContentItemParentInputContainer>
                                            <HomeHeaderImageContentItemParentInputContainer id='destination_input_parent'>
                                                <div>
                                                    <label>
                                                        مقصد(شهر)
                                                    </label>
                                                    <input
                                                        type='text'
                                                        placeholder=''
                                                        autoComplete='off'
                                                        spellCheck='false'
                                                        name='destination'
                                                        onFocus={ onFocusDestination }
                                                        // onBlur={() => { const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active') }}
                                                        onChange={ onChangeDestination }
                                                        defaultValue={ destination || '' }
                                                    />
                                                </div>
                                                <Plane3 />
                                                <div className='destination_options'>
                                                    <ul>
                                                        <li data-name='شیراز - Shiraz' className={(destination === 'شیراز - Shiraz' ? 'active ' : '') + (origin === 'شیراز - Shiraz' ? 'deactivate ' : '')} onClick={() => { setDestination('شیراز - Shiraz'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            شیراز - Shiraz
                                                        </li>
                                                        <li data-name='تهران - Tehran' className={(destination === 'تهران - Tehran' ? 'active' : '') + (origin === 'تهران - Tehran' ? 'deactivate ' : '')} onClick={() => { setDestination('تهران - Tehran'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            تهران - Tehran
                                                        </li>
                                                        <li data-name='مشهد - Mashhad' className={(destination === 'مشهد - Mashhad' ? 'active' : '') + (origin === 'مشهد - Mashhad' ? 'deactivate ' : '')} onClick={() => { setDestination('مشهد - Mashhad'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            مشهد - Mashhad
                                                        </li>
                                                        <li data-name='کیش - Kish' className={(destination === 'کیش - Kish' ? 'active' : '') + (origin === 'کیش - Kish' ? 'deactivate ' : '')} onClick={() => { setDestination('کیش - Kish'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            کیش - Kish
                                                        </li>
                                                        <li data-name='آبادان - Abadan' className={(destination === 'آبادان - Abadan' ? 'active' : '') + (origin === 'آبادان - Abadan' ? 'deactivate ' : '')} onClick={() => { setDestination('آبادان - Abadan'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            آبادان - Abadan
                                                        </li>
                                                        <li data-name='اهواز - Ahwaz' className={(destination === 'اهواز - Ahwaz' ? 'active' : '') + (origin === 'اهواز - Ahwaz' ? 'deactivate ' : '')} onClick={() => { setDestination('اهواز - Ahwaz'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            اهواز - Ahwaz
                                                        </li>
                                                        <li data-name='رشت - Rasht' className={(destination === 'رشت - Rasht' ? 'active' : '') + (origin === 'رشت - Rasht' ? 'deactivate ' : '')} onClick={() => { setDestination('رشت - Rasht'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            رشت - Rasht
                                                        </li>
                                                    </ul>
                                                </div>
                                            </HomeHeaderImageContentItemParentInputContainer>
                                        </HomeHeaderImageContentItemContainer>
                                        <HomeHeaderImageContentItemContainer>
                                            <div className='date'>
                                                <label>
                                                    تاریخ رفت
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder=''
                                                    autoComplete='off'
                                                    spellCheck='false'
                                                    onChange={(event: any) => { setDepartureDate(event.target.value); }}
                                                    defaultValue={ departureDate || '' }
                                                />
                                            </div>
                                            <div className='date'>
                                                <label>
                                                    تاریخ برگشت
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder=''
                                                    autoComplete='off'
                                                    spellCheck='false'
                                                    onChange={(event: any) => { setReturnDate(event.target.value); }}
                                                    defaultValue={ returnDate || '' }
                                                />
                                            </div>
                                        </HomeHeaderImageContentItemContainer>
                                        <button>
                                            یافتن بلیط
                                        </button>
                                    </HomeHeaderImageContentContainer>
                                    :
                                    null
                            }
                            {
                                page ===  'hotel'
                                    ?
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
                                            <div>
                                                <div className='custom-select-menu' onClick={() => setPassengers(!passengers)}>
                                                    <details className='custom-select passengers'>
                                                        <summary className='radios'>
                                                            اطلاعات
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
                                                                        اتاق
                                                                    </h2>
                                                                    <p>
                                                                        تعداد اتاق برای اسکان
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <HomeHeaderPassengersButtonContainer onClick={() => { setRoomCount(babyCount + 1); setCountActive('room') }} className={countActive === 'room' ? 'right active' : 'right'}>
                                                                        <Plus />
                                                                    </HomeHeaderPassengersButtonContainer>
                                                                    <HomeHeaderPassengersButtonContainer onClick={() =>  setCountActive('room')} className={countActive === 'room' ? 'active' : ''}>
                                                                        {roomCount}
                                                                    </HomeHeaderPassengersButtonContainer>
                                                                    <HomeHeaderPassengersButtonContainer onClick={() => { setRoomCount(babyCount <= 0 ? 0 : babyCount - 1); setCountActive('room') }} className={countActive === 'room' ? 'left active' : 'left'}>
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
                                        <HomeHeaderImageContentItemContainer className='column'>
                                            <HomeHeaderImageContentItemParentInputContainer id='origin_input_parent'>
                                                <div>
                                                    <label>
                                                        مبدا(شهر)
                                                    </label>
                                                    <input
                                                        type='text'
                                                        placeholder=''
                                                        autoComplete='off'
                                                        spellCheck='false'
                                                        name='origin'
                                                        onFocus={ onFocusOrigin }
                                                        // onBlur={() => { const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active') }}
                                                        onChange={ onChangeOrigin }
                                                        defaultValue={ origin || '' }
                                                    />
                                                </div>
                                                <Plane2 />
                                                <div className='origin_options' onBlur={() => { const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                    <ul>
                                                        <li data-name='شیراز - Shiraz' className={origin === 'شیراز - Shiraz' ? 'active' : ''} onClick={() => { setOrigin('شیراز - Shiraz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            شیراز - Shiraz
                                                        </li>
                                                        <li data-name='تهران - Tehran' className={origin === 'تهران - Tehran' ? 'active' : ''} onClick={() => { setOrigin('تهران - Tehran'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            تهران - Tehran
                                                        </li>
                                                        <li data-name='مشهد - Mashhad' className={origin === 'مشهد - Mashhad' ? 'active' : ''} onClick={() => { setOrigin('مشهد - Mashhad'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            مشهد - Mashhad
                                                        </li>
                                                        <li data-name='کیش - Kish' className={origin === 'کیش - Kish' ? 'active' : ''} onClick={() => { setOrigin('کیش - Kish'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            کیش - Kish
                                                        </li>
                                                        <li data-name='آبادان - Abadan' className={origin === 'آبادان - Abadan' ? 'active' : ''} onClick={() => { setOrigin('آبادان - Abadan'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            آبادان - Abadan
                                                        </li>
                                                        <li data-name='اهواز - Ahwaz' className={origin === 'اهواز - Ahwaz' ? 'active' : ''} onClick={() => { setOrigin('اهواز - Ahwaz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            اهواز - Ahwaz
                                                        </li>
                                                        <li data-name='رشت - Rasht' className={origin === 'رشت - Rasht' ? 'active' : ''} onClick={() => { setOrigin('رشت - Rasht'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            رشت - Rasht
                                                        </li>
                                                    </ul>
                                                </div>
                                            </HomeHeaderImageContentItemParentInputContainer>
                                        </HomeHeaderImageContentItemContainer>
                                        <HomeHeaderImageContentItemContainer>
                                            <div className='date'>
                                                <label>
                                                    تاریخ ورود
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder=''
                                                    autoComplete='off'
                                                    spellCheck='false'
                                                    onChange={(event: any) => { setDepartureDate(event.target.value); }}
                                                    defaultValue={ departureDate || '' }
                                                />
                                            </div>
                                            <div className='date'>
                                                <label>
                                                    تاریخ خروچ
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder=''
                                                    autoComplete='off'
                                                    spellCheck='false'
                                                    onChange={(event: any) => { setReturnDate(event.target.value); }}
                                                    defaultValue={ returnDate || '' }
                                                />
                                            </div>
                                        </HomeHeaderImageContentItemContainer>
                                        <button>
                                            یافتن بلیط
                                        </button>
                                    </HomeHeaderImageContentContainer>
                                    :
                                    null
                            }
                            {
                                page ===  'tour'
                                    ?
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
                                        <HomeHeaderImageContentItemContainer className='column'>
                                            <HomeHeaderImageContentItemParentInputContainer id='origin_input_parent'>
                                                <div>
                                                    <label>
                                                        مبدا(شهر)
                                                    </label>
                                                    <input
                                                        type='text'
                                                        placeholder=''
                                                        autoComplete='off'
                                                        spellCheck='false'
                                                        name='origin'
                                                        onFocus={ onFocusOrigin }
                                                        // onBlur={() => { const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active') }}
                                                        onChange={ onChangeOrigin }
                                                        defaultValue={ origin || '' }
                                                    />
                                                </div>
                                                <Plane2 />
                                                <div className='origin_options' onBlur={() => { const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                    <ul>
                                                        <li data-name='شیراز - Shiraz' className={(origin === 'شیراز - Shiraz' ? 'active' : '') + (destination === 'شیراز - Shiraz' ? 'deactivate ' : '')} onClick={() => { setOrigin('شیراز - Shiraz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            شیراز - Shiraz
                                                        </li>
                                                        <li data-name='تهران - Tehran' className={(origin === 'تهران - Tehran' ? 'active' : '') + (destination === 'تهران - Tehran' ? 'deactivate ' : '')} onClick={() => { setOrigin('تهران - Tehran'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            تهران - Tehran
                                                        </li>
                                                        <li data-name='مشهد - Mashhad' className={(origin === 'مشهد - Mashhad' ? 'active' : '') + (destination === 'مشهد - Mashhad' ? 'deactivate ' : '')} onClick={() => { setOrigin('مشهد - Mashhad'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            مشهد - Mashhad
                                                        </li>
                                                        <li data-name='کیش - Kish' className={(origin === 'کیش - Kish' ? 'active' : '') + (destination === 'کیش - Kish' ? 'deactivate ' : '')} onClick={() => { setOrigin('کیش - Kish'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            کیش - Kish
                                                        </li>
                                                        <li data-name='آبادان - Abadan' className={(origin === 'آبادان - Abadan' ? 'active' : '') + (destination === 'آبادان - Abadan' ? 'deactivate ' : '')} onClick={() => { setOrigin('آبادان - Abadan'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            آبادان - Abadan
                                                        </li>
                                                        <li data-name='اهواز - Ahwaz' className={(origin === 'اهواز - Ahwaz' ? 'active' : '') + (destination === 'اهواز - Ahwaz' ? 'deactivate ' : '')} onClick={() => { setOrigin('اهواز - Ahwaz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            اهواز - Ahwaz
                                                        </li>
                                                        <li data-name='رشت - Rasht' className={(origin === 'رشت - Rasht' ? 'active' : '') + (destination === 'رشت - Rasht' ? 'deactivate ' : '')} onClick={() => { setOrigin('رشت - Rasht'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            رشت - Rasht
                                                        </li>
                                                    </ul>
                                                </div>
                                            </HomeHeaderImageContentItemParentInputContainer>
                                            <HomeHeaderImageContentItemParentInputContainer id='destination_input_parent'>
                                                <div>
                                                    <label>
                                                        مقصد(شهر)
                                                    </label>
                                                    <input
                                                        type='text'
                                                        placeholder=''
                                                        autoComplete='off'
                                                        spellCheck='false'
                                                        name='destination'
                                                        onFocus={ onFocusDestination }
                                                        // onBlur={() => { const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active') }}
                                                        onChange={ onChangeDestination }
                                                        defaultValue={ destination || '' }
                                                    />
                                                </div>
                                                <Plane3 />
                                                <div className='destination_options'>
                                                    <ul>
                                                        <li data-name='شیراز - Shiraz' className={(destination === 'شیراز - Shiraz' ? 'active ' : '') + (origin === 'شیراز - Shiraz' ? 'deactivate ' : '')} onClick={() => { setDestination('شیراز - Shiraz'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            شیراز - Shiraz
                                                        </li>
                                                        <li data-name='تهران - Tehran' className={(destination === 'تهران - Tehran' ? 'active' : '') + (origin === 'تهران - Tehran' ? 'deactivate ' : '')} onClick={() => { setDestination('تهران - Tehran'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            تهران - Tehran
                                                        </li>
                                                        <li data-name='مشهد - Mashhad' className={(destination === 'مشهد - Mashhad' ? 'active' : '') + (origin === 'مشهد - Mashhad' ? 'deactivate ' : '')} onClick={() => { setDestination('مشهد - Mashhad'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            مشهد - Mashhad
                                                        </li>
                                                        <li data-name='کیش - Kish' className={(destination === 'کیش - Kish' ? 'active' : '') + (origin === 'کیش - Kish' ? 'deactivate ' : '')} onClick={() => { setDestination('کیش - Kish'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            کیش - Kish
                                                        </li>
                                                        <li data-name='آبادان - Abadan' className={(destination === 'آبادان - Abadan' ? 'active' : '') + (origin === 'آبادان - Abadan' ? 'deactivate ' : '')} onClick={() => { setDestination('آبادان - Abadan'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            آبادان - Abadan
                                                        </li>
                                                        <li data-name='اهواز - Ahwaz' className={(destination === 'اهواز - Ahwaz' ? 'active' : '') + (origin === 'اهواز - Ahwaz' ? 'deactivate ' : '')} onClick={() => { setDestination('اهواز - Ahwaz'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            اهواز - Ahwaz
                                                        </li>
                                                        <li data-name='رشت - Rasht' className={(destination === 'رشت - Rasht' ? 'active' : '') + (origin === 'رشت - Rasht' ? 'deactivate ' : '')} onClick={() => { setDestination('رشت - Rasht'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            رشت - Rasht
                                                        </li>
                                                    </ul>
                                                </div>
                                            </HomeHeaderImageContentItemParentInputContainer>
                                        </HomeHeaderImageContentItemContainer>
                                        <HomeHeaderImageContentItemContainer>
                                            <div className='date'>
                                                <label>
                                                    تاریخ رفت
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder=''
                                                    autoComplete='off'
                                                    spellCheck='false'
                                                    onChange={(event: any) => { setDepartureDate(event.target.value); }}
                                                    defaultValue={ departureDate || '' }
                                                />
                                            </div>
                                            <div className='date'>
                                                <label>
                                                    تاریخ برگشت
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder=''
                                                    autoComplete='off'
                                                    spellCheck='false'
                                                    onChange={(event: any) => { setReturnDate(event.target.value); }}
                                                    defaultValue={ returnDate || '' }
                                                />
                                            </div>
                                        </HomeHeaderImageContentItemContainer>
                                        <button>
                                            یافتن بلیط
                                        </button>
                                    </HomeHeaderImageContentContainer>
                                    :
                                    null
                            }
                            {
                                page ===  'train'
                                    ?
                                    <HomeHeaderImageContentContainer>
                                        <HomeHeaderImageContentItemContainer>
                                            <div className='custom-select-menu'>
                                                <details className='custom-select'>
                                                    <summary className='radios'>
                                                        <input type='radio' name='item' id='item1' title='دربست' onChange={(event: any) => event.preventDefault()} checked={true}/>
                                                        <input type='radio' name='item' id='item2' title='درنسبت' onChange={(event: any) => event.preventDefault()}/>
                                                    </summary>
                                                    <ul className='list'>
                                                        <li>
                                                            <label htmlFor='item1'>
                                                                دربست
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label htmlFor='item2'>
                                                                درنبست
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </details>
                                            </div>
                                            <div className='custom-select-menu'>
                                                <details className='custom-select'>
                                                    <summary className='radios'>
                                                        <input type='radio' name='item2' id='item3' title='یک طرفه' onChange={(event: any) => event.preventDefault()} checked={true}/>
                                                        <input type='radio' name='item2' id='item4' title='رفت و برگشت' onChange={(event: any) => event.preventDefault()}/>
                                                    </summary>
                                                    <ul className='list'>
                                                        <li>
                                                            <label htmlFor='item3'>
                                                                یک طرفه
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label htmlFor='item4'>
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
                                        <HomeHeaderImageContentItemContainer className='column'>
                                            <HomeHeaderImageContentItemParentInputContainer id='origin_input_parent'>
                                                <div>
                                                    <label>
                                                        مبدا(شهر)
                                                    </label>
                                                    <input
                                                        type='text'
                                                        placeholder=''
                                                        autoComplete='off'
                                                        spellCheck='false'
                                                        name='origin'
                                                        onFocus={ onFocusOrigin }
                                                        // onBlur={() => { const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active') }}
                                                        onChange={ onChangeOrigin }
                                                        defaultValue={ origin || '' }
                                                    />
                                                </div>
                                                <Plane2 />
                                                <div className='origin_options' onBlur={() => { const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                    <ul>
                                                        <li data-name='شیراز - Shiraz' className={(origin === 'شیراز - Shiraz' ? 'active' : '') + (destination === 'شیراز - Shiraz' ? 'deactivate ' : '')} onClick={() => { setOrigin('شیراز - Shiraz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            شیراز - Shiraz
                                                        </li>
                                                        <li data-name='تهران - Tehran' className={(origin === 'تهران - Tehran' ? 'active' : '') + (destination === 'تهران - Tehran' ? 'deactivate ' : '')} onClick={() => { setOrigin('تهران - Tehran'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            تهران - Tehran
                                                        </li>
                                                        <li data-name='مشهد - Mashhad' className={(origin === 'مشهد - Mashhad' ? 'active' : '') + (destination === 'مشهد - Mashhad' ? 'deactivate ' : '')} onClick={() => { setOrigin('مشهد - Mashhad'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            مشهد - Mashhad
                                                        </li>
                                                        <li data-name='کیش - Kish' className={(origin === 'کیش - Kish' ? 'active' : '') + (destination === 'کیش - Kish' ? 'deactivate ' : '')} onClick={() => { setOrigin('کیش - Kish'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            کیش - Kish
                                                        </li>
                                                        <li data-name='آبادان - Abadan' className={(origin === 'آبادان - Abadan' ? 'active' : '') + (destination === 'آبادان - Abadan' ? 'deactivate ' : '')} onClick={() => { setOrigin('آبادان - Abadan'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            آبادان - Abadan
                                                        </li>
                                                        <li data-name='اهواز - Ahwaz' className={(origin === 'اهواز - Ahwaz' ? 'active' : '') + (destination === 'اهواز - Ahwaz' ? 'deactivate ' : '')} onClick={() => { setOrigin('اهواز - Ahwaz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            اهواز - Ahwaz
                                                        </li>
                                                        <li data-name='رشت - Rasht' className={(origin === 'رشت - Rasht' ? 'active' : '') + (destination === 'رشت - Rasht' ? 'deactivate ' : '')} onClick={() => { setOrigin('رشت - Rasht'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            رشت - Rasht
                                                        </li>
                                                    </ul>
                                                </div>
                                            </HomeHeaderImageContentItemParentInputContainer>
                                            <HomeHeaderImageContentItemParentInputContainer id='destination_input_parent'>
                                                <div>
                                                    <label>
                                                        مقصد(شهر)
                                                    </label>
                                                    <input
                                                        type='text'
                                                        placeholder=''
                                                        autoComplete='off'
                                                        spellCheck='false'
                                                        name='destination'
                                                        onFocus={ onFocusDestination }
                                                        // onBlur={() => { const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active') }}
                                                        onChange={ onChangeDestination }
                                                        defaultValue={ destination || '' }
                                                    />
                                                </div>
                                                <Plane3 />
                                                <div className='destination_options'>
                                                    <ul>
                                                        <li data-name='شیراز - Shiraz' className={(destination === 'شیراز - Shiraz' ? 'active ' : '') + (origin === 'شیراز - Shiraz' ? 'deactivate ' : '')} onClick={() => { setDestination('شیراز - Shiraz'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            شیراز - Shiraz
                                                        </li>
                                                        <li data-name='تهران - Tehran' className={(destination === 'تهران - Tehran' ? 'active' : '') + (origin === 'تهران - Tehran' ? 'deactivate ' : '')} onClick={() => { setDestination('تهران - Tehran'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            تهران - Tehran
                                                        </li>
                                                        <li data-name='مشهد - Mashhad' className={(destination === 'مشهد - Mashhad' ? 'active' : '') + (origin === 'مشهد - Mashhad' ? 'deactivate ' : '')} onClick={() => { setDestination('مشهد - Mashhad'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            مشهد - Mashhad
                                                        </li>
                                                        <li data-name='کیش - Kish' className={(destination === 'کیش - Kish' ? 'active' : '') + (origin === 'کیش - Kish' ? 'deactivate ' : '')} onClick={() => { setDestination('کیش - Kish'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            کیش - Kish
                                                        </li>
                                                        <li data-name='آبادان - Abadan' className={(destination === 'آبادان - Abadan' ? 'active' : '') + (origin === 'آبادان - Abadan' ? 'deactivate ' : '')} onClick={() => { setDestination('آبادان - Abadan'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            آبادان - Abadan
                                                        </li>
                                                        <li data-name='اهواز - Ahwaz' className={(destination === 'اهواز - Ahwaz' ? 'active' : '') + (origin === 'اهواز - Ahwaz' ? 'deactivate ' : '')} onClick={() => { setDestination('اهواز - Ahwaz'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            اهواز - Ahwaz
                                                        </li>
                                                        <li data-name='رشت - Rasht' className={(destination === 'رشت - Rasht' ? 'active' : '') + (origin === 'رشت - Rasht' ? 'deactivate ' : '')} onClick={() => { setDestination('رشت - Rasht'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            رشت - Rasht
                                                        </li>
                                                    </ul>
                                                </div>
                                            </HomeHeaderImageContentItemParentInputContainer>
                                        </HomeHeaderImageContentItemContainer>
                                        <HomeHeaderImageContentItemContainer>
                                            <div className='date'>
                                                <label>
                                                    تاریخ رفت
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder=''
                                                    autoComplete='off'
                                                    spellCheck='false'
                                                    onChange={(event: any) => { setDepartureDate(event.target.value); }}
                                                    defaultValue={ departureDate || '' }
                                                />
                                            </div>
                                            <div className='date'>
                                                <label>
                                                    تاریخ برگشت
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder=''
                                                    autoComplete='off'
                                                    spellCheck='false'
                                                    onChange={(event: any) => { setReturnDate(event.target.value); }}
                                                    defaultValue={ returnDate || '' }
                                                />
                                            </div>
                                        </HomeHeaderImageContentItemContainer>
                                        <button>
                                            یافتن بلیط
                                        </button>
                                    </HomeHeaderImageContentContainer>
                                    :
                                    null
                            }
                            {
                                page ===  'bus'
                                    ?
                                    <HomeHeaderImageContentContainer>
                                        <HomeHeaderImageContentItemContainer>
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
                                        </HomeHeaderImageContentItemContainer>
                                        <HomeHeaderImageContentItemContainer className='column'>
                                            <HomeHeaderImageContentItemParentInputContainer id='origin_input_parent'>
                                                <div>
                                                    <label>
                                                        مبدا(شهر)
                                                    </label>
                                                    <input
                                                        type='text'
                                                        placeholder=''
                                                        autoComplete='off'
                                                        spellCheck='false'
                                                        name='origin'
                                                        onFocus={ onFocusOrigin }
                                                        // onBlur={() => { const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active') }}
                                                        onChange={ onChangeOrigin }
                                                        defaultValue={ origin || '' }
                                                    />
                                                </div>
                                                <Plane2 />
                                                <div className='origin_options' onBlur={() => { const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                    <ul>
                                                        <li data-name='شیراز - Shiraz' className={(origin === 'شیراز - Shiraz' ? 'active' : '') + (destination === 'شیراز - Shiraz' ? 'deactivate ' : '')} onClick={() => { setOrigin('شیراز - Shiraz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            شیراز - Shiraz
                                                        </li>
                                                        <li data-name='تهران - Tehran' className={(origin === 'تهران - Tehran' ? 'active' : '') + (destination === 'تهران - Tehran' ? 'deactivate ' : '')} onClick={() => { setOrigin('تهران - Tehran'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            تهران - Tehran
                                                        </li>
                                                        <li data-name='مشهد - Mashhad' className={(origin === 'مشهد - Mashhad' ? 'active' : '') + (destination === 'مشهد - Mashhad' ? 'deactivate ' : '')} onClick={() => { setOrigin('مشهد - Mashhad'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            مشهد - Mashhad
                                                        </li>
                                                        <li data-name='کیش - Kish' className={(origin === 'کیش - Kish' ? 'active' : '') + (destination === 'کیش - Kish' ? 'deactivate ' : '')} onClick={() => { setOrigin('کیش - Kish'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            کیش - Kish
                                                        </li>
                                                        <li data-name='آبادان - Abadan' className={(origin === 'آبادان - Abadan' ? 'active' : '') + (destination === 'آبادان - Abadan' ? 'deactivate ' : '')} onClick={() => { setOrigin('آبادان - Abadan'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            آبادان - Abadan
                                                        </li>
                                                        <li data-name='اهواز - Ahwaz' className={(origin === 'اهواز - Ahwaz' ? 'active' : '') + (destination === 'اهواز - Ahwaz' ? 'deactivate ' : '')} onClick={() => { setOrigin('اهواز - Ahwaz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            اهواز - Ahwaz
                                                        </li>
                                                        <li data-name='رشت - Rasht' className={(origin === 'رشت - Rasht' ? 'active' : '') + (destination === 'رشت - Rasht' ? 'deactivate ' : '')} onClick={() => { setOrigin('رشت - Rasht'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('.origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            رشت - Rasht
                                                        </li>
                                                    </ul>
                                                </div>
                                            </HomeHeaderImageContentItemParentInputContainer>
                                            <HomeHeaderImageContentItemParentInputContainer id='destination_input_parent'>
                                                <div>
                                                    <label>
                                                        مقصد(شهر)
                                                    </label>
                                                    <input
                                                        type='text'
                                                        placeholder=''
                                                        autoComplete='off'
                                                        spellCheck='false'
                                                        name='destination'
                                                        onFocus={ onFocusDestination }
                                                        // onBlur={() => { const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active') }}
                                                        onChange={ onChangeDestination }
                                                        defaultValue={ destination || '' }
                                                    />
                                                </div>
                                                <Plane3 />
                                                <div className='destination_options'>
                                                    <ul>
                                                        <li data-name='شیراز - Shiraz' className={(destination === 'شیراز - Shiraz' ? 'active ' : '') + (origin === 'شیراز - Shiraz' ? 'deactivate ' : '')} onClick={() => { setDestination('شیراز - Shiraz'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            شیراز - Shiraz
                                                        </li>
                                                        <li data-name='تهران - Tehran' className={(destination === 'تهران - Tehran' ? 'active' : '') + (origin === 'تهران - Tehran' ? 'deactivate ' : '')} onClick={() => { setDestination('تهران - Tehran'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            تهران - Tehran
                                                        </li>
                                                        <li data-name='مشهد - Mashhad' className={(destination === 'مشهد - Mashhad' ? 'active' : '') + (origin === 'مشهد - Mashhad' ? 'deactivate ' : '')} onClick={() => { setDestination('مشهد - Mashhad'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            مشهد - Mashhad
                                                        </li>
                                                        <li data-name='کیش - Kish' className={(destination === 'کیش - Kish' ? 'active' : '') + (origin === 'کیش - Kish' ? 'deactivate ' : '')} onClick={() => { setDestination('کیش - Kish'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            کیش - Kish
                                                        </li>
                                                        <li data-name='آبادان - Abadan' className={(destination === 'آبادان - Abadan' ? 'active' : '') + (origin === 'آبادان - Abadan' ? 'deactivate ' : '')} onClick={() => { setDestination('آبادان - Abadan'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            آبادان - Abadan
                                                        </li>
                                                        <li data-name='اهواز - Ahwaz' className={(destination === 'اهواز - Ahwaz' ? 'active' : '') + (origin === 'اهواز - Ahwaz' ? 'deactivate ' : '')} onClick={() => { setDestination('اهواز - Ahwaz'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            اهواز - Ahwaz
                                                        </li>
                                                        <li data-name='رشت - Rasht' className={(destination === 'رشت - Rasht' ? 'active' : '') + (origin === 'رشت - Rasht' ? 'deactivate ' : '')} onClick={() => { setDestination('رشت - Rasht'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('.destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.classList.remove('active'); options?.classList.remove('active'); exchangeIcon?.classList.add('active'); }}>
                                                            <Plane />
                                                            رشت - Rasht
                                                        </li>
                                                    </ul>
                                                </div>
                                            </HomeHeaderImageContentItemParentInputContainer>
                                        </HomeHeaderImageContentItemContainer>
                                        <HomeHeaderImageContentItemContainer>
                                            <div className='date'>
                                                <label>
                                                    تاریخ رفت
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder=''
                                                    autoComplete='off'
                                                    spellCheck='false'
                                                    onChange={(event: any) => { setDepartureDate(event.target.value); }}
                                                    defaultValue={ departureDate || '' }
                                                />
                                            </div>
                                            <div className='date'>
                                                <label>
                                                    تاریخ برگشت
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder=''
                                                    autoComplete='off'
                                                    spellCheck='false'
                                                    onChange={(event: any) => { setReturnDate(event.target.value); }}
                                                    defaultValue={ returnDate || '' }
                                                />
                                            </div>
                                        </HomeHeaderImageContentItemContainer>
                                        <button>
                                            یافتن بلیط
                                        </button>
                                    </HomeHeaderImageContentContainer>
                                    :
                                    null
                            }
                        </HomeHeaderImageContentBoxContainer>
                    </HomeHeaderImageContentParentContainer>
                </HomeHeaderImageContainer>
            </HomeHeaderContainer>
        </Main>
    );
};

export default Home;
