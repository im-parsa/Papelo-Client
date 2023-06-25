import { Navigation } from 'swiper';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getTrackBackground, Range } from 'react-range';

import FlightTicket from '../../../components/flight-ticket/flight-ticket.component';
import Navbar from '../../../components/layouts/navbar/navbar.component';
import Footer from '../../../components/layouts/footer/footer.component';
// import LoadingPopup from '../../../components/loading-popup/loading-popup.component';
import LoadingFooter from '../../../components/loading-footer/loading-footer.component';

import { ReactComponent as Arrow } from '../../../assets/icons/arrow-2.svg';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import { ReactComponent as Flight } from '../../../assets/icons/plane.svg';
import { ReactComponent as Check } from '../../../assets/icons/check.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../search.module.scss';
import { ReactComponent as Arrow2 } from '../../../assets/icons/arrow.svg';

const SearchFlight = () =>
{
    const sortParentRef = useRef<any>(null);

    const [types, setTypes] = useState<string[]>([]);
    const [flightClasses, setFlightClasses] = useState<string[]>([]);
    const [providers, setProviders] = useState<string[]>([]);
    const [activeDay, setActiveDay] = useState<number>(2);
    const [sort, setSort]: any = useState<string | null>(null);
    const [sortActivate, setSortActivate] = useState<boolean>(false);
    const [values, setValues] = useState<number[]>([0, 10000000]);
    const [timeline, setTimeline] = useState<number[]>([0, 86400]);
    const [filters, setFilters] = useState<boolean[]>([true, true, true, true, true]);
    const [filter, setFilter] = useState<boolean>(false);

    const handleProviders = (provider: string, remove?: boolean) =>
    {
        if (remove || providers?.includes(provider))
            setProviders(providers.filter((providerV: string) => providerV !== provider));
        else
            setProviders((oldState: string[]) => [...oldState, provider]);
    };

    const handleTypes = (type: string, remove?: boolean) =>
    {
        if (remove || types?.includes(type))
            setTypes(types.filter((typeV: string) => typeV !== type));
        else
            setTypes((oldState: string[]) => [...oldState, type]);
    };

    const handleFlightClasses = (flightClass: string, remove?: boolean) =>
    {
        if (remove || flightClasses?.includes(flightClass))
            setFlightClasses(flightClasses.filter((flightClassV: string) => flightClassV !== flightClass));
        else
            setFlightClasses((oldState: string[]) => [...oldState, flightClass]);
    };

    const secondsToHm = (s: any) =>
    {
        const seconds = Number(s);

        let h: any = Math.floor(seconds / 3600);
        let m: any = Math.floor(seconds % 3600 / 60);

        if (h === 0)
            h = '00';

        if (m === 0)
            m = '00';

        return h + ':' + m;
    };

    return (
        <main>
            <Navbar
                search={true}
            />

            {/* <LoadingPopup /> */}

            <section className={styles.searchFlightHeader}>
                <div className={styles.searchFlightHeaderBox}>
                    <i/>
                    <i/>

                    <section>
                        <h4>
                            <p>
                                شیراز
                            </p>

                            <span>
                                SHZ
                            </span>
                        </h4>

                        <div>
                            <span>
                                <i/>
                                <Flight />
                                <i/>
                            </span>

                            <p>
                                جمعه 25دی | مسافر 2 مسافر عادی
                            </p>
                        </div>

                        <h4>
                            <p>
                                تهران
                            </p>

                            <span>
                                TEH
                            </span>
                        </h4>
                    </section>

                    <div>
                        <span>
                            <Arrow />
                            روز قبل
                        </span>

                        <span>
                            روز بعد
                            <Arrow />
                        </span>
                    </div>
                </div>
            </section>

            <section className={styles.search}>
                <div className='container'>

                    <div className={styles.searchContent}>
                        <aside data-activate={filter} className={styles.searchContentFilter}>
                            <header>
                                <i onClick={() => setFilter(false)}>
                                    <Arrow2 />
                                </i>

                                <p>
                                    <span>
                                        فیلتر ها
                                    </span>

                                    <h4>
                                        نمایش 2 پرواز از 13 پرواز
                                    </h4>
                                </p>

                                <span onClick={() =>
                                {
                                    setTypes([]);
                                    setProviders([]);
                                    setFlightClasses([]);
                                    setTimeline([0, 86400]);
                                    setValues([0, 10000000]);
                                }}
                                >
                                    لغو فیلترها
                                </span>
                            </header>

                            <ul>
                                {
                                    values[0] !== 0 || values[1] !== 10000000
                                        ? (
                                            <li onClick={() => setValues([0, 10000000])}>
                                                <i>
                                                    <Close />
                                                </i>

                                                محدوده قیمت:

                                                از {values[0].toLocaleString()} تومان - تا {values[1].toLocaleString()} تومان
                                            </li>
                                        )
                                        : null
                                }
                                {
                                    timeline[0] !== 0 || timeline[1] !== 86400
                                        ? (
                                            <li onClick={() => setTimeline([0, 86400])}>
                                                <i>
                                                    <Close />
                                                </i>

                                                ساعت حرکت:

                                                از ساعت {secondsToHm(timeline[0])} تا ساعت {secondsToHm(timeline[1])}
                                            </li>
                                        )
                                        : null
                                }
                                {
                                    types[0]
                                        ? (
                                            <li onClick={() => setProviders([])}>
                                                <i>
                                                    <Close />
                                                </i>

                                                نوع بلیط:

                                                { ' ' + types.join('، ') }
                                            </li>
                                        )
                                        : null
                                }
                                {
                                    flightClasses[0]
                                        ? (
                                            <li onClick={() => setProviders([])}>
                                                <i>
                                                    <Close />
                                                </i>

                                                کلاس پروازی:

                                                { ' ' + flightClasses.join('، ') }
                                            </li>
                                        )
                                        : null
                                }
                                {
                                    providers[0]
                                        ? (
                                            <li onClick={() => setProviders([])}>
                                                <i>
                                                    <Close />
                                                </i>

                                                شرکت‌های هواپیمایی:

                                                { ' ' + providers.join('، ') }
                                            </li>
                                        )
                                        : null
                                }
                            </ul>

                            <div data-activate={filters[0]}>
                                <header onClick={() =>
                                {
                                    const array = filters;

                                    array[0] = !array[0];

                                    setFilters([...array]);
                                }}>
                                    <span>
                                        نوع بلیط
                                    </span>

                                    <i>
                                        <Arrow />
                                    </i>
                                </header>

                                <ul>
                                    <li data-activate={types?.includes('همه')} onClick={() => handleTypes('همه')}>
                                        <span>
                                            <i />
                                        </span>

                                        <p>
                                            همه
                                        </p>
                                    </li>

                                    <li data-activate={types?.includes('سیستمی')} onClick={() => handleTypes('سیستمی')}>
                                        <span>
                                            <i />
                                        </span>

                                        <p>
                                            سیستمی
                                        </p>
                                    </li>

                                    <li data-activate={types?.includes('چارتر')} onClick={() => handleTypes('چارتر')}>
                                        <span>
                                            <i />
                                        </span>

                                        <p>
                                            چارتر
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div data-activate={filters[1]}>
                                <header onClick={() =>
                                {
                                    const array = filters;

                                    array[1] = !array[1];

                                    setFilters([...array]);
                                }}>
                                    <span>
                                        کلاس پروازی
                                    </span>

                                    <i>
                                        <Arrow />
                                    </i>
                                </header>

                                <ul>
                                    <li data-activate={flightClasses?.includes('بیزینس')} onClick={() => handleFlightClasses('بیزینس')}>
                                        <i>
                                            <Check />
                                        </i>

                                        <p>
                                            بیزینس
                                        </p>
                                    </li>

                                    <li data-activate={flightClasses?.includes('اکونومی')} onClick={() => handleFlightClasses('بیزینس')}>
                                        <i>
                                            <Check />
                                        </i>

                                        <p>
                                            اکونومی
                                        </p>
                                    </li>

                                    <li data-activate={flightClasses?.includes(' فرست کلس')} onClick={() => handleFlightClasses(' فرست کلس')}>
                                        <i>
                                            <Check />
                                        </i>

                                        <p>
                                            فرست کلس
                                        </p>
                                    </li>

                                    <li data-activate={flightClasses?.includes('اکونومی ویژه')} onClick={() => handleFlightClasses('اکونومی ویژه')}>
                                        <i>
                                            <Check />
                                        </i>

                                        <p>
                                            اکونومی ویژه
                                        </p>
                                    </li>

                                </ul>
                            </div>

                            <div data-activate={filters[2]}>
                                <header onClick={() =>
                                {
                                    const array = filters;

                                    array[2] = !array[2];

                                    setFilters([...array]);
                                }}>

                                    <span>
                                        محدوده قیمت
                                    </span>

                                    <i>
                                        <Arrow />
                                    </i>
                                </header>

                                <div data-dir='ltr'>
                                    <span>
                                        از {values[0].toLocaleString()} تومان - تا {values[1].toLocaleString()} تومان
                                    </span>

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
                            </div>

                            <div data-activate={filters[3]}>
                                <header onClick={() =>
                                {
                                    const array = filters;

                                    array[3] = !array[3];

                                    setFilters([...array]);
                                }}>

                                    <span>
                                        ساعت حرکت
                                    </span>

                                    <i>
                                        <Arrow />
                                    </i>
                                </header>

                                <div data-dir='ltr'>
                                    <span>
                                        از ساعت {secondsToHm(timeline[0])} تا ساعت {secondsToHm(timeline[1])}
                                    </span>

                                    <Range
                                        values={timeline}
                                        step={1800}
                                        min={0}
                                        max={86400}
                                        onChange={(values) =>
                                        {
                                            setTimeline(values);
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
                                                        width: '100%',
                                                        marginTop: '1.5rem'
                                                    }}
                                                >
                                                    <div
                                                        ref={props.ref}
                                                        className='rangeTrack'
                                                        style={{
                                                            background: getTrackBackground(
                                                                {
                                                                    values: timeline,
                                                                    colors: ['#EDEFF6', '#4a6192', '#EDEFF6'],
                                                                    min: 0,
                                                                    max: 86400
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
                                                        {secondsToHm(value)}
                                                    </span>
                                                </div>
                                            )}
                                    />
                                </div>
                            </div>

                            <div data-activate={filters[4]}>
                                <header onClick={() =>
                                {
                                    const array = filters;

                                    array[4] = !array[4];

                                    setFilters([...array]);
                                }}>
                                    <span>
                                        شرکت‌های هواپیمایی
                                    </span>

                                    <i>
                                        <Arrow />
                                    </i>
                                </header>

                                <ul>
                                    <li data-activate={providers?.includes('رجا')} onClick={() => handleProviders('رجا')}>
                                        <i>
                                            <Check />
                                        </i>

                                        <p>
                                            رجا
                                        </p>
                                    </li>

                                    <li data-activate={providers?.includes('نورالرضا')} onClick={() => handleProviders('نورالرضا')}>
                                        <i>
                                            <Check />
                                        </i>

                                        <p>
                                            نورالرضا
                                        </p>
                                    </li>

                                    <li data-activate={providers?.includes('فدک')} onClick={() => handleProviders('فدک')}>
                                        <i>
                                            <Check />
                                        </i>

                                        <p>
                                            فدک
                                        </p>
                                    </li>

                                    <li data-activate={providers?.includes('بن ریل')} onClick={() => handleProviders('بن ریل')}>
                                        <i>
                                            <Check />
                                        </i>

                                        <p>
                                            بن ریل
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </aside>

                        <div className={styles.searchContentBoxes}>
                            <div className={styles.searchContentBoxesHeader}>
                                <h4>
                                    حدود 16 مورد پرواز شیراز به تهران
                                </h4>

                                <div>
                                    <div className={styles.searchContentBoxesHeaderSelect} ref={sortParentRef} onClick={() => setSortActivate(!sortActivate)}>
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

                                    <button onClick={() => setFilter(!filter)}>
                                        فیلتر ها
                                    </button>
                                </div>
                            </div>

                            <div className={styles.searchContentBoxesDays}>
                                <Swiper
                                    navigation={true}
                                    modules={[Navigation]}
                                    breakpoints={
                                        {
                                            0:
                                                {
                                                    slidesPerView: 2
                                                },
                                            400:
                                                {
                                                    slidesPerView: 3
                                                },
                                            1000:
                                                {
                                                    slidesPerView: 4
                                                },
                                            1500:
                                                {
                                                    slidesPerView: 5
                                                }
                                        }}
                                >
                                    <SwiperSlide className={styles.searchContentBoxesDaysBox} data-activate={activeDay === 0} data-disable={true}>
                                        <p>
                                            یکشنبه 5 دی
                                        </p>
                                        <span>
                                            ناموجود
                                        </span>
                                    </SwiperSlide>
                                    <SwiperSlide className={styles.searchContentBoxesDaysBox} data-activate={activeDay === 1} onClick={() => setActiveDay(1)}>
                                        <p>
                                            یکشنبه 5 دی
                                        </p>
                                        <span>
                                            12/589/000 ریال
                                        </span>
                                    </SwiperSlide>
                                    <SwiperSlide className={styles.searchContentBoxesDaysBox} data-activate={activeDay === 2} onClick={() => setActiveDay(2)}>
                                        <p>
                                            یکشنبه 5 دی
                                        </p>
                                        <span>
                                            12/589/000 ریال
                                        </span>
                                    </SwiperSlide>
                                    <SwiperSlide className={styles.searchContentBoxesDaysBox} data-activate={activeDay === 3} onClick={() => setActiveDay(3)}>
                                        <p>
                                            یکشنبه 5 دی
                                        </p>
                                        <span>
                                            12/589/000 ریال
                                        </span>
                                    </SwiperSlide>
                                    <SwiperSlide className={styles.searchContentBoxesDaysBox} data-activate={activeDay === 4} onClick={() => setActiveDay(4)}>
                                        <p>
                                            یکشنبه 5 دی
                                        </p>
                                        <span>
                                            12/589/000 ریال
                                        </span>
                                    </SwiperSlide>
                                    <SwiperSlide className={styles.searchContentBoxesDaysBox} data-activate={activeDay === 5} onClick={() => setActiveDay(5)}>
                                        <p>
                                            یکشنبه 5 دی
                                        </p>
                                        <span>
                                            12/589/000 ریال
                                        </span>
                                    </SwiperSlide>
                                    <SwiperSlide className={styles.searchContentBoxesDaysBox} data-activate={activeDay === 6} onClick={() => setActiveDay(6)}>
                                        <p>
                                            یکشنبه 5 دی
                                        </p>
                                        <span>
                                            12/589/000 ریال
                                        </span>
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                            <FlightTicket
                                ticket={null}
                            />

                            <FlightTicket
                                ticket={{ id: 1 }}
                                offer={true}
                                extradition={true}
                            />

                            <FlightTicket
                                ticket={{ id: 1 }}
                            />

                            <FlightTicket
                                ticket={{ id: 1 }}
                            />

                            <LoadingFooter />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default SearchFlight;
