import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useCallback, useState } from 'react';
import { DatePicker } from "jalali-react-datepicker";

import { togglePopupHiddenLogin } from '../../redux/popup/popup.actions';

import { ReactComponent as Box4 } from '../../assets/icons/box-4.svg';
import { ReactComponent as Blogs } from '../../assets/icons/blogs.svg';
import { ReactComponent as News } from '../../assets/images/latest-news.svg';
import { ReactComponent as Bell } from '../../assets/icons/bell.svg';
import { ReactComponent as Check } from '../../assets/icons/check.svg';
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
import { ReactComponent as Arrow2 } from '../../assets/icons/arrow-2.svg';
import { ReactComponent as Arrow3 } from '../../assets/icons/arrow-3.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Reserve } from '../../assets/icons/reserve.svg';
import { ReactComponent as Box1 } from '../../assets/icons/box-1.svg';
import { ReactComponent as Box2 } from '../../assets/icons/box-2.svg';
import { ReactComponent as Box3 } from '../../assets/icons/box-3.svg';
import { ReactComponent as AppPhone } from '../../assets/images/app-phone.svg';
import { ReactComponent as Download } from '../../assets/icons/download-2.svg';
import Texture from '../../assets/images/texture.svg';
import Image3 from '../../assets/images/image-3.svg';
import Header1 from '../../assets/images/header-1.svg';
import Header2 from '../../assets/images/header-2.svg';
import Header3 from '../../assets/images/header-3.svg';
import Header4 from '../../assets/images/header-4.svg';
import Header5 from '../../assets/images/header-5.svg';

import styles from './home.module.scss';
import Footer from '../../components/layouts/footer/footer.component';

