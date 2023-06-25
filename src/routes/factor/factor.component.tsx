import React from 'react';

import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Train } from '../../assets/icons/train_logo.svg';

import styles from './factor.module.scss';

const Factor = () =>
{
    return (
        <main>
            <section className={styles.factor}>
                <div style={{ maxWidth: '95rem', margin: '0 auto' }}>
                    <h1 className={styles.factorLogo}>پاپلو</h1>

                    <div className={styles.factorTopBox}>
                        <div className={styles.factorTopBoxRight}>
                            <User />
                            <h2>
                                <p>نام مسافر</p>
                                <p>احسان غلام پور</p>
                            </h2>
                        </div>

                        <div className={styles.factorTopBoxLeft}>
                            <p>Passenger Name</p>
                            <p>Ehsan Gholampour</p>
                        </div>
                    </div>

                    <div className={styles.factorContent}>
                        <div className={styles.factorContentRight}>
                            <div className={styles.factorContentRightForm}>
                                <div className={styles.factorContentRightFormText}>
                                    <span>مبدا</span>
                                    <span>From</span>
                                </div>

                                <div className={styles.factorContentRightFormText2}>
                                    <p><span>تهران</span>/TEH</p>
                                    <p>فرودگاه بین المللی مهرآباد</p>
                                </div>
                            </div>

                            <div className={styles.factorContentRightTo}>
                                <div className={styles.factorContentRightToText}>
                                    <span>مبدا</span>
                                    <span>From</span>
                                </div>

                                <div className={styles.factorContentRightToText2}>
                                    <p><span>تهران</span>/TEH</p>
                                    <p>فرودگاه بین المللی مهرآباد</p>
                                </div>
                            </div>

                            <div className={styles.factorContentRightInfo}>
                                <div>
                                    <span>تاریخ پرواز</span>
                                    <span>1401/03/25</span>
                                </div>

                                <div>
                                    <span>Flight Date</span>
                                    <span>14/04/2020</span>
                                </div>
                            </div>

                            <div className={styles.factorContentRightInfo}>
                                <div>
                                    <span>ساعت پرواز</span>
                                    <span>14:30</span>
                                </div>

                                <div>
                                    <span>Flight Time</span>
                                    <span>14:30</span>
                                </div>
                            </div>

                            <div className={styles.factorContentRightInfo}>
                                <div>
                                    <span>شماره بلیت</span>
                                    <span>752575375</span>
                                </div>

                                <div>
                                    <span>Ticket Num.</span>
                                    <span>752575375</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.factorContentLeft}>
                            <div className={styles.factorContentLeftCompanyLogo}>
                                <Train />
                                <span>هواپیمایی</span>
                                <span>کاسپین</span>
                            </div>

                            <ul className={styles.factorContentLeftInfo}>
                                <li className={styles.factorContentLeftInfoItem}>
                                    <span>کد ایر لاین</span>
                                    <span>EP</span>
                                </li>
                                <li className={styles.factorContentLeftInfoItem}>
                                    <span>مدل هواپیما</span>
                                    <span>بویینگ 747</span>
                                </li>
                                <li className={styles.factorContentLeftInfoItem}>
                                    <span>کلاس کابین</span>
                                    <span>اکونومی</span>
                                </li>
                                <li className={styles.factorContentLeftInfoItem}>
                                    <span>کلاس پرواز (شناسه)</span>
                                    <span>Y</span>
                                </li>
                                <li className={styles.factorContentLeftInfoItem}>
                                    <span>میزان بار مجاز رایگان</span>
                                    <span>حدود 25 کیلوگرم</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.factorTimes}>
                        <div className={styles.factorTimesHidden} />
                        <div className={styles.factorTimesLeft}>
                            <div>
                                <span>زمان درخواست کنسلی</span>
                                <span>میزان جریمه</span>
                            </div>

                            <ul>
                                <li>
                                    <span>از لحظه صدور تا ساعت 12 ظهر 1 روز قبل پرواز</span>
                                    <span>درصد</span>
                                </li>
                                <li>
                                    <span>از لحظه صدور تا ساعت 12 ظهر 1 روز قبل پرواز</span>
                                    <span>درصد</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.factorDivider} />

                    <footer>
                        <h1>قوانین و مقررات</h1>
                        <p>حضور مسافر برای پرواز داخلی2ساعت و خارجی3 ساعت قبل در فرودگاه الزامیست کانتر کنترل 30 دقیقه قبل پروازداخلی و 90 دقیقه قبل پرواز خارجی بسته خواهد شد</p>
                        <p>تغییر نام و یا انتقال به غیر مجاز نمی باشد</p>
                        <p>پرواز های داخلی شرکت های ایران ایر ، معراج ، اتا ، ایرتورنفت و قشم از ترمینال 2 مهرآباد و زاگرس، وارش، کیش ایر از ترمینال 1 و دیگر شرکتها از ترمینال 4 انجام می شود</p>
                        <p>مسافران پرواز‌های چارتر هنگام مراجعه به فرودگاه باید یک نسخه چاپ‌شده از بلیط و مدارک شناسایی معتبر به‌همراه داشته باشند</p>
                        <p>قیمت بلیط چارتر برای کودکان بین ۲ تا ۱۲ سال و نوزادان، برابر با قیمت بلیط بزرگسال است</p>

                        <div className={styles.factorDivider} />

                        <div className={styles.factorPolicy}>
                            <span>تمامی حقوق محفوظ است</span>
                            <span>www.bilityab.com</span>
                            <span>021-5230000</span>
                        </div>
                    </footer>
                </div>
            </section>
        </main>
    );
};

export default Factor;
