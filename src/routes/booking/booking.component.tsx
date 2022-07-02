import React, { useCallback, useState, useRef } from 'react';

import styles from './booking.module.scss';

import Navbar from '../../components/layouts/navbar/navbar.component';

import { ReactComponent as Blog } from '../../assets/icons/blogs.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail-line.svg';
import { ReactComponent as Phone } from '../../assets/icons/smartphone-line.svg';
import { ReactComponent as Pen } from '../../assets/icons/edit-line.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as Arrow2 } from '../../assets/icons/arrow-2.svg';
import { ReactComponent as Ticket } from '../../assets/icons/coupon-3-fill.svg';
import { ReactComponent as User } from '../../assets/icons/user-3-fill.svg';
import { ReactComponent as User2 } from '../../assets/icons/user.svg';
import { ReactComponent as Edit } from '../../assets/icons/edit-line.svg';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { ReactComponent as Card } from '../../assets/icons/bank-card-fill.svg';

const Booking = () =>
{
    const [page, setPage] = useState('user');
    const [passengers, setPassengers] = useState([true]);
    const [genders, setGenders] = useState(['']);
    const [open, setOpen] = useState(false);
    const [popup, setPopup] = useState(false);
    const [passport, setPassport] = useState(false);
    const genderParents: any = useRef<any>([])
    const mainRef: any = useRef<any>(null)
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
            let index = 0;
            let error = false;

            const emails: HTMLInputElement[] | any = [...document.querySelectorAll('#email')];
            const genderParents: HTMLDivElement[] | any = [...document.querySelectorAll('#gender_parent')];
            const latinNames: HTMLInputElement[] | any = [...document.querySelectorAll('#latin_name')];
            const latinLastNames: HTMLInputElement[] | any = [...document.querySelectorAll('#latin_lastName')];
            const persianNames: HTMLInputElement[] | any = [...document.querySelectorAll('#persian_name')];
            const persianLastNames: HTMLInputElement[] | any = [...document.querySelectorAll('#persian_lastName')];
            const nationalCodes: HTMLInputElement[] | any = [...document.querySelectorAll('#nationalCode')];

            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            for (const email of emails)
            {
                if (!latinNames[index]?.value)
                {
                    error = true;

                    latinNames[index]?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                    latinNames[index]?.parentElement?.setAttribute('data-error', 'true');
                }
                if (!latinLastNames[index]?.value)
                {
                    error = true;

                    latinLastNames[index]?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                    latinLastNames[index]?.parentElement?.setAttribute('data-error', 'true');
                }
                if (!persianNames[index]?.value)
                {
                    error = true;

                    persianNames[index]?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                    persianNames[index]?.parentElement?.setAttribute('data-error', 'true');
                }
                if (!persianLastNames[index]?.value)
                {
                    error = true;

                    persianLastNames[index]?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                    persianLastNames[index]?.parentElement?.setAttribute('data-error', 'true');
                }
                if (!nationalCodes[index]?.value)
                {
                    error = true;

                    nationalCodes[index]?.parentElement?.setAttribute('data-error_message', 'این ایمیل مورد تائید نمی باشد');
                    nationalCodes[index]?.parentElement?.setAttribute('data-error', 'true');
                }
                if (!emails[index]?.value)
                {
                    error = true;

                    emails[index]?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                    emails[index]?.parentElement?.setAttribute('data-error', 'true');
                }
                else if (!emailRegex.test(email?.value))
                {
                    error = true;

                    emails[index]?.parentElement?.setAttribute('data-error_message', 'این ایمیل مورد تائید نمی باشد');
                    emails[index]?.parentElement?.setAttribute('data-error', 'true');
                }
                if (!genders[index])
                {
                    error = true;

                    genderParents[index]?.setAttribute('data-error', 'true');
                }

                index++;
            }

            if (!error)
            {
                setPage('purchase')
            }
        }, [setPage, genders]);

    React.useEffect(() =>
    {
        mainRef?.current?.addEventListener('click', (event: any) =>
        {
            if (genderParents?.current[0])
            {
                for (const genderParent of genderParents?.current)
                {
                    if (!genderParent?.contains(event?.target))
                    {
                        setOpen(false);
                    }
                }
            }
        })
    }, [mainRef, genderParents]);

    return (
        <main ref={mainRef}>
            <div data-activate={popup} className={styles.bookingPopup}>
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
                                1741371104
                            </span>

                            <span>
                                1372/03/29
                            </span>
                        </div>

                        <button>
                            انتخاب
                        </button>
                    </div>

                    <div>
                        <div>
                            <span>
                                پارسا فیروزی
                            </span>

                            <span>
                                1741371104
                            </span>

                            <span>
                                1372/03/29
                            </span>
                        </div>

                        <button>
                            انتخاب
                        </button>
                    </div>

                    <div>
                        <div>
                            <span>
                                پارسا فیروزی
                            </span>

                            <span>
                                1741371104
                            </span>

                            <span>
                                1372/03/29
                            </span>
                        </div>

                        <button>
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
                        {
                            passengers.map((value, index) =>
                            {
                                return (
                                    <div key={index}>
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

                                                    <button onClick={() => setPopup(true)}>
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

                                                    <div data-error='false' id='gender_parent' ref={(element) => genderParents.current[index] = element} data-error_message='پر کردن این فیلد الزامی است'>
                                                        <label>
                                                            جنسیت
                                                        </label>

                                                        <div onClick={() => setOpen(!open)} id='gender'>
                                                            <span data-activate={!!genders[index]}>
                                                                { genders[index] !== '' ? genders[index] : 'انتخاب' }
                                                            </span>

                                                            <Arrow2 data-open={open} id='gender_item'/>

                                                            <ul data-open={open} id='gender_item'>
                                                                <li onClick={(event: any) =>
                                                                {
                                                                    setGenders(oldArray =>
                                                                    {
                                                                        let data = oldArray;
                                                                        data[index] = 'آقا'

                                                                        return[...data]
                                                                    });

                                                                    event?.target?.parentElement?.parentElement?.parentElement?.setAttribute('data-error', 'false')
                                                                }}>
                                                                    آقا
                                                                </li>

                                                                <li onClick={(event: any) =>
                                                                {
                                                                    setGenders(oldArray =>
                                                                    {
                                                                        let data = oldArray;
                                                                        data[index] = 'خانم'

                                                                        return[...data]
                                                                    });

                                                                    event?.target?.parentElement?.parentElement?.parentElement?.setAttribute('data-error', 'false')
                                                                }}>
                                                                    خانم
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                                                        <label>
                                                            کد ملی
                                                        </label>

                                                        <input id='nationalCode' type='text' onKeyPress={numberValidate}/>
                                                    </div>

                                                    <div data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                                                        <label>
                                                            تاریخ تولد
                                                        </label>

                                                        <input type='number'/>
                                                    </div>
                                                </form>

                                                <div data-add={true} onClick={() => { setPassengers((oldArray: boolean[]) => [...oldArray, true]); setGenders((oldArray: string[]) => [...oldArray, ''])}}>
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
                            })
                        }
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

                                <button>
                                    <Edit />
                                    ویرایش
                                </button>
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
                                    ?
                                    <div data-purchase={true}>
                                        <span>
                                            کد تخفیف
                                        </span>

                                        <p>
                                            اگر کد تخفیف دارید، آن را در بخش زیر وارد کنید
                                        </p>

                                        <form data-error={true}>
                                            <input type='text'/>

                                            <button>
                                                اعمال
                                            </button>
                                        </form>
                                    </div>
                                    :
                                    null
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
