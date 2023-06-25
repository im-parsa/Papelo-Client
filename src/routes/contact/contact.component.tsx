import validator from 'validator';
import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { CircleMarker, MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import styles from './contact.module.scss';

import Navbar from '../../components/layouts/navbar/navbar.component';
import Footer from '../../components/layouts/footer/footer.component';

import Header from '../../assets/images/call-center.svg';
import { ReactComponent as Arrow2 } from '../../assets/icons/arrow-2.svg';
import { ReactComponent as Whatsapp } from '../../assets/icons/whats_app.svg';
import { ReactComponent as MapPin } from '../../assets/icons/map-pin-line.svg';
import { ReactComponent as Headphone } from '../../assets/icons/headphone-line.svg';
import { ReactComponent as Warning } from '../../assets/icons/error-warning-line.svg';

const Contact = () =>
{
    const nameRef: any = useRef<any>(null);
    const emailRef: any = useRef<any>(null);
    const subjectRef: any = useRef<any>(null);
    const contentRef: any = useRef<any>(null);
    const phoneNumberRef: any = useRef<any>(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    const onSubmit = (event: any) =>
    {
        event?.preventDefault();

        let error = true;

        if (!name)
        {
            error = true;

            nameRef?.current?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
            nameRef?.current?.parentElement?.setAttribute('data-error', 'true');
        }
        if (!content)
        {
            error = true;

            contentRef?.current?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
            contentRef?.current?.parentElement?.setAttribute('data-error', 'true');
        }
        if (!subject)
        {
            error = true;

            subjectRef?.current?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
            subjectRef?.current?.parentElement?.setAttribute('data-error', 'true');
        }
        if (!content)
        {
            error = true;

            contentRef?.current?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
            contentRef?.current?.parentElement?.setAttribute('data-error', 'true');
        }
        if (!email)
        {
            error = true;

            emailRef?.current?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
            emailRef?.current?.parentElement?.setAttribute('data-error', 'true');
        }
        else if (!validator.isEmail(email))
        {
            error = true;

            emailRef?.current?.parentElement?.setAttribute('data-error_message', 'این ایمیل مورد تائید نمی باشد');
            emailRef?.current?.parentElement?.setAttribute('data-error', 'true');
        }
        if (!phoneNumber)
        {
            error = true;

            phoneNumberRef?.current?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
            phoneNumberRef?.current?.parentElement?.setAttribute('data-error', 'true');
        }
        else if (!validator.isMobilePhone(phoneNumber, 'fa-IR'))
        {
            error = true;

            phoneNumberRef?.current?.parentElement?.setAttribute('data-error_message', 'این شماره موبایل مورد تائید نمی باشد');
            phoneNumberRef?.current?.parentElement?.setAttribute('data-error', 'true');
        }

        if (!error)

            console.log(error);
    };

    const position =
        {
            lat: 29.5926,
            lng: 52.5836
        };

    return (
        <main>
            <Navbar
                header='تماس با ما'
                title='تماس با ما'
                description='حدود 236 نفر پشتبان آماده پاسخگویی به سوالات شما میباشند، دلگرم به شماییم'
                headerImage={Header}
            />

            <section className={styles.contactAlert}>
                <div className='container border'>
                    <div>
                        <div>
                            <h3>
                                <Warning />
                                سوالات متداول
                            </h3>
                            <p>
                                درصورتیکه که با نحوه ثبت نام در سایت سوالی دارید لطفا قسمت پرسش های متداول را مشاهده بفرمایید
                            </p>
                        </div>
                        <Link to='/faq'>
                            مشاهده
                            <Arrow2 />
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.contactMain}>
                <div className='container no-padding'>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label>
                                نام شما
                            </label>
                            <input
                                value={name ?? ''}
                                ref={nameRef}
                                onChange={(event: any) => setName(event?.target?.value)}
                                type='text'
                                onBlur={(event: any) =>
                                {
                                    if (!event?.target?.value)
                                    {
                                        event?.target?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                                        event?.target?.parentElement?.setAttribute('data-error', 'true');
                                    }
                                    else
                                        event?.target?.parentElement?.setAttribute('data-error', 'false');
                                }}
                                onFocus={(event: any) => event?.target?.parentElement?.setAttribute('data-error', 'false')}
                            />
                        </div>

                        <div>
                            <label>
                                آدرس ایمیل
                            </label>
                            <input
                                value={email ?? ''}
                                ref={emailRef}
                                onChange={(event: any) => setEmail(event?.target?.value)}
                                type='text'
                                data-ltr='true'
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
                                onFocus={(event: any) => event?.target?.parentElement?.setAttribute('data-error', 'false')}
                            />
                        </div>

                        <div>
                            <label>
                                شماره همراه
                            </label>
                            <input
                                value={phoneNumber ?? ''}
                                ref={phoneNumberRef}
                                onChange={(event: any) => setPhoneNumber(event?.target?.value)}
                                type='text'
                                data-ltr='true'
                                onBlur={(event: any) =>
                                {
                                    if (!event?.target?.value)
                                    {
                                        event?.target?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                                        event?.target?.parentElement?.setAttribute('data-error', 'true');
                                    }
                                    else if (!validator.isMobilePhone(event?.target?.value, 'fa-IR'))
                                    {
                                        event?.target?.parentElement?.setAttribute('data-error_message', 'این شماره موبایل مورد تائید نمی باشد');
                                        event?.target?.parentElement?.setAttribute('data-error', 'true');
                                    }
                                    else
                                        event?.target?.parentElement?.setAttribute('data-error', 'false');
                                }}
                                onFocus={(event: any) => event?.target?.parentElement?.setAttribute('data-error', 'false')}
                            />
                        </div>

                        <div>
                            <label>
                                موضوع
                            </label>
                            <input
                                value={subject ?? ''}
                                ref={subjectRef}
                                onChange={(event: any) => setSubject(event?.target?.value)}
                                type='text'
                                onBlur={(event: any) =>
                                {
                                    if (!event?.target?.value)
                                    {
                                        event?.target?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                                        event?.target?.parentElement?.setAttribute('data-error', 'true');
                                    }
                                    else
                                        event?.target?.parentElement?.setAttribute('data-error', 'false');
                                }}
                                onFocus={(event: any) => event?.target?.parentElement?.setAttribute('data-error', 'false')}
                            />
                        </div>

                        <div>
                            <label>
                                متن پیام
                            </label>
                            <textarea
                                value={content ?? ''}
                                ref={contentRef}
                                onChange={(event: any) => setContent(event?.target?.value)}
                                onBlur={(event: any) =>
                                {
                                    if (!event?.target?.value)
                                    {
                                        event?.target?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                                        event?.target?.parentElement?.setAttribute('data-error', 'true');
                                    }
                                    else
                                        event?.target?.parentElement?.setAttribute('data-error', 'false');
                                }}
                                onFocus={(event: any) => event?.target?.parentElement?.setAttribute('data-error', 'false')}
                            />
                        </div>

                        <button type='submit'>
                            ارسال
                        </button>
                    </form>

                    <MapContainer
                        center={position}
                        zoom={45}
                        zoomControl={false}
                        scrollWheelZoom={true}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <div className={styles.contactMap}>
                            <div>
                                <h3>
                                    <MapPin />
                                    آدرس
                                </h3>
                                <h2>
                                    دفتر فروش: قیطریه، بلوار اندرزگو، نبش کوچه‌ی بلوچ شمالی، پلاک ۴
                                </h2>
                            </div>
                            <div>
                                <div>
                                    <h3>
                                        <Headphone />
                                        تلفن پشتیبانی
                                    </h3>
                                    <h2>
                                        61300500800-021
                                    </h2>
                                </div>
                                <div>
                                    <Whatsapp />
                                    <h2>
                                        تماس از طریق واتس آپ
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <CircleMarker
                            center={[29.5926, 52.5836]}
                            pathOptions={
                                {
                                    fillColor: '#09BAB5',
                                    stroke: false,
                                    opacity: 0.8
                                }}
                            radius={60}
                        />
                        <CircleMarker
                            center={[29.5926, 52.5836]}
                            pathOptions={
                                {
                                    fillColor: '#09BAB5',
                                    stroke: true,
                                    color: '#FFFFFF',
                                    weight: 2.5,
                                    fillOpacity: 1
                                }}
                            radius={8}
                        />
                    </MapContainer>
                </div>
            </section>

            <section className={styles.contactFooter}>
                <div className='container no-padding'>
                    <h3>
                        برای کسانی که سوال دارند
                    </h3>
                    <div>
                        <Link to='/'>
                            تماس با پشتیبانی
                        </Link>
                        <Link to='/'>
                            استخدام در بلیط یاب
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default Contact;
