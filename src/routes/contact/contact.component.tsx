import React from 'react';
import { Link } from 'react-router-dom';

import styles from './contact.module.scss';

import Navbar from '../../components/layouts/navbar/navbar.component';
import Footer from '../../components/layouts/footer/footer.component';

import Map from '../../assets/images/map.svg';
import Header from '../../assets/images/call-center.svg';
import { ReactComponent as Arrow2 } from '../../assets/icons/arrow-2.svg';
import { ReactComponent as Whatsapp } from '../../assets/icons/whats_app.svg';
import { ReactComponent as MapPin } from '../../assets/icons/map-pin-line.svg';
import { ReactComponent as Headphone } from '../../assets/icons/headphone-line.svg';
import { ReactComponent as Warning } from '../../assets/icons/error-warning-line.svg';

const Contact = () =>
{
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
            <section className={styles.contactContact}>
                <div className='container no-padding'>
                    <form>
                        <div>
                            <label>
                                نام شما
                            </label>
                            <input type='text' />
                        </div>
                        <div>
                            <label>
                                آدرس ایمیل
                            </label>
                            <input type='text' />
                        </div>
                        <div>
                            <label>
                                شماره همراه
                            </label>
                            <input type='number' />
                        </div>
                        <div>
                            <label>
                                موضوع
                            </label>
                            <input type='text' />
                        </div>
                        <div>
                            <label>
                                متن پیام
                            </label>
                            <textarea />
                        </div>
                        <button>
                            ارسال
                        </button>
                    </form>
                    <div style={{ backgroundImage: `url(${Map})` }}>
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
