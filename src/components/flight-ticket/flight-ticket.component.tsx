import React, { useState } from 'react';

import 'tippy.js/dist/tippy.css';
import styles from './flight-ticket.module.scss';

import TrainLogo from '../../assets/icons/train_logo.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow-2.svg';
import { ReactComponent as Flight } from '../../assets/icons/plane.svg';
import { ReactComponent as FlightTakeoff } from '../../assets/icons/flight-takeoff-line.svg';

const FlightTicket = (props: any) =>
{
    const [table, setTable] = useState<string>('info');
    const [mobileTable, setMobileTable] = useState<string>('');
    const [activate, setActivate] = useState<boolean>(false);

    return (
        props?.ticket?.id
            ? (
                <div className={styles.flightTicket} data-offer={props?.offer} data-extradition={props?.extradition} data-activate={activate}>
                    <div className={styles.flightTicketContent}>
                        <button onClick={() => setActivate(!activate)}>
                            <span>
                                نمایش {activate ? 'کمتر' : 'بیشتر'}
                            </span>
                            <Arrow />
                        </button>

                        <div className={styles.flightTicketContentMain}>
                            <div className={styles.flightTicketContentMainHeader}>
                                <div className={styles.flightTicketContentMainName}>
                                    <img src={TrainLogo} alt='TrainLogo' />

                                    <div>
                                        <p>
                                            <span>
                                                هواپیمایی
                                            </span>

                                            <h3>
                                                کاسپین
                                            </h3>
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.flightTicketContentMainNumber}>
                                    <span>
                                        ارزان ترین
                                    </span>

                                    <span>
                                        سیستمی
                                    </span>
                                </div>
                            </div>

                            <div>
                                <div className={styles.flightTicketContentMainUhr}>
                                    <div className={styles.flightTicketContentMainUhrInfo}>
                                        <p>
                                            شیراز
                                        </p>

                                        <span>
                                            SHZ
                                        </span>
                                    </div>

                                    <div className={styles.flightTicketContentMainUhrMiddle}>
                                        <div>
                                            <Flight />

                                            <span>
                                                اکونومی
                                            </span>
                                        </div>

                                        <span>
                                            2 ساعت و 15 دقیقه
                                        </span>
                                    </div>

                                    <div className={styles.flightTicketContentMainUhrInfo}>
                                        <p>
                                            تهران
                                        </p>

                                        <span>
                                            TEH
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.flightTicketContentMainPath}>
                                    <span>
                                        <FlightTakeoff />
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

                        <div className={styles.flightTicketContentCollapse}>
                            <div className={styles.flightTicketContentCollapseButtonsParent}>
                                <span
                                    className={styles.flightTicketContentCollapseButtons}
                                    data-activate={table === 'info'}
                                    data-mobile_activate={mobileTable === 'info'}
                                    onClick={() =>
                                    {
                                        setTable('info');
                                        setMobileTable(mobileTable === 'info' ? '' : 'info');
                                    }}
                                >
                                    جزئیات پرواز
                                </span>

                                <span
                                    className={styles.flightTicketContentCollapseButtons}
                                    data-activate={table === 'extradition'}
                                    data-mobile_activate={mobileTable === 'extradition'}
                                    onClick={() =>
                                    {
                                        setTable('extradition');
                                        setMobileTable(mobileTable === 'extradition' ? '' : 'extradition');
                                    }}
                                >
                                    قوانین استرداد
                                </span>

                                <span
                                    className={styles.flightTicketContentCollapseButtons}
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

                            <div className={styles.flightTicketContentCollapseBox} data-mobile_activate={mobileTable === 'info'} data-activate={table === 'info'}>
                                <div className={styles.flightTicketContentCollapseBoxInfo}>
                                    <ul>
                                        <li>
                                            شماره پرواز
                                        </li>

                                        <li>
                                            مقدار بار مجاز
                                        </li>

                                        <li>
                                            ترمینال
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            2618
                                        </li>

                                        <li>
                                            20 کیلوگرم
                                        </li>

                                        <li>
                                            شماره 2
                                        </li>
                                    </ul>
                                </div>

                                <div className={styles.flightTicketContentCollapseBoxPath}>
                                    <div>
                                        <Flight />
                                        <span />
                                        <i data-fill={true}/>
                                        <i />
                                    </div>

                                    <ul>
                                        <li>
                                            شیراز

                                            <span>
                                                SHZ
                                            </span>
                                        </li>

                                        <li>
                                            <p>
                                                14:30
                                            </p>

                                            <span>
                                                سه شنبه 9 دی
                                            </span>
                                        </li>

                                        <li>
                                            <span>
                                                TEH
                                            </span>

                                            تهران
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            فرودگاه امام خمینی
                                        </li>

                                        <li>
                                            فرودگاه سردار جنگل
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.flightTicketPrice}>
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
                <div className={styles.flightTicketLoading}>
                    <div className={styles.flightTicketLoadingContent}>
                        <button />

                        <div className={styles.flightTicketLoadingContentMain}>
                            <div className={styles.flightTicketLoadingContentMainHeader}>
                                <span />

                                <div />
                            </div>

                            <div className={styles.flightTicketLoadingContentMainUhr}>
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

                    <div className={styles.flightTicketLoadingPrice}>
                        <div />

                        <button />

                        <span />
                    </div>
                </div>
            )
    );
};

export default FlightTicket;