const Home = () =>
{
    const [page, setPage] = useState('plane');
    const [reserveMore, setReserveMore] = useState(false);
    const [passengers, setPassengers] = useState(false);
    const [international, setInternational] = useState(false);
    const [faq, setFaq] = useState(0);
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);
    const [babyCount, setBabyCount] = useState(0);
    const [roomCount, setRoomCount] = useState(0);
    const [origin, setOrigin] = useState<string>('');
    const [destination, setDestination] = useState('');
    const [countActive, setCountActive] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const dispatch = useDispatch();
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

                if (event.target.value && !cityName.includes(event.target.value))
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

                if (event.target.value && !cityName.includes(event.target.value))
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
            const exchangeIcon = document.querySelectorAll('#exchange_icon');

            inputParent.forEach(f => f.setAttribute('data-activate', 'true'));
            options.forEach(f => f.setAttribute('data-activate', 'true'));
            exchangeIcon.forEach(f => f.setAttribute('data-activate', 'false'));
        }, []);
    const onFocusDestination = useCallback(
        () =>
        {
            const inputParent = document.querySelectorAll('#destination_input_parent');
            const options = document.querySelectorAll('#destination_options');
            const exchangeIcon = document.querySelectorAll('#exchange_icon');

            inputParent.forEach(f => f.setAttribute('data-activate', 'true'));
            options.forEach(f => f.setAttribute('data-activate', 'true'));
            exchangeIcon.forEach(f => f.setAttribute('data-activate', 'false'));
        }, []);
    const onClickExchange = useCallback(
        () =>
        {
            setOrigin(destination);
            setDestination(origin);
        }, [destination, setDestination, origin, setOrigin]);
    const handleDetail = useCallback(
        (listener?: boolean) =>
        {
            // @ts-ignore
            const details = [...document.querySelectorAll('details')];

            if (listener)
            {
                document.addEventListener('click', (event: any) =>
                {
                    if (!details.some((element) => element.contains(event?.target)))
                    {
                        for (let detail of details)
                        {
                            if (!detail?.classList?.contains('passengers'))
                            {
                                detail.removeAttribute('open');
                            }
                        }
                    }
                })
            }
            else
            {
                details.forEach(f => f.removeAttribute('open'));
            }
        }, [])

    React.useEffect(() =>
    {
        handleDetail(true);

        const passengersParent = [...document.querySelectorAll('#passengers_parent')];
        const originInputParent = [...document.querySelectorAll('#origin_input_parent')];
        const destinationInputParent = [...document.querySelectorAll('#destination_input_parent')];

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
            }
            if (!destinationInputParent?.some((element) => element?.contains(event?.target)))
            {
                const inputParent = document.querySelectorAll('#destination_input_parent');
                const options = document.querySelectorAll('#destination_options');
                const exchangeIcon = document.querySelectorAll('#exchange_icon');

                inputParent.forEach(f => f.setAttribute('data-activate', 'false'));
                options.forEach(f => f.setAttribute('data-activate', 'false'));
                exchangeIcon.forEach(f => f.setAttribute('data-activate', 'true'));
            }
            if (!passengersParent?.some((element) => element?.contains(event?.target)))
            {
                // console.log(passengersParent)

                const passengersDetails = document.querySelectorAll('.passengers');

                setPassengers(false);
                passengersDetails.forEach(f => f.removeAttribute('open'));
            }
        })
    }, [handleDetail, setPassengers, setPassengers]);

    return (
        <main className={styles.home}>
            <header className={styles.homeHeader}>
                <div className={styles.homeHeaderMain}>
                    <span className={styles.homeHeaderMainBackground}/>
                    <nav className={styles.homeHeaderMainNav}>
                        <Logo />
                        <ul className={styles.homeHeaderMainNavList}>
                            <li className={styles.homeHeaderMainNavItem}>
                                صفحه اصلی
                            </li>
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
                            <li className={styles.homeHeaderMainNavItem}>
                                راهنمایی و پشتیبانی
                            </li>
                            <li className={styles.homeHeaderMainNavItem}>
                                <ThreeDots />
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <aside className={styles.homeHeaderMainAside}>
                            <Link to='/'>
                                مشاهده پیشنهادات
                                <Arrow />
                            </Link>
                            <div>
                                <button onClick={() => dispatch(togglePopupHiddenLogin())}>
                                    <User />
                                </button>
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
                                            <strong>با ما در همه حال سفر</strong> با رزرو تور پاپلو
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
                                            <strong>آسوده سفر کنید</strong> با رزرو بلیط قطار از پاپلو
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
                                    {
                                        page ===  'plane'
                                            ?
                                            <Plane />
                                            :
                                            null
                                    }
                                    هواپیما
                                </div>
                                <div className={styles.homeHeaderImageContentBoxNavItem} data-activate={page ===  'hotel' ? 'active' : ''} onClick={() => handlePage('hotel')}>
                                    {
                                        page ===  'hotel'
                                            ?
                                            <Hotel />
                                            :
                                            null
                                    }
                                    هتل
                                </div>
                                <div className={styles.homeHeaderImageContentBoxNavItem} data-activate={page ===  'tour' ? 'active' : ''} onClick={() => handlePage('tour')}>
                                    {
                                        page ===  'tour'
                                            ?
                                            <Tour />
                                            :
                                            null
                                    }
                                    تور
                                </div>
                                <div className={styles.homeHeaderImageContentBoxNavItem} data-activate={page ===  'train' ? 'active' : ''} onClick={() => handlePage('train')}>
                                    {
                                        page ===  'train'
                                            ?
                                            <Train />
                                            :
                                            null
                                    }
                                    قطار
                                </div>
                                <div className={styles.homeHeaderImageContentBoxNavItem} data-activate={page ===  'bus' ? 'active' : ''} onClick={() => handlePage('bus')}>
                                    {
                                        page ===  'bus'
                                            ?
                                            <Bus />
                                            :
                                            null
                                    }
                                    اتوبوس
                                </div>
                            </nav>
                            <div className={styles.homeHeaderImageContentList} data-activate={page ===  'plane' ? 'true' : 'false'}>
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
                                    <div className='custom-select-menu'>
                                        <details className='custom-select'>
                                            <summary className='radios'>
                                                <input type='radio' name='item1' id='item1' title='یک طرفه' onChange={(event: any) => { event.preventDefault() }} checked={true}/>
                                                <input type='radio' name='item1' id='item2' title='رفت و برگشت' onChange={(event: any) => { event.preventDefault() }}/>
                                            </summary>
                                            <ul className='list'>
                                                <li onClick={(event: any) => handleDetail() }>
                                                    <label htmlFor='item1'>
                                                        یک طرفه
                                                    </label>
                                                </li>
                                                <li onClick={(event: any) => handleDetail() }>
                                                    <label htmlFor='item2'>
                                                        رفت و برگشت
                                                    </label>
                                                </li>
                                            </ul>
                                        </details>
                                    </div>
                                    <div id='passengers_parent'>
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
                                                <div className={styles.homeHeaderPassengers}>
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
                                                                onClick={() => { setAdultCount((adultCount + childCount + babyCount >= 9) ? adultCount : adultCount + 1); setCountActive('adult') }}
                                                                data-direction='right'
                                                                data-activate={countActive === 'adult' ? 'active' : null}
                                                                data-disabled={adultCount + childCount + babyCount >= 9}
                                                            >
                                                                <Plus />
                                                            </button>
                                                            <button className={styles.homeHeaderPassengersItemButton} onClick={() =>  setCountActive('adult')} data-activate={countActive === 'adult' ? 'active' : ''}>
                                                                {adultCount}
                                                            </button>
                                                            <button
                                                                className={styles.homeHeaderPassengersItemButton}
                                                                onClick={() => { setAdultCount(adultCount <= 1 ? 1 : adultCount - 1); setCountActive('adult') }}
                                                                data-direction='left' data-activate={countActive === 'adult' ? 'active' : null}
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
                                                                onClick={() => { setChildCount((adultCount + childCount + babyCount >= 9) ? childCount : childCount + 1); setCountActive('child') }}
                                                                data-direction='right'
                                                                data-activate={countActive === 'child' ? 'active' : null}
                                                                data-disabled={adultCount + childCount + babyCount >= 9}
                                                            >
                                                                <Plus />
                                                            </button>
                                                            <button className={styles.homeHeaderPassengersItemButton} onClick={() =>  setCountActive('child')} data-activate={countActive === 'child' ? 'active' : ''}>
                                                                {childCount}
                                                            </button>
                                                            <button
                                                                className={styles.homeHeaderPassengersItemButton}
                                                                onClick={() => { setChildCount(childCount <= 0 ? 0 : childCount - 1); setCountActive('child') }}
                                                                data-direction='left' data-activate={countActive === 'child' ? 'active' : null}
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
                                                                onClick={() => { setBabyCount((adultCount + childCount + babyCount >= 9) ? babyCount : babyCount + 1); setCountActive('baby') }}
                                                                data-direction='right'
                                                                data-activate={countActive === 'baby' ? 'active' : null}
                                                                data-disabled={adultCount + childCount + babyCount >= 9}
                                                            >
                                                                <Plus />
                                                            </button>
                                                            <button className={styles.homeHeaderPassengersItemButton} onClick={() =>  setCountActive('baby')} data-activate={countActive === 'baby' ? 'active' : ''}>
                                                                {babyCount}
                                                            </button>
                                                            <button
                                                                className={styles.homeHeaderPassengersItemButton}
                                                                onClick={() => { setBabyCount(babyCount <= 0 ? 0 : babyCount - 1); setCountActive('baby') }}
                                                                data-direction='left' data-activate={countActive === 'baby' ? 'active' : null}
                                                                data-disabled={babyCount <= 0}
                                                            >
                                                                <Minus />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                                <div className={styles.homeHeaderImageContentItem} data-direction='column'>
                                    <span id='exchange_icon' data-activate="true" onClick={ onClickExchange }>
                                        <Exchange />
                                    </span>
                                    <div className={styles.homeHeaderImageContentItemInput} id='origin_input_parent'>
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
                                                onChange={ onChangeOrigin }
                                                defaultValue={ origin || '' }
                                            />
                                        </div>
                                        <Plane2 />
                                        <div data-options='origin_options' id='origin_options'>
                                            <ul>
                                                <li data-name='شیراز - Shiraz' data-activate={(origin === 'شیراز - Shiraz' ? 'active' : '') + (destination === 'شیراز - Shiraz' ? 'false' : '')} onClick={() => { setOrigin('شیراز - Shiraz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    شیراز - Shiraz
                                                </li>
                                                <li data-name='تهران - Tehran' data-activate={(origin === 'تهران - Tehran' ? 'active' : '') + (destination === 'تهران - Tehran' ? 'false' : '')} onClick={() => { setOrigin('تهران - Tehran'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    تهران - Tehran
                                                </li>
                                                <li data-name='مشهد - Mashhad' data-activate={(origin === 'مشهد - Mashhad' ? 'active' : '') + (destination === 'مشهد - Mashhad' ? 'false' : '')} onClick={() => { setOrigin('مشهد - Mashhad'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    مشهد - Mashhad
                                                </li>
                                                <li data-name='کیش - Kish' data-activate={(origin === 'کیش - Kish' ? 'active' : '') + (destination === 'کیش - Kish' ? 'false' : '')} onClick={() => { setOrigin('کیش - Kish'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    کیش - Kish
                                                </li>
                                                <li data-name='آبادان - Abadan' data-activate={(origin === 'آبادان - Abadan' ? 'active' : '') + (destination === 'آبادان - Abadan' ? 'false' : '')} onClick={() => { setOrigin('آبادان - Abadan'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    آبادان - Abadan
                                                </li>
                                                <li data-name='اهواز - Ahwaz' data-activate={(origin === 'اهواز - Ahwaz' ? 'active' : '') + (destination === 'اهواز - Ahwaz' ? 'false' : '')} onClick={() => { setOrigin('اهواز - Ahwaz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    اهواز - Ahwaz
                                                </li>
                                                <li data-name='رشت - Rasht' data-activate={(origin === 'رشت - Rasht' ? 'active' : '') + (destination === 'رشت - Rasht' ? 'false' : '')} onClick={() => { setOrigin('رشت - Rasht'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    رشت - Rasht
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.homeHeaderImageContentItemInput} id='destination_input_parent'>
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
                                                onChange={ onChangeDestination }
                                                defaultValue={ destination || '' }
                                            />
                                        </div>
                                        <Plane3 />
                                        <div data-options='destination_options' id='destination_options'>
                                            <ul>
                                                <li data-name='شیراز - Shiraz' data-activate={(destination === 'شیراز - Shiraz' ? 'active ' : '') + (origin === 'شیراز - Shiraz' ? 'false' : '')} onClick={() => { setDestination('شیراز - Shiraz'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    شیراز - Shiraz
                                                </li>
                                                <li data-name='تهران - Tehran' data-activate={(destination === 'تهران - Tehran' ? 'active' : '') + (origin === 'تهران - Tehran' ? 'false' : '')} onClick={() => { setDestination('تهران - Tehran'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    تهران - Tehran
                                                </li>
                                                <li data-name='مشهد - Mashhad' data-activate={(destination === 'مشهد - Mashhad' ? 'active' : '') + (origin === 'مشهد - Mashhad' ? 'false' : '')} onClick={() => { setDestination('مشهد - Mashhad'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    مشهد - Mashhad
                                                </li>
                                                <li data-name='کیش - Kish' data-activate={(destination === 'کیش - Kish' ? 'active' : '') + (origin === 'کیش - Kish' ? 'false' : '')} onClick={() => { setDestination('کیش - Kish'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    کیش - Kish
                                                </li>
                                                <li data-name='آبادان - Abadan' data-activate={(destination === 'آبادان - Abadan' ? 'active' : '') + (origin === 'آبادان - Abadan' ? 'false' : '')} onClick={() => { setDestination('آبادان - Abadan'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    آبادان - Abadan
                                                </li>
                                                <li data-name='اهواز - Ahwaz' data-activate={(destination === 'اهواز - Ahwaz' ? 'active' : '') + (origin === 'اهواز - Ahwaz' ? 'false' : '')} onClick={() => { setDestination('اهواز - Ahwaz'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    اهواز - Ahwaz
                                                </li>
                                                <li data-name='رشت - Rasht' data-activate={(destination === 'رشت - Rasht' ? 'active' : '') + (origin === 'رشت - Rasht' ? 'false' : '')} onClick={() => { setDestination('رشت - Rasht'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    رشت - Rasht
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.homeHeaderImageContentItem}>
                                    <div data-type='date'>
                                        <label>
                                            تاریخ رفت
                                        </label>
                                        <DatePicker
                                            timePicker={false}
                                            onClickSubmitButton={({ value }: any) => { setDepartureDate(value); }}
                                        />
                                    </div>
                                    <div data-type='date'>
                                        <label>
                                            تاریخ برگشت
                                        </label>
                                        <DatePicker
                                            timePicker={false}
                                            onClickSubmitButton={({ value }: any) => { setDepartureDate(value); }}
                                        />
                                    </div>
                                </div>
                                <button>
                                    یافتن بلیط
                                </button>
                            </div>
                            <div className={styles.homeHeaderImageContentList} data-activate={page ===  'hotel' ? 'true' : 'false'}>
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
                                    <div id='passengers_parent'>
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
                                                <div className={styles.homeHeaderPassengers}>
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
                                                                onClick={() => { setAdultCount((adultCount + childCount + babyCount >= 9) ? adultCount : adultCount + 1); setCountActive('adult') }}
                                                                data-direction='right'
                                                                data-activate={countActive === 'adult' ? 'active' : null}
                                                                data-disabled={adultCount + childCount + babyCount >= 9}
                                                            >
                                                                <Plus />
                                                            </button>
                                                            <button className={styles.homeHeaderPassengersItemButton} onClick={() =>  setCountActive('adult')} data-activate={countActive === 'adult' ? 'active' : ''}>
                                                                {adultCount}
                                                            </button>
                                                            <button
                                                                className={styles.homeHeaderPassengersItemButton}
                                                                onClick={() => { setAdultCount(adultCount <= 1 ? 1 : adultCount - 1); setCountActive('adult') }}
                                                                data-direction='left' data-activate={countActive === 'adult' ? 'active' : null}
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
                                                                onClick={() => { setChildCount((adultCount + childCount + babyCount >= 9) ? childCount : childCount + 1); setCountActive('child') }}
                                                                data-direction='right'
                                                                data-activate={countActive === 'child' ? 'active' : null}
                                                                data-disabled={adultCount + childCount + babyCount >= 9}
                                                            >
                                                                <Plus />
                                                            </button>
                                                            <button className={styles.homeHeaderPassengersItemButton} onClick={() =>  setCountActive('child')} data-activate={countActive === 'child' ? 'active' : ''}>
                                                                {childCount}
                                                            </button>
                                                            <button
                                                                className={styles.homeHeaderPassengersItemButton}
                                                                onClick={() => { setChildCount(childCount <= 0 ? 0 : childCount - 1); setCountActive('child') }}
                                                                data-direction='left' data-activate={countActive === 'child' ? 'active' : null}
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
                                                                onClick={() => { setBabyCount((adultCount + childCount + babyCount >= 9) ? babyCount : babyCount + 1); setCountActive('baby') }}
                                                                data-direction='right'
                                                                data-activate={countActive === 'baby' ? 'active' : null}
                                                                data-disabled={adultCount + childCount + babyCount >= 9}
                                                            >
                                                                <Plus />
                                                            </button>
                                                            <button className={styles.homeHeaderPassengersItemButton} onClick={() =>  setCountActive('baby')} data-activate={countActive === 'baby' ? 'active' : ''}>
                                                                {babyCount}
                                                            </button>
                                                            <button
                                                                className={styles.homeHeaderPassengersItemButton}
                                                                onClick={() => { setBabyCount(babyCount <= 0 ? 0 : babyCount - 1); setCountActive('baby') }}
                                                                data-direction='left' data-activate={countActive === 'baby' ? 'active' : null}
                                                                data-disabled={babyCount <= 0}
                                                            >
                                                                <Minus />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                                <div className={styles.homeHeaderImageContentItem} data-direction='column'>
                                    <div className={styles.homeHeaderImageContentItemInput} id='origin_input_parent'>
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
                                                onChange={ onChangeOrigin }
                                                defaultValue={ origin || '' }
                                            />
                                        </div>
                                        <Plane2 />
                                        <div data-options='origin_options' id='origin_options'>
                                            <ul>
                                                <li data-name='شیراز - Shiraz' data-activate={origin === 'شیراز - Shiraz' ? 'active' : ''} onClick={() => { setOrigin('شیراز - Shiraz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    شیراز - Shiraz
                                                </li>
                                                <li data-name='تهران - Tehran' data-activate={origin === 'تهران - Tehran' ? 'active' : ''} onClick={() => { setOrigin('تهران - Tehran'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    تهران - Tehran
                                                </li>
                                                <li data-name='مشهد - Mashhad' data-activate={origin === 'مشهد - Mashhad' ? 'active' : ''} onClick={() => { setOrigin('مشهد - Mashhad'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    مشهد - Mashhad
                                                </li>
                                                <li data-name='کیش - Kish' data-activate={origin === 'کیش - Kish' ? 'active' : ''} onClick={() => { setOrigin('کیش - Kish'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    کیش - Kish
                                                </li>
                                                <li data-name='آبادان - Abadan' data-activate={origin === 'آبادان - Abadan' ? 'active' : ''} onClick={() => { setOrigin('آبادان - Abadan'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    آبادان - Abadan
                                                </li>
                                                <li data-name='اهواز - Ahwaz' data-activate={origin === 'اهواز - Ahwaz' ? 'active' : ''} onClick={() => { setOrigin('اهواز - Ahwaz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    اهواز - Ahwaz
                                                </li>
                                                <li data-name='رشت - Rasht' data-activate={origin === 'رشت - Rasht' ? 'active' : ''} onClick={() => { setOrigin('رشت - Rasht'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    رشت - Rasht
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.homeHeaderImageContentItem}>
                                    <div data-type='date'>
                                        <label>
                                            تاریخ رفت
                                        </label>
                                        <DatePicker
                                            timePicker={false}
                                            onClickSubmitButton={({ value }: any) => { setDepartureDate(value); }}
                                        />
                                    </div>
                                    <div data-type='date'>
                                        <label>
                                            تاریخ برگشت
                                        </label>
                                        <DatePicker
                                            timePicker={false}
                                            onClickSubmitButton={({ value }: any) => { setDepartureDate(value); }}
                                        />
                                    </div>
                                </div>
                                <button>
                                    یافتن بلیط
                                </button>
                            </div>
                            <div className={styles.homeHeaderImageContentList} data-activate={page ===  'tour' ? 'true' : 'false'}>
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
                                    <div id='passengers_parent'>
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
                                                <div className={styles.homeHeaderPassengers}>
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
                                                                onClick={() => { setAdultCount((adultCount + childCount + babyCount >= 9) ? adultCount : adultCount + 1); setCountActive('adult') }}
                                                                data-direction='right'
                                                                data-activate={countActive === 'adult' ? 'active' : null}
                                                                data-disabled={adultCount + childCount + babyCount >= 9}
                                                            >
                                                                <Plus />
                                                            </button>
                                                            <button className={styles.homeHeaderPassengersItemButton} onClick={() =>  setCountActive('adult')} data-activate={countActive === 'adult' ? 'active' : ''}>
                                                                {adultCount}
                                                            </button>
                                                            <button
                                                                className={styles.homeHeaderPassengersItemButton}
                                                                onClick={() => { setAdultCount(adultCount <= 1 ? 1 : adultCount - 1); setCountActive('adult') }}
                                                                data-direction='left' data-activate={countActive === 'adult' ? 'active' : null}
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
                                                                onClick={() => { setChildCount((adultCount + childCount + babyCount >= 9) ? childCount : childCount + 1); setCountActive('child') }}
                                                                data-direction='right'
                                                                data-activate={countActive === 'child' ? 'active' : null}
                                                                data-disabled={adultCount + childCount + babyCount >= 9}
                                                            >
                                                                <Plus />
                                                            </button>
                                                            <button className={styles.homeHeaderPassengersItemButton} onClick={() =>  setCountActive('child')} data-activate={countActive === 'child' ? 'active' : ''}>
                                                                {childCount}
                                                            </button>
                                                            <button
                                                                className={styles.homeHeaderPassengersItemButton}
                                                                onClick={() => { setChildCount(childCount <= 0 ? 0 : childCount - 1); setCountActive('child') }}
                                                                data-direction='left' data-activate={countActive === 'child' ? 'active' : null}
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
                                                                onClick={() => { setBabyCount((adultCount + childCount + babyCount >= 9) ? babyCount : babyCount + 1); setCountActive('baby') }}
                                                                data-direction='right'
                                                                data-activate={countActive === 'baby' ? 'active' : null}
                                                                data-disabled={adultCount + childCount + babyCount >= 9}
                                                            >
                                                                <Plus />
                                                            </button>
                                                            <button className={styles.homeHeaderPassengersItemButton} onClick={() =>  setCountActive('baby')} data-activate={countActive === 'baby' ? 'active' : ''}>
                                                                {babyCount}
                                                            </button>
                                                            <button
                                                                className={styles.homeHeaderPassengersItemButton}
                                                                onClick={() => { setBabyCount(babyCount <= 0 ? 0 : babyCount - 1); setCountActive('baby') }}
                                                                data-direction='left' data-activate={countActive === 'baby' ? 'active' : null}
                                                                data-disabled={babyCount <= 0}
                                                            >
                                                                <Minus />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                                <div className={styles.homeHeaderImageContentItem} data-direction='column'>
                                    <div className={styles.homeHeaderImageContentItemInput} id='origin_input_parent'>
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
                                                onChange={ onChangeOrigin }
                                                defaultValue={ origin || '' }
                                            />
                                        </div>
                                        <Plane2 />
                                        <div data-options='origin_options' id='origin_options'>
                                            <ul>
                                                <li data-name='شیراز - Shiraz' data-activate={(origin === 'شیراز - Shiraz' ? 'active' : '') + (destination === 'شیراز - Shiraz' ? 'false' : '')} onClick={() => { setOrigin('شیراز - Shiraz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    شیراز - Shiraz
                                                </li>
                                                <li data-name='تهران - Tehran' data-activate={(origin === 'تهران - Tehran' ? 'active' : '') + (destination === 'تهران - Tehran' ? 'false' : '')} onClick={() => { setOrigin('تهران - Tehran'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    تهران - Tehran
                                                </li>
                                                <li data-name='مشهد - Mashhad' data-activate={(origin === 'مشهد - Mashhad' ? 'active' : '') + (destination === 'مشهد - Mashhad' ? 'false' : '')} onClick={() => { setOrigin('مشهد - Mashhad'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    مشهد - Mashhad
                                                </li>
                                                <li data-name='کیش - Kish' data-activate={(origin === 'کیش - Kish' ? 'active' : '') + (destination === 'کیش - Kish' ? 'false' : '')} onClick={() => { setOrigin('کیش - Kish'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    کیش - Kish
                                                </li>
                                                <li data-name='آبادان - Abadan' data-activate={(origin === 'آبادان - Abadan' ? 'active' : '') + (destination === 'آبادان - Abadan' ? 'false' : '')} onClick={() => { setOrigin('آبادان - Abadan'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    آبادان - Abadan
                                                </li>
                                                <li data-name='اهواز - Ahwaz' data-activate={(origin === 'اهواز - Ahwaz' ? 'active' : '') + (destination === 'اهواز - Ahwaz' ? 'false' : '')} onClick={() => { setOrigin('اهواز - Ahwaz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    اهواز - Ahwaz
                                                </li>
                                                <li data-name='رشت - Rasht' data-activate={(origin === 'رشت - Rasht' ? 'active' : '') + (destination === 'رشت - Rasht' ? 'false' : '')} onClick={() => { setOrigin('رشت - Rasht'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    رشت - Rasht
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.homeHeaderImageContentItemInput} id='destination_input_parent'>
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
                                                onChange={ onChangeDestination }
                                                defaultValue={ destination || '' }
                                            />
                                        </div>
                                        <Plane3 />
                                        <div data-options='destination_options' id='destination_options'>
                                            <ul>
                                                <li data-name='شیراز - Shiraz' data-activate={(destination === 'شیراز - Shiraz' ? 'active ' : '') + (origin === 'شیراز - Shiraz' ? 'false' : '')} onClick={() => { setDestination('شیراز - Shiraz'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    شیراز - Shiraz
                                                </li>
                                                <li data-name='تهران - Tehran' data-activate={(destination === 'تهران - Tehran' ? 'active' : '') + (origin === 'تهران - Tehran' ? 'false' : '')} onClick={() => { setDestination('تهران - Tehran'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    تهران - Tehran
                                                </li>
                                                <li data-name='مشهد - Mashhad' data-activate={(destination === 'مشهد - Mashhad' ? 'active' : '') + (origin === 'مشهد - Mashhad' ? 'false' : '')} onClick={() => { setDestination('مشهد - Mashhad'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    مشهد - Mashhad
                                                </li>
                                                <li data-name='کیش - Kish' data-activate={(destination === 'کیش - Kish' ? 'active' : '') + (origin === 'کیش - Kish' ? 'false' : '')} onClick={() => { setDestination('کیش - Kish'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    کیش - Kish
                                                </li>
                                                <li data-name='آبادان - Abadan' data-activate={(destination === 'آبادان - Abadan' ? 'active' : '') + (origin === 'آبادان - Abadan' ? 'false' : '')} onClick={() => { setDestination('آبادان - Abadan'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    آبادان - Abadan
                                                </li>
                                                <li data-name='اهواز - Ahwaz' data-activate={(destination === 'اهواز - Ahwaz' ? 'active' : '') + (origin === 'اهواز - Ahwaz' ? 'false' : '')} onClick={() => { setDestination('اهواز - Ahwaz'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    اهواز - Ahwaz
                                                </li>
                                                <li data-name='رشت - Rasht' data-activate={(destination === 'رشت - Rasht' ? 'active' : '') + (origin === 'رشت - Rasht' ? 'false' : '')} onClick={() => { setDestination('رشت - Rasht'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    رشت - Rasht
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.homeHeaderImageContentItem}>
                                    <div data-type='date'>
                                        <label>
                                            تاریخ رفت
                                        </label>
                                        <DatePicker
                                            timePicker={false}
                                            onClickSubmitButton={({ value }: any) => { setDepartureDate(value); }}
                                        />
                                    </div>
                                    <div data-type='date'>
                                        <label>
                                            تاریخ برگشت
                                        </label>
                                        <DatePicker
                                            timePicker={false}
                                            onClickSubmitButton={({ value }: any) => { setDepartureDate(value); }}
                                        />
                                    </div>
                                </div>
                                <button>
                                    یافتن بلیط
                                </button>
                            </div>
                            <div className={styles.homeHeaderImageContentList} data-activate={page ===  'train' ? 'true' : 'false'}>
                                <div className={styles.homeHeaderImageContentItem}>
                                    <div className='custom-select-menu'>
                                        <details className='custom-select detail_2'>
                                            <summary className='radios'>
                                                <input type='radio' name='item2' id='item3' title='دربست' onChange={(event: any) => event.preventDefault()} checked={true}/>
                                                <input type='radio' name='item2' id='item4' title='درنسبت' onChange={(event: any) => event.preventDefault()}/>
                                            </summary>
                                            <ul className='list'>
                                                <li>
                                                    <label htmlFor='item3'>
                                                        دربست
                                                    </label>
                                                </li>
                                                <li>
                                                    <label htmlFor='item4'>
                                                        درنبست
                                                    </label>
                                                </li>
                                            </ul>
                                        </details>
                                    </div>
                                    <div className='custom-select-menu'>
                                        <details className='custom-select detail_1'>
                                            <summary className='radios'>
                                                <input type='radio' name='item4' id='item9' title='یک طرفه' onChange={(event: any) => event.preventDefault()} checked={true}/>
                                                <input type='radio' name='item4' id='item10' title='رفت و برگشت' onChange={(event: any) => event.preventDefault()}/>
                                            </summary>
                                            <ul className='list'>
                                                <li>
                                                    <label htmlFor='item9'>
                                                        یک طرفه
                                                    </label>
                                                </li>
                                                <li>
                                                    <label htmlFor='item10'>
                                                        رفت و برگشت
                                                    </label>
                                                </li>
                                            </ul>
                                        </details>
                                    </div>
                                    <div id='passengers_parent'>
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
                                                <div className={styles.homeHeaderPassengers}>
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
                                                                onClick={() => { setAdultCount((adultCount + childCount + babyCount >= 9) ? adultCount : adultCount + 1); setCountActive('adult') }}
                                                                data-direction='right'
                                                                data-activate={countActive === 'adult' ? 'active' : null}
                                                                data-disabled={adultCount + childCount + babyCount >= 9}
                                                            >
                                                                <Plus />
                                                            </button>
                                                            <button className={styles.homeHeaderPassengersItemButton} onClick={() =>  setCountActive('adult')} data-activate={countActive === 'adult' ? 'active' : ''}>
                                                                {adultCount}
                                                            </button>
                                                            <button
                                                                className={styles.homeHeaderPassengersItemButton}
                                                                onClick={() => { setAdultCount(adultCount <= 1 ? 1 : adultCount - 1); setCountActive('adult') }}
                                                                data-direction='left' data-activate={countActive === 'adult' ? 'active' : null}
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
                                                                onClick={() => { setChildCount((adultCount + childCount + babyCount >= 9) ? childCount : childCount + 1); setCountActive('child') }}
                                                                data-direction='right'
                                                                data-activate={countActive === 'child' ? 'active' : null}
                                                                data-disabled={adultCount + childCount + babyCount >= 9}
                                                            >
                                                                <Plus />
                                                            </button>
                                                            <button className={styles.homeHeaderPassengersItemButton} onClick={() =>  setCountActive('child')} data-activate={countActive === 'child' ? 'active' : ''}>
                                                                {childCount}
                                                            </button>
                                                            <button
                                                                className={styles.homeHeaderPassengersItemButton}
                                                                onClick={() => { setChildCount(childCount <= 0 ? 0 : childCount - 1); setCountActive('child') }}
                                                                data-direction='left' data-activate={countActive === 'child' ? 'active' : null}
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
                                                                onClick={() => { setBabyCount((adultCount + childCount + babyCount >= 9) ? babyCount : babyCount + 1); setCountActive('baby') }}
                                                                data-direction='right'
                                                                data-activate={countActive === 'baby' ? 'active' : null}
                                                                data-disabled={adultCount + childCount + babyCount >= 9}
                                                            >
                                                                <Plus />
                                                            </button>
                                                            <button className={styles.homeHeaderPassengersItemButton} onClick={() =>  setCountActive('baby')} data-activate={countActive === 'baby' ? 'active' : ''}>
                                                                {babyCount}
                                                            </button>
                                                            <button
                                                                className={styles.homeHeaderPassengersItemButton}
                                                                onClick={() => { setBabyCount(babyCount <= 0 ? 0 : babyCount - 1); setCountActive('baby') }}
                                                                data-direction='left' data-activate={countActive === 'baby' ? 'active' : null}
                                                                data-disabled={babyCount <= 0}
                                                            >
                                                                <Minus />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                                <div className={styles.homeHeaderImageContentItem} data-direction='column'>
                                    <div className={styles.homeHeaderImageContentItemInput} id='origin_input_parent'>
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
                                                onChange={ onChangeOrigin }
                                                defaultValue={ origin || '' }
                                            />
                                        </div>
                                        <Plane2 />
                                        <div data-options='origin_options' id='origin_options'>
                                            <ul>
                                                <li data-name='شیراز - Shiraz' data-activate={(origin === 'شیراز - Shiraz' ? 'active' : '') + (destination === 'شیراز - Shiraz' ? 'false' : '')} onClick={() => { setOrigin('شیراز - Shiraz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    شیراز - Shiraz
                                                </li>
                                                <li data-name='تهران - Tehran' data-activate={(origin === 'تهران - Tehran' ? 'active' : '') + (destination === 'تهران - Tehran' ? 'false' : '')} onClick={() => { setOrigin('تهران - Tehran'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    تهران - Tehran
                                                </li>
                                                <li data-name='مشهد - Mashhad' data-activate={(origin === 'مشهد - Mashhad' ? 'active' : '') + (destination === 'مشهد - Mashhad' ? 'false' : '')} onClick={() => { setOrigin('مشهد - Mashhad'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    مشهد - Mashhad
                                                </li>
                                                <li data-name='کیش - Kish' data-activate={(origin === 'کیش - Kish' ? 'active' : '') + (destination === 'کیش - Kish' ? 'false' : '')} onClick={() => { setOrigin('کیش - Kish'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    کیش - Kish
                                                </li>
                                                <li data-name='آبادان - Abadan' data-activate={(origin === 'آبادان - Abadan' ? 'active' : '') + (destination === 'آبادان - Abadan' ? 'false' : '')} onClick={() => { setOrigin('آبادان - Abadan'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    آبادان - Abadan
                                                </li>
                                                <li data-name='اهواز - Ahwaz' data-activate={(origin === 'اهواز - Ahwaz' ? 'active' : '') + (destination === 'اهواز - Ahwaz' ? 'false' : '')} onClick={() => { setOrigin('اهواز - Ahwaz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    اهواز - Ahwaz
                                                </li>
                                                <li data-name='رشت - Rasht' data-activate={(origin === 'رشت - Rasht' ? 'active' : '') + (destination === 'رشت - Rasht' ? 'false' : '')} onClick={() => { setOrigin('رشت - Rasht'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    رشت - Rasht
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.homeHeaderImageContentItemInput} id='destination_input_parent'>
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
                                                onChange={ onChangeDestination }
                                                defaultValue={ destination || '' }
                                            />
                                        </div>
                                        <Plane3 />
                                        <div data-options='destination_options' id='destination_options'>
                                            <ul>
                                                <li data-name='شیراز - Shiraz' data-activate={(destination === 'شیراز - Shiraz' ? 'active ' : '') + (origin === 'شیراز - Shiraz' ? 'false' : '')} onClick={() => { setDestination('شیراز - Shiraz'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    شیراز - Shiraz
                                                </li>
                                                <li data-name='تهران - Tehran' data-activate={(destination === 'تهران - Tehran' ? 'active' : '') + (origin === 'تهران - Tehran' ? 'false' : '')} onClick={() => { setDestination('تهران - Tehran'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    تهران - Tehran
                                                </li>
                                                <li data-name='مشهد - Mashhad' data-activate={(destination === 'مشهد - Mashhad' ? 'active' : '') + (origin === 'مشهد - Mashhad' ? 'false' : '')} onClick={() => { setDestination('مشهد - Mashhad'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    مشهد - Mashhad
                                                </li>
                                                <li data-name='کیش - Kish' data-activate={(destination === 'کیش - Kish' ? 'active' : '') + (origin === 'کیش - Kish' ? 'false' : '')} onClick={() => { setDestination('کیش - Kish'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    کیش - Kish
                                                </li>
                                                <li data-name='آبادان - Abadan' data-activate={(destination === 'آبادان - Abadan' ? 'active' : '') + (origin === 'آبادان - Abadan' ? 'false' : '')} onClick={() => { setDestination('آبادان - Abadan'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    آبادان - Abadan
                                                </li>
                                                <li data-name='اهواز - Ahwaz' data-activate={(destination === 'اهواز - Ahwaz' ? 'active' : '') + (origin === 'اهواز - Ahwaz' ? 'false' : '')} onClick={() => { setDestination('اهواز - Ahwaz'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    اهواز - Ahwaz
                                                </li>
                                                <li data-name='رشت - Rasht' data-activate={(destination === 'رشت - Rasht' ? 'active' : '') + (origin === 'رشت - Rasht' ? 'false' : '')} onClick={() => { setDestination('رشت - Rasht'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    رشت - Rasht
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.homeHeaderImageContentItem}>
                                    <div data-type='date'>
                                        <label>
                                            تاریخ رفت
                                        </label>
                                        <DatePicker
                                            timePicker={false}
                                            onClickSubmitButton={({ value }: any) => { setDepartureDate(value); }}
                                        />
                                    </div>
                                    <div data-type='date'>
                                        <label>
                                            تاریخ برگشت
                                        </label>
                                        <DatePicker
                                            timePicker={false}
                                            onClickSubmitButton={({ value }: any) => { setDepartureDate(value); }}
                                        />
                                    </div>
                                </div>
                                <button>
                                    یافتن بلیط
                                </button>
                            </div>
                            <div className={styles.homeHeaderImageContentList} data-activate={page ===  'bus' ? 'true' : 'false'}>
                                <div className={styles.homeHeaderImageContentItem}>
                                    <div className='custom-select-menu'>
                                        <details className='custom-select'>
                                            <summary className='radios'>
                                                <input type='radio' name='item3' id='item5' title='یک طرفه' onChange={(event: any) => event.preventDefault()} checked={true}/>
                                                <input type='radio' name='item3' id='item6' title='رفت و برگشت' onChange={(event: any) => event.preventDefault()}/>
                                            </summary>
                                            <ul className='list'>
                                                <li>
                                                    <label htmlFor='item5'>
                                                        یک طرفه
                                                    </label>
                                                </li>
                                                <li>
                                                    <label htmlFor='item6'>
                                                        رفت و برگشت
                                                    </label>
                                                </li>
                                            </ul>
                                        </details>
                                    </div>
                                </div>
                                <div className={styles.homeHeaderImageContentItem} data-direction='column'>
                                    <div className={styles.homeHeaderImageContentItemInput} id='origin_input_parent'>
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
                                                onChange={ onChangeOrigin }
                                                defaultValue={ origin || '' }
                                            />
                                        </div>
                                        <Plane2 />
                                        <div data-options='origin_options' id='origin_options'>
                                            <ul>
                                                <li data-name='شیراز - Shiraz' data-activate={(origin === 'شیراز - Shiraz' ? 'active' : '') + (destination === 'شیراز - Shiraz' ? 'false' : '')} onClick={() => { setOrigin('شیراز - Shiraz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    شیراز - Shiraz
                                                </li>
                                                <li data-name='تهران - Tehran' data-activate={(origin === 'تهران - Tehran' ? 'active' : '') + (destination === 'تهران - Tehran' ? 'false' : '')} onClick={() => { setOrigin('تهران - Tehran'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    تهران - Tehran
                                                </li>
                                                <li data-name='مشهد - Mashhad' data-activate={(origin === 'مشهد - Mashhad' ? 'active' : '') + (destination === 'مشهد - Mashhad' ? 'false' : '')} onClick={() => { setOrigin('مشهد - Mashhad'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    مشهد - Mashhad
                                                </li>
                                                <li data-name='کیش - Kish' data-activate={(origin === 'کیش - Kish' ? 'active' : '') + (destination === 'کیش - Kish' ? 'false' : '')} onClick={() => { setOrigin('کیش - Kish'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    کیش - Kish
                                                </li>
                                                <li data-name='آبادان - Abadan' data-activate={(origin === 'آبادان - Abadan' ? 'active' : '') + (destination === 'آبادان - Abadan' ? 'false' : '')} onClick={() => { setOrigin('آبادان - Abadan'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    آبادان - Abadan
                                                </li>
                                                <li data-name='اهواز - Ahwaz' data-activate={(origin === 'اهواز - Ahwaz' ? 'active' : '') + (destination === 'اهواز - Ahwaz' ? 'false' : '')} onClick={() => { setOrigin('اهواز - Ahwaz'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    اهواز - Ahwaz
                                                </li>
                                                <li data-name='رشت - Rasht' data-activate={(origin === 'رشت - Rasht' ? 'active' : '') + (destination === 'رشت - Rasht' ? 'false' : '')} onClick={() => { setOrigin('رشت - Rasht'); const inputParent = document.querySelector('#origin_input_parent'); const options = document.querySelector('#origin_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    رشت - Rasht
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.homeHeaderImageContentItemInput} id='destination_input_parent'>
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
                                                onChange={ onChangeDestination }
                                                defaultValue={ destination || '' }
                                            />
                                        </div>
                                        <Plane3 />
                                        <div data-options='destination_options' id='destination_options'>
                                            <ul>
                                                <li data-name='شیراز - Shiraz' data-activate={(destination === 'شیراز - Shiraz' ? 'active ' : '') + (origin === 'شیراز - Shiraz' ? 'false' : '')} onClick={() => { setDestination('شیراز - Shiraz'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    شیراز - Shiraz
                                                </li>
                                                <li data-name='تهران - Tehran' data-activate={(destination === 'تهران - Tehran' ? 'active' : '') + (origin === 'تهران - Tehran' ? 'false' : '')} onClick={() => { setDestination('تهران - Tehran'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    تهران - Tehran
                                                </li>
                                                <li data-name='مشهد - Mashhad' data-activate={(destination === 'مشهد - Mashhad' ? 'active' : '') + (origin === 'مشهد - Mashhad' ? 'false' : '')} onClick={() => { setDestination('مشهد - Mashhad'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    مشهد - Mashhad
                                                </li>
                                                <li data-name='کیش - Kish' data-activate={(destination === 'کیش - Kish' ? 'active' : '') + (origin === 'کیش - Kish' ? 'false' : '')} onClick={() => { setDestination('کیش - Kish'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    کیش - Kish
                                                </li>
                                                <li data-name='آبادان - Abadan' data-activate={(destination === 'آبادان - Abadan' ? 'active' : '') + (origin === 'آبادان - Abadan' ? 'false' : '')} onClick={() => { setDestination('آبادان - Abadan'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    آبادان - Abadan
                                                </li>
                                                <li data-name='اهواز - Ahwaz' data-activate={(destination === 'اهواز - Ahwaz' ? 'active' : '') + (origin === 'اهواز - Ahwaz' ? 'false' : '')} onClick={() => { setDestination('اهواز - Ahwaz'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    اهواز - Ahwaz
                                                </li>
                                                <li data-name='رشت - Rasht' data-activate={(destination === 'رشت - Rasht' ? 'active' : '') + (origin === 'رشت - Rasht' ? 'false' : '')} onClick={() => { setDestination('رشت - Rasht'); const inputParent = document.querySelector('#destination_input_parent'); const options = document.querySelector('#destination_options'); const exchangeIcon = document.querySelector('#exchange_icon'); inputParent?.setAttribute('data-activate', 'false'); options?.setAttribute('data-activate', 'false'); exchangeIcon?.setAttribute('data-activate', 'true'); }}>
                                                    <Plane />
                                                    رشت - Rasht
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.homeHeaderImageContentItem}>
                                    <div data-type='date'>
                                        <label>
                                            تاریخ رفت
                                        </label>
                                        <DatePicker
                                            timePicker={false}
                                            onClickSubmitButton={({ value }: any) => { setDepartureDate(value); }}
                                        />
                                    </div>
                                    <div data-type='date'>
                                        <label>
                                            تاریخ برگشت
                                        </label>
                                        <DatePicker
                                            timePicker={false}
                                            onClickSubmitButton={({ value }: any) => { setDepartureDate(value); }}
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
                                    <li>
                                        <button data-activate='true'>تهران</button>
                                    </li>
                                    <li>
                                        <button>مشهد</button>
                                    </li>
                                    <li>
                                        <button>شیراز</button>
                                    </li>
                                    <li>
                                        <button>اصفهان</button>
                                    </li>
                                    <li>
                                        <button>کیش</button>
                                    </li>
                                    <li>
                                        <button>رشت</button>
                                    </li>
                                    <li>
                                        <button>اهواز</button>
                                    </li>
                                    <li>
                                        <button>اهواز</button>
                                    </li>
                                    <li>
                                        <button>اهواز</button>
                                    </li>
                                    <li>
                                        <button>اهواز</button>
                                    </li>
                                    <li>
                                        <button>اهواز</button>
                                    </li>
                                    <li>
                                        <button>اهواز</button>
                                    </li>
                                </ul>

                                <button onClick={(event: any) => { event.preventDefault(); const element: any = document.querySelector('#cities_parent'); element?.scroll({ left: element?.scrollLeft - 80, behavior: 'smooth' }) }}>
                                    بیشتر
                                    <Arrow2 />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.homeFastSearchBoxes}>
                        <div>
                            <div className={styles.homeFastSearchBoxesBox}>
                                <div className={styles.homeFastSearchBoxesBoxTop}>
                                    <div className={styles.homeFastSearchBoxesBoxTopInner}>
                                        <Box4 />
                                        <span>هواپیمایی آسمان</span>
                                    </div>

                                    <span className={styles.homeFastSearchBoxesBoxTopBudget}>اکونومی</span>
                                </div>

                                <div className={styles.homeFastSearchBoxesBoxMiddle}>
                                    <span>تهران</span>
                                    <Plane />
                                    <span>مشهد</span>
                                </div>
                                <div className={styles.homeFastSearchBoxesBoxMiddle2}>
                                    <span>16:45</span>
                                    <span>یک‌شنبه 30 آبان</span>
                                    <span>17:25</span>
                                </div>
                            </div>
                            <Link to='#' className={styles.homeFastSearchBoxesBottom}>
                                <i />
                                <i />
                                <hr />
                                <div>
                                    <p>شروع قیمت از</p>
                                    <span>13/479/400 ریال</span>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <div className={styles.homeFastSearchBoxesBox}>
                                <div className={styles.homeFastSearchBoxesBoxTop}>
                                    <div className={styles.homeFastSearchBoxesBoxTopInner}>
                                        <Box4 />
                                        <span>هواپیمایی آسمان</span>
                                    </div>

                                    <span className={styles.homeFastSearchBoxesBoxTopBudget}>اکونومی</span>
                                </div>

                                <div className={styles.homeFastSearchBoxesBoxMiddle}>
                                    <span>تهران</span>
                                    <Plane />
                                    <span>مشهد</span>
                                </div>
                                <div className={styles.homeFastSearchBoxesBoxMiddle2}>
                                    <span>16:45</span>
                                    <span>یک‌شنبه 30 آبان</span>
                                    <span>17:25</span>
                                </div>
                            </div>
                            <Link to='#' className={styles.homeFastSearchBoxesBottom}>
                                <i />
                                <i />
                                <hr />
                                <div>
                                    <p>شروع قیمت از</p>
                                    <span>13/479/400 ریال</span>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <div className={styles.homeFastSearchBoxesBox}>
                                <div className={styles.homeFastSearchBoxesBoxTop}>
                                    <div className={styles.homeFastSearchBoxesBoxTopInner}>
                                        <Box4 />
                                        <span>هواپیمایی آسمان</span>
                                    </div>

                                    <span className={styles.homeFastSearchBoxesBoxTopBudget}>اکونومی</span>
                                </div>

                                <div className={styles.homeFastSearchBoxesBoxMiddle}>
                                    <span>تهران</span>
                                    <Plane />
                                    <span>مشهد</span>
                                </div>
                                <div className={styles.homeFastSearchBoxesBoxMiddle2}>
                                    <span>16:45</span>
                                    <span>یک‌شنبه 30 آبان</span>
                                    <span>17:25</span>
                                </div>
                            </div>
                            <Link to='#' className={styles.homeFastSearchBoxesBottom}>
                                <i />
                                <i />
                                <hr />
                                <div>
                                    <p>شروع قیمت از</p>
                                    <span>13/479/400 ریال</span>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <div className={styles.homeFastSearchBoxesBox}>
                                <div className={styles.homeFastSearchBoxesBoxTop}>
                                    <div className={styles.homeFastSearchBoxesBoxTopInner}>
                                        <Box4 />
                                        <span>هواپیمایی آسمان</span>
                                    </div>

                                    <span className={styles.homeFastSearchBoxesBoxTopBudget}>اکونومی</span>
                                </div>

                                <div className={styles.homeFastSearchBoxesBoxMiddle}>
                                    <span>تهران</span>
                                    <Plane />
                                    <span>مشهد</span>
                                </div>
                                <div className={styles.homeFastSearchBoxesBoxMiddle2}>
                                    <span>16:45</span>
                                    <span>یک‌شنبه 30 آبان</span>
                                    <span>17:25</span>
                                </div>
                            </div>
                            <Link to='#' className={styles.homeFastSearchBoxesBottom}>
                                <i />
                                <i />
                                <hr />
                                <div>
                                    <p>شروع قیمت از</p>
                                    <span>13/479/400 ریال</span>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <div className={styles.homeFastSearchBoxesBox}>
                                <div className={styles.homeFastSearchBoxesBoxTop}>
                                    <div className={styles.homeFastSearchBoxesBoxTopInner}>
                                        <Box4 />
                                        <span>هواپیمایی آسمان</span>
                                    </div>

                                    <span className={styles.homeFastSearchBoxesBoxTopBudget}>اکونومی</span>
                                </div>

                                <div className={styles.homeFastSearchBoxesBoxMiddle}>
                                    <span>تهران</span>
                                    <Plane />
                                    <span>مشهد</span>
                                </div>
                                <div className={styles.homeFastSearchBoxesBoxMiddle2}>
                                    <span>16:45</span>
                                    <span>یک‌شنبه 30 آبان</span>
                                    <span>17:25</span>
                                </div>
                            </div>
                            <Link to='#' className={styles.homeFastSearchBoxesBottom}>
                                <i />
                                <i />
                                <hr />
                                <div>
                                    <p>شروع قیمت از</p>
                                    <span>13/479/400 ریال</span>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <div className={styles.homeFastSearchBoxesBox}>
                                <div className={styles.homeFastSearchBoxesBoxTop}>
                                    <div className={styles.homeFastSearchBoxesBoxTopInner}>
                                        <Box4 />
                                        <span>هواپیمایی آسمان</span>
                                    </div>

                                    <span className={styles.homeFastSearchBoxesBoxTopBudget}>اکونومی</span>
                                </div>

                                <div className={styles.homeFastSearchBoxesBoxMiddle}>
                                    <span>تهران</span>
                                    <Plane />
                                    <span>مشهد</span>
                                </div>
                                <div className={styles.homeFastSearchBoxesBoxMiddle2}>
                                    <span>16:45</span>
                                    <span>یک‌شنبه 30 آبان</span>
                                    <span>17:25</span>
                                </div>
                            </div>
                            <Link to='#' className={styles.homeFastSearchBoxesBottom}>
                                <i />
                                <i />
                                <hr />
                                <div>
                                    <p>شروع قیمت از</p>
                                    <span>13/479/400 ریال</span>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <div className={styles.homeFastSearchBoxesBox}>
                                <div className={styles.homeFastSearchBoxesBoxTop}>
                                    <div className={styles.homeFastSearchBoxesBoxTopInner}>
                                        <Box4 />
                                        <span>هواپیمایی آسمان</span>
                                    </div>

                                    <span className={styles.homeFastSearchBoxesBoxTopBudget}>اکونومی</span>
                                </div>

                                <div className={styles.homeFastSearchBoxesBoxMiddle}>
                                    <span>تهران</span>
                                    <Plane />
                                    <span>مشهد</span>
                                </div>
                                <div className={styles.homeFastSearchBoxesBoxMiddle2}>
                                    <span>16:45</span>
                                    <span>یک‌شنبه 30 آبان</span>
                                    <span>17:25</span>
                                </div>
                            </div>
                            <Link to='#' className={styles.homeFastSearchBoxesBottom}>
                                <i />
                                <i />
                                <hr />
                                <div>
                                    <p>شروع قیمت از</p>
                                    <span>13/479/400 ریال</span>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <div className={styles.homeFastSearchBoxesBox}>
                                <div className={styles.homeFastSearchBoxesBoxTop}>
                                    <div className={styles.homeFastSearchBoxesBoxTopInner}>
                                        <Box4 />
                                        <span>هواپیمایی آسمان</span>
                                    </div>

                                    <span className={styles.homeFastSearchBoxesBoxTopBudget}>اکونومی</span>
                                </div>

                                <div className={styles.homeFastSearchBoxesBoxMiddle}>
                                    <span>تهران</span>
                                    <Plane />
                                    <span>مشهد</span>
                                </div>
                                <div className={styles.homeFastSearchBoxesBoxMiddle2}>
                                    <span>16:45</span>
                                    <span>یک‌شنبه 30 آبان</span>
                                    <span>17:25</span>
                                </div>
                            </div>
                            <Link to='#' className={styles.homeFastSearchBoxesBottom}>
                                <i />
                                <i />
                                <hr />
                                <div>
                                    <p>شروع قیمت از</p>
                                    <span>13/479/400 ریال</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.homeProposal} style={{ backgroundImage: `url(${Texture})` }}>
                <div className="container">
                    <h2 className='headingPrimary'>پیشنهاد <span>لحظه آخری</span></h2>

                    <div className={styles.homeProposalItems}>
                        <button data-activate='true'>ارزان ترین بلیط ها</button>
                        <button>پرفروش ترین بلیط ها</button>
                        <button>تخفیف خوردها</button>
                    </div>

                    <div className={styles.homeProposalBoxes}>
                        <div>
                            <div className={styles.homeProposalBoxesBox}>
                                <div className={styles.homeProposalBoxesBoxTop}>
                                    <p>تهران</p>
                                    <Plane />
                                    <p>مشهد</p>
                                </div>
                                <div className={styles.homeProposalBoxesBoxMiddle}>
                                    <span>TEH</span>
                                    <span>اکونومی</span>
                                    <span>MHD</span>
                                </div>
                                <div className={styles.homeProposalBoxesBoxBottom}>
                                    <span>16:45</span>
                                    <span>یک‌شنبه 30 آبان</span>
                                    <span>17:25</span>
                                </div>
                            </div>
                            <Link to='#' className={styles.homeProposalBoxesLink}>
                                <i />
                                <i />
                                <hr />
                                <div>
                                    <span>13/479/400 ریال</span>
                                    <p>رزرو</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <div className={styles.homeProposalBoxesBox}>
                                <div className={styles.homeProposalBoxesBoxTop}>
                                    <p>تهران</p>
                                    <Plane />
                                    <p>مشهد</p>
                                </div>
                                <div className={styles.homeProposalBoxesBoxMiddle}>
                                    <span>TEH</span>
                                    <span>اکونومی</span>
                                    <span>MHD</span>
                                </div>
                                <div className={styles.homeProposalBoxesBoxBottom}>
                                    <span>16:45</span>
                                    <span>یک‌شنبه 30 آبان</span>
                                    <span>17:25</span>
                                </div>
                            </div>
                            <Link to='#' className={styles.homeProposalBoxesLink}>
                                <i />
                                <i />
                                <hr />
                                <div>
                                    <span>13/479/400 ریال</span>
                                    <p>رزرو</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <div className={styles.homeProposalBoxesBox}>
                                <div className={styles.homeProposalBoxesBoxTop}>
                                    <p>تهران</p>
                                    <Plane />
                                    <p>مشهد</p>
                                </div>
                                <div className={styles.homeProposalBoxesBoxMiddle}>
                                    <span>TEH</span>
                                    <span>اکونومی</span>
                                    <span>MHD</span>
                                </div>
                                <div className={styles.homeProposalBoxesBoxBottom}>
                                    <span>16:45</span>
                                    <span>یک‌شنبه 30 آبان</span>
                                    <span>17:25</span>
                                </div>
                            </div>
                            <Link to='#' className={styles.homeProposalBoxesLink}>
                                <i />
                                <i />
                                <hr />
                                <div>
                                    <span>13/479/400 ریال</span>
                                    <p>رزرو</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <div className={styles.homeProposalBoxesBox}>
                                <div className={styles.homeProposalBoxesBoxTop}>
                                    <p>تهران</p>
                                    <Plane />
                                    <p>مشهد</p>
                                </div>
                                <div className={styles.homeProposalBoxesBoxMiddle}>
                                    <span>TEH</span>
                                    <span>اکونومی</span>
                                    <span>MHD</span>
                                </div>
                                <div className={styles.homeProposalBoxesBoxBottom}>
                                    <span>16:45</span>
                                    <span>یک‌شنبه 30 آبان</span>
                                    <span>17:25</span>
                                </div>
                            </div>
                            <Link to='#' className={styles.homeProposalBoxesLink}>
                                <i />
                                <i />
                                <hr />
                                <div>
                                    <span>13/479/400 ریال</span>
                                    <p>رزرو</p>
                                </div>
                            </Link>
                        </div>
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
                                <input
                                    type='number'
                                    placeholder='شماره موبایل'
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
                        <Link to='#'>
                            بیشتر
                            <Arrow />
                        </Link>
                    </div>

                    <div className={styles.homeMagazineGallery}>
                        <Link to='#'>
                            <div />
                            <div>
                                <span>
                                    اخبار گردشگری
                                </span>
                                <h3>
                                    سفر به جاهای دیدنی لهستان؛ از قلعه‌های تاریخی تا جنگل‌های سبز
                                </h3>
                                <p>
                                    احسان غلام پور
                                </p>
                            </div>
                            <img src={Image3}  alt='homeMagazineGallery'/>
                        </Link>
                        <Link to='#'>
                            <div />
                            <div>
                                 <span>
                                    اخبار گردشگری
                                </span>
                                <h3>
                                    سفر به جاهای دیدنی لهستان؛ از قلعه‌های تاریخی تا جنگل‌های سبز
                                </h3>
                            </div>
                            <img src={Image3}  alt='homeMagazineGallery'/>
                        </Link>
                        <Link to='#'>
                            <div />
                            <div>
                                 <span>
                                    اخبار گردشگری
                                </span>
                                <h3>
                                    سفر به جاهای دیدنی لهستان؛ از قلعه‌های تاریخی تا جنگل‌های سبز
                                </h3>
                            </div>
                            <img src={Image3}  alt='homeMagazineGallery'/>
                        </Link>
                        <Link to='#'>
                            <div />
                            <div>
                                <span>
                                    اخبار گردشگری
                                </span>
                                <h3>
                                    سفر به جاهای دیدنی لهستان؛ از قلعه‌های تاریخی تا جنگل‌های سبز
                                </h3>
                                <p>
                                    احسان غلام پور
                                </p>
                            </div>
                            <img src={Image3}  alt='homeMagazineGallery'/>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.homeApplication}>
                <div className="container">
                    <div className={styles.homeApplicationBox}>
                        <AppPhone />
                        <div>
                            <h2 className='headingPrimary'>دریافت<span> اپلیکیشن مِستربلیط </span></h2>
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
                            <p>علی‌بابا بزرگترین و معتبرترین سایت خرید اینترنتی بلیط هواپیما ، قطار و اتوبوس در کشور است که از سال ۱۳۹۳ کار خود را شروع کرده و در این مدت توانسته رضایت درصد قابل توجهی ز کاربران را به دست بیاورد. در ابتدا، فروش بلیط پرواز داخلی در دستور کار علی‌بابا قرار داشت اما به مرور امکان خرید سایر محصولات گردشگری نیز به علی‌بابا اضافه شد</p>
                            <p>علی‌بابا بزرگترین و معتبرترین سایت خرید اینترنتی بلیط هواپیما ، قطار و اتوبوس در کشور است که از سال ۱۳۹۳ کار خود را شروع کرده و در این مدت توانسته رضایت درصد قابل توجهی ز کاربران را به دست بیاورد. در ابتدا، فروش بلیط پرواز داخلی در دستور کار علی‌بابا قرار داشت اما به مرور امکان خرید سایر محصولات گردشگری نیز به علی‌بابا اضافه شد</p>
                        </div>
                        <div className={styles.homeReserveSideLeft}>
                            <ul>
                                <li data-activate={faq === 0 ? 'true' : 'false'} onClick={() => setFaq(faq === 0 ? -1 : 0)}>
                                    <div>
                                        <Plus />
                                        <Minus />
                                        <span>چند روز قبل از پرواز، بلیط هواپیما را بخریم؟</span>
                                    </div>
                                    <p>
                                        خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید
                                    </p>
                                </li>
                                <li data-activate={faq === 1 ? 'true' : 'false'} onClick={() => setFaq(faq === 1 ? -1 : 1)}>
                                    <div>
                                        <Plus />
                                        <Minus />
                                        <span>در هر پرواز، میزان بار مجاز چقدر است؟</span>
                                    </div>
                                    <p>
                                        خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید
                                    </p>
                                </li>
                                <li data-activate={faq === 2 ? 'true' : 'false'} onClick={() => setFaq(faq === 2 ? -1 : 2)}>
                                    <div>
                                        <Plus />
                                        <Minus />
                                        <span>نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟</span>
                                    </div>
                                    <p>
                                        خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید
                                    </p>
                                </li>
                                <li data-activate={faq === 3 ? 'true' : 'false'} onClick={() => setFaq(faq === 3 ? -1 : 3)}>
                                    <div>
                                        <Plus />
                                        <Minus />
                                        <span>رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟</span>
                                    </div>
                                    <p>
                                        خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید
                                    </p>
                                </li>
                                <li data-activate={faq === 4 ? 'true' : 'false'} onClick={() => setFaq(faq === 4 ? -1 : 4)}>
                                    <div>
                                        <Plus />
                                        <Minus />
                                        <span>آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟</span>
                                    </div>
                                    <p>
                                        خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید
                                    </p>
                                </li>
                                <li data-activate={faq === 5 ? 'true' : 'false'} onClick={() => setFaq(faq === 5 ? -1 : 5)}>
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
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                        </div>
                        <div className={styles.homeReserveMoreBox} >
                            <h5>ایرلاین</h5>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                        </div>
                        <div className={styles.homeReserveMoreBox}>
                            <h5>رزرو هتل</h5>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                        </div>
                        <div className={styles.homeReserveMoreBox} >
                            <h5>پرواز داخلی</h5>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                        </div>
                        <div className={styles.homeReserveMoreBox} >
                            <h5>پرواز خارجی</h5>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                        </div>
                        <div className={styles.homeReserveMoreBox}>
                            <h5>بلیط قطار</h5>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                        </div>
                        <div className={styles.homeReserveMoreBox}>
                            <h5>بلیط اتوبوس</h5>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
                            <span>خرید بلیط هواپیما</span>
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
