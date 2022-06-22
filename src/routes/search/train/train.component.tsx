import React from 'react';

import Navbar from '../../../components/layouts/navbar/navbar.component';
import Footer from '../../../components/layouts/footer/footer.component';

import styles from './train.module.scss';

const SearchTrain = () =>
{
    return (
        <main>
            <Navbar />

            <section className={styles.trainHeader}>
                <div className='container'>
                    <div className={styles.trainHeaderBox}>
                        <i/>
                        <i/>
                    </div>
                </div>
            </section>

            <section className={styles.train}>
                <div className='container'>
                    <div className={styles.trainContent}>
                        <div className={styles.trainContentFilter}>
                            <div className={styles.trainContentFilterHeader}>
                                <div>
                                    <h4>نمایش 2 پرواز از 13 پرواز</h4>
                                    <span>لغو فیلترها</span>
                                </div>

                                <ul>
                                    <li>کلاس پروازی: فرست کلاس</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.trainContentBoxes}>
                            <div className={styles.trainContentBoxesHeader}>
                                <h4>حدود 16 مورد قطار تهران به رشت</h4>
                                <span>مرتب سازی بر اساس</span>
                            </div>

                            <div className={styles.trainContentBoxesDays}>
                                <div className={styles.trainContentBoxesDaysBox}>
                                    <p>یکشنبه 5 دی</p>
                                    <span>12/589/000 ریال</span>
                                </div>
                                <div className={styles.trainContentBoxesDaysBox}>
                                    <p>یکشنبه 5 دی</p>
                                    <span>12/589/000 ریال</span>
                                </div>
                                <div className={styles.trainContentBoxesDaysBox}>
                                    <p>یکشنبه 5 دی</p>
                                    <span>12/589/000 ریال</span>
                                </div>
                                <div className={styles.trainContentBoxesDaysBox}>
                                    <p>یکشنبه 5 دی</p>
                                    <span>12/589/000 ریال</span>
                                </div>
                                <div className={styles.trainContentBoxesDaysBox}>
                                    <p>یکشنبه 5 دی</p>
                                    <span>12/589/000 ریال</span>
                                </div>
                                <div className={styles.trainContentBoxesDaysBox}>
                                    <p>یکشنبه 5 دی</p>
                                    <span>12/589/000 ریال</span>
                                </div>
                            </div>

                            <div className={styles.trainContentBoxesTicket}>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default SearchTrain;
