import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '@tippyjs/react/headless';
import { Rating } from 'react-simple-star-rating';

import 'tippy.js/dist/tippy.css';
import styles from './tour-ticket.module.scss';

import TrainLogo from '../../assets/icons/train_logo.svg';
import { ReactComponent as Star } from '../../assets/icons/star-fill.svg';
import { ReactComponent as Pin } from '../../assets/icons/map-pin-2-fill.svg';
import { ReactComponent as Flight } from '../../assets/icons/flight-takeoff-line.svg';
import { ReactComponent as Warn } from '../../assets/icons/error-warning-line.svg';

const data = require('../../data/data.json');

const TourTicket = (props: any) =>
{
    const [image, setImage] = useState<number>(0);

    return (
        props?.ticket?.id
            ? (
                <div className={styles.tourTicket}>
                    <div className={styles.tourTicketContent}>
                        <div className={styles.tourTicketContentMain}>
                            <span className={styles.tourTicketImg} style={{ backgroundImage: `url(${ data.hotelImages[image ?? 0] })` }}>
                                <ul>
                                    {
                                        data.hotelImages?.map((data: any, index: any) =>
                                            (
                                                <li
                                                    key={index + '__' + nanoid()}
                                                    data-activate={(image ?? 0) === index}
                                                    onClick={() => setImage(index)}
                                                />
                                            ))
                                    }
                                </ul>
                            </span>

                            <ul>
                                <li className={styles.tourTicketContentMainTop}>
                                    <div>
                                        <Star />

                                        <span>
                            امتیاز 8
                                        </span>

                                        <p>
                                            (از حدود 5192 رای)
                                        </p>
                                    </div>
                                </li>

                                <li className={styles.tourTicketContentMainMiddle}>
                                    <Link to='/hotel/test' className={styles.tourTicketContentMainMiddleHeader}>
                                        هتل زندیه شیراز
                                    </Link>

                                    <p className={styles.tourTicketContentMainMiddleSpan}>
                                        <Pin />
                                        نمایش روی نقشه
                                    </p>

                                    <span className={styles.tourTicketContentMainMiddleParagraph}>
                                   سوئیت دو خوابه 4 نفره با صبحانه
                                    </span>
                                </li>

                                <li className={styles.tourTicketContentMainBottom}>
                                    <div className={styles.tourTicketContentMainBottomStars}>
                                        <Rating
                                            rtl={true}
                                            emptyIcon={null}
                                            readonly={true}
                                            initialValue={5}
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <ul className={styles.tourTicketContentCollapse}>
                            <li className={styles.tourTicketContentCollapseItem}>
                                <header>
                                    <span>
                                        پرواز رفت - دوشنبه 2 خرداد
                                    </span>
                                </header>

                                <div>
                                    <h3>
                                        <img src={TrainLogo} alt='TrainLogo' />

                                        <p>
                                            کاسپین
                                        </p>
                                    </h3>

                                    <h5>
                                        <span>
                                            11:30
                                        </span>

                                        <p>
                                            THR
                                        </p>
                                    </h5>

                                    <span>
                                        <Flight />
                                        <span />
                                        <i />
                                    </span>

                                    <h5>
                                        <span>
                                            کیش
                                        </span>

                                        <p>
                                            KIH
                                        </p>
                                    </h5>
                                </div>
                            </li>

                            <li className={styles.tourTicketContentCollapseItem}>
                                <header>
                                    <span>
                                        پرواز رفت - دوشنبه 2 خرداد
                                    </span>
                                </header>

                                <div>
                                    <h3>
                                        <img src={TrainLogo} alt='TrainLogo' />

                                        <p>
                                            کاسپین
                                        </p>
                                    </h3>

                                    <h5>
                                        <span>
                                            11:30
                                        </span>

                                        <p>
                                            THR
                                        </p>
                                    </h5>

                                    <span>
                                        <Flight />
                                        <span />
                                        <i />
                                    </span>

                                    <h5>
                                        <span>
                                            کیش
                                        </span>

                                        <p>
                                            KIH
                                        </p>
                                    </h5>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.tourTicketPrice}>
                        <div>
                            <header>
                                <span>
                                    <Tooltip
                                        render={() =>
                                            (
                                                <span className={styles.tourTicketPriceTooltip}>
                                                 قیمت به ازای هر نفر محاسبه خواهد شد
                                                </span>
                                            )}
                                    >
                                        <Warn />
                                    </Tooltip>
                                قیمت
                                </span>

                                <p>
                                    12,589,000 ریال
                                </p>
                            </header>

                            <div>
                                <span>
                                مجموع قیمت برای 2 نفر
                                </span>

                                <p>
                                    12,589,000 ریال
                                </p>

                                <footer>
                                    طول تور: 2 شب اقامت
                                </footer>
                            </div>
                        </div>

                        <button>
                            رزرو تور
                        </button>
                    </div>
                </div>
            )
            : (
                <div className={styles.tourTicketLoading}>
                    <div className={styles.tourTicketLoadingContent}>
                        <button />

                        <div className={styles.tourTicketLoadingContentMain}>
                            <div className={styles.tourTicketLoadingContentMainHeader}>
                                <span />

                                <div />
                            </div>

                            <div className={styles.tourTicketLoadingContentMainUhr}>
                                <div>
                                    <div />

                                    <span />
                                </div>

                                <div>
                                    <div />

                                    <span />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.tourTicketLoadingPrice}>
                        <div />

                        <button />

                        <span />
                    </div>
                </div>
            )
    );
};

export default TourTicket;
