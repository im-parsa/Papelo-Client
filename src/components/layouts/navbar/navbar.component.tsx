import React from 'react';
import { Link } from 'react-router-dom';

import styles from './navbar.module.scss';
import {ReactComponent as Logo} from "../../../assets/icons/logo.svg";
import {ReactComponent as Plane} from "../../../assets/icons/plane.svg";
import {ReactComponent as Bus} from "../../../assets/icons/bus.svg";
import {ReactComponent as Train} from "../../../assets/icons/train.svg";
import {ReactComponent as Hotel} from "../../../assets/icons/hotel.svg";
import {ReactComponent as Tour} from "../../../assets/icons/tour.svg";
import {ReactComponent as Arrow2} from "../../../assets/icons/arrow-2.svg";
import {ReactComponent as ThreeDots} from "../../../assets/icons/three-dots.svg";

const Footer = () =>
{
    return (
        <nav className={styles.navbar}>
            <div className='container'>
                <Logo />
                <ul className={styles.navbarList}>
                    <li className={styles.navbarItem}>
                        صفحه اصلی
                    </li>
                    <li className={styles.navbarItem} data-type='arrow'>
                        خدمات سفر
                        <div className={styles.navbarPopup}>
                            <h3>
                                خدمات سفر
                            </h3>
                            <ul className={styles.navbarPopupList}>
                                <li className={styles.navbarPopupItem}>
                                    <span>
                                        <Plane />
                                    </span>
                                    <div>
                                        <Link to='/'>
                                            بلیط هواپیما
                                        </Link>
                                        <p>
                                            تجربه خریدی ارزان
                                        </p>
                                    </div>
                                </li>
                                <li className={styles.navbarPopupItem}>
                                    <span>
                                        <Bus />
                                    </span>
                                    <div>
                                        <Link to='/'>
                                            بلیط اتوبوس
                                        </Link>
                                        <p>
                                            همکاری با سازمان اتوبوس رانی
                                        </p>
                                    </div>
                                </li>
                                <li className={styles.navbarPopupItem}>
                                            <span>
                                                <Train />
                                            </span>
                                    <div>
                                        <Link to='/'>
                                            بلیط قطار
                                        </Link>
                                        <p>
                                            با خیالی راحت سفر کنید
                                        </p>
                                    </div>
                                </li>
                                <li className={styles.navbarPopupItem}>
                                            <span>
                                                <Hotel />
                                            </span>
                                    <div>
                                        <Link to='/'>
                                            رزرو هتل
                                        </Link>
                                        <p>
                                            رتبه بندی برترین هتل ها
                                        </p>
                                    </div>
                                </li>
                                <li className={styles.navbarPopupItem}>
                                            <span>
                                                <Tour />
                                            </span>
                                    <div>
                                        <Link to='/'>
                                            رزرو تور
                                        </Link>
                                        <p>
                                            در سفر باشید
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <div>
                                <h2>
                                    قوانین و مقررات کنسلی را بخوانید
                                </h2>
                                <Link to='/'>
                                    ضوابط استفاده از سامانه خرید بلیط
                                    <Arrow2 />
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className={styles.navbarItem}>
                        راهنمایی و پشتیبانی
                    </li>
                    <li className={styles.navbarItem}>
                        <ThreeDots />
                    </li>
                </ul>
                <button>
                    <Train />
                    پیگیری رزرو
                </button>
            </div>
        </nav>
    );
};

export default Footer;
