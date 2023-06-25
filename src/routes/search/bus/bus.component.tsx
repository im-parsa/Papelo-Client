import { Navigation } from 'swiper';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getTrackBackground, Range } from 'react-range';

import BusTicket from '../../../components/bus-ticket/bus-ticket.component';
import Navbar from '../../../components/layouts/navbar/navbar.component';
import Footer from '../../../components/layouts/footer/footer.component';
// import LoadingPopup from '../../../components/loading-popup/loading-popup.component';
import LoadingFooter from '../../../components/loading-footer/loading-footer.component';

import { ReactComponent as Arrow2 } from '../../../assets/icons/arrow.svg';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow-2.svg';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import { ReactComponent as Bus } from '../../../assets/icons/bus.svg';
import { ReactComponent as Check } from '../../../assets/icons/check.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../search.module.scss';

const SearchBus = () =>
{
    const sortParentRef = useRef<any>(null);

    const [types, setTypes] = useState<string[]>([]);
    const [originTerminals, setOriginTerminals] = useState<string[]>([]);
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

    const handleOriginTerminal = (originTerminal: string, remove?: boolean) =>
    {
        if (remove || originTerminals?.includes(originTerminal))
            setOriginTerminals(originTerminals.filter((originTerminalV: string) => originTerminalV !== originTerminal));
        else
            setOriginTerminals((oldState: string[]) => [...oldState, originTerminal]);
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

            <section className={styles.searchHeader}>
                <div className={styles.searchHeaderBox}>
                    <i/>
                    <i/>

                    <section>
                        <h4>
                            <p>
                                شیراز
                            </p>

                            <span>
                                16:45
                            </span>
                        </h4>

                        <div>
                            <span>
                                <Bus />

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
                                16:50
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
                                        نمایش 2 اتوبوس از 13 اتوبوس
                                    </h4>
                                </p>

                                <span onClick={() =>
                                {
                                    setTypes([]);
                                    setProviders([]);
                                    setOriginTerminals([]);
                                    setTimeline([0, 86400]);
                                    setValues([0, 10000000]);
                                }}
                                >
                                    لغو فیلترها
                                </span>
                            </header>

                            <footer>
                                <button onClick={() => setFilter(false)}>
                                    اعمال فیلتر ها
                                </button>
                            </footer>

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

                                                انتخاب اتوبوس های:

                                                { ' ' + types.join('، ') }
                                            </li>
                                        )
                                        : null
                                }
                                {
                                    originTerminals[0]
                                        ? (
                                            <li onClick={() => setProviders([])}>
                                                <i>
                                                    <Close />
                                                </i>

                                                پایانه مبدأ:

                                                { ' ' + originTerminals.join('، ') }
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

                                                شرکت های ریلی:

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

                            <div data-activate={filters[1]}>
                                <header onClick={() =>
                                {
                                    const array = filters;

                                    array[1] = !array[1];

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

                            <div data-activate={filters[2]}>
                                <header onClick={() =>
                                {
                                    const array = filters;

                                    array[2] = !array[2];

                                    setFilters([...array]);
                                }}>
                                    <span>
                                        انتخاب اتوبوس‌های
                                    </span>

                                    <i>
                                        <Arrow />
                                    </i>
                                </header>

                                <ul>
                                    <li data-activate={types?.includes('با مقصد نهایی')} onClick={() => handleTypes('با مقصد نهایی')}>
                                        <i>
                                            <Check />
                                        </i>

                                        <p>
                                            با مقصد نهایی
                                        </p>
                                    </li>

                                    <li data-activate={types?.includes('بین‌راهی')} onClick={() => handleTypes('بین‌راهی')}>
                                        <i>
                                            <Check />
                                        </i>

                                        <p>
                                            بین‌راهی
                                        </p>
                                    </li>

                                    <li data-activate={types?.includes('دارای ظرفیت')} onClick={() => handleTypes('دارای ظرفیت')}>
                                        <i>
                                            <Check />
                                        </i>

                                        <p>
                                            دارای ظرفیت
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div data-activate={filters[3]}>
                                <header onClick={() =>
                                {
                                    const array = filters;

                                    array[3] = !array[3];

                                    setFilters([...array]);
                                }}>
                                    <span>
                                        پایانه مبدأ
                                    </span>

                                    <i>
                                        <Arrow />
                                    </i>
                                </header>

                                <ul>
                                    <li data-activate={originTerminals?.includes('شیراز پایانه کاراندیش')} onClick={() => handleOriginTerminal('شیراز پایانه کاراندیش')}>
                                        <i>
                                            <Check />
                                        </i>

                                        <p>
                                            شیراز پایانه کاراندیش
                                        </p>
                                    </li>

                                    <li data-activate={originTerminals?.includes('شیراز پایانه کاراندیش 2')} onClick={() => handleOriginTerminal('شیراز پایانه کاراندیش 2')}>
                                        <i>
                                            <Check />
                                        </i>

                                        <p>
                                            شیراز پایانه کاراندیش 2
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div data-activate={filters[4]}>
                                <header onClick={() =>
                                {
                                    const array = filters;

                                    array[4] = !array[4];

                                    setFilters([...array]);
                                }}>
                                    <span>
                                        شرکت اتوبوسرانی
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
                                    حدود 16 مورد اتوبوس شیراز به تهران
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

                            <BusTicket
                                ticket={null}
                            />

                            <BusTicket
                                ticket={{ id: 1 }}
                                offer={true}
                            />

                            <BusTicket
                                ticket={{ id: 1 }}
                            />

                            <BusTicket
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

export default SearchBus;
