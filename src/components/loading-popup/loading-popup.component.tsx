import React from 'react';

import styles from './loading-popup.module.scss';
import Loading from '../../assets/images/loading.png';
import HotelImage from '../../assets/images/hotel.jpg';

const LoadingPopup = (props: any) =>
{
    return (
        <div className={styles.loadingPopup}>
            <span />

            <section className={styles.loadingPopupMain}>
                <header className={styles.loadingPopupHeader} style={{ backgroundImage: `url(${ HotelImage })` }}>
                    <span />

                    <div>
                        <h6>
                            پرستاره ترین اقامتگاه ها
                        </h6>
                        <p>
                            تخفیف 50 درصدی هتل های لوکس در شیراز
                        </p>
                    </div>
                </header>

                <footer className={styles.loadingPopupFooter}>
                    <img src={Loading} alt='Loading' />
                    در حال جستجو پرواز های موجود شیراز به تهران
                </footer>
            </section>
        </div>
    );
};

export default LoadingPopup;
