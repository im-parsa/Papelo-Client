import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import Tooltip from '@tippyjs/react/headless';
import { Link, useParams } from 'react-router-dom';
import { numberToWords } from '@persian-tools/persian-tools';
import React, { useCallback, useRef, useState } from 'react';

import 'swiper/css';
import 'tippy.js/dist/tippy.css';

import { togglePopupHiddenLogin } from '../../redux/popup/popup.actions';

import Logo from '../../assets/icons/logo.png';
import LogoWhite from '../../assets/icons/logo-white.png';
import Texture from '../../assets/images/texture.svg';
import Header1 from '../../assets/images/header-1.svg';
import Header2 from '../../assets/images/header-2.svg';
import Header3 from '../../assets/images/header-3.svg';
import Header4 from '../../assets/images/header-4.svg';
import Header5 from '../../assets/images/header-5.svg';
import { ReactComponent as Bus } from '../../assets/icons/bus.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Bell } from '../../assets/icons/bell.svg';
import { ReactComponent as Tour } from '../../assets/icons/tour.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as Box1 } from '../../assets/icons/box-1.svg';
import { ReactComponent as Box2 } from '../../assets/icons/box-2.svg';
import { ReactComponent as Box3 } from '../../assets/icons/box-3.svg';
import { ReactComponent as Blogs } from '../../assets/icons/blogs.svg';
import { ReactComponent as Check } from '../../assets/icons/check.svg';
import { ReactComponent as Plane } from '../../assets/icons/plane.svg';
import { ReactComponent as Hotel } from '../../assets/icons/hotel.svg';
import { ReactComponent as Train } from '../../assets/icons/train.svg';
import { ReactComponent as Minus } from '../../assets/icons/minus.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { ReactComponent as Arrow2 } from '../../assets/icons/arrow-2.svg';
import { ReactComponent as Arrow3 } from '../../assets/icons/arrow-3.svg';
import { ReactComponent as Reserve } from '../../assets/icons/reserve.svg';
import { ReactComponent as Exchange } from '../../assets/icons/exchange.svg';
import { ReactComponent as News } from '../../assets/images/latest-news.svg';
import { ReactComponent as Pin } from '../../assets/icons/map-pin-2-fill.svg';
import { ReactComponent as AppPhone } from '../../assets/images/app-phone.svg';
import { ReactComponent as Download } from '../../assets/icons/download-2.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Trash } from '../../assets/icons/delete-bin-line.svg';
import { ReactComponent as Plane3 } from '../../assets/icons/flight-land-line.svg';
import { ReactComponent as Plane2 } from '../../assets/icons/flight-takeoff-line.svg';
import { ReactComponent as PlusCircle } from '../../assets/icons/add-circle-fill.svg';
import { ReactComponent as Calendar } from '../../assets/icons/calendar-event-fill.svg';
import { ReactComponent as UserFill } from '../../assets/icons/user-3-fill.svg';

import styles from './home.module.scss';

import { DatePicker } from '../../components/date-picker';
import Error from '../error/error.component';
import Footer from '../../components/layouts/footer/footer.component';
import TicketBox from '../../components/ticket-box/ticket-box.component';
import HotelImage from '../../assets/images/hotel.jpg';

const data = require('../../data/data.json');

