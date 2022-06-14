import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Haedphone } from '../../../assets/icons/box-5.svg';
import { ReactComponent as Dollar } from '../../../assets/icons/box-6.svg';
import { ReactComponent as Home } from '../../../assets/icons/box-7.svg';
import { ReactComponent as Reserve } from '../../../assets/icons/box-8.svg';
import { ReactComponent as Bazaar } from '../../../assets/icons/bazaar.svg';
import { ReactComponent as Myket } from '../../../assets/icons/myket.svg';
import { ReactComponent as Download } from '../../../assets/icons/download-2.svg';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';

import styles from './footer.module.scss';

const Footer = () =>
{
    return (
        <footer className={styles.footer}>
            <div className='container'>
                <div className={styles.footerBoxes}>
                    <div className={styles.footerBoxesBox}>
                        <div className={styles.footerBoxesBoxIcon}>
                            <Haedphone />
                        </div>
                        <div className={styles.footerBoxesBoxContent}>
                            <h4>بالاترین کیفیت خدمات و پشتیبانی</h4>
                            <p>تیم پشتیبانی 24 ساعته</p>
                        </div>
                    </div>
                    <div className={styles.footerBoxesBox}>
                        <div className={styles.footerBoxesBoxIcon}>
                            <Dollar />
                        </div>
                        <div className={styles.footerBoxesBoxContent}>
                            <h4>تضمین بازگشت آنی وجه</h4>
                            <p>بلافاصله پس از کنسلی</p>
                        </div>
                    </div>
                    <div className={styles.footerBoxesBox}>
                        <div className={styles.footerBoxesBoxIcon}>
                            <Home />
                        </div>
                        <div className={styles.footerBoxesBoxContent}>
                            <h4>سفر اقتصادی</h4>
                            <p>در هزینه های شما صرفه جویی می کنیم</p>
                        </div>
                    </div>
                    <div className={styles.footerBoxesBox}>
                        <div className={styles.footerBoxesBoxIcon}>
                            <Reserve />
                        </div>
                        <div className={styles.footerBoxesBoxContent}>
                            <h4>رزرو آسان بلیط</h4>
                            <p>تجربه ای آسان برای خرید بلیط</p>
                        </div>
                    </div>
                </div>

                <div className={styles.footerDivider} />

                <div className={styles.footerApp}>
                    <div className={styles.footerAppContent}>
                        <h2 className='headingPrimary'>دریافت<span> اپلیکیشن مِستربلیط </span></h2>
                        <p>
                            <span>با نصب اپلیکیشن پاپلو بلیط همه سفرها در جیب شماست</span>
                            <Link to='/'>
                                مشاهده قابلیت ها
                                <Arrow />
                            </Link>
                        </p>
                    </div>

                    <div className={styles.footerAppDownload}>
                        <div className={styles.footerAppDownloadBoxes}>
                            <div className={styles.footerAppDownloadBoxesBox}>
                                <Bazaar />
                                <span>کافه بازار</span>
                            </div>
                            <div className={styles.footerAppDownloadBoxesBox}>
                                <Myket />
                                <span>مایکت</span>
                            </div>
                            <div className={styles.footerAppDownloadBoxesBox}>
                                <Download />
                                <span>دانلود مستقیم</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.footerDivider} />
            </div>
        </footer>
    );
};

export default Footer;
