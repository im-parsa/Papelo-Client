import React from 'react';

import { ReactComponent as Box8 } from '../../assets/icons/box-8.svg';
import { ReactComponent as Plane } from '../../assets/icons/plane.svg';
import { ReactComponent as User } from '../../assets/icons/user-line.svg';
import { ReactComponent as Tajob } from '../../assets/icons/error-warning-line.svg';

import styles from './factor-2.module.scss';

const Factor2 = () =>
{
    return (
        <main>
            <section className={styles.factor2}>
                <div className={styles.factor2Header}>
                    <div>
                        <span>
                            <Box8 />
                        </span>

                        <p>رزرو شما با موفقیت انجام شد</p>
                    </div>
                    <span>تاریخ رزرو: 1401/02/29</span>
                </div>
                <div className={styles.factor2Divider} />

                <div className={styles.factor2Container}>
                    <h1 className={styles.factor2H1}>هم اکنون می توانید واچر خود را دریافت کنید</h1>

                    <div className={styles.factor2Content}>
                        <div className={styles.factor2ContentRight}>
                            <div className={styles.factor2ContentRightTop}>
                                <div className={styles.factor2ContentRightTopHeader}>
                                    <Box8 />
                                    <span>هواپیمایی</span>
                                    <span>کاسپین</span>
                                </div>

                                <div className={styles.factor2ContentRightTopContent}>
                                    <div className={styles.factor2ContentRightTopContentRight}>
                                        <p>
                                            <span>تهران</span>
                                            <span>TEH</span>
                                        </p>
                                        <div className={styles.factor2ContentRightTopContentRightDir}>
                                            <p>
                                                <Plane />
                                                <span>اکونومی</span>
                                            </p>
                                            <span>ساعت و 15 دقیقه</span>
                                        </div>
                                        <p>
                                            <span>تهران</span>
                                            <span>TEH</span>
                                        </p>
                                    </div>
                                    <div className={styles.factor2ContentRightTopContentLeft}>
                                        <p>
                                            <span>14:30</span>
                                            <span>رشت</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.factor2ContentRightBottom}>
                                <ul>
                                    <li>
                                        <User />
                                    </li>
                                    <li>
                                        <span>احسان غلام پور</span>
                                        <span>Ehsan Gholampour</span>
                                    </li>
                                    <li>
                                        <span>مرد</span>
                                    </li>
                                    <li>
                                        <span>2610137702</span>
                                    </li>
                                    <li>
                                        <span>1372/03/29</span>
                                    </li>
                                    <li>
                                        <span>ایران</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.factor2ContentLeft}>
                            <div className={styles.factor2ContentLeftHeader}>
                                <p>
                                    <Tajob />
                                    <span>کد پیگیری رزرو</span>
                                </p>
                                <span>1786802699</span>
                            </div>

                            <div className={styles.factor2ContentLeftBox}>
                                <span>مبلغ کل بلیط</span>
                                <span>12/589/000 ریال</span>
                                <div className={styles.factor2Divider} />
                                <span>مبلغ کل بلیط</span>
                            </div>

                            <button className={styles.factor2ContentLeftBtn}>دانلود بلیط</button>
                            <button className={styles.factor2ContentLeftBtn2}>پرینت</button>
                        </div>
                    </div>

                    <ul className={styles.factor2List}>
                        <li className={styles.factor2ListItem}>
                            <span>
                                <User />
                            </span>
                            <p>حساب کاربری</p>
                        </li>
                        <li className={styles.factor2ListItem}>
                            <span>
                                <User />
                            </span>
                            <p>حساب کاربری</p>
                        </li>
                        <li className={styles.factor2ListItem}>
                            <span>
                                <User />
                            </span>
                            <p>حساب کاربری</p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default Factor2;
