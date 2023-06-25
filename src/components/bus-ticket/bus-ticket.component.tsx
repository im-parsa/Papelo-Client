import React, { useState } from 'react';

import 'tippy.js/dist/tippy.css';
import styles from './bus-ticket.module.scss';

import TrainLogo from '../../assets/icons/train_logo.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow-2.svg';
import { ReactComponent as Bus } from '../../assets/icons/bus.svg';

const TrainTicket = (props: any) =>
{
    const [table, setTable] = useState<string>('position');
    const [mobileTable, setMobileTable] = useState<string>('');
    const [activate, setActivate] = useState<boolean>(false);

    return (
        props?.ticket?.id
            ? (
                <div className={styles.busTicket} data-offer={props?.offer} data-activate={activate}>
                    <div className={styles.busTicketContent}>
                        <button onClick={() => setActivate(!activate)}>
                            <span>
                                نمایش {activate ? 'کمتر' : 'بیشتر'}
                            </span>
                            <Arrow />
                        </button>

                        <div className={styles.busTicketContentMain}>
                            <div className={styles.busTicketContentMainHeader}>
                                <div className={styles.busTicketContentMainName}>
                                    <img src={TrainLogo} alt='TrainLogo' />

                                    <div>
                                        <span>
                                    همسفر چابکسواران پایانه بیهقی
                                        </span>

                                        <p>
                                            مانیتور دار صفه و کاوه
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className={styles.busTicketContentMainUhr}>
                                    <div className={styles.busTicketContentMainUhrInfo}>
                                        <p>
                                            شیراز
                                        </p>

                                        <span>
                                        پایانه جنوب
                                        </span>
                                    </div>

                                    <div className={styles.busTicketContentMainUhrMiddle}>
                                        <div>
                                            <i/>
                                            <i/>
                                        </div>

                                        <span>
                                        حدود 2 ساعت و 15 دقیقه
                                        </span>
                                    </div>

                                    <div className={styles.busTicketContentMainUhrInfo}>
                                        <p>
                                            تهران
                                        </p>

                                        <span>
                                        پایانه جنوب
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.busTicketContentMainPath}>
                                    <span>
                                        <Bus />
                                        <i />
                                    </span>

                                    <div>
                                        <p>
                                            14:30
                                        </p>

                                        <span>
                                            تهران
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.busTicketContentCollapse}>
                            <div className={styles.busTicketContentCollapseButtonsParent}>
                                <span
                                    className={styles.busTicketContentCollapseButtons}
                                    data-activate={table === 'position'}
                                    data-mobile_activate={mobileTable === 'position'}
                                    onClick={() =>
                                    {
                                        setTable('position');
                                        setMobileTable(mobileTable === 'position' ? '' : 'position');
                                    }}
                                >
                                    موقعیت صندلی
                                </span>

                                <span
                                    className={styles.busTicketContentCollapseButtons}
                                    data-activate={table === 'terms'}
                                    data-mobile_activate={mobileTable === 'terms'}
                                    onClick={() =>
                                    {
                                        setTable('terms');
                                        setMobileTable(mobileTable === 'terms' ? '' : 'terms');
                                    }}
                                >
                                    قوانین کنسلی
                                </span>
                            </div>

                            <div className={styles.busTicketContentCollapseBox} data-mobile_activate={mobileTable === 'position'} data-activate={table === 'position'}>
                                <div className={styles.busTicketContentCollapseBoxBus}>
                                    <div className={styles.busTicketContentCollapseBoxBusContainer}>
                                        <i/>
                                        <i/>

                                        <div className={styles.busTicketContentCollapseBoxBusBox}>
                                            <p>
                                                جلوی اتوبوس
                                            </p>

                                            <div>
                                                <ul>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat}/>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat}/>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat}/>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat}/>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={1}>
                                                        زن
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={2}/>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}>
                                                        15
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}>
                                                        18
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}>
                                                        21
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}>
                                                        24
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}>
                                                        27
                                                    </span>
                                                </ul>
                                                <ul data-space={true}/>
                                                <ul>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat}/>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}>
                                                        5
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}>
                                                        8
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}>
                                                        11
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={2}/>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={2}/>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={1}>
                                                        مرد
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={1}>
                                                        مرد
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={1}>
                                                        مرد
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}>
                                                        23
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}>
                                                        26
                                                    </span>
                                                </ul>
                                                <ul>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat}/>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}>
                                                        4
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}>
                                                        7
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}>
                                                        10
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={2}/>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={2}/>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}>
                                                        13
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}>
                                                        16
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}>
                                                        19
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}>
                                                        22
                                                    </span>
                                                    <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}>
                                                        25
                                                    </span>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <ul>
                                    <li>
                                        <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={1}>
                                            زن
                                        </span>

                                        رزرو شده برای خانومها
                                    </li>
                                    <li>
                                        <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={1}>
                                            مرد
                                        </span>

                                        رزرو شده برای آقایان
                                    </li>
                                    <li>
                                        <span className={styles.busTicketContentCollapseBoxBusSeat} data-type={0}/>

                                        قابل ثبت
                                    </li>
                                    <li>
                                        <span className={styles.busTicketContentCollapseBoxBusSeat}/>

                                        غیرقابل خرید
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={styles.busTicketPrice}>
                        <span>
                    12,589,000 ریال
                        </span>

                        <button>
                            رزرو آنلاین
                        </button>

                        <p>
                            ظرفیت 15 صندلی
                        </p>
                    </div>
                </div>
            )
            : (
                <div className={styles.busTicketLoading}>
                    <div className={styles.busTicketLoadingContent}>
                        <button />

                        <div className={styles.busTicketLoadingContentMain}>
                            <div className={styles.busTicketLoadingContentMainHeader}>
                                <span />

                                <div />
                            </div>

                            <div className={styles.busTicketLoadingContentMainUhr}>
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

                    <div className={styles.busTicketLoadingPrice}>
                        <div />

                        <button />

                        <span />
                    </div>
                </div>
            )
    );
};

export default TrainTicket;
