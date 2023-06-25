import { nanoid } from 'nanoid';
import validator from 'validator';
import React, { useState, useRef, createRef } from 'react';

import styles from './booking.module.scss';
import stylesBookingBox from '../../components/booking-box/booking-box.module.scss';

import Navbar from '../../components/layouts/navbar/navbar.component';
import BookingBox from '../../components/booking-box/booking-box.component';

import { ReactComponent as Blog } from '../../assets/icons/blogs.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail-line.svg';
import { ReactComponent as Phone } from '../../assets/icons/smartphone-line.svg';
import { ReactComponent as Ticket } from '../../assets/icons/coupon-3-fill.svg';
import { ReactComponent as User } from '../../assets/icons/user-3-fill.svg';
import { ReactComponent as User2 } from '../../assets/icons/user.svg';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { ReactComponent as Card } from '../../assets/icons/bank-card-fill.svg';

const Booking = () =>
{
    const agesRef: any = useRef<any>([]);
    const codesRef: any = useRef<any>([]);
    const gendersRef: any = useRef<any>([]);
    const birthdaysDayRef: any = useRef<any>([]);
    const birthdaysMonthRef: any = useRef<any>([]);
    const birthdaysYearRef: any = useRef<any>([]);
    const latinNamesRef: any = useRef<any>([]);
    const persianNamesRef: any = useRef<any>([]);
    const latinLastNamesRef: any = useRef<any>([]);
    const persianLastNamesRef: any = useRef<any>([]);
    const mainRef: any = useRef<any>(null);
    const emailRef: any = useRef<any>(null);
    const phoneNumberRef: any = useRef<any>(null);

    const [page, setPage] = useState('user');
    const [popup, setPopup] = useState(false);
    const [popupIndex, setPopupIndex] = useState<number>(0);
    const [passengers, setPassengers] = useState<any[]>([{ id: nanoid() }]);
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [captchaCode, setCaptchaCode] = useState<string>('');

    const birthdayValidate = (passenger: any, index: number) =>
    {
        const regex = /^[1-4]\d{3}\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|([1-2][0-9])|(0[1-9]))))$/;

        if (!passenger?.birthdayDay)
        {
            birthdaysDayRef?.current[index]?.current?.parentElement?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
            birthdaysDayRef?.current[index]?.current?.parentElement?.parentElement?.setAttribute('data-error', 'true');
            birthdaysDayRef?.current[index]?.current?.setAttribute('data-error', 'true');
        }
        else if (Number(passenger?.birthdayDay) <= 0)
        {
            birthdaysDayRef?.current[index]?.current?.parentElement?.parentElement?.setAttribute('data-error_message', 'این تاریخ اشتباه است');
            birthdaysDayRef?.current[index]?.current?.parentElement?.parentElement?.setAttribute('data-error', 'true');
            birthdaysDayRef?.current[index]?.current?.setAttribute('data-error', 'true');
        }

        if (!passenger?.birthdayMonth)
        {
            birthdaysMonthRef?.current[index]?.current?.parentElement?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
            birthdaysMonthRef?.current[index]?.current?.parentElement?.parentElement?.setAttribute('data-error', 'true');
            birthdaysMonthRef?.current[index]?.current?.setAttribute('data-error', 'true');
        }
        else if (Number(passenger?.birthdayMonth) <= 0)
        {
            birthdaysMonthRef?.current[index]?.current?.parentElement?.parentElement?.setAttribute('data-error_message', 'این تاریخ اشتباه است');
            birthdaysMonthRef?.current[index]?.current?.parentElement?.parentElement?.setAttribute('data-error', 'true');
            birthdaysMonthRef?.current[index]?.current?.setAttribute('data-error', 'true');
        }

        if (!passenger?.birthdayYear)
        {
            birthdaysYearRef?.current[index]?.current?.parentElement?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
            birthdaysYearRef?.current[index]?.current?.parentElement?.parentElement?.setAttribute('data-error', 'true');
            birthdaysYearRef?.current[index]?.current?.setAttribute('data-error', 'true');
        }
        else if (Number(passenger?.birthdayYear) <= 0)
        {
            birthdaysYearRef?.current[index]?.current?.parentElement?.parentElement?.setAttribute('data-error_message', 'این تاریخ اشتباه است');
            birthdaysYearRef?.current[index]?.current?.parentElement?.parentElement?.setAttribute('data-error', 'true');
            birthdaysYearRef?.current[index]?.current?.setAttribute('data-error', 'true');
        }

        if (passenger?.birthdayDay &&
            passenger?.birthdayMonth &&
            passenger?.birthdayYear &&
            Number(passenger?.birthdayDay) > 0 &&
            Number(passenger?.birthdayMonth) > 0 &&
            Number(passenger?.birthdayYear) > 0 &&
            regex.test(passenger?.birthdayYear + '/' + passenger?.birthdayMonth + '/' + passenger?.birthdayDay)
        )
        {
            birthdaysDayRef?.current[index]?.current?.parentElement?.parentElement?.setAttribute('data-error', 'false');
            birthdaysDayRef?.current[index]?.current?.setAttribute('data-error', 'false');

            birthdaysMonthRef?.current[index]?.current?.setAttribute('data-error', 'false');

            birthdaysYearRef?.current[index]?.current?.setAttribute('data-error', 'false');
        }
    };
    const deletePassenger = (id: any) =>
    {
        setPassengers(passengers?.filter((passenger: any) => passenger?.id !== id));
    };
    const purchaseValidate = () =>
    {
        let index = 0;
        let error = false;

        const regex = /^[1-4]\d{3}\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|([1-2][0-9])|(0[1-9]))))$/;

        for (const passenger of passengers)
        {
            if (!passenger?.latinName)
            {
                error = true;

                latinNamesRef?.current[index]?.current?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                latinNamesRef?.current[index]?.current?.parentElement?.setAttribute('data-error', 'true');
            }
            if (!passenger?.latinLastName)
            {
                error = true;

                latinLastNamesRef?.current[index]?.current?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                latinLastNamesRef?.current[index]?.current?.parentElement?.setAttribute('data-error', 'true');
            }
            if (!passenger?.persianName)
            {
                error = true;

                persianNamesRef?.current[index]?.current?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                persianNamesRef?.current[index]?.current?.parentElement?.setAttribute('data-error', 'true');
            }
            if (!passenger?.persianLastName)
            {
                error = true;

                persianLastNamesRef?.current[index]?.current?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                persianLastNamesRef?.current[index]?.current?.parentElement?.setAttribute('data-error', 'true');
            }
            if (!passenger?.code)
            {
                error = true;

                codesRef?.current[index]?.current?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                codesRef?.current[index]?.current?.parentElement?.setAttribute('data-error', 'true');
            }
            else
            {
                if (!passenger?.passport)
                {
                    if (passenger?.code?.length !== 10)
                    {
                        error = true;

                        codesRef?.current[index]?.current?.parentElement?.setAttribute('data-error_message', 'این کد ملی مورد تائید نمی باشد');
                        codesRef?.current[index]?.current?.parentElement?.setAttribute('data-error', 'true');
                    }
                    else

                        codesRef?.current[index]?.current?.parentElement?.setAttribute('data-error', 'false');
                }
                else
                {
                    if (!validator.isPassportNumber(passenger?.code, 'IR'))
                    {
                        error = true;

                        codesRef?.current[index]?.current?.parentElement?.setAttribute('data-error_message', 'این شماره پاسپورت مورد تائید نمی باشد');
                        codesRef?.current[index]?.current?.parentElement?.setAttribute('data-error', 'true');
                    }
                    else

                        codesRef?.current[index]?.current?.parentElement?.setAttribute('data-error', 'false');
                }
            }
            if (!phoneNumberRef?.current?.value)
            {
                error = true;

                phoneNumberRef?.current?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                phoneNumberRef?.current?.parentElement?.setAttribute('data-error', 'true');
            }
            else if (phoneNumberRef?.current?.value?.length !== 10)
            {
                error = true;

                phoneNumberRef?.current?.parentElement?.setAttribute('data-error_message', 'این شماره موبایل مورد تائید نمی باشد');
                phoneNumberRef?.current?.parentElement?.setAttribute('data-error', 'true');
            }
            if (!emailRef?.current?.value)
            {
                error = true;

                emailRef?.current?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                emailRef?.current?.parentElement?.setAttribute('data-error', 'true');
            }
            else if (!validator.isEmail(emailRef?.current?.value))
            {
                error = true;

                emailRef?.current?.parentElement?.setAttribute('data-error_message', 'این ایمیل مورد تائید نمی باشد');
                emailRef?.current?.parentElement?.setAttribute('data-error', 'true');
            }
            if (!passenger?.gender)
            {
                error = true;

                gendersRef?.current[index]?.current?.setAttribute('data-error', 'true');
            }
            if (!passenger?.age)
            {
                error = true;

                agesRef?.current[index]?.current?.setAttribute('data-error', 'true');
            }
            if (!(
                passenger?.birthdayDay &&
                passenger?.birthdayMonth &&
                passenger?.birthdayYear
            ))
            {
                error = true;

                birthdaysDayRef?.current[index]?.current?.parentElement?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                birthdaysDayRef?.current[index]?.current?.parentElement?.parentElement?.setAttribute('data-error', 'true');
                birthdaysDayRef?.current[index]?.current?.setAttribute('data-error', 'true');

                birthdaysMonthRef?.current[index]?.current?.setAttribute('data-error', 'true');

                birthdaysYearRef?.current[index]?.current?.setAttribute('data-error', 'true');
            }
            else if (!(
                Number(passenger?.birthdayDay) > 0 &&
                Number(passenger?.birthdayMonth) > 0 &&
                Number(passenger?.birthdayYear) > 0 &&
                regex.test(passenger?.birthdayYear + '/' + passenger?.birthdayMonth + '/' + passenger?.birthdayDay)
            ))
            {
                error = true;

                birthdaysDayRef?.current[index]?.current?.parentElement?.parentElement?.setAttribute('data-error_message', 'این تاریخ اشتباه است');
                birthdaysDayRef?.current[index]?.current?.parentElement?.parentElement?.setAttribute('data-error', 'true');
                birthdaysDayRef?.current[index]?.current?.setAttribute('data-error', 'true');

                birthdaysMonthRef?.current[index]?.current?.setAttribute('data-error', 'true');

                birthdaysYearRef?.current[index]?.current?.setAttribute('data-error', 'true');
            }

            index++;
        }

        if (!error)
            setPage('purchase');
    };
    const onChange = (event: any, type: string, id: number, passport?: boolean) =>
    {
        const array = passengers;

        for (const i in array)
        {
            if (array[i].id === id)
            {
                if (type?.toUpperCase()?.includes('LATIN'))
                {
                    const regex = /^[a-zA-Z\s.,]+$/;

                    if (event?.target?.value)
                    {
                        if (regex.test(event?.target?.value) && event?.target?.value?.length < 30)
                            array[i][type] = event?.target?.value;
                    }
                    else
                        array[i][type] = event?.target?.value;
                }
                else if (type?.toUpperCase()?.includes('PERSIAN'))
                {
                    const regex = /^[\u0600-\u06FF\s]+$/;

                    if (event?.target?.value)
                    {
                        if (regex.test(event?.target?.value) && event?.target?.value?.length < 30)
                            array[i][type] = event?.target?.value;
                    }
                    else
                        array[i][type] = event?.target?.value;
                }
                else if (type?.toUpperCase()?.includes('PASSPORT'))
                {
                    array[i].passport = event?.target?.value;
                    array[i].code = null;
                }
                else if (type?.toUpperCase()?.includes('BIRTHDAYDAY') || type?.toUpperCase()?.includes('BIRTHDAYMONTH'))
                {
                    const regex = /[0-9]|\./;

                    if (event?.target?.value)
                    {
                        if (regex.test(event?.target?.value) && event?.target?.value?.length <= 2)
                            array[i][type] = event?.target?.value;
                    }
                    else
                        array[i][type] = event?.target?.value;
                }
                else if (type?.toUpperCase()?.includes('BIRTHDAYYEAR'))
                {
                    const regex = /[0-9]|\./;

                    if (event?.target?.value)
                    {
                        if (regex.test(event?.target?.value) && event?.target?.value?.length <= 4)
                            array[i][type] = event?.target?.value;
                    }
                    else
                        array[i][type] = event?.target?.value;
                }
                else if (type?.toUpperCase()?.includes('CODE'))
                {
                    if (event?.target?.value)
                    {
                        if (passport)
                        {
                            const regex = /[0-9]|\./;

                            if (regex.test(event?.target?.value) && event?.target?.value?.length <= 10)
                                array[i][type] = event?.target?.value;
                        }
                        else
                        {
                            const regex = /[0-9]|\./;

                            if (regex.test(event?.target?.value) && event?.target?.value?.length <= 10)
                                array[i][type] = event?.target?.value;
                        }
                    }
                    else
                        array[i][type] = event?.target?.value;
                }
                else if (type?.toUpperCase()?.includes('GENDER') || type?.toUpperCase()?.includes('AGE'))
                    array[i][type] = event?.target?.value;

                break;
            }
        }

        setPassengers([...array]);
    };

    if (
        agesRef.current.length !== passengers.length &&
        codesRef.current.length !== passengers.length &&
        gendersRef.current.length !== passengers.length &&
        birthdaysDayRef.current.length !== passengers.length &&
        birthdaysMonthRef.current.length !== passengers.length &&
        birthdaysYearRef.current.length !== passengers.length &&
        latinNamesRef.current.length !== passengers.length &&
        persianNamesRef.current.length !== passengers.length &&
        latinLastNamesRef.current.length !== passengers.length &&
        persianLastNamesRef.current.length !== passengers.length
    )
    {
        // @ts-ignore
        agesRef.current = Array(passengers.length).fill().map((_, i) => agesRef.current[i] || createRef());
        // @ts-ignore
        codesRef.current = Array(passengers.length).fill().map((_, i) => codesRef.current[i] || createRef());
        // @ts-ignore
        gendersRef.current = Array(passengers.length).fill().map((_, i) => gendersRef.current[i] || createRef());
        // @ts-ignore
        birthdaysDayRef.current = Array(passengers.length).fill().map((_, i) => birthdaysDayRef.current[i] || createRef());
        // @ts-ignore
        birthdaysMonthRef.current = Array(passengers.length).fill().map((_, i) => birthdaysMonthRef.current[i] || createRef());
        // @ts-ignore
        birthdaysYearRef.current = Array(passengers.length).fill().map((_, i) => birthdaysYearRef.current[i] || createRef());
        // @ts-ignore
        latinNamesRef.current = Array(passengers.length).fill().map((_, i) => latinNamesRef.current[i] || createRef());
        // @ts-ignore
        persianNamesRef.current = Array(passengers.length).fill().map((_, i) => persianNamesRef.current[i] || createRef());
        // @ts-ignore
        latinLastNamesRef.current = Array(passengers.length).fill().map((_, i) => latinLastNamesRef.current[i] || createRef());
        // @ts-ignore
        persianLastNamesRef.current = Array(passengers.length).fill().map((_, i) => persianLastNamesRef.current[i] || createRef());
    }

    return (
        <main ref={mainRef}>
            <div data-activate={popup} className={styles.bookingPopup}>
                <span onClick={() => setPopup(false)}/>

                <div>
                    <header>
                        <span>
                            <User />
                              مشخصات مسافران سابق
                        </span>

                        <i onClick={() => setPopup(false)}>
                            <Close />
                        </i>
                    </header>

                    <div>
                        <div>
                            <span>
                                پارسا فیروزی
                            </span>

                            <span>
                                2284171427
                            </span>

                            <span>
                                1384/09/05
                            </span>
                        </div>

                        <button onClick={() =>
                        {
                            const array = passengers;

                            array[popupIndex] =
                                {
                                    latinName: 'Parsa',
                                    latinLastName: 'Firoozi',
                                    persianName: 'پارسا',
                                    persianLastName: 'فیروزی',
                                    gender: 'آقا',
                                    age: 'بزرگسال',
                                    passport: false,
                                    code: '2284171427',
                                    birthdayDay: '05',
                                    birthdayMonth: '09',
                                    birthdayYear: '1384'
                                };

                            latinNamesRef?.current[popupIndex]?.parentElement?.setAttribute('data-error', 'false');
                            latinLastNamesRef?.current[popupIndex]?.parentElement?.setAttribute('data-error', 'false');
                            persianNamesRef?.current[popupIndex]?.parentElement?.setAttribute('data-error', 'false');
                            persianLastNamesRef?.current[popupIndex]?.parentElement?.setAttribute('data-error', 'false');
                            agesRef?.current[popupIndex]?.parentElement?.setAttribute('data-error', 'false');
                            codesRef?.current[popupIndex]?.parentElement?.setAttribute('data-error', 'false');
                            gendersRef?.current[popupIndex]?.parentElement?.setAttribute('data-error', 'false');
                            birthdaysDayRef?.current[popupIndex]?.current?.setAttribute('data-error', 'false');
                            birthdaysMonthRef?.current[popupIndex]?.current?.setAttribute('data-error', 'false');
                            birthdaysYearRef?.current[popupIndex]?.current?.setAttribute('data-error', 'false');
                            birthdaysYearRef?.current[popupIndex]?.parentElement?.parentElement?.setAttribute('data-error', 'false');

                            setPassengers(array);
                            setPopup(false);
                        }}>
                            انتخاب
                        </button>
                    </div>
                </div>
            </div>

            <Navbar
                booking={true}
            />

            <section className={styles.booking}>
                <div className='container'>
                    <div>
                        <header>
                            <div data-activate={page === 'user'} onClick={() => setPage('user') }>
                                <i>
                                    <User />
                                </i>
                                مشخصات مسافر
                            </div>

                            <div data-activate={page === 'purchase'} onClick={purchaseValidate}>
                                <i>
                                    <Card />
                                </i>
                                نحوه پرداخت
                            </div>

                            <div data-activate={page === 'ticket'} onClick={() => setPage('ticket') }>
                                <i>
                                    <Ticket />
                                </i>
                                صدور بلیط
                            </div>
                        </header>

                        {
                            passengers.map((passenger: any, index: any) =>
                                (
                                    <BookingBox
                                        key={passenger?.id + '-_-_' + index}
                                        page={page}
                                        index={index}
                                        nanoid={nanoid}
                                        onChange={onChange}
                                        setPopup={setPopup}
                                        setPopupIndex={setPopupIndex}
                                        deletePassenger={deletePassenger}
                                        passenger={passengers[index]}
                                        passengers={passengers}
                                        setPassengers={setPassengers}
                                        purchaseValidate={purchaseValidate}
                                        birthdayValidate={birthdayValidate}
                                        mainRef={mainRef}
                                        agesRef={agesRef}
                                        codesRef={codesRef}
                                        gendersRef={gendersRef}
                                        birthdaysDayRef={birthdaysDayRef}
                                        birthdaysMonthRef={birthdaysMonthRef}
                                        birthdaysYearRef={birthdaysYearRef}
                                        latinNamesRef={latinNamesRef}
                                        persianNamesRef={persianNamesRef}
                                        latinLastNamesRef={latinLastNamesRef}
                                        persianLastNamesRef={persianLastNamesRef}
                                    />
                                ))
                        }

                        <div data-activate={page === 'purchase'} className={stylesBookingBox.bookingBox}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <span>
                                    اطلاعات مسافران
                                </span>
                            </div>

                            <ul>
                                {
                                    passengers.map((passenger: any, index: number) =>
                                        (
                                            <li key={passenger?.id + '_-_' + index}>
                                                <User2 />

                                                <div>
                                                    <span>
                                                        {passenger?.persianName + ' ' + passenger?.persianLastName}
                                                    </span>

                                                    <p>
                                                        {passenger?.latinName + ' ' + passenger?.latinLastName}
                                                    </p>
                                                </div>

                                                <span>
                                                    {passenger?.gender}
                                                </span>

                                                <span>
                                                    {passenger?.code}
                                                </span>

                                                <span>
                                                    {passenger?.birthday}
                                                </span>

                                                <span>
                                                    {passenger?.age}
                                                </span>
                                            </li>
                                        ))
                                }
                            </ul>

                            <div style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ flexDirection: 'column', alignItems: 'start' }}>
                                    <span>
                                        اطلاعات مسافران
                                    </span>
                                    <p>
                                        اطلاعات بلیط و اطلاع رسانی بعدی به این ادرس ارسال میشود
                                    </p>
                                </div>
                            </div>

                            <ul data-info={true}>
                                <li>
                                    <span>
                                        <Phone />
                                        شماره همراه
                                    </span>

                                    <p>
                                        {phoneNumber + ' 98+'}
                                    </p>
                                </li>

                                <li>
                                    <span>
                                        <Mail />
                                        نشانی ایمیل
                                    </span>

                                    <p>
                                        {email}
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <section data-activate={page === 'user'}>
                            <div>
                                <span>
                                    اطلاعات تماس
                                </span>
                                <p>
                                    بلیط و اطلاع رسانی های سفر به شماره موبایل و ایمیل زیر ارسال میشود
                                </p>
                            </div>

                            <form>
                                <div data-number={true} data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                                    <label>
                                        شماره موبایل
                                    </label>

                                    <input
                                        value={phoneNumber}
                                        type='number'
                                        data-lang='en'
                                        onBlur={(event: any) =>
                                        {
                                            if (!event?.target?.value)
                                            {
                                                event?.target?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                                                event?.target?.parentElement?.setAttribute('data-error', 'true');
                                            }
                                            else if (!validator.isMobilePhone(('0' + event?.target?.value), 'fa-IR'))
                                            {
                                                event?.target?.parentElement?.setAttribute('data-error_message', 'این شماره موبایل مورد تائید نمی باشد');
                                                event?.target?.parentElement?.setAttribute('data-error', 'true');
                                            }
                                            else if (event?.target?.value?.length !== 10)
                                            {
                                                event?.target?.parentElement?.setAttribute('data-error_message', 'این شماره موبایل مورد تائید نمی باشد');
                                                event?.target?.parentElement?.setAttribute('data-error', 'true');
                                            }
                                            else
                                                event?.target?.parentElement?.setAttribute('data-error', 'false');
                                        }}
                                        onChange={(event: any) =>
                                        {
                                            const regex = /[0-9]|\./;

                                            if (regex.test(event?.target?.value) && event?.target?.value?.length <= 10)
                                                setPhoneNumber(event?.target?.value);
                                        }}
                                        onFocus={(event: any) => event?.target?.parentElement?.setAttribute('data-error', 'false')}
                                        ref={phoneNumberRef}
                                    />
                                </div>

                                <div data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                                    <label>
                                        ایمیل
                                    </label>

                                    <input
                                        value={email}
                                        data-lang='en'
                                        ref={emailRef}
                                        type='text'
                                        onBlur={(event: any) =>
                                        {
                                            if (!event?.target?.value)
                                            {
                                                event?.target?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                                                event?.target?.parentElement?.setAttribute('data-error', 'true');
                                            }
                                            else if (!validator.isEmail(event?.target?.value))
                                            {
                                                event?.target?.parentElement?.setAttribute('data-error_message', 'این ایمیل مورد تائید نمی باشد');
                                                event?.target?.parentElement?.setAttribute('data-error', 'true');
                                            }
                                            else
                                                event?.target?.parentElement?.setAttribute('data-error', 'false');
                                        }}
                                        onChange={(event: any) => setEmail(event?.target?.value)}
                                        onFocus={(event: any) => event?.target?.parentElement?.setAttribute('data-error', 'false')}
                                    />
                                </div>

                                <div data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                                    <span style={{ backgroundImage: 'url(https://cdn.discordapp.com/attachments/776425421968244768/999925711005548574/Screenshot_from_2022-07-22_10-56-49.png)' }}/>
                                </div>

                                <div data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                                    <label>
                                        کد تصویر
                                    </label>

                                    <input
                                        value={captchaCode}
                                        data-lang='en'
                                        type='text'
                                        onBlur={(event: any) =>
                                        {
                                            if (!event?.target?.value)
                                            {
                                                event?.target?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                                                event?.target?.parentElement?.setAttribute('data-error', 'true');
                                            }
                                        }}
                                        onChange={(event: any) => setCaptchaCode(event?.target?.value)}
                                        onFocus={(event: any) => event?.target?.parentElement?.setAttribute('data-error', 'false')}
                                    />
                                </div>
                            </form>
                        </section>
                    </div>

                    <section>
                        <header>
                            <h2>
                                اطلاعات سفر
                            </h2>

                            <div>
                                <div>
                                    <Blog />
                                    <span>
                                        <p>
                                            هواپیمایی
                                        </p>
                                        <a href='/'>
                                            کاسپین
                                        </a>
                                    </span>
                                </div>
                            </div>

                            <div data-departure_date={true}>
                                <div>
                                    <span>
                                        جمعه 7 بهمن
                                    </span>

                                    <span>
                                        جمعه 7 بهمن
                                    </span>
                                </div>

                                <div>
                                    <span>
                                        14:30
                                    </span>

                                    <span>
                                    </span>
                                </div>

                                <span/>

                                <div>
                                    <div>
                                        <span>
                                            تهران
                                        </span>
                                        <p>
                                            فرودگاه بین المللی مهرآباد
                                        </p>
                                    </div>

                                    <div>
                                        <span>
                                            رشت
                                        </span>
                                        <p>
                                            فرودگاه بین المللی سردارجنگل
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <ul>
                                <li>
                                    شماره پرواز
                                    <span>
                                        2618
                                    </span>
                                </li>

                                <li>
                                    مقدار بار مجاز
                                    <span>
                                        20 کیلو گرم
                                    </span>
                                </li>

                                <li>
                                    کلاس پروازی
                                    <span>
                                        اکونومی
                                    </span>
                                </li>

                                <li>
                                    خدمات ویژه
                                    <span>
                                        ندارد
                                    </span>
                                </li>
                            </ul>
                        </header>

                        <footer>
                            {
                                page === 'purchase'
                                    ? <div data-purchase={true}>
                                        <span>
                                            کد تخفیف
                                        </span>

                                        <p>
                                            اگر کد تخفیف دارید، آن را در بخش زیر وارد کنید
                                        </p>

                                        <form data-error={true} data-error_message='این کد تخفیف مورد تائید نمی باشد'>
                                            <input type='text'/>

                                            <button>
                                                اعمال
                                            </button>
                                        </form>
                                    </div>
                                    : null
                            }

                            <div>
                                <span>
                                    بزرگسال
                                </span>

                                <span>
                                    12/589/000 ریال
                                </span>
                            </div>

                            <div data-total={true}>
                                <span>
                                    مجموع
                                </span>

                                <span>
                                    12/589/000 ریال
                                </span>
                            </div>

                            <hr />

                            <div data-submit={true}>
                                <label>
                                    <input type='checkbox'/>
                                    <span/>
                                    قوانین سایت و پرواز را خوانده و قبول دارم
                                </label>

                                <button>
                                    تائید و ادامه خرید
                                </button>
                            </div>
                        </footer>
                    </section>
                </div>
            </section>
        </main>
    );
};

export default Booking;
