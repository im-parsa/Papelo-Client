import React, { useCallback, useState } from 'react';

import styles from './booking-box.module.scss';
import { ReactComponent as User } from '../../assets/icons/user-3-fill.svg';
import { ReactComponent as Card } from '../../assets/icons/bank-card-fill.svg';
import { ReactComponent as Ticket } from '../../assets/icons/coupon-3-fill.svg';
import { ReactComponent as User2 } from '../../assets/icons/user.svg';
import { ReactComponent as Arrow2 } from '../../assets/icons/arrow-2.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as Pen } from '../../assets/icons/edit-line.svg';
import { ReactComponent as Phone } from '../../assets/icons/smartphone-line.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail-line.svg';

const BookingBox = (props: any) =>
{
    const [page, setPage] = useState('user');
    const [gender, setGender] = useState('');
    const [open, setOpen] = useState(false);
    const [passport, setPassport] = useState(false);
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

            if (!regex.test(key) || event?.target?.value?.length >= 10)
            {
                theEvent.returnValue = false;

                if (theEvent.preventDefault)
                {
                    theEvent.preventDefault();
                }
            }
            else
            {
                event?.target?.parentElement?.setAttribute('data-error', 'false');
            }
        }, []);
    const latinValidate = useCallback(
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

            const numRegex = /[0-9]|\./;
            const regex = /^[a-zA-Z\s.,]+$/;

            if (!regex.test(key) || numRegex.test(key) || event?.target?.value?.length >= 30)
            {
                theEvent.returnValue = false;

                if (theEvent.preventDefault)
                {
                    theEvent.preventDefault();
                }
            }
            else
            {
                event?.target?.parentElement?.setAttribute('data-error', 'false');
            }
        }, []);
    const persianValidate = useCallback(
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

            const numRegex = /[0-9]|\./;
            const regex = /[آ-ی]/;

            if (!regex.test(key) || numRegex.test(key) || event?.target?.value?.length >= 30)
            {
                theEvent.returnValue = false;

                if (theEvent.preventDefault)
                {
                    theEvent.preventDefault();
                }
            }
            else
            {
                event?.target?.parentElement?.setAttribute('data-error', 'false');
            }
        }, []);
    const purchaseValidate = useCallback(
        (event: any) =>
        {
            let error = false;

            const email: HTMLInputElement | any = document.querySelector('#email');
            const genderParent: HTMLDivElement | any = document.querySelector('#gender_parent');
            const latinName: HTMLInputElement | any = document.querySelector('#latin_name');
            const latinLastName: HTMLInputElement | any = document.querySelector('#latin_lastName');
            const persianName: HTMLInputElement | any = document.querySelector('#persian_name');
            const persianLastName: HTMLInputElement | any = document.querySelector('#persian_lastName');

            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (!latinName?.value)
            {
                error = true;

                latinName?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                latinName?.parentElement?.setAttribute('data-error', 'true');
            }
            if (!latinLastName?.value)
            {
                error = true;

                latinLastName?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                latinLastName?.parentElement?.setAttribute('data-error', 'true');
            }
            if (!persianName?.value)
            {
                error = true;

                persianName?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                persianName?.parentElement?.setAttribute('data-error', 'true');
            }
            if (!persianLastName?.value)
            {
                error = true;

                persianLastName?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                persianLastName?.parentElement?.setAttribute('data-error', 'true');
            }
            if (!email?.value)
            {
                error = true;

                email?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                email?.parentElement?.setAttribute('data-error', 'true');
            }
            else if (!emailRegex.test(email?.value))
            {
                error = true;

                email?.parentElement?.setAttribute('data-error_message', 'این ایمیل مورد تائید نمی باشد');
                email?.parentElement?.setAttribute('data-error', 'true');
            }
            if (!gender)
            {
                error = true;

                genderParent?.setAttribute('data-error', 'true');
            }

            if (!error)
            {
                setPage('purchase')
            }
        }, [setPage, gender]);

    React.useEffect(() =>
    {
        const genderParent = [...document.querySelectorAll('#gender')];

        document.addEventListener('click', (event: any) =>
        {
            if (!genderParent?.some((element) => element?.contains(event?.target)))
            {
                setOpen(false);
            }
        })
    }, []);

    return (
        <div>
            <section data-activate={true}>
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

                <section data-activate={page === 'user'}>
                    <div>
                                    <span>
                                        <User data-fill={true} />
                                        مشخصات مسافر
                                    </span>
                    </div>

                    <div>
                        <div>
                            <p>
                                <input type='radio' id='cart' onChange={() => { setPassport(false) }} checked={!passport}/>
                                <label htmlFor='cart'>
                                    کارت ملی
                                </label>
                            </p>
                            <p>
                                <input type='radio' id='passport' onChange={() => { setPassport(true) }} checked={passport}/>
                                <label htmlFor='passport'>
                                    پاسپورت
                                </label>
                            </p>
                        </div>

                        <button onClick={() => props?.setPopup(true)}>
                            <User2 />
                            مسافرین سابق
                        </button>
                    </div>

                    <form>
                        <div data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                            <label>
                                نام لاتین
                            </label>

                            <input id='latin_name' data-lang='en' type='text' onKeyPress={latinValidate}/>
                        </div>

                        <div data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                            <label>
                                نام فارسی
                            </label>

                            <input id='persian_name' type='text' onKeyPress={persianValidate}/>
                        </div>

                        <div data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                            <label>
                                نام خانوادگی لاتین
                            </label>

                            <input id='latin_lastName' data-lang='en' type='text' onKeyPress={latinValidate}/>
                        </div>

                        <div data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                            <label>
                                نام خانوادگی فارسی
                            </label>

                            <input id='persian_lastName' type='text' onKeyPress={persianValidate}/>
                        </div>

                        <div data-error='false' id='gender_parent' data-error_message='پر کردن این فیلد الزامی است'>
                            <label>
                                جنسیت
                            </label>

                            <div onClick={() => setOpen(!open)} id='gender'>
                                            <span data-activate={!!gender}>
                                                { gender || 'انتخاب' }
                                            </span>

                                <Arrow2 data-open={open} id='gender_item'/>

                                <ul data-open={open} id='gender_item'>
                                    <li onClick={(event: any) => { setGender('آقا'); event?.target?.parentElement?.parentElement?.setAttribute('data-error', 'false') }}>
                                        آقا
                                    </li>

                                    <li onClick={(event: any) => { setGender('خانم'); event?.target?.parentElement?.parentElement?.setAttribute('data-error', 'false') }}>
                                        خانم
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                            <label>
                                کد ملی
                            </label>

                            <input id='persian_nationalCode' type='text' onKeyPress={numberValidate}/>
                        </div>

                        <div data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                            <label>
                                تاریخ تولد
                            </label>

                            <input type='number'/>
                        </div>
                    </form>

                    <div data-add={true} onClick={() => props?.setPassengers((oldArray: boolean[]) => [...oldArray, true])}>
                        <Plus />
                        اضافه کردن مسافر جدید
                    </div>
                </section>

                <section data-activate={page === 'purchase'}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <span>
                                        اطلاعات مسافران
                                    </span>

                        <button>
                            <Pen />
                            ویرایش
                        </button>
                    </div>

                    <ul>
                        <li>
                            <User2 />

                            <div>
                                            <span>
                                                پارسا فیروزی
                                            </span>

                                <p>
                                    Parsa Firoozi
                                </p>
                            </div>

                            <span>
                                            مرد
                                        </span>

                            <span>
                                            2610137702
                                        </span>

                            <span>
                                            1372/03/29
                                        </span>

                            <span>
                                            ایران
                                        </span>
                        </li>
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

                        <button>
                            <Pen />
                            ویرایش
                        </button>
                    </div>

                    <ul data-info={true}>
                        <li>
                                        <span>
                                            <Phone />
                                            شماره همراه
                                        </span>

                            <p>
                                09170700566
                            </p>
                        </li>

                        <li>
                                        <span>
                                            <Mail />
                                            نشانی ایمیل
                                        </span>

                            <p>
                                contact@parsa-firoozi.ir
                            </p>
                        </li>
                    </ul>
                </section>
            </section>

            <section data-activate={page === 'user'}>
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
                        <div data-number={true}  data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                            <label>
                                شماره موبایل
                            </label>

                            <input type='number' onKeyPress={numberValidate}/>
                        </div>

                        <div data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                            <label>
                                ایمیل
                            </label>

                            <input data-lang='en' id='email' type='text' onKeyPress={(event: any) => event?.target?.parentElement?.setAttribute('data-error', 'false')}/>
                        </div>
                    </form>
                </section>
            </section>
        </div>
    );
};

export default BookingBox;
