import React from 'react';

import Navbar from '../../components/layouts/navbar/navbar.component';

import { ReactComponent as Tajob } from '../../assets/icons/error-warning-line.svg';
import { ReactComponent as Box8 } from '../../assets/icons/box-8.svg';
import { ReactComponent as EditLine } from '../../assets/icons/edit-line.svg';
import { ReactComponent as Plane } from '../../assets/icons/plane.svg';
import { ReactComponent as Star } from '../../assets/icons/star-fill.svg';
import { ReactComponent as User } from '../../assets/icons/user-line.svg';
import { ReactComponent as Phone } from '../../assets/icons/smartphone-line.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail-line.svg';

import styles from './factor-3.module.scss';

const Factor3 = () =>
{
    return (
        <>
            <Navbar />
            <main>
                <section className={styles.factor3}>
                    <div className="container">
                        <div className={styles.factor3Yellow}>
                            <Tajob />
                            <p>لطفا اطلاعات وارد شده را کنترل کرده و پس از اطمینان از درستی آنها، برای پرداخت هزینه اقدام نمایید</p>
                        </div>

                        <div className={styles.factor3Content}>
                            <div className={styles.factor3ContentHeading}>
                                <span>
                                    <Box8 />
                                </span>
                                <span>شماره سفارش: 178680</span>
                            </div>

                            <div className={styles.factor3Divider} />

                            <div className={styles.factor3ContentInfo}>
                                <div className={styles.factor3ContentInfoHead}>
                                    <h2>اطلاعات بلیط پرواز</h2>
                                    <button>
                                        <EditLine />
                                        <span>ویرایش</span>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.factor3ContentTicket}>
                                <ul>
                                    <li>
                                        <span>بلیط رفت</span>
                                    </li>
                                    <li>
                                        <Box8 />
                                        <span>هواپیمایی</span>
                                        <span>کاسپین</span>
                                    </li>
                                    <li>
                                        <span>کلاس اکونومی</span>
                                    </li>
                                    <li>
                                        <span>شماره پرواز : 44</span>
                                    </li>
                                    <li>
                                        <span>تهران - فرودگاه مهرآباد</span>
                                        <span>11:30</span>
                                        <Plane />
                                    </li>
                                    <li>
                                        <span>کیش - فرودگاه کیش</span>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.factor3ContentTicket}>
                                <ul>
                                    <li>
                                        <span>بلیط رفت</span>
                                    </li>
                                    <li>
                                        <Box8 />
                                        <span>هواپیمایی</span>
                                        <span>کاسپین</span>
                                    </li>
                                    <li>
                                        <span>کلاس اکونومی</span>
                                    </li>
                                    <li>
                                        <span>شماره پرواز : 44</span>
                                    </li>
                                    <li>
                                        <span>تهران - فرودگاه مهرآباد</span>
                                        <span>11:30</span>
                                        <Plane />
                                    </li>
                                    <li>
                                        <span>کیش - فرودگاه کیش</span>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.factor3ContentHotelInfo}>
                                <div className={styles.factor3ContentHotelInfoHead}>
                                    <p>
                                        <span>اطلاعات هتل</span>
                                        <span>اطلاعات هتل شامل آدرس و اتاق انتخابی میباشد</span>
                                    </p>
                                    <button>
                                        <EditLine />
                                        <span>ویرایش</span>
                                    </button>
                                </div>

                                <ul className={styles.factor3ContentHotelInfoData}>
                                    <li>
                                        <span>نام هتل</span>
                                        <span>آفتاب شرق</span>
                                    </li>
                                    <li>
                                        <span>ستاره هتل</span>
                                        <span>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </span>
                                    </li>
                                    <li>
                                        <span>تاریخ ورود</span>
                                        <span>دوشنبه 02 خرداد 1401</span>
                                    </li>
                                    <li>
                                        <span>تاریخ خروج</span>
                                        <span>جمعه 06 خرداد 1401</span>
                                    </li>
                                    <li>
                                        <span>تعداد اتاق</span>
                                        <span>2</span>
                                    </li>
                                </ul>

                                <div className={styles.factor3ContentHotelInfoTab}>
                                    <div className={styles.factor3ContentHotelInfoTable}>
                                        <div className={styles.factor3ContentHotelInfoTableTR}>
                                            <div className={styles.factor3ContentHotelInfoTableTD}>نام اتاق</div>
                                            <div className={styles.factor3ContentHotelInfoTableTD}>نام مسافر</div>
                                            <div className={styles.factor3ContentHotelInfoTableTD}>جنسیت</div>
                                            <div className={styles.factor3ContentHotelInfoTableTD}>کد ملی / شماره پاسپورت</div>
                                            <div className={styles.factor3ContentHotelInfoTableTD}>تاریخ تولد</div>
                                            <div className={styles.factor3ContentHotelInfoTableTD}>نوع مسافر</div>
                                        </div>
                                        <div className={styles.factor3ContentHotelInfoTableTR}>
                                            <div className={styles.factor3ContentHotelInfoTableTD1}>اتاق دو تخته دبل</div>
                                            <div className={styles.factor3ContentHotelInfoTableTD1}>احسان غلام پور</div>
                                            <div className={styles.factor3ContentHotelInfoTableTD1}>مرد</div>
                                            <div className={styles.factor3ContentHotelInfoTableTD1}>2610137702</div>
                                            <div className={styles.factor3ContentHotelInfoTableTD1}>1377/06/04</div>
                                            <div className={styles.factor3ContentHotelInfoTableTD1}>بزرگسال</div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.factor3ContentHotelInfoPerson}>
                                    <span>مشخصات سرپرست</span>
                                    <span>اطلاعات بلیط و اطلاع‌رسانی بعدی به این ادرس ارسال می‌شود</span>
                                </div>

                                <div className={styles.factor3ContentHotelInfoPersonInfo}>
                                    <div>
                                        <User />
                                        <p>
                                            <span>احسان غلام پور</span>
                                            <span>Ehsan Gholampour</span>
                                        </p>
                                    </div>

                                    <div>
                                        <Phone />
                                        <span>شماره همراه</span>
                                        <span>09116299428</span>
                                    </div>

                                    <div>
                                        <Mail />
                                        <span>نشانی ایمیل</span>
                                        <span>ehsangholampour@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Factor3;
