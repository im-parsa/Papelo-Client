import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import TooltipJs from '@tippyjs/react/headless';
import React, { useRef, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { Range, getTrackBackground } from 'react-range';
import { numberToWords } from '@persian-tools/persian-tools';
import { RangeDatePicker } from '../../../components/date-picker';
import { CircleMarker, MapContainer, Popup, TileLayer, Tooltip } from 'react-leaflet';

import 'tippy.js/dist/tippy.css';
import 'leaflet/dist/leaflet.css';
import styles from './hotel.module.scss';

import Loading from '../../../components/loading-footer/loading-footer.component';
import HotelBox from '../../../components/hotel-box/hotel-box.component';
import Navbar from '../../../components/layouts/navbar/navbar.component';
import Footer from '../../../components/layouts/footer/footer.component';

import HotelImage from '../../../assets/images/hotel.jpg';
import { ReactComponent as CheckCircle } from '../../../assets/icons/checkbox-circle-line.svg';
import { ReactComponent as Check } from '../../../assets/icons/check.svg';
import { ReactComponent as Cash } from '../../../assets/icons/money-dollar-circle-line.svg';
import { ReactComponent as Close } from '../../../assets/icons/close-fill.svg';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow-2.svg';
import { ReactComponent as User } from '../../../assets/icons/user-line.svg';
import { ReactComponent as Calendar } from '../../../assets/icons/calendar-line.svg';
import { ReactComponent as Star } from '../../../assets/icons/star-line.svg';
import { ReactComponent as Heart } from '../../../assets/icons/heart-line.svg';
import { ReactComponent as Trash } from '../../../assets/icons/delete-bin-line.svg';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';
import { ReactComponent as Minus } from '../../../assets/icons/minus.svg';
import { ReactComponent as PlusCircle } from '../../../assets/icons/add-circle-fill.svg';
import { ReactComponent as FullScreen } from '../../../assets/icons/fullscreen-line.svg';

const SearchHotel = () =>
{
    const starParentRef = useRef<any>(null);
    const sortParentRef = useRef<any>(null);
    const valueParentRef = useRef<any>(null);
    const roomsParentRef = useRef<any>(null);
    const dateParentRef = useRef<any>(null);
    const featuresParentRef = useRef<any>(null);
    const popularityParentRef = useRef<any>(null);

    const [language, setLanguage] = useState('FARSI');
    const [mapFullscreen, setMapFullscreen] = useState(false);
    const [departureDate, setDepartureDate] = useState();
    const [returnDate, setReturnDate] = useState();
    const [datePicker, setDatePicker] = useState(false);
    const [hotelApartment, setHotelApartment] = useState(false);
    const [sort, setSort]: any = useState<string | null>(null);
    const [sortActivate, setSortActivate] = useState<boolean>(false);
    const [values, setValues] = useState<number[]>([0, 10000000]);
    const [valuesActivate, setValuesActivate] = useState<boolean>(false);
    const [features, setFeatures] = useState<string[]>([]);
    const [featuresActivate, setFeaturesActivate] = useState<boolean>(false);
    const [popularity, setPopularity] = useState<string[]>([]);
    const [popularityActivate, setPopularityActivate] = useState<boolean>(false);
    const [star, setStar] = useState<string[]>([]);
    const [starActivate, setStarActivate] = useState<boolean>(false);
    const [roomsActivate, setRoomsActivate] = useState(false);
    const [hotelRooms, setHotelRooms] = useState([{ id: nanoid(), adultCount: 1, childCount: 0 }]);

    const onClickEvent = (event: any) =>
    {
        if (!dateParentRef?.current?.contains(event?.target))
            setDatePicker(false);
        if (!featuresParentRef?.current?.contains(event?.target))
            setFeaturesActivate(false);
        if (!roomsParentRef?.current?.contains(event?.target))
            setRoomsActivate(false);
        if (!valueParentRef?.current?.contains(event?.target))
            setValuesActivate(false);
        if (!sortParentRef?.current?.contains(event?.target))
            setSortActivate(false);
        if (!popularityParentRef?.current?.contains(event?.target))
            setPopularityActivate(false);
        if (!starParentRef?.current?.contains(event?.target))
            setStarActivate(false);
    };

    const handleFeatures = (feature: string, remove?: boolean) =>
    {
        if (remove || features?.includes(feature))
            setFeatures(features.filter((featureV: string) => featureV !== feature));
        else
            setFeatures((oldState: string[]) => [...oldState, feature]);
    };

    const handlePopularity = (popularityV: string, remove?: boolean) =>
    {
        if (remove || popularity?.includes(popularityV))
            setPopularity(popularity.filter((popularityX: string) => popularityX !== popularityV));
        else
            setPopularity((oldState: string[]) => [...oldState, popularityV]);
    };

    const handleStar = (starV: string, remove?: boolean) =>
    {
        if (remove || star?.includes(starV))
            setStar(star.filter((starX: string) => starX !== starV));
        else
            setStar((oldState: string[]) => [...oldState, starV]);
    };

    const position =
        {
            lat: 29.5926,
            lng: 52.5836
        };

    return (
        <main onClick={onClickEvent}>
            <Navbar
                search={true}
            />

            {
                mapFullscreen
                    ? (
                        <div data-fullscreen={true} className={styles.hotelMapPopup}>
                            <span onClick={() => setMapFullscreen(false)}/>

                            <div>
                                <i data-activate={mapFullscreen} onClick={() => setMapFullscreen(!mapFullscreen)}>
                                    <FullScreen />
                                </i>

                                <MapContainer
                                    center={position}
                                    zoom={40}
                                    scrollWheelZoom={true}
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />

                                    <CircleMarker
                                        center={[29.600, 52.5900]}
                                        pathOptions={{
                                            fillColor: '#FFCE3A',
                                            stroke: true,
                                            color: '#FFFFFF',
                                            weight: 2.5,
                                            fillOpacity: 1
                                        }}
                                        radius={8}
                                    >
                                        <Tooltip
                                            direction='top'
                                            offset={[113, -9]}
                                            opacity={1}
                                            permanent={true}
                                        >
                                            1/256/000 تومان
                                        </Tooltip>
                                    </CircleMarker>
                                    <CircleMarker
                                        center={[29.5926, 52.5836]}
                                        pathOptions={{
                                            fillColor: '#FFCE3A',
                                            stroke: true,
                                            color: '#FFFFFF',
                                            weight: 2.5,
                                            fillOpacity: 1
                                        }}
                                        radius={8}
                                    >
                                        <Popup
                                            position={position}
                                        >
                                            <span style={{ backgroundImage: `url(${ HotelImage })` }} />

                                            <header>
                                                <div>
                                                    <Rating
                                                        rtl={true}
                                                        emptyIcon={null}
                                                        readonly={true}
                                                        initialValue={5}
                                                        size={20}
                                                    />
                                                </div>

                                                <span>
                                                1/200/000 ریال
                                                </span>
                                            </header>

                                            <Link to='/hotel/test'>
                                                هتل زندیه شیراز
                                            </Link>

                                            <h6>
                                                شیراز - بلوار هجرت - نرسیده به ارگ کریمخان ( نقشه هتل )
                                            </h6>

                                            <ul>
                                                <TooltipJs
                                                    render={() =>
                                                        (
                                                            <span className='tooltip'>
                                                            میز بیلیارد
                                                            </span>
                                                        )}
                                                >
                                                    <li>
                                                        <Cash />
                                                    </li>
                                                </TooltipJs>

                                                <TooltipJs
                                                    render={() =>
                                                        (
                                                            <span className='tooltip'>
                                                            میز بیلیارد
                                                            </span>
                                                        )}
                                                >
                                                    <li>
                                                        <Cash />
                                                    </li>
                                                </TooltipJs>

                                                <TooltipJs
                                                    render={() =>
                                                        (
                                                            <span className='tooltip'>
                                                            میز بیلیارد
                                                            </span>
                                                        )}
                                                >
                                                    <li>
                                                        <Cash />
                                                    </li>
                                                </TooltipJs>
                                            </ul>
                                        </Popup>

                                        <Tooltip
                                            direction='top'
                                            offset={[113, -9]}
                                            opacity={1}
                                            permanent={true}
                                        >
                                            1/256/000 تومان
                                        </Tooltip>
                                    </CircleMarker>
                                </MapContainer>
                            </div>
                        </div>
                    )
                    : null
            }

            <section className={styles.hotel}>
                <div className="container">
                    <ul className={styles.hotelNavList}>
                        <li className={styles.hotelNavListItem} ref={dateParentRef}>
                            <button data-activate={datePicker} data-passed={!!(departureDate || returnDate)} onClick={() => setDatePicker(!datePicker)}>
                                <Calendar />
                                <span>
                                    تاریخ
                                </span>
                            </button>

                            <div className={styles.hotelNavListItemDatePicker} data-activate={datePicker}>
                                <RangeDatePicker
                                    title='تاریخ'
                                    language={language}
                                    setLanguage={setLanguage}
                                    defaultValue={false}
                                    values={[
                                        departureDate,
                                        returnDate
                                    ]}
                                    setValues={[
                                        setDepartureDate,
                                        setReturnDate
                                    ]}
                                    activate={datePicker}
                                    setActivate={setDatePicker}
                                />
                            </div>
                        </li>

                        <li className={styles.hotelNavListItem} ref={roomsParentRef}>
                            <button data-activate={roomsActivate} data-passed={hotelRooms?.length > 1 || hotelRooms[0]?.adultCount > 1 || hotelRooms[0]?.childCount > 0} onClick={() => setRoomsActivate(!roomsActivate)}>
                                <User />
                                <span>
                                    مسافران
                                </span>
                            </button>

                            <div className={styles.hotelNavListItemContent} data-activate={roomsActivate}>
                                <header className={styles.hotelNavListItemHeader} data-padding={false}>
                                    <h6>
                                        مسافران
                                    </h6>
                                </header>

                                <div className={styles.hotelNavListItemBody}>
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
                                                                    ? (
                                                                        <button onClick={(event: any) =>
                                                                        {
                                                                            event?.preventDefault(); setHotelRooms(hotelRooms?.filter((hotelRoomV: any) => hotelRoomV?.id !== hotelRoom?.id));
                                                                        }}>
                                                                            حذف
                                                                            <Trash/>
                                                                        </button>
                                                                    )
                                                                    : null
                                                            }
                                                        </header>

                                                        <div className={styles.hotelNavListItems}>
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
                                                                    className={styles.hotelNavListButton}
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

                                                                <button className={styles.hotelNavListButton}>
                                                                    {hotelRoom?.adultCount}
                                                                </button>

                                                                <button
                                                                    className={styles.hotelNavListButton}
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
                                                        <div className={styles.hotelNavListItems}>
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
                                                                    className={styles.hotelNavListButton}
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
                                                                <button className={styles.hotelNavListButton}>
                                                                    {hotelRoom?.childCount}
                                                                </button>
                                                                <button
                                                                    className={styles.hotelNavListButton}
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
                                            ? (
                                                <button onClick={() => setHotelRooms((oldArray: any) => [...oldArray, { id: nanoid(), adultCount: 1, childCount: 0 }])}>
                                                    <PlusCircle />
                                                    افزودن اتاق
                                                </button>
                                            )
                                            : null
                                    }
                                </div>

                                <footer className={styles.hotelNavListItemFooter}>
                                    {
                                        hotelRooms
                                            ? (
                                                <button onClick={() => setHotelRooms([])}>
                                                    <Close />
                                                    پاک کردن
                                                </button>
                                            )
                                            : null
                                    }

                                    <button data-activate={true} onClick={() => setRoomsActivate(false)}>
                                        اعمال
                                    </button>
                                </footer>
                            </div>
                        </li>

                        <li className={styles.hotelNavListItem} ref={valueParentRef}>
                            <button data-activate={valuesActivate} data-passed={values[0] > 0 || values[1] < 10000000} onClick={() => setValuesActivate(!valuesActivate)}>
                                <Cash />
                                <span>
                                    محدوده قیمت
                                </span>
                            </button>

                            <div className={styles.hotelNavListItemContent} data-activate={valuesActivate}>
                                <header className={styles.hotelNavListItemHeader}>
                                    <h6>
                                        محدوده قیمت
                                    </h6>

                                    <span>
                                        از {values[0].toLocaleString()} تومان - تا {values[1].toLocaleString()} تومان
                                    </span>
                                </header>

                                <div data-dir='ltr' className={styles.hotelNavListItemBody} data-activate={valuesActivate}>
                                    <Range
                                        values={values}
                                        step={10}
                                        min={0}
                                        max={10000000}
                                        onChange={(values) =>
                                        {
                                            setValues(values);
                                        }}
                                        renderTrack={({ props, children }: any) =>
                                            (
                                                <div
                                                    onMouseDown={props.onMouseDown}
                                                    onTouchStart={props.onTouchStart}
                                                    style={{
                                                        ...props.style,
                                                        height: '4rem',
                                                        display: 'flex',
                                                        width: '100%'
                                                    }}
                                                >
                                                    <div
                                                        ref={props.ref}
                                                        className='rangeTrack'
                                                        style={{
                                                            background: getTrackBackground(
                                                                {
                                                                    values,
                                                                    colors: ['#EDEFF6', '#4a6192', '#EDEFF6'],
                                                                    min: 0,
                                                                    max: 10000000
                                                                })
                                                        }}
                                                    >
                                                        {children}
                                                    </div>
                                                </div>
                                            )}
                                        renderThumb={({ props, isDragged, value }: any) =>
                                            (
                                                <div
                                                    {...props}
                                                    style={{ ...props.style }}
                                                    className='rangeThumb'
                                                    data-dragged={isDragged}
                                                >
                                                    <span
                                                        className='rangeThumbTooltip'
                                                        data-dragged={isDragged}
                                                    >
                                                        تومان{value.toLocaleString()}
                                                    </span>
                                                </div>
                                            )}
                                    />
                                </div>

                                <footer className={styles.hotelNavListItemFooter}>
                                    {
                                        values[0] > 0 || values[1] < 10000000
                                            ? (
                                                <button onClick={() => setValues([0, 10000000])}>
                                                    <Close />
                                                    پاک کردن
                                                </button>
                                            )
                                            : null
                                    }

                                    <button data-activate={true} onClick={() => setValuesActivate(false)}>
                                        اعمال
                                    </button>
                                </footer>
                            </div>
                        </li>

                        <li className={styles.hotelNavListItem} ref={popularityParentRef}>
                            <button data-activate={popularityActivate} data-passed={!!popularity[0]} onClick={() => setPopularityActivate(!popularityActivate)}>
                                <Heart />
                                <span>
                                    محبوبیت هتل
                                </span>
                            </button>

                            <div className={styles.hotelNavListItemContent} data-activate={popularityActivate}>
                                <header className={styles.hotelNavListItemHeader} data-padding={false}>
                                    <h6>
                                        محبوبیت هتل
                                    </h6>
                                </header>

                                <div className={styles.hotelNavListItemBody} data-activate={popularityActivate} data-popularity='true'>
                                    <div>
                                        {
                                            popularity?.map((popularityV: string) =>
                                                (
                                                    <span key={popularityV + '_' + nanoid()} onClick={() => handlePopularity(popularityV, true)}>
                                                        <Close />
                                                        {
                                                            popularityV === 'amazing'
                                                                ? (
                                                                    <>
                                                                        9 تا 10 - فوق العاده
                                                                    </>
                                                                )
                                                                : popularityV === 'very_excellent'
                                                                    ? (
                                                                        <>
                                                                            8 تا 9 - بسیار عالی
                                                                        </>
                                                                    )
                                                                    : popularityV === 'excellent'
                                                                        ? (
                                                                            <>
                                                                                7 تا 8 - عالی
                                                                            </>
                                                                        )
                                                                        : popularityV === 'good'
                                                                            ? (
                                                                                <>
                                                                                    6 تا 7 - خوب
                                                                                </>
                                                                            )
                                                                            : null
                                                        }
                                                    </span>
                                                ))
                                        }
                                    </div>

                                    <div>
                                        <span data-activate={popularity?.includes('amazing')} onClick={() => handlePopularity('amazing')}>
                                            <p>
                                                9 تا 10 - فوق العاده
                                            </p>

                                            <i>
                                                <Check />
                                            </i>
                                        </span>

                                        <span data-activate={popularity?.includes('very_excellent')} onClick={() => handlePopularity('very_excellent')}>
                                            <p>
                                                8 تا 9 - بسیار عالی
                                            </p>

                                            <i>
                                                <Check />
                                            </i>
                                        </span>

                                        <span data-activate={popularity?.includes('excellent')} onClick={() => handlePopularity('excellent')}>
                                            <p>
                                                7 تا 8 - عالی
                                            </p>

                                            <i>
                                                <Check />
                                            </i>
                                        </span>

                                        <span data-activate={popularity?.includes('good')} onClick={() => handlePopularity('good')}>
                                            <p>
                                                6 تا 7 - خوب
                                            </p>

                                            <i>
                                                <Check />
                                            </i>
                                        </span>
                                    </div>

                                    <footer className={styles.hotelNavListItemFooter}>
                                        {
                                            popularity?.length > 0
                                                ? (
                                                    <button onClick={() => setPopularity([])}>
                                                        <Close />
                                                        پاک کردن
                                                    </button>
                                                )
                                                : null
                                        }

                                        <button data-activate={true} onClick={() => setPopularityActivate(false)}>
                                            اعمال
                                        </button>
                                    </footer>
                                </div>
                            </div>
                        </li>

                        <li className={styles.hotelNavListItem} ref={starParentRef}>
                            <button data-activate={starActivate} data-passed={!!star[0]} onClick={() => setStarActivate(!starActivate)}>
                                <Star />
                                <span>
                                    ستاره هتل
                                </span>
                            </button>

                            <div className={styles.hotelNavListItemContent} data-activate={starActivate}>
                                <header className={styles.hotelNavListItemHeader} data-padding={false}>
                                    <h6>
                                        ستاره هتل
                                    </h6>
                                </header>

                                <div className={styles.hotelNavListItemBody} data-activate={starActivate} data-features='true'>
                                    <div>
                                        {
                                            star?.map((starV: string) =>
                                                (
                                                    <span key={starV + '_' + nanoid()} onClick={() => handleStar(starV, true)}>
                                                        <Close />
                                                        {
                                                            starV === 'less_than_3_stars'
                                                                ? (
                                                                    <>
                                                                        کمتر 3 ستاره
                                                                    </>
                                                                )
                                                                : starV === '4_stars'
                                                                    ? (
                                                                        <>
                                                                            4 ستاره
                                                                        </>
                                                                    )
                                                                    : starV === '5_stars'
                                                                        ? (
                                                                            <>
                                                                                5 ستاره
                                                                            </>
                                                                        )
                                                                        : starV === 'no_stars'
                                                                            ? (
                                                                                <>
                                                                                    هتل های بی ستاره
                                                                                </>
                                                                            )
                                                                            : null
                                                        }
                                                    </span>
                                                ))
                                        }
                                    </div>

                                    <div data-star={true} data-fit={true}>
                                        <ul>
                                            <li data-activate={star?.includes('less_than_3_stars')} onClick={() => handleStar('less_than_3_stars')}>
                                                کمتر 3 ستاره
                                            </li>
                                            <li data-activate={star?.includes('4_stars')} onClick={() => handleStar('4_stars')}>
                                                4 ستاره
                                            </li>
                                            <li data-activate={star?.includes('5_stars')} onClick={() => handleStar('5_stars')}>
                                                5 ستاره
                                            </li>
                                        </ul>

                                        <span data-checkbox={true} data-activate={star?.includes('no_stars')} onClick={() => handleStar('no_stars')}>
                                            <i>
                                                <Check />
                                            </i>

                                            <p>
                                                نمایش هتل های بدون ستاره
                                            </p>
                                        </span>
                                    </div>
                                </div>

                                <footer className={styles.hotelNavListItemFooter}>
                                    {
                                        star?.length > 0
                                            ? (
                                                <button onClick={() => setStar([])}>
                                                    <Close />
                                                    پاک کردن
                                                </button>
                                            )
                                            : null
                                    }

                                    <button data-activate={true} onClick={() => setStarActivate(false)}>
                                        اعمال
                                    </button>
                                </footer>
                            </div>
                        </li>

                        <li className={styles.hotelNavListItem} ref={featuresParentRef}>
                            <button data-activate={featuresActivate} data-passed={features?.length > 0} onClick={() => setFeaturesActivate(!featuresActivate)}>
                                <CheckCircle />
                                <span>
                                    امکانات هتل
                                </span>
                            </button>

                            <div className={styles.hotelNavListItemContent} data-activate={featuresActivate}>
                                <header className={styles.hotelNavListItemHeader} data-padding={false}>
                                    <h6>
                                        امکانات هتل
                                    </h6>
                                </header>

                                <div className={styles.hotelNavListItemBody} data-activate={featuresActivate} data-features='true'>
                                    <div>
                                        {
                                            features?.map((feature: string) =>
                                                (
                                                    <span key={feature + '_' + nanoid()} onClick={() => handleFeatures(feature, true)}>
                                                        <Close />
                                                        {feature}
                                                    </span>
                                                ))
                                        }
                                    </div>

                                    <div>
                                        <span data-activate={features?.includes('مینی بار')} onClick={() => handleFeatures('مینی بار')}>
                                            <p>
                                                مینی بار
                                            </p>

                                            <i>
                                                <Check />
                                            </i>
                                        </span>

                                        <span data-activate={features?.includes('استخر سرپوشیده')} onClick={() => handleFeatures('استخر سرپوشیده')}>
                                            <p>
                                                استخر سرپوشیده
                                            </p>

                                            <i>
                                                <Check />
                                            </i>
                                        </span>

                                        <span data-activate={features?.includes('سالن بدنسازی')} onClick={() => handleFeatures('سالن بدنسازی')}>
                                            <p>
                                                سالن بدنسازی
                                            </p>

                                            <i>
                                                <Check />
                                            </i>
                                        </span>

                                        <span data-activate={features?.includes('سونا')} onClick={() => handleFeatures('سونا')}>
                                            <p>
                                                سونا
                                            </p>

                                            <i>
                                                <Check />
                                            </i>
                                        </span>

                                        <span data-activate={features?.includes('میز بیلیارد')} onClick={() => handleFeatures('میز بیلیارد')}>
                                            <p>
                                                میز بیلیارد
                                            </p>

                                            <i>
                                                <Check />
                                            </i>
                                        </span>
                                    </div>
                                </div>

                                <footer className={styles.hotelNavListItemFooter}>
                                    {
                                        features?.length > 0
                                            ? (
                                                <button onClick={() => setFeatures([])}>
                                                    <Close />
                                                    پاک کردن
                                                </button>
                                            )
                                            : null
                                    }

                                    <button data-activate={true} onClick={() => setFeaturesActivate(false)}>
                                        اعمال
                                    </button>
                                </footer>
                            </div>
                        </li>
                    </ul>

                    <div className={styles.hotelContent}>
                        <div className={styles.hotelContentRight}>
                            <header>
                                <h1>
                                    حدود 3 مورد هتل شیراز
                                </h1>

                                <div className={styles.hotelContentRightFilter}>
                                    <div className={styles.hotelContentRightFilterRadio}>
                                        <p>
                                            <input type='radio' id='hotel' onChange={() => setHotelApartment(false)} checked={!hotelApartment}/>
                                            <label htmlFor='hotel'>
                                                هتل
                                            </label>
                                        </p>
                                        <p>
                                            <input type='radio' id='hotelApartment' onChange={() => setHotelApartment(true)} checked={hotelApartment}/>
                                            <label htmlFor='hotelApartment'>
                                                هتل آپارتمان
                                            </label>
                                        </p>
                                    </div>

                                    <div className={styles.hotelContentRightFilterSelect} ref={sortParentRef} onClick={() => setSortActivate(!sortActivate)}>
                                        <button data-activate={sortActivate}>
                                            <span>
                                                {
                                                    sort === 'default'
                                                        ? <>
                                                        پیش فرض
                                                        </>
                                                        : sort === 'star'
                                                            ? <>
                                                            بالاترین امتیاز
                                                            </>
                                                            : sort === 'cheapest'
                                                                ? <>
                                                                کمترین قیمت
                                                                </>
                                                                : sort === 'expensive'
                                                                    ? <>
                                                                    بیشترین قیمت
                                                                    </>
                                                                    : <>
                                                                    مرتب سازی بر اساس
                                                                    </>

                                                }
                                            </span>

                                            <Arrow />
                                        </button>

                                        <ul data-activate={sortActivate}>
                                            <li data-activate={sort === 'default'} onClick={() => setSort('default')}>
                                                پیش فرض
                                            </li>
                                            <li data-activate={sort === 'star'} onClick={() => setSort('star')}>
                                                بالاترین امتیاز
                                            </li>
                                            <li data-activate={sort === 'cheapest'} onClick={() => setSort('cheapest')}>
                                                کمترین قیمت
                                            </li>
                                            <li data-activate={sort === 'expensive'} onClick={() => setSort('expensive')}>
                                                بیشترین قیمت
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </header>

                            <div className={styles.hotelContentRightCoupon} style={{ backgroundImage: `url(${ HotelImage })` }}>
                                <span />

                                <div>
                                    <h6>
                                        پرستاره ترین اقامتگاه ها
                                    </h6>
                                    <p>
                                        تخفیف 50 درصدی هتل های لوکس در شیراز
                                    </p>
                                </div>

                                <button>
                                    دریافت تخفیف
                                </button>
                            </div>

                            <HotelBox/>

                            <HotelBox/>

                            <HotelBox/>

                            <HotelBox/>

                            <HotelBox/>

                            <Loading />
                        </div>

                        <div className={styles.hotelContentLeft}>
                            <span onClick={() => setMapFullscreen(false)}/>

                            <div>
                                <i data-activate={mapFullscreen} onClick={() => setMapFullscreen(!mapFullscreen)}>
                                    <FullScreen />
                                </i>

                                <MapContainer
                                    center={position}
                                    zoom={40}
                                    scrollWheelZoom={false}
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />

                                    <CircleMarker
                                        center={[29.600, 52.5900]}
                                        pathOptions={
                                            {
                                                fillColor: '#FFCE3A',
                                                stroke: true,
                                                color: '#FFFFFF',
                                                weight: 2.5,
                                                fillOpacity: 1
                                            }}
                                        radius={8}
                                    >
                                        <Tooltip
                                            direction='top'
                                            offset={[113, -9]}
                                            opacity={1}
                                            permanent={true}
                                        >
                                            1/256/000 تومان
                                        </Tooltip>
                                    </CircleMarker>
                                    <CircleMarker
                                        center={[29.5926, 52.5836]}
                                        pathOptions={
                                            {
                                                fillColor: '#FFCE3A',
                                                stroke: true,
                                                color: '#FFFFFF',
                                                weight: 2.5,
                                                fillOpacity: 1
                                            }}
                                        radius={8}
                                    >
                                        <Popup
                                            position={position}
                                        >
                                            <span style={{ backgroundImage: `url(${ HotelImage })` }} />

                                            <header>
                                                <div>
                                                    <Rating
                                                        rtl={true}
                                                        emptyIcon={null}
                                                        readonly={true}
                                                        initialValue={5}
                                                        size={20}
                                                    />
                                                </div>

                                                <span>
                                                1/200/000 ریال
                                                </span>
                                            </header>

                                            <Link to='/hotel/test'>
                                                هتل زندیه شیراز
                                            </Link>

                                            <h6>
                                                شیراز - بلوار هجرت - نرسیده به ارگ کریمخان ( نقشه هتل )
                                            </h6>

                                            <ul>
                                                <TooltipJs
                                                    render={() =>
                                                        (
                                                            <span className='tooltip'>
                                                            میز بیلیارد
                                                            </span>
                                                        )}
                                                >
                                                    <li>
                                                        <Cash />
                                                    </li>
                                                </TooltipJs>

                                                <TooltipJs
                                                    render={() =>
                                                        (
                                                            <span className='tooltip'>
                                                            میز بیلیارد
                                                            </span>
                                                        )}
                                                >
                                                    <li>
                                                        <Cash />
                                                    </li>
                                                </TooltipJs>

                                                <TooltipJs
                                                    render={() =>
                                                        (
                                                            <span className='tooltip'>
                                                            میز بیلیارد
                                                            </span>
                                                        )}
                                                >
                                                    <li>
                                                        <Cash />
                                                    </li>
                                                </TooltipJs>
                                            </ul>
                                        </Popup>

                                        <Tooltip
                                            direction='top'
                                            offset={[113, -9]}
                                            opacity={1}
                                            permanent={true}
                                        >
                                            1/256/000 تومان
                                        </Tooltip>
                                    </CircleMarker>
                                </MapContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default SearchHotel;
