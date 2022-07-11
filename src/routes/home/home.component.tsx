import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Tooltip from '@tippyjs/react/headless';
import React, {useCallback, useRef, useState} from 'react';
import { numberToWords } from '@persian-tools/persian-tools';

import 'swiper/css';
import 'tippy.js/dist/tippy.css';

import { togglePopupHiddenLogin } from '../../redux/popup/popup.actions';

import Logo from '../../assets/icons/logo.png';
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
import { ReactComponent as ThreeDots } from '../../assets/icons/three-dots.svg';
import { ReactComponent as Trash } from '../../assets/icons/delete-bin-line.svg';
import { ReactComponent as Plane3 } from '../../assets/icons/flight-land-line.svg';
import { ReactComponent as Plane2 } from '../../assets/icons/flight-takeoff-line.svg';
import { ReactComponent as PlusCircle } from '../../assets/icons/add-circle-fill.svg';

import styles from './home.module.scss';

import { DatePicker } from '../../components/date-picker';
import Footer from '../../components/layouts/footer/footer.component';
import TicketBox from '../../components/ticket-box/ticket-box.component';

const data = require('../../data/data.json');

const Home = () =>
{
    const hotelRoomsRef: any = useRef<any>(null);

    const [page, setPage] = useState('plane');
    const [proposalActivate, setProposalActivate] = useState(0);
    const [hotelRoomsActivate, setHotelRoomsActivate] = useState(false);
    const [fastSearchActivate, setFastSearchActivate] = useState('تهران');
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
    const [babyCount, setBabyCount] = useState(0);
    const [hotelRooms, setHotelRooms] = useState([{ id: nanoid(), adultCount: 1, childCount: 0 }]);
    const [origin, setOrigin] = useState<string>('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState();
    const [departureDatePicker, setDepartureDatePicker] = useState(false);
    const [returnDate, setReturnDate] = useState();
    const [returnDatePicker, setReturnDatePicker] = useState(false);

    const dispatch = useDispatch();

    const numberValidate = useCallback(
        (event: any) =>
        {
            let key;
            const theEvent = event || window.event;

            if (theEvent.type === 'paste')
            {
                key = event.clipboardData.getData('text/plain');
            }
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
                {
                    theEvent.preventDefault();
                }
            }
        }, []);
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

            const cities: NodeListOf<any> | any[] = document.querySelectorAll('#origin_options ul li') || [];

            // @ts-ignore
            for (const city of cities)
            {
                const cityName = city.getAttribute('data-name');

                if (event.target.value && (!cityName.split(' - ')[0]?.toLowerCase().startsWith(event.target.value?.toLowerCase()) && !cityName.split(' - ')[1]?.toLowerCase().startsWith(event.target.value?.toLowerCase())))
                {
                    city?.setAttribute('data-activate', 'false');
                }
                else
                {
                    city?.setAttribute('data-activate', '');
                }
            }
        }, [setOrigin]);
    const onChangeDestination = useCallback(
        (event: any) =>
        {
            event?.persist();

            setDestination(event.target.value);

            const cities: NodeListOf<any> | any[] = document.querySelectorAll('#destination_options ul li') || [];

            // @ts-ignore
            for (const city of cities)
            {
                const cityName = city.getAttribute('data-name');

                if (event.target.value && (!cityName.split(' - ')[0]?.toLowerCase().startsWith(event.target.value?.toLowerCase()) && !cityName.split(' - ')[1]?.toLowerCase().startsWith(event.target.value?.toLowerCase())))
                {
                    city?.setAttribute('data-activate', 'false');
                }
                else
                {
                    city?.setAttribute('data-activate', '');
                }
            }
        }, [setDestination]);
    const onFocusOrigin = useCallback(
        () =>
        {
            const inputParent = document.querySelectorAll('#origin_input_parent');
            const options = document.querySelectorAll('#origin_options');

            inputParent.forEach(f => f.setAttribute('data-activate', 'true'));
            inputParent.forEach(f => f.setAttribute('data-error', 'false'));
            options.forEach(f => f.setAttribute('data-activate', 'true'));
        }, []);
    const onFocusDestination = useCallback(
        () =>
        {
            const inputParent = document.querySelectorAll('#destination_input_parent');
            const options = document.querySelectorAll('#destination_options');

            inputParent.forEach(f => f.setAttribute('data-activate', 'true'));
            inputParent.forEach(f => f.setAttribute('data-error', 'false'));
            options.forEach(f => f.setAttribute('data-activate', 'true'));
        }, []);
    const onClickExchange = useCallback(
        () =>
        {
            setOrigin(destination);
            setDestination(origin);
        }, [destination, setDestination, origin, setOrigin]);
    const handleOrigin = useCallback(
        (originName: string) =>
        {
            setOrigin(originName);

            const inputParent = document.querySelectorAll('#origin_input_parent');
            const options = document.querySelectorAll('#origin_options');

            inputParent.forEach(f => f.setAttribute('data-activate', 'false'));
            options.forEach(f => f.setAttribute('data-activate', 'false'));
        }, [setOrigin]);
    const handleDestination = useCallback(
        (destinationName: string) =>
        {
            setDestination(destinationName);

            const inputParent = document.querySelectorAll('#destination_input_parent');
            const options = document.querySelectorAll('#destination_options');

            inputParent.forEach(f => f.setAttribute('data-activate', 'false'));
            options.forEach(f => f.setAttribute('data-activate', 'false'));
        }, [setDestination]);
    const sum = (array: any[], prop: string) =>
    {
        return array.reduce((a, b) =>
        {
            return a + b[prop];
        }, 0);
    }

    React.useEffect(() =>
    {
        // @ts-ignore
        const passengersParent = [...document.querySelectorAll('#passengers_parent')];
        // @ts-ignore
        const departureDatePickersParent = [...document.querySelectorAll('#departure_date_picker')];
        // @ts-ignore
        const returnDatePickersParent = [...document.querySelectorAll('#return_date_picker')];
        // @ts-ignore
        const proposalDestinationParent = [...document.querySelectorAll('#proposal_destination_parent')];
        // @ts-ignore
        const proposalOriginParent = [...document.querySelectorAll('#proposal_origin_parent')];
        // @ts-ignore
        const originInputParent = [...document.querySelectorAll('#origin_input_parent')];
        // @ts-ignore
        const destinationInputParent = [...document.querySelectorAll('#destination_input_parent')];
        // @ts-ignore
        const unilateralParent = [...document.querySelectorAll('#unilateral_parent')];
        // @ts-ignore
        const exclusiveParent = [...document.querySelectorAll('#exclusive_parent')];

        document.addEventListener('click', (event: any) =>
        {
            if (!originInputParent?.some((element) => element?.contains(event?.target)))
            {
                const inputParent = document.querySelectorAll('#origin_input_parent');
                const options = document.querySelectorAll('#origin_options');
                const exchangeIcon = document.querySelectorAll('#exchange_icon');

                inputParent.forEach(f => f.setAttribute('data-activate', 'false'));
                options.forEach(f => f.setAttribute('data-activate', 'false'));
                exchangeIcon.forEach(f => f.setAttribute('data-activate', 'true'));

                if (origin && !data?.cities?.includes(origin))
                {
                    console.log(origin)
                    inputParent.forEach((f: any) => f.setAttribute('data-error', 'true'));
                }
                else
                {
                    inputParent.forEach((f: any) => f.setAttribute('data-error', 'false'));
                }
            }
            if (!destinationInputParent?.some((element) => element?.contains(event?.target)))
            {
                const inputParent = document.querySelectorAll('#destination_input_parent');
                const options = document.querySelectorAll('#destination_options');
                const exchangeIcon = document.querySelectorAll('#exchange_icon');

                inputParent.forEach(f => f.setAttribute('data-activate', 'false'));
                options.forEach(f => f.setAttribute('data-activate', 'false'));
                exchangeIcon.forEach(f => f.setAttribute('data-activate', 'true'));

                if (destination && !data?.cities?.includes(destination))
                {
                    inputParent.forEach((f: any) => f.setAttribute('data-error', 'true'));
                }
                else
                {
                    inputParent.forEach((f: any) => f.setAttribute('data-error', 'false'));
                }
            }
            if (!passengersParent?.some((element) => element?.contains(event?.target)))
            {
                setPassengers(false);
            }
            if (!hotelRoomsRef?.current?.contains(event?.target) && !(event?.target?.tagName?.toLowerCase() === 'svg' || event?.target?.tagName?.toLowerCase() === 'path'))
            {
                setHotelRoomsActivate(false);
            }
            if (!departureDatePickersParent?.some((element) => element?.contains(event?.target)))
            {
                setDepartureDatePicker(false);
            }
            if (!returnDatePickersParent?.some((element) => element?.contains(event?.target)))
            {
                setReturnDatePicker(false);
            }
            if (!unilateralParent?.some((element) => element?.contains(event?.target)))
            {
                setUnilateralActivate(false);
            }
            if (!exclusiveParent?.some((element) => element?.contains(event?.target)))
            {
                setExclusiveActivate(false);
            }
            if (!proposalOriginParent?.some((element) => element?.contains(event?.target)))
            {
                setProposalOriginActivate(false);
            }
            if (!proposalDestinationParent?.some((element) => element?.contains(event?.target)))
            {
                setProposalDestinationActivate(false);
            }
        })
    }, [setPassengers, setUnilateralActivate, setExclusiveActivate, setProposalOriginActivate, setProposalDestinationActivate, setReturnDatePicker, setDepartureDatePicker, origin, destination, hotelRoomsRef]);

    return (
        <main className={styles.home}>
            <header className={styles.homeHeader}>
                <div className={styles.homeHeaderMain}>
                    <span className={styles.homeHeaderMainBackground}/>
                    <nav className={styles.homeHeaderMainNav}>
                        <img src={Logo} alt='Logo' />

                        <ul className={styles.homeHeaderMainNavList}>
                            <Link to='/' className={styles.homeHeaderMainNavItem}>
                                صفحه اصلی
                            </Link>
                            <li className={styles.homeHeaderMainNavItem} data-type='arrow'>
                                خدمات سفر
                                <div className={styles.homeHeaderMainNavPopup}>
                                    <h3>
                                        خدمات سفر
                                    </h3>
                                    <ul className={styles.homeHeaderMainNavPopupList}>
                                        <li className={styles.homeHeaderMainNavPopupItem}>
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
                                        </li>
                                        <li className={styles.homeHeaderMainNavPopupItem}>
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
                                        </li>
                                        <li className={styles.homeHeaderMainNavPopupItem}>
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
                                        </li>
                                        <li className={styles.homeHeaderMainNavPopupItem}>
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
                                        </li>
                                        <li className={styles.homeHeaderMainNavPopupItem}>
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
                                        </li>
                                    </ul>
                                    <div>
                                        <h2>
                                            قوانین و مقررات کنسلی را بخوانید
                                        </h2>
                                        <Link to='/'>
                                            ضوابط استفاده از سامانه خرید بلیط
                                            <Arrow2 />
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <Link to='/policy' className={styles.homeHeaderMainNavItem}>
                                راهنمایی و پشتیبانی
                            </Link>
                            <li className={styles.homeHeaderMainNavItem}>
                                <ThreeDots />
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
                                page === 'plane'
                                    ?
                                    <>
                                        <h1>
                                            <strong>خرید ارزان</strong> و بصرفه بلیط پرواز داخلی و خارجی
                                        </h1>
                                        <p>
                                            با خیالی آسوده بلیط پرواز خود را رزرو کنید
                                        </p>
                                    </>
                                    :
                                    null
                            }
                            {
                                page === 'hotel'
                                    ?
                                    <>
                                        <h1>
                                            پرستاره ترین اقامتگاه ها <strong>برای رزرو هتل</strong>
                                        </h1>
                                        <p>
                                            با خیالی آسوده اتاق هتل خود را رزرو کنید
                                        </p>
                                    </>
                                    :
                                    null
                            }
                            {
                                page === 'tour'
                                    ?
                                    <>
                                        <h1>
                                            <strong>با ما در همه حال سفر</strong> با رزرو تور اسکای&zwnj;رو
                                        </h1>
                                        <p>
                                            با خیالی آسوده بلیط تور خود را رزرو کنید
                                        </p>
                                    </>
                                    :
                                    null
                            }
                            {
                                page === 'train'
                                    ?
                                    <>
                                        <h1>
                                            <strong>آسوده سفر کنید</strong> با رزرو بلیط قطار از اسکای&zwnj;رو
                                        </h1>
                                        <p>
                                            با خیالی آسوده بلیط قطار خود را رزرو کنید
                                        </p>
                                    </>
                                    :
                                    null
                            }
                            {
                                page === 'bus'
                                    ?
                                    <>
                                        <h1>
                                            <strong>سرویع ترین</strong> روش برای رزرو بلیط اتوبوس
                                        </h1>
                                        <p>
                                            با خیالی آسوده بلیط اتوبوس خود را رزرو کنید
                                        </p>
                                    </>
                                    :
                                    null
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
                            <Link to='/'>
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
                    <div className={styles.homeHeaderImageBackground} style={{ backgroundImage: `url(${page === 'plane' ? Header1 : page === 'hotel' ? Header2 : page === 'tour' ? Header3 : page === 'train' ? Header4 : page === 'bus' ? Header5 : 0})` }}/>
                    <div className={styles.homeHeaderImageContentParent}>
                        <div className={styles.homeHeaderImageContentBox}>
                            <nav className={styles.homeHeaderImageContentBoxNav}>
                                <div className={styles.homeHeaderImageContentBoxNavItem} data-activate={page ===  'plane' ? 'active' : ''} onClick={() => handlePage('plane')}>
                                    <Plane />
                                    هواپیما
                                </div>
                                <div className={styles.homeHeaderImageContentBoxNavItem} data-activate={page ===  'hotel' ? 'active' : ''} onClick={() => handlePage('hotel')}>
                                    <Hotel />
                                    هتل
                                </div>
                                <div className={styles.homeHeaderImageContentBoxNavItem} data-activate={page ===  'tour' ? 'active' : ''} onClick={() => handlePage('tour')}>
                                    <Tour />
                                    تور
                                </div>
                                <div className={styles.homeHeaderImageContentBoxNavItem} data-activate={page ===  'train' ? 'active' : ''} onClick={() => handlePage('train')}>
                                    <Train />
                                    قطار
                                </div>
                                <div className={styles.homeHeaderImageContentBoxNavItem} data-activate={page ===  'bus' ? 'active' : ''} onClick={() => handlePage('bus')}>
                                    <Bus />
                                    اتوبوس
                                </div>
                            </nav>
                            <div className={styles.homeHeaderImageContentList} data-activate={page ===  'plane'}>
                                <div className={styles.homeHeaderImageContentItem}>
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
                                    <div data-options={true} id='unilateral_parent' data-open={unilateralActivate} onClick={() => setUnilateralActivate(!unilateralActivate)}>
                                        {
                                            unilateral
                                                ?
                                                <span>
                                                    یکطرفه
                                                </span>
                                                :
                                                <span>
                                                    رفت و برگشت
                                                </span>
                                        }
                                        {
                                            unilateralActivate
                                                ?
                                                <ul>
                                                    <li data-activate={unilateral} onClick={() => setUnilateral(true)}>
                                                        یکطرفه
                                                    </li>

                                                    <li data-activate={!unilateral} onClick={() => setUnilateral(false)}>
                                                        رفت و برگشت
                                                    </li>
                                                </ul>
                                                :
                                                null
                                        }
                                    </div>
                                    <div data-options={true} id='passengers_parent' data-open={passengers} onClick={() => setPassengers(!passengers)}>
                                        <span>
                                            مسافران
                                        </span>
                                    </div>
                                    <div data-activate={passengers} id='passengers_parent' className={styles.homeHeaderPassengers}>
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
                                                    onClick={() => setAdultCount((adultCount + childCount + babyCount >= 9) ? adultCount : adultCount + 1)}
                                                    data-direction='right'
                                                    data-disabled={adultCount + childCount + babyCount >= 9}
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
                                                    onClick={() => setChildCount((adultCount + childCount + babyCount >= 9) ? childCount : childCount + 1)}
                                                    data-direction='right'
                                                    data-disabled={adultCount + childCount + babyCount >= 9}
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
                                                    onClick={() => setBabyCount((adultCount + childCount + babyCount >= 9) ? babyCount : babyCount + 1)}
                                                    data-direction='right'
                                                    data-disabled={adultCount + childCount + babyCount >= 9}
                                                >
                                                    <Plus />
                                                </button>
                                                <button className={styles.homeHeaderPassengersItemButton}>
                                                    {babyCount}
                                                </button>
                                                <button
                                                    className={styles.homeHeaderPassengersItemButton}
                                                    onClick={() => setBabyCount(babyCount <= 0 ? 0 : babyCount - 1)}
                                                    data-direction='left'
                                                    data-disabled={babyCount <= 0}
                                                >
                                                    <Minus />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.homeHeaderImageContentItem} data-direction='column'>
                                    <span id='exchange_icon' data-activate="true" onClick={ onClickExchange }>
                                        <Exchange />
                                    </span>
                                    <label htmlFor='origin' className={styles.homeHeaderImageContentItemInput} id='origin_input_parent'>
                                        <div>
                                            <label>
                                                مبدا(شهر)
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
                                        </div>
                                        <Plane2 />
                                        <label htmlFor='nothing' data-options='origin_options' id='origin_options'>
                                            <ul>
                                                {
                                                    data?.cities?.map((city: any) => (
                                                        <li key={city + '-=_' + nanoid()} data-name={city} data-plane={true} data-activate={(origin === city ? 'active' : '') + (destination === city ? 'false' : '')} onClick={() => { handleOrigin(city);  }}>
                                                            <Plane />
                                                            {city}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </label>
                                    </label>
                                    <label htmlFor='destination' className={styles.homeHeaderImageContentItemInput} id='destination_input_parent'>
                                        <div>
                                            <label>
                                                مقصد(شهر)
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
                                        </div>
                                        <Plane3 />
                                        <label htmlFor='nothing' data-options='destination_options' id='destination_options'>
                                            <ul>
                                                {
                                                    data?.cities?.map((city: any) => (
                                                        <li key={city + '-' + nanoid()} data-name={city} data-activate={(destination === city ? 'active' : '') + (origin === city ? 'false' : '')} onClick={() => { handleDestination(city);  }}>
                                                            <Plane />
                                                            {city}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </label>
                                    </label>
                                </div>
                                <div data-date={true} data-date_pickers={!unilateral} className={styles.homeHeaderImageContentItem}>
                                    <div data-type='date' data-activate={departureDatePicker} onClick={() => setDepartureDatePicker(true)} id='departure_date_picker'>
                                        <label>
                                            تاریخ رفت
                                        </label>

                                        <span>
                                            {departureDate}
                                        </span>

                                        <DatePicker
                                            title='تاریخ رفت'
                                            defaultValue={true}
                                            value={departureDate}
                                            setValue={setDepartureDate}
                                            activate={departureDatePicker}
                                            setActivate={setDepartureDatePicker}
                                        />
                                    </div>
                                    <div data-type='date' data-activate={returnDatePicker} data-deactivate={unilateral} onClick={() => setReturnDatePicker(true)} id='return_date_picker'>
                                        <label>
                                            تاریخ برگشت
                                        </label>

                                        <span>
                                            {returnDate}
                                        </span>

                                        <DatePicker
                                            title='تاریخ برگشت'
                                            defaultValue={true}
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
                            <div className={styles.homeHeaderImageContentList} data-activate={page ===  'hotel'}>
                                <div className={styles.homeHeaderImageContentItem}>
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
                                </div>
                                <div className={styles.homeHeaderImageContentItem} data-direction='column'>
                                    <label htmlFor='hotel_origin' className={styles.homeHeaderImageContentItemInput} id='origin_input_parent'>
                                        <div>
                                            <label>
                                                مبدا(شهر)
                                            </label>
                                            <input
                                                type='text'
                                                placeholder=''
                                                autoComplete='false'
                                                spellCheck='false'
                                                name='origin'
                                                id='hotel_origin'
                                                onFocus={ onFocusOrigin }
                                                onChange={ onChangeOrigin }
                                                value={ origin }
                                            />
                                        </div>
                                        <Pin />
                                        <label htmlFor='nothing' data-options='origin_options' id='origin_options'>
                                            <ul>
                                                {
                                                    data?.cities?.map((city: any) => (
                                                        <li key={city + '__' + nanoid()} data-name={city} data-activate={(origin === city ? 'active' : '') + (destination === city ? 'false' : '')} onClick={() => { handleOrigin(city);  }}>
                                                            <Pin />
                                                            {city}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </label>
                                    </label>

                                    <div data-activate={hotelRoomsActivate} className={styles.homeHeaderImageContentItemInput} ref={hotelRoomsRef} id='hotel_rooms_parent'>
                                        <div onClick={() => setHotelRoomsActivate(!hotelRoomsActivate)}>
                                            <label>
                                                مسافرین
                                            </label>
                                            <span>
                                                <p>
                                                     {sum(hotelRooms, 'adultCount')} بزرگسال
                                                </p>

                                                <i>
                                                    -
                                                </i>

                                                <p>
                                                    {sum(hotelRooms, 'childCount')} کودک
                                                </p>

                                                <i>
                                                    -
                                                </i>

                                                <p>
                                                    {hotelRooms?.length} اتاق
                                                </p>
                                            </span>
                                        </div>

                                        <div data-activate={hotelRoomsActivate} data-options='hotel_rooms_options'>
                                            <ul>
                                                {
                                                    hotelRooms?.map((hotelRoom: any, index: any) =>
                                                        (
                                                            <li key={hotelRoom?.id}>
                                                                <header>
                                                                    <span>
                                                                        اتاق {(numberToWords(index + 1, { ordinal: true })?.toString()) ===  'یکم' ? 'اول' : (numberToWords(index + 1, { ordinal: true })?.toString())}
                                                                    </span>

                                                                    {
                                                                        hotelRooms?.length > 1
                                                                            ?
                                                                            <button onClick={(event: any) => { event?.preventDefault(); setHotelRooms(hotelRooms?.filter((hotelRoomV: any) => hotelRoomV?.id !== hotelRoom?.id)) }}>
                                                                                حذف
                                                                                <Trash/>
                                                                            </button>
                                                                            :
                                                                            null
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

                                                                                let i = -1;
                                                                                let hotelRoomsV: any = hotelRooms;

                                                                                for (const hotelRoomV in hotelRoomsV)
                                                                                {
                                                                                    i++;

                                                                                    if (hotelRoomsV[i].id === hotelRoom?.id)
                                                                                    {
                                                                                        if (hotelRoom?.adultCount <= 13)
                                                                                        {
                                                                                            hotelRoomsV[i].adultCount = hotelRoom?.adultCount + 1;
                                                                                        }

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

                                                                                let i = -1;
                                                                                let hotelRoomsV: any = hotelRooms;

                                                                                for (const hotelRoomV in hotelRoomsV)
                                                                                {
                                                                                    i++;

                                                                                    if (hotelRoomsV[i].id === hotelRoom?.id)
                                                                                    {
                                                                                        if (hotelRoom?.adultCount > 1)
                                                                                        {
                                                                                            hotelRoomsV[i].adultCount = hotelRoom?.adultCount - 1;
                                                                                        }

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

                                                                                let i = -1;
                                                                                let hotelRoomsV: any = hotelRooms;

                                                                                for (const hotelRoomV in hotelRoomsV)
                                                                                {
                                                                                    i++;

                                                                                    if (hotelRoomsV[i].id === hotelRoom?.id)
                                                                                    {
                                                                                        if (hotelRoom?.childCount <= 5)
                                                                                        {
                                                                                            hotelRoomsV[i].childCount = hotelRoom?.childCount + 1;
                                                                                        }

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

                                                                                let i = -1;
                                                                                let hotelRoomsV: any = hotelRooms;

                                                                                for (const hotelRoomV in hotelRoomsV)
                                                                                {
                                                                                    i++;

                                                                                    if (hotelRoomsV[i].id === hotelRoom?.id)
                                                                                    {
                                                                                        if (hotelRoom?.childCount > 0)
                                                                                        {
                                                                                            hotelRoomsV[i].childCount = hotelRoom?.childCount - 1;
                                                                                        }

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
                                                ?
                                                    <button onClick={() => setHotelRooms((oldArray: any) => [...oldArray, { id: nanoid(), adultCount: 1, childCount: 0 }])}>
                                                        <PlusCircle />
                                                        افزودن اتاق
                                                    </button>
                                                    :
                                                    null
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div data-date={true} data-date_pickers={true} className={styles.homeHeaderImageContentItem}>
                                    <div data-type='date' data-activate={departureDatePicker} onClick={() => setDepartureDatePicker(true)} id='departure_date_picker'>
                                        <label>
                                            تاریخ ورود
                                        </label>

                                        <span>
                                            {departureDate}
                                        </span>

                                        <DatePicker
                                            title='تاریخ ورود'
                                            defaultValue={true}
                                            value={departureDate}
                                            setValue={setDepartureDate}
                                            activate={departureDatePicker}
                                            setActivate={setDepartureDatePicker}
                                        />
                                    </div>

                                    <div data-type='date' data-activate={returnDatePicker} onClick={() => setReturnDatePicker(true)} id='return_date_picker'>
                                        <label>
                                            تاریخ خروج
                                        </label>

                                        <span>
                                            {returnDate}
                                        </span>

                                        <DatePicker
                                            title='تاریخ خروج'
                                            defaultValue={true}
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
                            <div className={styles.homeHeaderImageContentList} data-activate={page ===  'tour'}>
                                <div className={styles.homeHeaderImageContentItem}>
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
                                    <div data-options={true} data-open={passengers} id='passengers_parent' onClick={() => setPassengers(!passengers)}>
                                        <span>
                                            مسافران
                                        </span>
                                    </div>
                                    <div data-activate={passengers} id='passengers_parent' className={styles.homeHeaderPassengers}>
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
                                                    onClick={() => setAdultCount((adultCount + childCount + babyCount >= 9) ? adultCount : adultCount + 1)}
                                                    data-direction='right'
                                                    data-disabled={adultCount + childCount + babyCount >= 9}
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
                                                    onClick={() => setChildCount((adultCount + childCount + babyCount >= 9) ? childCount : childCount + 1)}
                                                    data-direction='right'
                                                    data-disabled={adultCount + childCount + babyCount >= 9}
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
                                                    onClick={() => { setBabyCount((adultCount + childCount + babyCount >= 9) ? babyCount : babyCount + 1); }}
                                                    data-direction='right'
                                                    data-disabled={adultCount + childCount + babyCount >= 9}
                                                >
                                                    <Plus />
                                                </button>
                                                <button className={styles.homeHeaderPassengersItemButton}>
                                                    {babyCount}
                                                </button>
                                                <button
                                                    className={styles.homeHeaderPassengersItemButton}
                                                    onClick={() => { setBabyCount(babyCount <= 0 ? 0 : babyCount - 1); }}
                                                    data-direction='left'
                                                    data-disabled={babyCount <= 0}
                                                >
                                                    <Minus />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.homeHeaderImageContentItem} data-direction='column'>
                                    <label htmlFor='tour_origin' className={styles.homeHeaderImageContentItemInput} id='origin_input_parent'>
                                        <div>
                                            <label>
                                                مبدا(شهر)
                                            </label>
                                            <input
                                                type='text'
                                                placeholder=''
                                                autoComplete='false'
                                                spellCheck='false'
                                                name='origin'
                                                id='tour_origin'
                                                onFocus={ onFocusOrigin }
                                                onChange={ onChangeOrigin }
                                                value={ origin }
                                            />
                                        </div>
                                        <Pin />
                                        <label htmlFor='nothing' data-options='origin_options' id='origin_options'>
                                            <ul>
                                                {
                                                    data?.cities?.map((city: any) => (
                                                        <li key={city + '--' + nanoid()} data-name={city} data-activate={(origin === city ? 'active' : '') + (destination === city ? 'false' : '')} onClick={() => { handleOrigin(city);  }}>
                                                            <Pin />
                                                            {city}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </label>
                                    </label>
                                    <label htmlFor='tour_destination' className={styles.homeHeaderImageContentItemInput} id='destination_input_parent'>
                                        <div>
                                            <label>
                                                مقصد(شهر)
                                            </label>
                                            <input
                                                type='text'
                                                placeholder=''
                                                autoComplete='false'
                                                spellCheck='false'
                                                name='destination'
                                                id='tour_destination'
                                                onFocus={ onFocusDestination }
                                                onChange={ onChangeDestination }
                                                value={ destination }
                                            />
                                        </div>
                                        <Pin />
                                        <label htmlFor='nothing' data-options='destination_options' id='destination_options'>
                                            <ul>
                                                {
                                                    data?.cities?.map((city: any) => (
                                                        <li key={city + '_-_' + nanoid()} data-name={city} data-activate={(destination === city ? 'active' : '') + (origin === city ? 'false' : '')} onClick={() => { handleDestination(city);  }}>
                                                            <Pin />
                                                            {city}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </label>
                                    </label>
                                </div>
                                <div data-date={true} data-date_pickers={!unilateral} className={styles.homeHeaderImageContentItem}>
                                    <div data-type='date' data-activate={departureDatePicker} onClick={() => setDepartureDatePicker(true)} id='departure_date_picker'>
                                        <label>
                                            تاریخ رفت
                                        </label>

                                        <span>
                                            {departureDate}
                                        </span>

                                        <DatePicker
                                            title='تاریخ رفت'
                                            defaultValue={true}
                                            value={departureDate}
                                            setValue={setDepartureDate}
                                            activate={departureDatePicker}
                                            setActivate={setDepartureDatePicker}
                                        />
                                    </div>
                                    <div data-type='date' data-activate={returnDatePicker} data-deactivate={unilateral} onClick={() => setReturnDatePicker(true)} id='return_date_picker'>
                                        <label>
                                            تاریخ برگشت
                                        </label>

                                        <span>
                                            {returnDate}
                                        </span>

                                        <DatePicker
                                            title='تاریخ برگشت'
                                            defaultValue={true}
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
                            <div className={styles.homeHeaderImageContentList} data-activate={page ===  'train'}>
                                <div className={styles.homeHeaderImageContentItem}>
                                    <div data-options={true} id='exclusive_parent' data-open={exclusiveActivate} onClick={() => setExclusiveActivate(!exclusiveActivate)}>
                                        {
                                            exclusive
                                                ?
                                                <span>
                                                    دربست
                                                </span>
                                                :
                                                <span>
                                                    درنبست
                                                </span>
                                        }
                                        {
                                            exclusiveActivate
                                                ?
                                                <ul>
                                                    <li data-activate={exclusive} onClick={() => setExclusive(true)}>
                                                        دربست
                                                    </li>

                                                    <li data-activate={!exclusive} onClick={() => setExclusive(false)}>
                                                        درنبست
                                                    </li>
                                                </ul>
                                                :
                                                null
                                        }
                                    </div>
                                    <div data-options={true} id='unilateral_parent' data-open={unilateralActivate} onClick={() => setUnilateralActivate(!unilateralActivate)}>
                                        {
                                            unilateral
                                                ?
                                                <span>
                                                    یکطرفه
                                                </span>
                                                :
                                                <span>
                                                    رفت و برگشت
                                                </span>
                                        }
                                        {
                                            unilateralActivate
                                                ?
                                                <ul>
                                                    <li data-activate={unilateral} onClick={() => setUnilateral(true)}>
                                                        یکطرفه
                                                    </li>

                                                    <li data-activate={!unilateral} onClick={() => setUnilateral(false)}>
                                                        رفت و برگشت
                                                    </li>
                                                </ul>
                                                :
                                                null
                                        }
                                    </div>
                                    <div data-options={true} data-open={passengers} id='passengers_parent' onClick={() => setPassengers(!passengers)}>
                                        <span>
                                            مسافران
                                        </span>
                                    </div>
                                    <div data-activate={passengers} id='passengers_parent' className={styles.homeHeaderPassengers}>
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
                                                    onClick={() => setAdultCount((adultCount + childCount + babyCount >= 9) ? adultCount : adultCount + 1)}
                                                    data-direction='right'
                                                    data-disabled={adultCount + childCount + babyCount >= 9}
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
                                                    onClick={() => setChildCount((adultCount + childCount + babyCount >= 9) ? childCount : childCount + 1)}
                                                    data-direction='right'
                                                    data-disabled={adultCount + childCount + babyCount >= 9}
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
                                                    onClick={() => setBabyCount((adultCount + childCount + babyCount >= 9) ? babyCount : babyCount + 1)}
                                                    data-direction='right'
                                                    data-disabled={adultCount + childCount + babyCount >= 9}
                                                >
                                                    <Plus />
                                                </button>
                                                <button className={styles.homeHeaderPassengersItemButton}>
                                                    {babyCount}
                                                </button>
                                                <button
                                                    className={styles.homeHeaderPassengersItemButton}
                                                    onClick={() => setBabyCount(babyCount <= 0 ? 0 : babyCount - 1)}
                                                    data-direction='left'
                                                    data-disabled={babyCount <= 0}
                                                >
                                                    <Minus />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.homeHeaderImageContentItem} data-direction='column'>
                                    <label htmlFor='train_origin' className={styles.homeHeaderImageContentItemInput} id='origin_input_parent'>
                                        <div>
                                            <label>
                                                مبدا(شهر)
                                            </label>
                                            <input
                                                type='text'
                                                placeholder=''
                                                autoComplete='false'
                                                spellCheck='false'
                                                name='origin'
                                                id='train_origin'
                                                onFocus={ onFocusOrigin }
                                                onChange={ onChangeOrigin }
                                                value={ origin }
                                            />
                                        </div>
                                        <Pin />
                                        <label htmlFor='nothing' data-options='origin_options' id='origin_options'>
                                            <ul>
                                                {
                                                    data?.cities?.map((city: any) => (
                                                        <li key={city + '-_-' + nanoid()} data-name={city} data-activate={(origin === city ? 'active' : '') + (destination === city ? 'false' : '')} onClick={() => { handleOrigin(city);  }}>
                                                            <Pin />
                                                            {city}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </label>
                                    </label>
                                    <label htmlFor='train_destination' className={styles.homeHeaderImageContentItemInput} id='destination_input_parent'>
                                        <div>
                                            <label>
                                                مقصد(شهر)
                                            </label>
                                            <input
                                                type='text'
                                                placeholder=''
                                                autoComplete='false'
                                                spellCheck='false'
                                                name='destination'
                                                id='train_destination'
                                                onFocus={ onFocusDestination }
                                                onChange={ onChangeDestination }
                                                value={ destination }
                                            />
                                        </div>
                                        <Pin />
                                        <label htmlFor='nothing' data-options='destination_options' id='destination_options'>
                                            <ul>
                                                {
                                                    data?.cities?.map((city: any) => (
                                                        <li key={city + '__-__' + nanoid()} data-name={city} data-activate={(destination === city ? 'active' : '') + (origin === city ? 'false' : '')} onClick={() => { handleDestination(city);  }}>
                                                            <Pin />
                                                            {city}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </label>
                                    </label>
                                </div>
                                <div data-date={true} data-date_pickers={!unilateral} className={styles.homeHeaderImageContentItem}>
                                    <div data-type='date' data-activate={departureDatePicker} onClick={() => setDepartureDatePicker(true)} id='departure_date_picker'>
                                        <label>
                                            تاریخ رفت
                                        </label>

                                        <span>
                                            {departureDate}
                                        </span>

                                        <DatePicker
                                            title='تاریخ رفت'
                                            defaultValue={true}
                                            value={departureDate}
                                            setValue={setDepartureDate}
                                            activate={departureDatePicker}
                                            setActivate={setDepartureDatePicker}
                                        />
                                    </div>
                                    <div data-type='date' data-activate={returnDatePicker} data-deactivate={unilateral} onClick={() => setReturnDatePicker(true)} id='return_date_picker'>
                                        <label>
                                            تاریخ برگشت
                                        </label>

                                        <span>
                                            {returnDate}
                                        </span>

                                        <DatePicker
                                            title='تاریخ برگشت'
                                            defaultValue={true}
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
                            <div className={styles.homeHeaderImageContentList} data-activate={page ===  'bus'}>
                                <div className={styles.homeHeaderImageContentItem}>
                                    <div data-options={true} id='unilateral_parent' data-open={unilateralActivate} onClick={() => setUnilateralActivate(!unilateralActivate)}>
                                        {
                                            unilateral
                                                ?
                                                <span>
                                                یکطرفه
                                            </span>
                                                :
                                                <span>
                                                رفت و برگشت
                                            </span>
                                        }
                                        {
                                            unilateralActivate
                                                ?
                                                <ul>
                                                    <li data-activate={unilateral} onClick={() => setUnilateral(true)}>
                                                        یکطرفه
                                                    </li>

                                                    <li data-activate={!unilateral} onClick={() => setUnilateral(false)}>
                                                        رفت و برگشت
                                                    </li>
                                                </ul>
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                                <div className={styles.homeHeaderImageContentItem} data-direction='column'>
                                    <label htmlFor='bus_origin' className={styles.homeHeaderImageContentItemInput} id='origin_input_parent'>
                                        <div>
                                            <label>
                                                مبدا(شهر)
                                            </label>
                                            <input
                                                type='text'
                                                placeholder=''
                                                autoComplete='false'
                                                spellCheck='false'
                                                name='origin'
                                                id='bus_origin'
                                                onFocus={ onFocusOrigin }
                                                onChange={ onChangeOrigin }
                                                value={ origin }
                                            />
                                        </div>
                                        <Pin />
                                        <label htmlFor='nothing' data-options='origin_options' id='origin_options'>
                                            <ul>
                                                {
                                                    data?.cities?.map((city: any) => (
                                                        <li key={city + '--_--' + nanoid()} data-name={city} data-activate={(origin === city ? 'active' : '') + (destination === city ? 'false' : '')} onClick={() => { handleOrigin(city);  }}>
                                                            <Pin />
                                                            {city}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </label>
                                    </label>
                                    <label htmlFor='bus_destination' className={styles.homeHeaderImageContentItemInput} id='destination_input_parent'>
                                        <div>
                                            <label>
                                                مقصد(شهر)
                                            </label>
                                            <input
                                                type='text'
                                                placeholder=''
                                                autoComplete='false'
                                                spellCheck='false'
                                                name='destination'
                                                id='bus_destination'
                                                onFocus={ onFocusDestination }
                                                onChange={ onChangeDestination }
                                                value={ destination }
                                            />
                                        </div>
                                        <Pin />
                                        <label htmlFor='nothing' data-options='destination_options' id='destination_options'>
                                            <ul>
                                                {
                                                    data?.cities?.map((city: any) => (
                                                        <li key={city + '__-_' + nanoid()} data-name={city} data-activate={(destination === city ? 'active' : '') + (origin === city ? 'false' : '')} onClick={() => { handleDestination(city);  }}>
                                                            <Pin />
                                                            {city}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </label>
                                    </label>
                                </div>
                                <div data-date={true} data-date_pickers={!unilateral} className={styles.homeHeaderImageContentItem}>
                                    <div data-type='date' data-activate={departureDatePicker} onClick={() => setDepartureDatePicker(true)} id='departure_date_picker'>
                                        <label>
                                            تاریخ رفت
                                        </label>

                                        <span>
                                            {departureDate}
                                        </span>

                                        <DatePicker
                                            title='تاریخ رفت'
                                            defaultValue={true}
                                            value={departureDate}
                                            setValue={setDepartureDate}
                                            activate={departureDatePicker}
                                            setActivate={setDepartureDatePicker}
                                        />
                                    </div>
                                    <div data-type='date' data-activate={returnDatePicker} data-deactivate={unilateral} onClick={() => setReturnDatePicker(true)} id='return_date_picker'>
                                        <label>
                                            تاریخ برگشت
                                        </label>

                                        <span>
                                            {returnDate}
                                        </span>

                                        <DatePicker
                                            title='تاریخ برگشت'
                                            defaultValue={true}
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
                        </div>
                    </div>
                </div>
            </header>

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

                                <button onClick={(event: any) => { event.preventDefault(); const element: any = document.querySelector('#cities_parent'); element?.scroll({ left: element?.scrollLeft - 80, behavior: 'smooth' }) }}>
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

            <section className={styles.homeProposal} id='proposal' style={{ backgroundImage: `url(${Texture})` }}>
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
                                <div id='proposal_origin_parent' data-open={proposalOriginActivate} onClick={() => setProposalOriginActivate(!proposalOriginActivate)}>
                                    {
                                        !proposalOrigin
                                            ?
                                            <span>
                                                مبدا
                                            </span>
                                            :
                                            <span data-activate={true}>
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

                                <div id='proposal_destination_parent' data-open={proposalDestinationActivate} onClick={() => setProposalDestinationActivate(!proposalDestinationActivate)}>
                                    {
                                        !proposalDestination
                                            ?
                                            <span>
                                                مبدا
                                            </span>
                                            :
                                            <span data-activate={true}>
                                                { proposalDestination }
                                            </span>
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
                            <h2 className='headingPrimary'>از مجله <span>اسکای&zwnj;رو</span></h2>
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
                                    <Link to='#' key={index +'__--' + nanoid()}>
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
                                        <img src={blog?.image}  alt='homeMagazineGallery'/>
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
                            <h2 className='headingPrimary'>دریافت<span> اپلیکیشن اسکای&zwnj;رو </span></h2>
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
                            <p>اسکای&zwnj;رو بزرگترین و معتبرترین سایت خرید اینترنتی بلیط هواپیما ، قطار و اتوبوس در کشور است که از سال ۱۳۹۳ کار خود را شروع کرده و در این مدت توانسته رضایت درصد قابل توجهی ز کاربران را به دست بیاورد. در ابتدا، فروش بلیط پرواز داخلی در دستور کار اسکای&zwnj;رو قرار داشت اما به مرور امکان خرید سایر محصولات گردشگری نیز به اسکای&zwnj;رو اضافه شد</p>
                            <p>اسکای&zwnj;رو بزرگترین و معتبرترین سایت خرید اینترنتی بلیط هواپیما ، قطار و اتوبوس در کشور است که از سال ۱۳۹۳ کار خود را شروع کرده و در این مدت توانسته رضایت درصد قابل توجهی ز کاربران را به دست بیاورد. در ابتدا، فروش بلیط پرواز داخلی در دستور کار اسکای&zwnj;رو قرار داشت اما به مرور امکان خرید سایر محصولات گردشگری نیز به اسکای&zwnj;رو اضافه شد</p>
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
    );
};

export default Home;
