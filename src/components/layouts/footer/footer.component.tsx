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
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { ReactComponent as Telegram } from '../../../assets/icons/telegram.svg';
import { ReactComponent as Instagram } from '../../../assets/icons/instagram-line.svg';
import { ReactComponent as Whatsapp } from '../../../assets/icons/whatsapp.svg';
import { ReactComponent as Footer1 } from '../../../assets/images/footer-1.svg';
import { ReactComponent as Footer2 } from '../../../assets/images/footer-2.svg';
import { ReactComponent as Footer3 } from '../../../assets/images/footer-3.svg';
import { ReactComponent as Footer4 } from '../../../assets/images/footer-4.svg';
import { ReactComponent as Footer5 } from '../../../assets/images/footer-5.svg';
import { ReactComponent as Footer6 } from '../../../assets/images/footer-6.svg';
import { ReactComponent as Twitter } from '../../../assets/icons/twitter-fill.svg';

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
                        <h2 className='headingPrimary'>دریافت<span> اپلیکیشن اسکای&zwnj;رو </span></h2>
                        <p>
                            <span>با نصب اپلیکیشن اسکای&zwnj;رو بلیط همه سفرها در جیب شماست</span>
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

                <div className={styles.footerAchievement}>
                    <div className={styles.footerAchievementRight}>
                        <div className={styles.footerAchievementRightBox}>
                            <h5>راهنمایی و پشتیبان</h5>
                            <span>پیگیری و کنسلی</span>
                            <span>پرسش های متداول</span>
                            <span>راهنمای خرید اینترنتی</span>
                            <span>پیشنهادها و شکایات</span>
                            <span>شرایط و مقررات</span>
                            <span>درباره اسکای&zwnj;رو</span>
                            <span>شرایط و مقررات</span>
                        </div>
                        <div className={styles.footerAchievementRightBox}>
                            <h5>اسکای&zwnj;رو</h5>
                            <span>صفحه اصلی</span>
                            <span>مجله خبری</span>
                            <span>درباره ما</span>
                            <span>تماس با ما</span>
                            <span>صفحه اصلی</span>
                            <span>مجله خبری</span>
                        </div>
                        <div className={styles.footerAchievementRightBox}>
                            <h5>&nbsp;</h5>
                            <span>بلیط چارتر</span>
                            <span>تور کیش</span>
                            <span>تور استانبول</span>
                            <span>بلیط هواپیمای خارجی</span>
                        </div>
                    </div>
                    <div className={styles.footerAchievementLeft}>
                        <div className={styles.footerAchievementLeftTop}>
                            <Logo />
                            <Link to='/about-us'>
                                چرا خرید بلیط از اسکای&zwnj;رو؟ درباره ما بیشتر بدانید
                                <Arrow />
                            </Link>
                        </div>
                        <div className={styles.footerAchievementLeftMiddle}>
                            <p>تلفن پشتیبانی: 61300500800-021</p>
                            <p>دفتر فروش: قیطریه، بلوار اندرزگو، نبش کوچه‌ی بلوچ شمالی، پلاک ۴</p>
                        </div>
                        <div className={styles.footerAchievementLeftBottom}>
                            <div className={styles.footerAchievementLeftBottomBG}><Footer1 /></div>
                            <div className={styles.footerAchievementLeftBottomBG}><Footer2 /></div>
                            <div className={styles.footerAchievementLeftBottomBG}><Footer3 /></div>
                            <div className={styles.footerAchievementLeftBottomBG}><Footer4 /></div>
                            <div className={styles.footerAchievementLeftBottomBG}><Footer5 /></div>
                            <div className={styles.footerAchievementLeftBottomBG}><Footer6 /></div>
                        </div>
                    </div>
                </div>

                <div className={styles.footerDivider} />

                <div className={styles.footerCopyright}>
                    <p>کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ می‌باشد</p>

                    <div className={styles.footerCopyrightIcons}>
                        <a href='#' className={styles.footerCopyrightIconsBG}><Telegram /></a>
                        <a href='#' className={styles.footerCopyrightIconsBG}><Instagram /></a>
                        <a href='#' className={styles.footerCopyrightIconsBG}><Whatsapp /></a>
                        <a href='#' className={styles.footerCopyrightIconsBG}><Twitter /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