const Home = () =>
{
    const { page } = useParams();

    const originParentRef: any = useRef<any>([]);
    const exclusiveParentRef: any = useRef<any>([]);
    const passengersParentRef: any = useRef<any>([]);
    const unilateralParentRef: any = useRef<any>([]);
    const destinationParentRef: any = useRef<any>([]);
    const internationalParentRef: any = useRef<any>([]);
    const passengersTypeParentRef: any = useRef<any>([]);
    const returnDatePickerParentRef: any = useRef<any>([]);
    const departureDatePickerParentRef: any = useRef<any>([]);
    const hotelRoomsRef: any = useRef<any>(null);
    const proposalOriginParentRef: any = useRef<any>(null);
    const proposalDestinationParentRef: any = useRef<any>(null);

    const [mobilePage, setMobilePage] = useState('');
    const [language, setLanguage] = useState('FARSI');
    const [proposalActivate, setProposalActivate] = useState(0);
    const [internationalType, setInternationalType] = useState('اکونومی');
    const [internationalActivate, setInternationalActivate] = useState(false);
    const [hotelRoomsActivate, setHotelRoomsActivate] = useState(false);
    const [fastSearchActivate, setFastSearchActivate] = useState('تهران');
    const [passengersType, setPassengersType] = useState('regular');
    const [passengersTypeActivate, setPassengersTypeActivate] = useState(false);
    const [proposalOrigin, setProposalOrigin] = useState('');
    const [proposalOriginActivate, setProposalOriginActivate] = useState(false);
    const [proposalDestination, setProposalDestination] = useState('');
    const [proposalDestinationActivate, setProposalDestinationActivate] = useState(false);
    const [unilateral, setUnilateral] = useState(true);
    const [unilateralActivate, setUnilateralActivate] = useState(false);
    const [exclusive, setExclusive] = useState(true);
    const [exclusiveActivate, setExclusiveActivate] = useState(false);
    const [reserveMore, setReserveMore] = useState(false);
    const [passengers, setPassengers] = useState(false);
    const [international, setInternational] = useState(false);
    const [faq, setFaq] = useState(0);
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);
    const [hotelRooms, setHotelRooms] = useState([{ id: nanoid(), adultCount: 1, childCount: 0 }]);
    const [origin, setOrigin] = useState<string>('');
    const [originActivate, setOriginActivate] = useState(false);
    const [originError, setOriginError] = useState<any>(false);
    const [destination, setDestination] = useState('');
    const [destinationActivate, setDestinationActivate] = useState(false);
    const [destinationError, setDestinationError] = useState<any>(false);
    const [exchangeActivate, setExchangeActivate] = useState(true);
    const [departureDate, setDepartureDate]: any = useState();
    const [departureDatePicker, setDepartureDatePicker] = useState(false);
    const [returnDate, setReturnDate]: any = useState();
    const [returnDatePicker, setReturnDatePicker] = useState(false);

    const dispatch = useDispatch();

    const onClickEvent = (event: any) =>
    {
        if (!originParentRef?.current?.some((element: any) => element?.contains(event?.target)))
        {
            setOriginError(origin && !data?.cities?.includes(origin));

            setOriginActivate(false);
            setExchangeActivate(true);
        }

        if (!destinationParentRef?.current?.some((element: any) => element?.contains(event?.target)))
        {
            setDestinationError(destination && !data?.cities?.includes(destination));

            setDestinationActivate(false);
            setExchangeActivate(true);
        }

        if (!passengersParentRef?.current?.some((element: any) => element?.contains(event?.target)))
            setPassengers(false);

        if (!hotelRoomsRef?.current?.contains(event?.target))
            setHotelRoomsActivate(false);

        if (!departureDatePickerParentRef?.current?.some((element: any) => element?.contains(event?.target)))
            setDepartureDatePicker(false);

        if (!returnDatePickerParentRef?.current?.some((element: any) => element?.contains(event?.target)))
            setReturnDatePicker(false);

        if (!unilateralParentRef?.current?.some((element: any) => element?.contains(event?.target)))
            setUnilateralActivate(false);

        if (!exclusiveParentRef?.current?.some((element: any) => element?.contains(event?.target)))
            setExclusiveActivate(false);

        if (!passengersTypeParentRef?.current?.some((element: any) => element?.contains(event?.target)))
            setPassengersTypeActivate(false);

        if (!proposalOriginParentRef?.current?.contains(event?.target))
            setProposalOriginActivate(false);

        if (!proposalDestinationParentRef?.current?.contains(event?.target))
            setProposalDestinationActivate(false);

        if (!internationalParentRef?.current?.some((element: any) => element?.contains(event?.target)))
            setInternationalActivate(false);
    };
    const numberValidate = (event: any) =>
    {
        let key;
        const theEvent = event || window.event;

        if (theEvent.type === 'paste')

            key = event.clipboardData.getData('text/plain');

        else
        {
            key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
        }

        const regex = /[0-9]|\./;

        if (!regex.test(key) || event?.target?.value?.length >= 11)
        {
            theEvent.returnValue = false;

            if (theEvent.preventDefault)

                theEvent.preventDefault();
        }
    };
    const onChangeOrigin = (event: any) =>
    {
        setOrigin(event.target.value);
    };
    const onChangeDestination = (event: any) =>
    {
        setDestination(event.target.value);
    };
    const onFocusOrigin = () =>
    {
        setOriginError(false);
        setOriginActivate(true);
    };
    const onFocusDestination = () =>
    {
        setDestinationError(false);
        setDestinationActivate(true);
    };
    const onClickExchange = () =>
    {
        setOrigin(destination);
        setDestination(origin);
    };
    const handleOrigin: any = useCallback<any>((originName: string) =>
    {
        setOrigin(originName);
        setOriginActivate(false);
    }, [setOrigin, setOriginActivate]);
    const handleDestination: any = useCallback<any>((destinationName: string) =>
    {
        setDestination(destinationName);
        setDestinationActivate(false);
    }, [setDestination, setDestinationActivate]);
    const sum = (array: any[], prop: string) =>
    {
        return array.reduce((a, b) =>
        {
            return a + b[prop];
        }, 0);
    };

    return (!page ||
        page === 'hotel-reserve' ||
        page === 'tour-reserve' ||
        page === 'train-ticket' ||
        page === 'bus-ticket'
        ? (
            <main onClick={(event: any) => onClickEvent(event)} className={styles.home}>
                <header className={styles.homeHeader}>
                    <div className={styles.homeHeaderMain}>
                        <span className={styles.homeHeaderMainBackground}/>
                        <nav className={styles.homeHeaderMainNav}>
                            <img src={Logo} alt='Logo' />

                            <ul className={styles.homeHeaderMainNavList}>
                                <Link to='/policy' className={styles.homeHeaderMainNavItem}>
                                        راهنمایی و پشتیبانی
                                </Link>
                                <Link to='/blogs' className={styles.homeHeaderMainNavItem}>
                                        مجله آموزشی
                                </Link>
                                <li onClick={() => dispatch(togglePopupHiddenLogin())} className={styles.homeHeaderMainNavItem}>
                                        حساب کاربری
                                </li>
                            </ul>
                        </nav>
                        <div>
                            <aside className={styles.homeHeaderMainAside}>
                                <a href='#proposal'>
                                        مشاهده پیشنهادات
                                    <Arrow />
                                </a>

                                <div>
                                    <Tooltip
                                        render={() =>
                                            (
                                                <span className='tooltip'>
                                                حساب کاربری
                                                </span>
                                            )}
                                    >
                                        <button onClick={() => dispatch(togglePopupHiddenLogin())}>
                                            <User />
                                        </button>
                                    </Tooltip>

                                    <a href='/'>
                                        <Instagram />
                                    </a>
                                </div>
                            </aside>
                            <main className={styles.homeHeaderMainContent}>
                                {
                                    !page
                                        ? <>
                                            <h1>
                                                <strong>خرید ارزان</strong> و بصرفه بلیط پرواز داخلی و خارجی
                                            </h1>
                                            <p>
                                                    با خیالی آسوده بلیط پرواز خود را رزرو کنید
                                            </p>
                                        </>
                                        : null
                                }
                                {
                                    page === 'hotel-reserve'
                                        ? <>
                                            <h1>
                                                    پرستاره ترین اقامتگاه ها <strong>برای رزرو هتل</strong>
                                            </h1>
                                            <p>
                                                    با خیالی آسوده اتاق هتل خود را رزرو کنید
                                            </p>
                                        </>
                                        : null
                                }
                                {
                                    page === 'tour-reserve'
                                        ? <>
                                            <h1>
                                                <strong>با ما در همه حال سفر</strong> با رزرو تور پاپلو
                                            </h1>
                                            <p>
                                                    با خیالی آسوده بلیط تور خود را رزرو کنید
                                            </p>
                                        </>
                                        : null
                                }
                                {
                                    page === 'train-ticket'
                                        ? <>
                                            <h1>
                                                <strong>آسوده سفر کنید</strong> با رزرو بلیط قطار از پاپلو
                                            </h1>
                                            <p>
                                                    با خیالی آسوده بلیط قطار خود را رزرو کنید
                                            </p>
                                        </>
                                        : null
                                }
                                {
                                    page === 'bus-ticket'
                                        ? <>
                                            <h1>
                                                <strong>سرویع ترین</strong> روش برای رزرو بلیط اتوبوس
                                            </h1>
                                            <p>
                                                    با خیالی آسوده بلیط اتوبوس خود را رزرو کنید
                                            </p>
                                        </>
                                        : null
                                }
                                <div>
                                    <a href='#fastSearch'>
                                            جستجوی سریع
                                    </a>
                                    <Link to='/'>
                                        <Reserve />
                                            پیگیری رزرو
                                    </Link>
                                </div>
                                <Link to='/policy'>
                                    <i>
                                        <Bell />
                                    </i>
                                        اطلاع از آخرین شرایط سفر و استرداد با توجه به شیوع کرونا
                                    <Arrow />
                                </Link>
                            </main>
                        </div>
                    </div>

                    <div className={styles.homeHeaderImage}>
                        <div className={styles.homeHeaderImageBackground} style={{ backgroundImage: `url(${ !page ? Header1 : page === 'hotel-reserve' ? Header2 : page === 'tour-reserve' ? Header3 : page === 'train-ticket' ? Header4 : page === 'bus-ticket' ? Header5 : 0 })` }}/>
                        <div className={styles.homeHeaderImageContentParent}>
                            <div className={styles.homeHeaderImageContentBox}>
                                <nav className={styles.homeHeaderImageContentBoxNav}>
                                    <Link to='/' className={styles.homeHeaderImageContentBoxNavItem} data-activate={!page ? 'active' : ''}>
                                        <Plane />
                                            هواپیما
                                    </Link>
                                    <Link to='/hotel-reserve' className={styles.homeHeaderImageContentBoxNavItem} data-activate={page === 'hotel-reserve' ? 'active' : ''}>
                                        <Hotel />
                                            هتل
                                    </Link>
                                    <Link to='/tour-reserve' className={styles.homeHeaderImageContentBoxNavItem} data-activate={page === 'tour-reserve' ? 'active' : ''}>
                                        <Tour />
                                            تور
                                    </Link>
                                    <Link to='/train-ticket' className={styles.homeHeaderImageContentBoxNavItem} data-activate={page === 'train-ticket' ? 'active' : ''}>
                                        <Train />
                                            قطار
                                    </Link>
                                    <Link to='/bus-ticket' className={styles.homeHeaderImageContentBoxNavItem} data-activate={page === 'bus-ticket' ? 'active' : ''}>
                                        <Bus />
                                            اتوبوس
                                    </Link>
                                </nav>

                                {
                                    !page
                                        ? <div className={styles.homeHeaderImageContentList} data-activate={!page}>
                                            <div className={styles.homeHeaderImageContentItem}>
                                                <p>
                                                    <input type='radio' id='domestic' onChange={() =>
                                                    {
                                                        setInternationalType('اکونومی'); setInternational(false);
                                                    }} checked={!international}/>
                                                    <label htmlFor='domestic'>
                                                            داخلی
                                                    </label>
                                                </p>
                                                <p>
                                                    <input type='radio' id='international' onChange={() =>
                                                    {
                                                        setInternationalType('اکونومی'); setInternational(true);
                                                    }} checked={international}/>
                                                    <label htmlFor='international'>
                                                            خارجی
                                                    </label>
                                                </p>

                                                <div data-options={true} ref={(element: any) =>
                                                {
                                                    unilateralParentRef.current[0] = element;
                                                }} data-open={unilateralActivate} onClick={() => setUnilateralActivate(!unilateralActivate)}>
                                                    {
                                                        unilateral
                                                            ? <span>
                                                            یکطرفه
                                                            </span>
                                                            : <span>
                                                            رفت و برگشت
                                                            </span>
                                                    }
                                                    {
                                                        unilateralActivate
                                                            ? <ul>
                                                                <li data-activate={unilateral} onClick={() => setUnilateral(true)}>
                                                                        یکطرفه
                                                                </li>

                                                                <li data-activate={!unilateral} onClick={() => setUnilateral(false)}>
                                                                        رفت و برگشت
                                                                </li>
                                                            </ul>
                                                            : null
                                                    }
                                                </div>
                                                {
                                                    international
                                                        ? <div data-options={true} ref={(element: any) =>
                                                        {
                                                            internationalParentRef.current[0] = element;
                                                        }} data-open={internationalActivate} onClick={() => setInternationalActivate(!internationalActivate)}>
                                                            {
                                                                internationalType === 'اکونومی'
                                                                    ? <span>
                                                                    اکونومی
                                                                    </span>
                                                                    : internationalType === 'بیزینس'
                                                                        ? <span>
                                                                        بیزینس
                                                                        </span>
                                                                        : internationalType === 'فرست کلاس'
                                                                            ? <span>
                                                                            فرست کلاس
                                                                            </span>
                                                                            : null
                                                            }
                                                            {
                                                                internationalActivate
                                                                    ? <ul>
                                                                        <li data-activate={internationalType === 'اکونومی'} onClick={() => setInternationalType('اکونومی')}>
                                                                                اکونومی
                                                                        </li>

                                                                        <li data-activate={internationalType === 'بیزینس'} onClick={() => setInternationalType('بیزینس')}>
                                                                                بیزینس
                                                                        </li>

                                                                        <li data-activate={internationalType === 'فرست کلاس'} onClick={() => setInternationalType('فرست کلاس')}>
                                                                                فرست کلاس
                                                                        </li>
                                                                    </ul>
                                                                    : null
                                                            }
                                                        </div>
                                                        : <div data-options={true} ref={(element: any) =>
                                                        {
                                                            internationalParentRef.current[1] = element;
                                                        }} data-open={internationalActivate} onClick={() => setInternationalActivate(!internationalActivate)}>
                                                            {
                                                                internationalType === 'اکونومی'
                                                                    ? <span>
                                                                    اکونومی
                                                                    </span>
                                                                    : internationalType === 'بیزینس'
                                                                        ? <span>
                                                                        بیزینس
                                                                        </span>
                                                                        : null
                                                            }
                                                            {
                                                                internationalActivate
                                                                    ? <ul>
                                                                        <li data-activate={internationalType === 'اکونومی'} onClick={() => setInternationalType('اکونومی')}>
                                                                                اکونومی
                                                                        </li>

                                                                        <li data-activate={internationalType === 'بیزینس'} onClick={() => setInternationalType('بیزینس')}>
                                                                                بیزینس
                                                                        </li>
                                                                    </ul>
                                                                    : null
                                                            }
                                                        </div>
                                                }
                                                <div data-options={true} ref={(element: any) =>
                                                {
                                                    passengersParentRef.current[0] = element;
                                                }} data-open={passengers}>
                                                    <span onClick={() => setPassengers(!passengers)}>
                                                    مسافران
                                                    </span>

                                                    <div data-activate={passengers} className={styles.homeHeaderPassengers}>
                                                        <div className={styles.homeHeaderPassengersItem}>
                                                            <div>
                                                                <h2>
                                                                        بزرگسال
                                                                </h2>
                                                                <p>
                                                                        بزرگتر از 12 سال
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <button
                                                                    className={styles.homeHeaderPassengersItemButton}
                                                                    onClick={() => setAdultCount((adultCount + childCount + infantCount >= 9) ? adultCount : adultCount + 1)}
                                                                    data-direction='right'
                                                                    data-disabled={adultCount + childCount + infantCount >= 9}
                                                                >
                                                                    <Plus />
                                                                </button>

                                                                <button className={styles.homeHeaderPassengersItemButton}>
                                                                    {adultCount}
                                                                </button>

                                                                <button
                                                                    className={styles.homeHeaderPassengersItemButton}
                                                                    onClick={() => setAdultCount(adultCount <= 1 ? 1 : adultCount - 1)}
                                                                    data-direction='left'
                                                                    data-disabled={adultCount <= 1}
                                                                >
                                                                    <Minus />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className={styles.homeHeaderPassengersItem}>
                                                            <div>
                                                                <h2>
                                                                        کودک
                                                                </h2>
                                                                <p>
                                                                        بین ۲ الی 12 سال
                                                                </p>
                                                            </div>

                                                            <div>
                                                                <button
                                                                    className={styles.homeHeaderPassengersItemButton}
                                                                    onClick={() => setChildCount((adultCount + childCount + infantCount >= 9) ? childCount : childCount + 1)}
                                                                    data-direction='right'
                                                                    data-disabled={adultCount + childCount + infantCount >= 9}
                                                                >
                                                                    <Plus />
                                                                </button>

                                                                <button className={styles.homeHeaderPassengersItemButton}>
                                                                    {childCount}
                                                                </button>

                                                                <button
                                                                    className={styles.homeHeaderPassengersItemButton}
                                                                    onClick={() => setChildCount(childCount <= 0 ? 0 : childCount - 1)}
                                                                    data-direction='left'
                                                                    data-disabled={childCount <= 0}
                                                                >
                                                                    <Minus />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className={styles.homeHeaderPassengersItem}>
                                                            <div>
                                                                <h2>
                                                                        نوزاد
                                                                </h2>
                                                                <p>
                                                                        کوچکتر از 2 سال
                                                                </p>
                                                            </div>

                                                            <div>
                                                                <button
                                                                    className={styles.homeHeaderPassengersItemButton}
                                                                    onClick={() => setInfantCount((adultCount + childCount + infantCount >= 9) ? infantCount : infantCount + 1)}
                                                                    data-direction='right'
                                                                    data-disabled={adultCount + childCount + infantCount >= 9}
                                                                >
                                                                    <Plus />
                                                                </button>

                                                                <button className={styles.homeHeaderPassengersItemButton}>
                                                                    {infantCount}
                                                                </button>

                                                                <button
                                                                    className={styles.homeHeaderPassengersItemButton}
                                                                    onClick={() => setInfantCount(infantCount <= 0 ? 0 : infantCount - 1)}
                                                                    data-direction='left'
                                                                    data-disabled={infantCount <= 0}
                                                                >
                                                                    <Minus />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.homeHeaderImageContentItem} data-direction='column'>
                                                <span data-activate={exchangeActivate} onClick={ onClickExchange }>
                                                    <Exchange />
                                                </span>

                                                <div className={styles.homeHeaderImageContentItemInput} ref={(element: any) =>
                                                {
                                                    originParentRef.current[0] = element;
                                                }} data-activate={originActivate} data-error={originError}>
                                                    <label htmlFor='origin'>
                                                        <label htmlFor='origin'>
                                                            <label htmlFor='origin'>
                                                                    مبدا (شهر)
                                                            </label>
                                                            <input
                                                                type='text'
                                                                placeholder=''
                                                                autoComplete='false'
                                                                spellCheck='false'
                                                                name='origin'
                                                                id='origin'
                                                                onFocus={ onFocusOrigin }
                                                                onChange={ onChangeOrigin }
                                                                value={ origin }
                                                            />
                                                        </label>
                                                        <Plane2 />
                                                    </label>

                                                    <div data-activate={originActivate} data-options={true}>
                                                        <ul>
                                                            {
                                                                data?.cities?.map((city: any) => (
                                                                    <li
                                                                        key={city + '-' + nanoid()}
                                                                        data-name={city}
                                                                        data-plane={true}
                                                                        data-disable={!!(origin && (!city?.split(' - ')[0]?.toLowerCase().startsWith(origin?.split(' - ')[0]?.toLowerCase()) && !city?.split(' - ')[1]?.toLowerCase().startsWith(origin?.split(' - ')[0]?.toLowerCase())))}
                                                                        data-activate={origin === city}
                                                                        onClick={() => handleOrigin(city)}
                                                                    >
                                                                        <Plane />
                                                                        {city}
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className={styles.homeHeaderImageContentItemInput} ref={(element: any) =>
                                                {
                                                    destinationParentRef.current[0] = element;
                                                }} data-activate={destinationActivate} data-error={destinationError}>
                                                    <label htmlFor='destination'>
                                                        <label htmlFor='destination'>
                                                            <label htmlFor='destination'>
                                                                    مقصد (شهر)
                                                            </label>
                                                            <input
                                                                type='text'
                                                                placeholder=''
                                                                autoComplete='false'
                                                                spellCheck='false'
                                                                name='destination'
                                                                id='destination'
                                                                onFocus={ onFocusDestination }
                                                                onChange={ onChangeDestination }
                                                                value={ destination }
                                                            />
                                                        </label>
                                                        <Plane3 />
                                                    </label>

                                                    <div data-activate={destinationActivate} data-options={true}>
                                                        <ul>
                                                            {
                                                                data?.cities?.map((city: any) => (
                                                                    <li
                                                                        key={city + '_' + nanoid()}
                                                                        data-name={city}
                                                                        data-plane={true}
                                                                        data-disable={!!(destination && (!city?.split(' - ')[0]?.toLowerCase().startsWith(destination?.split(' - ')[0]?.toLowerCase()) && !city?.split(' - ')[1]?.toLowerCase().startsWith(destination?.split(' - ')[0]?.toLowerCase())))}
                                                                        data-activate={destination === city}
                                                                        onClick={() => handleDestination(city)}
                                                                    >
                                                                        <Plane />
                                                                        {city}
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div data-date={true} data-date_pickers={!unilateral} className={styles.homeHeaderImageContentItem}>
                                                <div data-type='date' data-activate={departureDatePicker} ref={(element: any) =>
                                                {
                                                    departureDatePickerParentRef.current[0] = element;
                                                }}>
                                                    <label onClick={() => setDepartureDatePicker(true)}>
                                                        <label>
                                                                تاریخ رفت
                                                        </label>

                                                        <span>
                                                            {departureDate?.format(language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                                        </span>
                                                    </label>

                                                    <DatePicker
                                                        title='تاریخ رفت'
                                                        language={language}
                                                        setLanguage={setLanguage}
                                                        defaultValue={false}
                                                        value={departureDate}
                                                        setValue={setDepartureDate}
                                                        activate={departureDatePicker}
                                                        setActivate={setDepartureDatePicker}
                                                    />
                                                </div>
                                                <div data-type='date' data-activate={returnDatePicker} data-deactivate={unilateral} ref={(element: any) =>
                                                {
                                                    returnDatePickerParentRef.current[0] = element;
                                                }}>
                                                    <label onClick={() => setReturnDatePicker(true)}>
                                                        <label>
                                                                تاریخ برگشت
                                                        </label>

                                                        <span>
                                                            {returnDate?.format(language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                                        </span>
                                                    </label>

                                                    <DatePicker
                                                        title='تاریخ برگشت'
                                                        language={language}
                                                        setLanguage={setLanguage}
                                                        defaultValue={false}
                                                        value={returnDate}
                                                        setValue={setReturnDate}
                                                        activate={returnDatePicker}
                                                        setActivate={setReturnDatePicker}
                                                    />
                                                </div>
                                            </div>

                                            <button>
                                                    یافتن بلیط
                                            </button>
                                        </div>
                                        : null
                                }

                                {
                                    page === 'hotel-reserve'
                                        ? <div className={styles.homeHeaderImageContentList} data-activate={page === 'hotel-reserve'}>
                                            <div className={styles.homeHeaderImageContentItem}>
                                                <p>
                                                    <input type='radio' id='domestic' onChange={() =>
                                                    {
                                                        setInternational(false);
                                                    }} checked={!international}/>
                                                    <label htmlFor='domestic'>
                                                            داخلی
                                                    </label>
                                                </p>
                                                <p>
                                                    <input type='radio' id='international' onChange={() =>
                                                    {
                                                        setInternational(true);
                                                    }} checked={international}/>
                                                    <label htmlFor='international'>
                                                            خارجی
                                                    </label>
                                                </p>
                                            </div>

                                            <div className={styles.homeHeaderImageContentItem} data-direction='column'>
                                                <div className={styles.homeHeaderImageContentItemInput} ref={(element: any) =>
                                                {
                                                    originParentRef.current[1] = element;
                                                }} data-activate={originActivate} data-error={originError}>
                                                    <label htmlFor='origin'>
                                                        <label htmlFor='origin'>
                                                            <label htmlFor='origin'>
                                                                    مبدا (شهر)
                                                            </label>
                                                            <input
                                                                type='text'
                                                                placeholder=''
                                                                autoComplete='false'
                                                                spellCheck='false'
                                                                name='origin'
                                                                id='origin'
                                                                onFocus={ onFocusOrigin }
                                                                onChange={ onChangeOrigin }
                                                                value={ origin }
                                                            />
                                                        </label>
                                                        <Pin />
                                                    </label>

                                                    <div data-activate={originActivate} data-options={true}>
                                                        <ul>
                                                            {
                                                                data?.cities?.map((city: any) => (
                                                                    <li
                                                                        key={city + '--' + nanoid()}
                                                                        data-name={city}
                                                                        data-disable={!!(origin && (!city?.split(' - ')[0]?.toLowerCase().startsWith(origin?.split(' - ')[0]?.toLowerCase()) && !city?.split(' - ')[1]?.toLowerCase().startsWith(origin?.split(' - ')[0]?.toLowerCase())))}
                                                                        data-activate={origin === city}
                                                                        onClick={() => handleOrigin(city)}
                                                                    >
                                                                        <Pin />
                                                                        {city}
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div data-activate={hotelRoomsActivate} className={styles.homeHeaderImageContentItemInput} ref={hotelRoomsRef}>
                                                    <label onClick={() => setHotelRoomsActivate(!hotelRoomsActivate)}>
                                                        <label>
                                                            <label>
                                                                    مسافرین
                                                            </label>

                                                            <span>
                                                                <p>
                                                                    {sum(hotelRooms, 'adultCount')} بزرگسال
                                                                </p>
                                                                <i> - </i>
                                                                <p>
                                                                    {sum(hotelRooms, 'childCount')} کودک
                                                                </p>
                                                                <i> - </i>
                                                                <p>
                                                                    {hotelRooms?.length} اتاق
                                                                </p>
                                                            </span>
                                                        </label>
                                                    </label>

                                                    <div data-activate={hotelRoomsActivate} data-options='hotel_rooms_options'>
                                                        <ul>
                                                            {
                                                                hotelRooms?.map((hotelRoom: any, index: any) =>
                                                                    (
                                                                        <li key={hotelRoom?.id}>
                                                                            <header>
                                                                                <span>
                                                                                اتاق {(numberToWords(index + 1, { ordinal: true })?.toString()) === 'یکم' ? 'اول' : (numberToWords(index + 1, { ordinal: true })?.toString())}
                                                                                </span>

                                                                                {
                                                                                    hotelRooms?.length > 1
                                                                                        ? <button onClick={(event: any) =>
                                                                                        {
                                                                                            event?.preventDefault(); setHotelRooms(hotelRooms?.filter((hotelRoomV: any) => hotelRoomV?.id !== hotelRoom?.id));
                                                                                        }}>
                                                                                                حذف
                                                                                            <Trash/>
                                                                                        </button>
                                                                                        : null
                                                                                }
                                                                            </header>

                                                                            <div className={styles.homeHeaderPassengersItem}>
                                                                                <div>
                                                                                    <h2>
                                                                                            بزرگسال
                                                                                    </h2>
                                                                                    <p>
                                                                                            بزرگتر از 12 سال
                                                                                    </p>
                                                                                </div>
                                                                                <div>
                                                                                    <button
                                                                                        className={styles.homeHeaderPassengersItemButton}
                                                                                        onClick={(event: any) =>
                                                                                        {
                                                                                            event?.preventDefault();

                                                                                            const hotelRoomsV: any = hotelRooms;

                                                                                            for (let i = 0; i < hotelRoomsV.length; i++)
                                                                                            {
                                                                                                if (hotelRoomsV[i].id === hotelRoom?.id)
                                                                                                {
                                                                                                    if (hotelRoom?.adultCount <= 13)

                                                                                                        hotelRoomsV[i].adultCount = hotelRoom?.adultCount + 1;

                                                                                                    break;
                                                                                                }
                                                                                            }

                                                                                            setHotelRooms(() => [...hotelRoomsV]);
                                                                                        }}
                                                                                        data-direction='right'
                                                                                        data-disabled={hotelRoom?.adultCount >= 14}
                                                                                    >
                                                                                        <Plus/>
                                                                                    </button>
                                                                                    <button className={styles.homeHeaderPassengersItemButton}>
                                                                                        {hotelRoom?.adultCount}
                                                                                    </button>
                                                                                    <button
                                                                                        className={styles.homeHeaderPassengersItemButton}
                                                                                        onClick={(event: any) =>
                                                                                        {
                                                                                            event?.preventDefault();

                                                                                            const hotelRoomsV: any = hotelRooms;

                                                                                            for (let i = 0; i < hotelRoomsV.length; i++)
                                                                                            {
                                                                                                if (hotelRoomsV[i].id === hotelRoom?.id)
                                                                                                {
                                                                                                    if (hotelRoom?.adultCount > 1)

                                                                                                        hotelRoomsV[i].adultCount = hotelRoom?.adultCount - 1;

                                                                                                    break;
                                                                                                }
                                                                                            }

                                                                                            setHotelRooms(() => [...hotelRoomsV]);
                                                                                        }}
                                                                                        data-direction='left'
                                                                                        data-disabled={hotelRoom?.adultCount <= 1}
                                                                                    >
                                                                                        <Minus/>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                            <div className={styles.homeHeaderPassengersItem}>
                                                                                <div>
                                                                                    <h2>
                                                                                            کودک
                                                                                    </h2>
                                                                                    <p>
                                                                                            تا 12 سال
                                                                                    </p>
                                                                                </div>
                                                                                <div>
                                                                                    <button
                                                                                        className={styles.homeHeaderPassengersItemButton}
                                                                                        onClick={(event: any) =>
                                                                                        {
                                                                                            event?.preventDefault();

                                                                                            const hotelRoomsV: any = hotelRooms;

                                                                                            for (let i = 0; i < hotelRoomsV.length; i++)
                                                                                            {
                                                                                                if (hotelRoomsV[i].id === hotelRoom?.id)
                                                                                                {
                                                                                                    if (hotelRoom?.childCount <= 5)

                                                                                                        hotelRoomsV[i].childCount = hotelRoom?.childCount + 1;

                                                                                                    break;
                                                                                                }
                                                                                            }

                                                                                            setHotelRooms(() => [...hotelRoomsV]);
                                                                                        }}
                                                                                        data-direction='right'
                                                                                        data-disabled={hotelRoom?.childCount >= 6}
                                                                                    >
                                                                                        <Plus/>
                                                                                    </button>
                                                                                    <button className={styles.homeHeaderPassengersItemButton}>
                                                                                        {hotelRoom?.childCount}
                                                                                    </button>
                                                                                    <button
                                                                                        className={styles.homeHeaderPassengersItemButton}
                                                                                        onClick={(event: any) =>
                                                                                        {
                                                                                            event?.preventDefault();

                                                                                            const hotelRoomsV: any = hotelRooms;

                                                                                            for (let i = 0; i < hotelRoomsV.length; i++)
                                                                                            {
                                                                                                if (hotelRoomsV[i].id === hotelRoom?.id)
                                                                                                {
                                                                                                    if (hotelRoom?.childCount > 0)
                                                                                                        hotelRoomsV[i].childCount = hotelRoom?.childCount - 1;

                                                                                                    break;
                                                                                                }
                                                                                            }

                                                                                            setHotelRooms(() => [...hotelRoomsV]);
                                                                                        }}
                                                                                        data-direction='left'
                                                                                        data-disabled={hotelRoom?.childCount <= 0}
                                                                                    >
                                                                                        <Minus/>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    ))
                                                            }
                                                        </ul>

                                                        {
                                                            !(hotelRooms?.length >= 4)
                                                                ? <button onClick={() => setHotelRooms((oldArray: any) => [...oldArray, { id: nanoid(), adultCount: 1, childCount: 0 }])}>
                                                                    <PlusCircle />
                                                                        افزودن اتاق
                                                                </button>
                                                                : null
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div data-date={true} data-date_pickers={true} className={styles.homeHeaderImageContentItem}>
                                                <div data-type='date' data-activate={departureDatePicker} ref={(element: any) =>
                                                {
                                                    departureDatePickerParentRef.current[1] = element;
                                                }}>
                                                    <label onClick={() => setDepartureDatePicker(true)}>
                                                        <label>
                                                                تاریخ ورود
                                                        </label>

                                                        <span>
                                                            {departureDate?.format(language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                                        </span>
                                                    </label>

                                                    <DatePicker
                                                        title='تاریخ ورود'
                                                        language={language}
                                                        setLanguage={setLanguage}
                                                        defaultValue={false}
                                                        value={departureDate}
                                                        setValue={setDepartureDate}
                                                        activate={departureDatePicker}
                                                        setActivate={setDepartureDatePicker}
                                                    />
                                                </div>

                                                <div data-type='date' data-activate={returnDatePicker} ref={(element: any) =>
                                                {
                                                    returnDatePickerParentRef.current[1] = element;
                                                }}>
                                                    <label onClick={() => setReturnDatePicker(true)}>
                                                        <label>
                                                                تاریخ خروج
                                                        </label>

                                                        <span>
                                                            {returnDate?.format(language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                                        </span>
                                                    </label>

                                                    <DatePicker
                                                        title='تاریخ خروج'
                                                        language={language}
                                                        setLanguage={setLanguage}
                                                        defaultValue={false}
                                                        value={returnDate}
                                                        setValue={setReturnDate}
                                                        activate={returnDatePicker}
                                                        setActivate={setReturnDatePicker}
                                                    />
                                                </div>
                                            </div>

                                            <button>
                                                    یافتن بلیط
                                            </button>
                                        </div>
                                        : null
                                }

                                {
                                    page === 'tour-reserve'
                                        ? <div className={styles.homeHeaderImageContentList} data-activate={page === 'tour-reserve'}>
                                            <div className={styles.homeHeaderImageContentItem}>
                                                <p>
                                                    <input type='radio' id='domestic' onChange={() => setInternational(false)} checked={!international}/>
                                                    <label htmlFor='domestic'>
                                                            داخلی
                                                    </label>
                                                </p>
                                                <p>
                                                    <input type='radio' id='international' onChange={() => setInternational(true)} checked={international}/>
                                                    <label htmlFor='international'>
                                                            خارجی
                                                    </label>
                                                </p>
                                                <div data-options={true} data-open={passengers} ref={(element: any) =>
                                                {
                                                    passengersParentRef.current[1] = element;
                                                }}>
                                                    <span onClick={() => setPassengers(!passengers)}>
                                            مسافران
                                                    </span>

                                                    <div data-activate={passengers} className={styles.homeHeaderPassengers}>
                                                        <div className={styles.homeHeaderPassengersItem}>
                                                            <div>
                                                                <h2>
                                                                        بزرگسال
                                                                </h2>
                                                                <p>
                                                                        بزرگتر از 12 سال
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <button
                                                                    className={styles.homeHeaderPassengersItemButton}
                                                                    onClick={() => setAdultCount((adultCount + childCount + infantCount >= 9) ? adultCount : adultCount + 1)}
                                                                    data-direction='right'
                                                                    data-disabled={adultCount + childCount + infantCount >= 9}
                                                                >
                                                                    <Plus />
                                                                </button>
                                                                <button className={styles.homeHeaderPassengersItemButton}>
                                                                    {adultCount}
                                                                </button>
                                                                <button
                                                                    className={styles.homeHeaderPassengersItemButton}
                                                                    onClick={() => setAdultCount(adultCount <= 1 ? 1 : adultCount - 1)}
                                                                    data-direction='left'
                                                                    data-disabled={adultCount <= 1}
                                                                >
                                                                    <Minus />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className={styles.homeHeaderPassengersItem}>
                                                            <div>
                                                                <h2>
                                                                        کودک
                                                                </h2>
                                                                <p>
                                                                        بین ۲ الی 12 سال
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <button
                                                                    className={styles.homeHeaderPassengersItemButton}
                                                                    onClick={() => setChildCount((adultCount + childCount + infantCount >= 9) ? childCount : childCount + 1)}
                                                                    data-direction='right'
                                                                    data-disabled={adultCount + childCount + infantCount >= 9}
                                                                >
                                                                    <Plus />
                                                                </button>
                                                                <button className={styles.homeHeaderPassengersItemButton}>
                                                                    {childCount}
                                                                </button>
                                                                <button
                                                                    className={styles.homeHeaderPassengersItemButton}
                                                                    onClick={() => setChildCount(childCount <= 0 ? 0 : childCount - 1)}
                                                                    data-direction='left'
                                                                    data-disabled={childCount <= 0}
                                                                >
                                                                    <Minus />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className={styles.homeHeaderPassengersItem}>
                                                            <div>
                                                                <h2>
                                                                        نوزاد
                                                                </h2>
                                                                <p>
                                                                        کوچکتر از 2 سال
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <button
                                                                    className={styles.homeHeaderPassengersItemButton}
                                                                    onClick={() => setInfantCount((adultCount + childCount + infantCount >= 9) ? infantCount : infantCount + 1)}
                                                                    data-direction='right'
                                                                    data-disabled={adultCount + childCount + infantCount >= 9}
                                                                >
                                                                    <Plus />
                                                                </button>
                                                                <button className={styles.homeHeaderPassengersItemButton}>
                                                                    {infantCount}
                                                                </button>
                                                                <button
                                                                    className={styles.homeHeaderPassengersItemButton}
                                                                    onClick={() => setInfantCount(infantCount <= 0 ? 0 : infantCount - 1)}
                                                                    data-direction='left'
                                                                    data-disabled={infantCount <= 0}
                                                                >
                                                                    <Minus />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.homeHeaderImageContentItem} data-direction='column'>
                                                <div className={styles.homeHeaderImageContentItemInput} ref={(element: any) =>
                                                {
                                                    originParentRef.current[2] = element;
                                                }} data-activate={originActivate} data-error={originError}>
                                                    <label htmlFor='origin'>
                                                        <label htmlFor='origin'>
                                                            <label htmlFor='origin'>
                                                                    مبدا (شهر)
                                                            </label>
                                                            <input
                                                                type='text'
                                                                placeholder=''
                                                                autoComplete='false'
                                                                spellCheck='false'
                                                                name='origin'
                                                                id='origin'
                                                                onFocus={ onFocusOrigin }
                                                                onChange={ onChangeOrigin }
                                                                value={ origin }
                                                            />
                                                        </label>
                                                        <Pin />
                                                    </label>

                                                    <div data-activate={originActivate} data-options={true}>
                                                        <ul>
                                                            {
                                                                data?.cities?.map((city: any) => (
                                                                    <li
                                                                        key={city + '--' + nanoid()}
                                                                        data-name={city}
                                                                        data-disable={!!(origin && (!city?.split(' - ')[0]?.toLowerCase().startsWith(origin?.split(' - ')[0]?.toLowerCase()) && !city?.split(' - ')[1]?.toLowerCase().startsWith(origin?.split(' - ')[0]?.toLowerCase())))}
                                                                        data-activate={origin === city}
                                                                        onClick={() => handleOrigin(city)}
                                                                    >
                                                                        <Pin />
                                                                        {city}
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className={styles.homeHeaderImageContentItemInput} ref={(element: any) =>
                                                {
                                                    destinationParentRef.current[1] = element;
                                                }} data-activate={destinationActivate} data-error={destinationError}>
                                                    <label htmlFor='destination'>
                                                        <label htmlFor='destination'>
                                                            <label htmlFor='destination'>
                                                                    مقصد (شهر)
                                                            </label>
                                                            <input
                                                                type='text'
                                                                placeholder=''
                                                                autoComplete='false'
                                                                spellCheck='false'
                                                                name='destination'
                                                                id='destination'
                                                                onFocus={ onFocusDestination }
                                                                onChange={ onChangeDestination }
                                                                value={ destination }
                                                            />
                                                        </label>
                                                        <Pin />
                                                    </label>

                                                    <div data-activate={destinationActivate} data-options={true}>
                                                        <ul>
                                                            {
                                                                data?.cities?.map((city: any) => (
                                                                    <li
                                                                        key={city + '__' + nanoid()}
                                                                        data-name={city}
                                                                        data-disable={!!(destination && (!city?.split(' - ')[0]?.toLowerCase().startsWith(destination?.split(' - ')[0]?.toLowerCase()) && !city?.split(' - ')[1]?.toLowerCase().startsWith(destination?.split(' - ')[0]?.toLowerCase())))}
                                                                        data-activate={destination === city}
                                                                        onClick={() => handleDestination(city)}
                                                                    >
                                                                        <Pin />
                                                                        {city}
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div data-date={true} data-date_pickers={true} className={styles.homeHeaderImageContentItem}>
                                                <div data-type='date' data-activate={departureDatePicker} ref={(element: any) =>
                                                {
                                                    departureDatePickerParentRef.current[2] = element;
                                                }}>
                                                    <label onClick={() => setDepartureDatePicker(true)}>
                                                        <label>
                                                                تاریخ رفت
                                                        </label>

                                                        <span>
                                                            {departureDate?.format(language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                                        </span>
                                                    </label>

                                                    <DatePicker
                                                        title='تاریخ رفت'
                                                        language={language}
                                                        setLanguage={setLanguage}
                                                        defaultValue={false}
                                                        value={departureDate}
                                                        setValue={setDepartureDate}
                                                        activate={departureDatePicker}
                                                        setActivate={setDepartureDatePicker}
                                                    />
                                                </div>

                                                <div data-type='date' data-activate={returnDatePicker} ref={(element: any) =>
                                                {
                                                    returnDatePickerParentRef.current[2] = element;
                                                }}>
                                                    <label onClick={() => setReturnDatePicker(true)}>
                                                        <label>
                                                                تاریخ برگشت
                                                        </label>

                                                        <span>
                                                            {returnDate?.format(language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                                        </span>
                                                    </label>

                                                    <DatePicker
                                                        title='تاریخ برگشت'
                                                        language={language}
                                                        setLanguage={setLanguage}
                                                        defaultValue={false}
                                                        value={returnDate}
                                                        setValue={setReturnDate}
                                                        activate={returnDatePicker}
                                                        setActivate={setReturnDatePicker}
                                                    />
                                                </div>
                                            </div>

                                            <button>
                                                    یافتن بلیط
                                            </button>
                                        </div>
                                        : null
                                }

                                {
                                    page === 'train-ticket'
                                        ? <div className={styles.homeHeaderImageContentList} data-activate={page === 'train-ticket'}>
                                            <div className={styles.homeHeaderImageContentItem}>
                                                <div data-options={true} ref={(element: any) =>
                                                {
                                                    exclusiveParentRef.current[0] = element;
                                                }} data-open={exclusiveActivate} onClick={() =>
                                                {
                                                    setExclusiveActivate(!exclusiveActivate);
                                                }}>
                                                    {
                                                        exclusive
                                                            ? <span>
                                                    دربست
                                                            </span>
                                                            : <span>
                                                    غیر دربست
                                                            </span>
                                                    }
                                                    {
                                                        exclusiveActivate
                                                            ? <ul>
                                                                <li data-activate={exclusive} onClick={() => setExclusive(true)}>
                                                                        دربست
                                                                </li>

                                                                <li data-activate={!exclusive} onClick={() => setExclusive(false)}>
                                                                        غیر دربست
                                                                </li>
                                                            </ul>
                                                            : null
                                                    }
                                                </div>
                                                <div data-options={true} ref={(element: any) =>
                                                {
                                                    passengersTypeParentRef.current[0] = element;
                                                }} data-open={passengersTypeActivate} onClick={() =>
                                                {
                                                    setPassengersTypeActivate(!passengersTypeActivate);
                                                }}>
                                                    {
                                                        passengersType === 'regular'
                                                            ? <span>
                                                    مسافرین عادی
                                                            </span>
                                                            : passengersType === 'mens'
                                                                ? <span>
                                                        ویژه برادران
                                                                </span>
                                                                : <span>
                                                        ویژه خواهران
                                                                </span>
                                                    }
                                                    {
                                                        passengersTypeActivate
                                                            ? <ul>
                                                                <li data-activate={passengersType === 'regular'} onClick={() => setPassengersType('regular')}>
                                                                        مسافرین عادی
                                                                </li>

                                                                <li data-activate={passengersType === 'men'} onClick={() => setPassengersType('men')}>
                                                                        ویژه برادران
                                                                </li>

                                                                <li data-activate={passengersType === 'women'} onClick={() => setPassengersType('women')}>
                                                                        ویژه خواهران
                                                                </li>
                                                            </ul>
                                                            : null
                                                    }
                                                </div>
                                                <div data-options={true} data-open={passengers} ref={(element: any) =>
                                                {
                                                    passengersParentRef.current[2] = element;
                                                }}>
                                                    <span onClick={() => setPassengers(!passengers)}>
                                            مسافران
                                                    </span>

                                                    <div data-activate={passengers} className={styles.homeHeaderPassengers}>
                                                        <div className={styles.homeHeaderPassengersItem}>
                                                            <div>
                                                                <h2>
                                                                        بزرگسال
                                                                </h2>
                                                                <p>
                                                                        بزرگتر از 12 سال
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <button
                                                                    className={styles.homeHeaderPassengersItemButton}
                                                                    onClick={() => setAdultCount((adultCount + childCount + infantCount >= 9) ? adultCount : adultCount + 1)}
                                                                    data-direction='right'
                                                                    data-disabled={adultCount + childCount + infantCount >= 9}
                                                                >
                                                                    <Plus />
                                                                </button>
                                                                <button className={styles.homeHeaderPassengersItemButton}>
                                                                    {adultCount}
                                                                </button>
                                                                <button
                                                                    className={styles.homeHeaderPassengersItemButton}
                                                                    onClick={() => setAdultCount(adultCount <= 1 ? 1 : adultCount - 1)}
                                                                    data-direction='left'
                                                                    data-disabled={adultCount <= 1}
                                                                >
                                                                    <Minus />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className={styles.homeHeaderPassengersItem}>
                                                            <div>
                                                                <h2>
                                                                        کودک
                                                                </h2>
                                                                <p>
                                                                        بین ۲ الی 12 سال
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <button
                                                                    className={styles.homeHeaderPassengersItemButton}
                                                                    onClick={() => setChildCount((adultCount + childCount + infantCount >= 9) ? childCount : childCount + 1)}
                                                                    data-direction='right'
                                                                    data-disabled={adultCount + childCount + infantCount >= 9}
                                                                >
                                                                    <Plus />
                                                                </button>
                                                                <button className={styles.homeHeaderPassengersItemButton}>
                                                                    {childCount}
                                                                </button>
                                                                <button
                                                                    className={styles.homeHeaderPassengersItemButton}
                                                                    onClick={() => setChildCount(childCount <= 0 ? 0 : childCount - 1)}
                                                                    data-direction='left'
                                                                    data-disabled={childCount <= 0}
                                                                >
                                                                    <Minus />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className={styles.homeHeaderPassengersItem}>
                                                            <div>
                                                                <h2>
                                                                        نوزاد
                                                                </h2>
                                                                <p>
                                                                        کوچکتر از 2 سال
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <button
                                                                    className={styles.homeHeaderPassengersItemButton}
                                                                    onClick={() => setInfantCount((adultCount + childCount + infantCount >= 9) ? infantCount : infantCount + 1)}
                                                                    data-direction='right'
                                                                    data-disabled={adultCount + childCount + infantCount >= 9}
                                                                >
                                                                    <Plus />
                                                                </button>
                                                                <button className={styles.homeHeaderPassengersItemButton}>
                                                                    {infantCount}
                                                                </button>
                                                                <button
                                                                    className={styles.homeHeaderPassengersItemButton}
                                                                    onClick={() => setInfantCount(infantCount <= 0 ? 0 : infantCount - 1)}
                                                                    data-direction='left'
                                                                    data-disabled={infantCount <= 0}
                                                                >
                                                                    <Minus />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-options={true} ref={(element: any) =>
                                                {
                                                    unilateralParentRef.current[1] = element;
                                                }} data-open={unilateralActivate} onClick={() =>
                                                {
                                                    setUnilateralActivate(!unilateralActivate);
                                                }}>
                                                    {
                                                        unilateral
                                                            ? <span>
                                                    یکطرفه
                                                            </span>
                                                            : <span>
                                                    رفت و برگشت
                                                            </span>
                                                    }
                                                    {
                                                        unilateralActivate
                                                            ? <ul>
                                                                <li data-activate={unilateral} onClick={() => setUnilateral(true)}>
                                                                        یکطرفه
                                                                </li>

                                                                <li data-activate={!unilateral} onClick={() => setUnilateral(false)}>
                                                                        رفت و برگشت
                                                                </li>
                                                            </ul>
                                                            : null
                                                    }
                                                </div>
                                            </div>

                                            <div className={styles.homeHeaderImageContentItem} data-direction='column'>
                                                <div className={styles.homeHeaderImageContentItemInput} ref={(element: any) =>
                                                {
                                                    originParentRef.current[3] = element;
                                                }} data-activate={originActivate} data-error={originError}>
                                                    <label htmlFor='origin'>
                                                        <label htmlFor='origin'>
                                                            <label htmlFor='origin'>
                                                                    مبدا (شهر)
                                                            </label>
                                                            <input
                                                                type='text'
                                                                placeholder=''
                                                                autoComplete='false'
                                                                spellCheck='false'
                                                                name='origin'
                                                                id='origin'
                                                                onFocus={ onFocusOrigin }
                                                                onChange={ onChangeOrigin }
                                                                value={ origin }
                                                            />
                                                        </label>
                                                        <Pin />
                                                    </label>

                                                    <div data-activate={originActivate} data-options={true}>
                                                        <ul>
                                                            {
                                                                data?.cities?.map((city: any) => (
                                                                    <li
                                                                        key={city + '--' + nanoid()}
                                                                        data-name={city}
                                                                        data-disable={!!(origin && (!city?.split(' - ')[0]?.toLowerCase().startsWith(origin?.split(' - ')[0]?.toLowerCase()) && !city?.split(' - ')[1]?.toLowerCase().startsWith(origin?.split(' - ')[0]?.toLowerCase())))}
                                                                        data-activate={origin === city}
                                                                        onClick={() => handleOrigin(city)}
                                                                    >
                                                                        <Pin />
                                                                        {city}
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className={styles.homeHeaderImageContentItemInput} ref={(element: any) =>
                                                {
                                                    destinationParentRef.current[2] = element;
                                                }} data-activate={destinationActivate} data-error={destinationError}>
                                                    <label htmlFor='destination'>
                                                        <label htmlFor='destination'>
                                                            <label htmlFor='destination'>
                                                                    مقصد (شهر)
                                                            </label>
                                                            <input
                                                                type='text'
                                                                placeholder=''
                                                                autoComplete='false'
                                                                spellCheck='false'
                                                                name='destination'
                                                                id='destination'
                                                                onFocus={ onFocusDestination }
                                                                onChange={ onChangeDestination }
                                                                value={ destination }
                                                            />
                                                        </label>
                                                        <Pin />
                                                    </label>

                                                    <div data-activate={destinationActivate} data-options={true}>
                                                        <ul>
                                                            {
                                                                data?.cities?.map((city: any) => (
                                                                    <li
                                                                        key={city + '__' + nanoid()}
                                                                        data-name={city}
                                                                        data-disable={!!(destination && (!city?.split(' - ')[0]?.toLowerCase().startsWith(destination?.split(' - ')[0]?.toLowerCase()) && !city?.split(' - ')[1]?.toLowerCase().startsWith(destination?.split(' - ')[0]?.toLowerCase())))}
                                                                        data-activate={destination === city}
                                                                        onClick={() => handleDestination(city)}
                                                                    >
                                                                        <Pin />
                                                                        {city}
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div data-date={true} data-date_pickers={!unilateral} className={styles.homeHeaderImageContentItem}>
                                                <div data-type='date' data-activate={departureDatePicker} ref={(element: any) =>
                                                {
                                                    departureDatePickerParentRef.current[3] = element;
                                                }}>
                                                    <label onClick={() => setDepartureDatePicker(true)}>
                                                        <label>
                                                                تاریخ رفت
                                                        </label>

                                                        <span>
                                                            {departureDate?.format(language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                                        </span>
                                                    </label>

                                                    <DatePicker
                                                        title='تاریخ رفت'
                                                        language={language}
                                                        setLanguage={setLanguage}
                                                        defaultValue={false}
                                                        value={departureDate}
                                                        setValue={setDepartureDate}
                                                        activate={departureDatePicker}
                                                        setActivate={setDepartureDatePicker}
                                                    />
                                                </div>

                                                <div data-type='date' data-activate={returnDatePicker} data-deactivate={unilateral} ref={(element: any) =>
                                                {
                                                    returnDatePickerParentRef.current[3] = element;
                                                }}>
                                                    <label onClick={() => setReturnDatePicker(true)}>
                                                        <label>
                                                                تاریخ برگشت
                                                        </label>

                                                        <span>
                                                            {returnDate?.format(language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                                        </span>
                                                    </label>

                                                    <DatePicker
                                                        title='تاریخ برگشت'
                                                        language={language}
                                                        setLanguage={setLanguage}
                                                        defaultValue={false}
                                                        value={returnDate}
                                                        setValue={setReturnDate}
                                                        activate={returnDatePicker}
                                                        setActivate={setReturnDatePicker}
                                                    />
                                                </div>
                                            </div>

                                            <button>
                                                    یافتن بلیط
                                            </button>
                                        </div>
                                        : null
                                }

                                {
                                    page === 'bus-ticket'
                                        ? <div className={styles.homeHeaderImageContentList} data-activate={page === 'bus-ticket'}>
                                            <div className={styles.homeHeaderImageContentItem}>
                                                <div data-options={true} ref={(element: any) =>
                                                {
                                                    unilateralParentRef.current[2] = element;
                                                }} data-open={unilateralActivate} onClick={() => setUnilateralActivate(!unilateralActivate)}>
                                                    {
                                                        unilateral
                                                            ? <span>
                                                    یکطرفه
                                                            </span>
                                                            : <span>
                                                    رفت و برگشت
                                                            </span>
                                                    }
                                                    {
                                                        unilateralActivate
                                                            ? <ul>
                                                                <li data-activate={unilateral} onClick={() => setUnilateral(true)}>
                                                                        یکطرفه
                                                                </li>

                                                                <li data-activate={!unilateral} onClick={() => setUnilateral(false)}>
                                                                        رفت و برگشت
                                                                </li>
                                                            </ul>
                                                            : null
                                                    }
                                                </div>
                                            </div>

                                            <div className={styles.homeHeaderImageContentItem} data-direction='column'>
                                                <div className={styles.homeHeaderImageContentItemInput} ref={(element: any) =>
                                                {
                                                    originParentRef.current[4] = element;
                                                }} data-activate={originActivate} data-error={originError}>
                                                    <label htmlFor='origin'>
                                                        <label htmlFor='origin'>
                                                            <label htmlFor='origin'>
                                                                    مبدا (شهر - پایانه)
                                                            </label>
                                                            <input
                                                                type='text'
                                                                placeholder=''
                                                                autoComplete='false'
                                                                spellCheck='false'
                                                                name='origin'
                                                                id='origin'
                                                                onFocus={ onFocusOrigin }
                                                                onChange={ onChangeOrigin }
                                                                value={ origin }
                                                            />
                                                        </label>
                                                        <Pin />
                                                    </label>

                                                    <div data-activate={originActivate} data-options={true}>
                                                        <ul>
                                                            {
                                                                data?.cities?.map((city: any) => (
                                                                    <li
                                                                        key={city + '--' + nanoid()}
                                                                        data-name={city}
                                                                        data-disable={!!(origin && (!city?.split(' - ')[0]?.toLowerCase().startsWith(origin?.split(' - ')[0]?.toLowerCase()) && !city?.split(' - ')[1]?.toLowerCase().startsWith(origin?.split(' - ')[0]?.toLowerCase())))}
                                                                        data-activate={origin === city}
                                                                        onClick={() => handleOrigin(city)}
                                                                    >
                                                                        <Pin />
                                                                        {city}
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className={styles.homeHeaderImageContentItemInput} ref={(element: any) =>
                                                {
                                                    destinationParentRef.current[3] = element;
                                                }} data-activate={destinationActivate} data-error={destinationError}>
                                                    <label htmlFor='destination'>
                                                        <label htmlFor='destination'>
                                                            <label htmlFor='destination'>
                                                                    مقصد (شهر - پایانه)
                                                            </label>
                                                            <input
                                                                type='text'
                                                                placeholder=''
                                                                autoComplete='false'
                                                                spellCheck='false'
                                                                name='destination'
                                                                id='destination'
                                                                onFocus={ onFocusDestination }
                                                                onChange={ onChangeDestination }
                                                                value={ destination }
                                                            />
                                                        </label>
                                                        <Pin />
                                                    </label>

                                                    <div data-activate={destinationActivate} data-options={true}>
                                                        <ul>
                                                            {
                                                                data?.cities?.map((city: any) => (
                                                                    <li
                                                                        key={city + '__' + nanoid()}
                                                                        data-name={city}
                                                                        data-disable={!!(destination && (!city?.split(' - ')[0]?.toLowerCase().startsWith(destination?.split(' - ')[0]?.toLowerCase()) && !city?.split(' - ')[1]?.toLowerCase().startsWith(destination?.split(' - ')[0]?.toLowerCase())))}
                                                                        data-activate={destination === city}
                                                                        onClick={() => handleDestination(city)}
                                                                    >
                                                                        <Pin />
                                                                        {city}
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div data-date={true} data-date_pickers={!unilateral} className={styles.homeHeaderImageContentItem}>
                                                <div data-type='date' data-activate={departureDatePicker} ref={(element: any) =>
                                                {
                                                    departureDatePickerParentRef.current[4] = element;
                                                }}>
                                                    <label onClick={() => setDepartureDatePicker(true)}>
                                                        <label>
                                                                تاریخ رفت
                                                        </label>

                                                        <span>
                                                            {departureDate?.format(language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                                        </span>
                                                    </label>

                                                    <DatePicker
                                                        title='تاریخ رفت'
                                                        language={language}
                                                        setLanguage={setLanguage}
                                                        defaultValue={false}
                                                        value={departureDate}
                                                        setValue={setDepartureDate}
                                                        activate={departureDatePicker}
                                                        setActivate={setDepartureDatePicker}
                                                    />
                                                </div>

                                                <div data-type='date' data-activate={returnDatePicker} data-deactivate={unilateral} ref={(element: any) =>
                                                {
                                                    returnDatePickerParentRef.current[4] = element;
                                                }}>
                                                    <label onClick={() => setReturnDatePicker(true)}>
                                                        <label>
                                                                تاریخ برگشت
                                                        </label>

                                                        <span>
                                                            {returnDate?.format(language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                                        </span>
                                                    </label>

                                                    <DatePicker
                                                        title='تاریخ برگشت'
                                                        language={language}
                                                        setLanguage={setLanguage}
                                                        defaultValue={false}
                                                        value={returnDate}
                                                        setValue={setReturnDate}
                                                        activate={returnDatePicker}
                                                        setActivate={setReturnDatePicker}
                                                    />
                                                </div>
                                            </div>

                                            <button>
                                                    یافتن بلیط
                                            </button>
                                        </div>
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                </header>

                {
                    mobilePage === 'flight-ticket'
                        ? (
                            <div className={styles.homeMobilePopup}>
                                <span />

                                <nav className={styles.homeMobileNavbar}>
                                    <img src={LogoWhite} alt='LogoWhite' />

                                    <Link to='/'>
                                        <Reserve />
                                        پیگیری رزرو
                                    </Link>
                                </nav>

                                <h2 onClick={() => setMobilePage('')}>
                                    <Arrow />
                                    بلیط هواپیما
                                </h2>

                                <form>
                                    <ul>
                                        <li data-activate={!international} onClick={() => setInternational(false)}>
                                            پرواز داخلی
                                        </li>

                                        <li data-activate={international} onClick={() => setInternational(true)}>
                                            پرواز خارجی
                                        </li>
                                    </ul>

                                    <ul>
                                        <li data-activate={!unilateral} onClick={() => setUnilateral(false)}>
                                            <span>
                                                <i />
                                            </span>

                                            <p>
                                                یک طرفه
                                            </p>
                                        </li>

                                        <li data-activate={unilateral} onClick={() => setUnilateral(true)}>
                                            <span>
                                                <i />
                                            </span>

                                            <p>
                                                رفت و برگشت
                                            </p>
                                        </li>
                                    </ul>

                                    <div>
                                        <span>
                                            <Plane2 />
                                            <span />
                                            <i />
                                        </span>

                                        <ul>
                                            <li>
                                                <input
                                                    placeholder='مبدا (شهر)'
                                                    type='text'
                                                />
                                            </li>

                                            <li>
                                                <input
                                                    placeholder='مقصد (شهر)'
                                                    type='text'
                                                />
                                            </li>
                                        </ul>

                                        <i>
                                            <Exchange />
                                        </i>
                                    </div>

                                    <span>
                                        <Calendar />

                                        <h3>
                                            <p>
                                                تاریخ رفت
                                            </p>
                                            <span>
                                                1400/00/00
                                            </span>
                                        </h3>
                                    </span>

                                    {
                                        unilateral
                                            ? (
                                                <span>
                                                    <Calendar />

                                                    <h3>
                                                        <p>
                                                            تاریخ برگشت
                                                        </p>
                                                        <span>
                                                1400/00/00
                                                        </span>
                                                    </h3>
                                                </span>
                                            )
                                            : null
                                    }

                                    <span data-activate={true}>
                                        <UserFill />

                                        <h3>
                                            <p>
                                                مسافرین
                                            </p>
                                            <span>
                                                1400/00/00
                                            </span>
                                        </h3>
                                    </span>

                                    <Link to='/'>
                                        یافتن بلیط
                                    </Link>
                                </form>
                            </div>
                        )
                        : null
                }

                {
                    mobilePage === ''
                        ? (
                            <header className={styles.homeMobileHeader}>
                                <nav className={styles.homeMobileNavbar}>
                                    <img src={LogoWhite} alt='LogoWhite' />

                                    <Link to='/'>
                                        <Reserve />
                                        پیگیری رزرو
                                    </Link>
                                </nav>

                                <h2>
                                    پارسا فیروزی، خوش آمدید
                                </h2>

                                <ul>
                                    <li onClick={() => setMobilePage('flight-ticket')}>
                                        <Plane />

                                        <span>
                                بلیط هواپیما
                                        </span>
                                    </li>

                                    <li onClick={() => setMobilePage('bus-ticket')}>
                                        <Bus />

                                        <span>
                                بلیط اتوبوس
                                        </span>
                                    </li>

                                    <li onClick={() => setMobilePage('train-ticket')}>
                                        <Train />

                                        <span>
                                بلیط قطار
                                        </span>
                                    </li>

                                    <li onClick={() => setMobilePage('hotel-reserve')}>
                                        <Hotel />

                                        <span>
                                رزرو هتل
                                        </span>
                                    </li>

                                    <li onClick={() => setMobilePage('tour-reserve')}>
                                        <Tour />

                                        <span>
                                رزرو تور
                                        </span>
                                    </li>
                                </ul>
                            </header>
                        )
                        : null
                }

                <div className={styles.homeMobileProposal} style={{ backgroundImage: `url(${ HotelImage })` }}>
                    <span />

                    <div>
                        <h6>
                            پرستاره ترین اقامتگاه ها
                        </h6>
                        <p>
                            تخفیف 50 درصدی هتل های شیراز
                        </p>
                    </div>

                    <Link to='/'>
                        مشاهده
                    </Link>
                </div>

                <section className={styles.homeHeaderBox}>
                    <div className="container">
                        <div className={styles.homeHeaderBoxList}>
                            <div className={styles.homeHeaderBoxItem}>
                                <Box1 />
                                <div>
                                    <h4>
                                            ارسال اطلاعات بلیط خریداری شده
                                    </h4>
                                    <p>
                                            به تلفن همراه، ایمیل یا فاکس
                                    </p>
                                </div>
                            </div>
                            <div className={styles.homeHeaderBoxItem}>
                                <Box2 />
                                <div>
                                    <h4>
                                            به سادگی برنامه سفر بچینید
                                    </h4>
                                    <p>
                                            با راهکارهای مختلف رزرو انجام دهید
                                    </p>
                                </div>
                            </div>
                            <div className={styles.homeHeaderBoxItem}>
                                <Box3 />
                                <div>
                                    <h4>
                                            تجربه دلنشین با پشتیبانی 24/7
                                    </h4>
                                    <p>
                                            در تمام ساعات پاسخ گوی شماییم
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.homeFastSearch} id='fastSearch'>
                    <div className="container">
                        <div className={styles.homeFastSearchTopBar}>
                            <div className={styles.homeFastSearchRightHeading}>
                                <h2 className='headingPrimary'>جستجوی سریع <span>پرواز داخلی</span></h2>
                                <p>تهران به مقاصد داخلی (مبدا به مقصد)</p>
                            </div>

                            <div className={styles.homeFastSearchLeftContent}>
                                <h2>انتخاب مبدا</h2>

                                <div>
                                    <ul id='cities_parent'>
                                        {
                                            data.cities?.map((city: string, index: number) =>
                                                (
                                                    <li key={index + '--_-' + nanoid()} data-activate={fastSearchActivate === city?.split(' ')[0]} onClick={() => setFastSearchActivate(city?.split(' ')[0])}>
                                                        <button>
                                                            { city?.split(' ')[0] }
                                                        </button>
                                                    </li>
                                                ))
                                        }
                                    </ul>

                                    <button onClick={(event: any) =>
                                    {
                                        event.preventDefault(); const element: any = document.querySelector('#cities_parent'); element?.scroll({ left: element?.scrollLeft - 80, behavior: 'smooth' });
                                    }}>
                                            بیشتر
                                        <Arrow2 />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.homeFastSearchBoxes}>
                            <TicketBox />
                            <TicketBox />
                            <TicketBox />
                            <TicketBox />

                            <TicketBox />
                            <TicketBox />
                            <TicketBox />
                            <TicketBox />
                        </div>
                    </div>
                </section>

                <section className={styles.homeProposal} id='proposal' style={{ backgroundImage: `url(${ Texture })` }}>
                    <div className="container">
                        <h2 className='headingPrimary'>پیشنهاد <span>لحظه آخری</span></h2>

                        <div className={styles.homeProposalItems}>
                            <button data-activate={proposalActivate === 0} onClick={() => setProposalActivate(0)}>ارزان ترین بلیط ها</button>
                            <button data-activate={proposalActivate === 1} onClick={() => setProposalActivate(1)}>پرفروش ترین بلیط ها</button>
                            <button data-activate={proposalActivate === 2} onClick={() => setProposalActivate(2)}>تخفیف خوردها</button>
                        </div>

                        <div className={styles.homeProposalBoxes}>
                            <TicketBox
                                proposal={true}
                            />

                            <TicketBox
                                proposal={true}
                            />

                            <TicketBox
                                proposal={true}
                            />

                            <TicketBox
                                proposal={true}
                            />
                        </div>

                        <div className={styles.homeProposalLatestNews}>
                            <div className={styles.homeProposalLatestNewsImage}>
                                <News />
                            </div>

                            <div className={styles.homeProposalLatestNewsContent}>
                                <h2 className='headingPrimary'>اطلاع رسانی <span>لحظه آخری</span></h2>

                                <p>
                                        برای دریافت پیامک پیشنهادهای لحظه آخری با تخفیف بیش از 50٪ در پروازهای رفت و برگشت مسیر مورد نظر و شماره تلفن همراه خود را وارد کنید
                                </p>

                                <div>
                                    <div ref={proposalOriginParentRef} id='proposal_origin_parent' data-open={proposalOriginActivate} onClick={() => setProposalOriginActivate(!proposalOriginActivate)}>
                                        {
                                            !proposalOrigin
                                                ? <span>
                                                مبدا
                                                </span>
                                                : <span data-activate={true}>
                                                    { proposalOrigin }
                                                </span>
                                        }

                                        <Arrow2 />

                                        <ul>
                                            {
                                                data.cities?.map((city: string, index: number) =>
                                                    (
                                                        <li key={city?.split(' ')[0] + index + '_--_' + nanoid()} data-activate={(proposalOrigin === city?.split(' ')[0] ? 'active' : '') + (proposalDestination === city?.split(' ')[0] ? 'false' : '')} onClick={() => setProposalOrigin(city?.split(' ')[0])}>
                                                            {city?.split(' ')[0]}
                                                        </li>
                                                    ))
                                            }
                                        </ul>
                                    </div>

                                    <div ref={proposalDestinationParentRef} id='proposal_destination_parent' data-open={proposalDestinationActivate} onClick={() => setProposalDestinationActivate(!proposalDestinationActivate)}>
                                        {
                                            !proposalDestination
                                                ? (
                                                    <span>
                                                    مقصد
                                                    </span>
                                                )
                                                : (
                                                    <span data-activate={true}>
                                                        { proposalDestination }
                                                    </span>
                                                )
                                        }

                                        <Arrow2 />

                                        <ul>
                                            {
                                                data.cities?.map((city: string, index: number) =>
                                                    (
                                                        <li key={city?.split(' ')[0] + index + '--_=' + nanoid()} data-activate={(proposalDestination === city?.split(' ')[0] ? 'active' : '') + (proposalOrigin === city?.split(' ')[0] ? 'false' : '')} onClick={() => setProposalDestination(city?.split(' ')[0])}>
                                                            {city?.split(' ')[0]}
                                                        </li>
                                                    ))
                                            }
                                        </ul>
                                    </div>

                                    <input
                                        type='text'
                                        placeholder='شماره موبایل'
                                        onKeyPress={(event) => numberValidate(event)}
                                    />
                                    <button>
                                            خبرم کن
                                        <Arrow />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.homeMagazine}>
                    <div className="container">
                        <div className={styles.homeMagazineTop}>
                            <div>
                                <Blogs />
                                <h2 className='headingPrimary'>از مجله <span>پاپلو</span></h2>
                            </div>
                            <Link to='/blogs'>
                                    بیشتر
                                <Arrow />
                            </Link>
                        </div>

                        <div className={styles.homeMagazineGallery}>
                            {
                                data?.blogs?.map((blog: any, index: any) =>
                                    (
                                        <Link to='#' key={index + '__--' + nanoid()}>
                                            <div />
                                            <div>
                                                <span>
                                                    {blog?.category}
                                                </span>
                                                <h3>
                                                    {blog?.title}
                                                </h3>
                                                <p>
                                                    {blog?.author}
                                                </p>
                                            </div>
                                            <img src={blog?.image} alt='homeMagazineGallery'/>
                                        </Link>
                                    ))
                            }
                        </div>
                    </div>
                </section>

                <section className={styles.homeApplication}>
                    <div className="container">
                        <div className={styles.homeApplicationBox}>
                            <AppPhone />
                            <div>
                                <h2 className='headingPrimary'>دریافت<span> اپلیکیشن پاپلو </span></h2>
                                <ul>
                                    <li>
                                        <Check />
                                            تقویم ارزان‌ترین بلیط
                                    </li>
                                    <li>
                                        <Check />
                                            مسیرهای جایگزین
                                    </li>
                                    <li>
                                        <Check />
                                            ارزیابی قیمت
                                    </li>
                                    <li>
                                        <Check />
                                            مشاهده صورت‌حساب قبل از پرداخت
                                    </li>
                                </ul>
                                <Link to='/'>
                                    <Download />
                                        راهنمای دانلود
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.homeReserve}>
                    <div className="container">
                        <div className={styles.homeReserveSide}>
                            <div className={styles.homeReserveSideRight}>
                                <h2 className='headingPrimary'>رزرو<span>بلیط هواپیما</span></h2>
                                <h3>خرید بلیط هواپیما برای تمام مقاصد داخلی و خارجی</h3>
                                <p>پاپلو بزرگترین و معتبرترین سایت خرید اینترنتی بلیط هواپیما ، قطار و اتوبوس در کشور است که از سال ۱۳۹۳ کار خود را شروع کرده و در این مدت توانسته رضایت درصد قابل توجهی ز کاربران را به دست بیاورد. در ابتدا، فروش بلیط پرواز داخلی در دستور کار پاپلو قرار داشت اما به مرور امکان خرید سایر محصولات گردشگری نیز به پاپلو اضافه شد</p>
                                <p>پاپلو بزرگترین و معتبرترین سایت خرید اینترنتی بلیط هواپیما ، قطار و اتوبوس در کشور است که از سال ۱۳۹۳ کار خود را شروع کرده و در این مدت توانسته رضایت درصد قابل توجهی ز کاربران را به دست بیاورد. در ابتدا، فروش بلیط پرواز داخلی در دستور کار پاپلو قرار داشت اما به مرور امکان خرید سایر محصولات گردشگری نیز به پاپلو اضافه شد</p>
                            </div>
                            <div className={styles.homeReserveSideLeft}>
                                <ul>
                                    <li data-activate={faq === 0} onClick={() => setFaq(faq === 0 ? -1 : 0)}>
                                        <div>
                                            <Plus />
                                            <Minus />
                                            <span>چند روز قبل از پرواز، بلیط هواپیما را بخریم؟</span>
                                        </div>
                                        <p>
                                                خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید
                                        </p>
                                    </li>
                                    <li data-activate={faq === 1} onClick={() => setFaq(faq === 1 ? -1 : 1)}>
                                        <div>
                                            <Plus />
                                            <Minus />
                                            <span>در هر پرواز، میزان بار مجاز چقدر است؟</span>
                                        </div>
                                        <p>
                                                خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید
                                        </p>
                                    </li>
                                    <li data-activate={faq === 2} onClick={() => setFaq(faq === 2 ? -1 : 2)}>
                                        <div>
                                            <Plus />
                                            <Minus />
                                            <span>نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟</span>
                                        </div>
                                        <p>
                                                خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید
                                        </p>
                                    </li>
                                    <li data-activate={faq === 3} onClick={() => setFaq(faq === 3 ? -1 : 3)}>
                                        <div>
                                            <Plus />
                                            <Minus />
                                            <span>رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟</span>
                                        </div>
                                        <p>
                                                خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید
                                        </p>
                                    </li>
                                    <li data-activate={faq === 4} onClick={() => setFaq(faq === 4 ? -1 : 4)}>
                                        <div>
                                            <Plus />
                                            <Minus />
                                            <span>آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟</span>
                                        </div>
                                        <p>
                                                خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید
                                        </p>
                                    </li>
                                    <li data-activate={faq === 5} onClick={() => setFaq(faq === 5 ? -1 : 5)}>
                                        <div>
                                            <Plus />
                                            <Minus />
                                            <span>آیا پس از خرید بلیط هواپیما، امکان تغییر نام یا نام خانوادگی وجود دارد؟</span>
                                        </div>
                                        <p>
                                                خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.homeReserveMore} data-open={reserveMore}>
                            <div className={styles.homeReserveMoreBox}>
                                <h5>بلیط هواپیما</h5>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                            </div>
                            <div className={styles.homeReserveMoreBox} >
                                <h5>ایرلاین</h5>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                            </div>
                            <div className={styles.homeReserveMoreBox}>
                                <h5>رزرو هتل</h5>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                            </div>
                            <div className={styles.homeReserveMoreBox} >
                                <h5>پرواز داخلی</h5>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                            </div>
                            <div className={styles.homeReserveMoreBox} >
                                <h5>پرواز خارجی</h5>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                            </div>
                            <div className={styles.homeReserveMoreBox}>
                                <h5>بلیط قطار</h5>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                            </div>
                            <div className={styles.homeReserveMoreBox}>
                                <h5>بلیط اتوبوس</h5>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                                <Link to='/'>خرید بلیط هواپیما</Link>
                            </div>
                        </div>
                        <p data-open={reserveMore} className={styles.homeReserveMoreButton} onClick={() => setReserveMore(true)}>
                                نمایش بیشتر
                            <Arrow3 />
                        </p>
                        <p data-open={reserveMore} className={styles.homeReserveMoreButton} onClick={() => setReserveMore(false)}>
                                نمایش کمتر
                            <Arrow3 />
                        </p>
                    </div>
                </section>

                <Footer />
            </main>
        )
        : <Error />
    );
};

export default Home;
