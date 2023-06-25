import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

import styles from './hotel-box.module.scss';

import { ReactComponent as Star } from '../../assets/icons/star-fill.svg';
import { ReactComponent as HeartLine } from '../../assets/icons/heart-line.svg';

const data = require('../../data/data.json');

const HotelBox = (props: any) =>
{
    const [image, setImage] = useState<number>(0);

    return (
        <div className={styles.hotelBox}>
            <span className={styles.hotelBoxImg} style={{ backgroundImage: `url(${ data.hotelImages[image ?? 0] })` }}>
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

            <div className={styles.hotelBoxContent}>
                <div className={styles.hotelBoxContentTop}>
                    <div>
                        <Star />

                        <span>
                            امتیاز 8
                        </span>

                        <p>
                            (از حدود 5192 رای)
                        </p>
                    </div>

                    <i>
                        <HeartLine />
                    </i>
                </div>

                <div className={styles.hotelBoxContentMiddle}>
                    <Link to='/hotel/test' className={styles.hotelBoxContentMiddleHeader}>
                        هتل زندیه شیراز
                    </Link>

                    <p className={styles.hotelBoxContentMiddleParagraph}>
                        شیراز - بلوار هجرت - نرسیده به ارگ کریمخان ( نقشه هتل )
                    </p>

                    <ul>
                        <li>
                            کافی نت
                        </li>
                        <li>
                            آسانسور
                        </li>
                        <li>
                            وای فای
                        </li>
                        <li>
                            صبحانه
                        </li>
                    </ul>
                </div>

                <div className={styles.hotelBoxContentBottom}>
                    <div className={styles.hotelBoxContentBottomStars}>
                        <Rating
                            rtl={true}
                            emptyIcon={null}
                            readonly={true}
                            initialValue={5}
                        />
                    </div>

                    <div className={styles.hotelBoxContentBottomDiscount}>
                        <span>
                            12/589/000
                        </span>
                    </div>

                    <div className={styles.hotelBoxContentBottomPercentage}>
                        <span>
                            <span>
                                %
                            </span>
                            25
                        </span>
                    </div>

                    <div className={styles.hotelBoxContentBottomPrice}>
                        <span>
                            12/589/000 ریال
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelBox;
