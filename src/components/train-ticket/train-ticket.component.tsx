import React, { useState } from 'react';
import Tooltip from '@tippyjs/react/headless';

import 'tippy.js/dist/tippy.css';
import styles from './train-ticket.module.scss';

import TrainLogo from '../../assets/icons/train_logo.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow-2.svg';
import { ReactComponent as Train } from '../../assets/icons/train.svg';

const TrainTicket = (props: any) =>
{
    const [table, setTable] = useState<string>('info');
    const [mobileTable, setMobileTable] = useState<string>('');
    const [activate, setActivate] = useState<boolean>(false);

    return (
        props?.ticket?.id
            ? (
                <div className={styles.trainTicket} data-offer={props?.offer} data-activate={activate}>
                    <div className={styles.trainTicketContent}>
                        <button onClick={() => setActivate(!activate)}>
                            <span>
                                نمایش {activate ? 'کمتر' : 'بیشتر'}
                            </span>
                            <Arrow />
                        </button>

                        <div className={styles.trainTicketContentMain}>
                            <div className={styles.trainTicketContentMainHeader}>
                                <div className={styles.trainTicketContentMainName}>
                                    <img src={TrainLogo} alt='TrainLogo' />

                                    <div>
                                        <span>
                                    رجاء
                                        </span>

                                        <p>
                                            ستاره اتوبوسی صبا
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.trainTicketContentMainNumber}>
                                    <span>
                                اکونومی
                                    </span>

                                    <span>
                                کوپه ای 4 نفره
                                    </span>
                                </div>
                            </div>

                            <div className={styles.trainTicketContentMainUhr}>
                                <div className={styles.trainTicketContentMainUhrRight}>
                                    <p>
                                        شیراز
                                    </p>

                                    <div>
                                        <span>
                                    14:30
                                        </span>

                                        <span>
                                    جمعه 25 دی
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.trainTicketContentMainUhrMiddle}>
                                    <div>
                                        <Train />
                                        <i/>
                                    </div>

                                    <span>
                                حدود 2 ساعت و 15 دقیقه
                                    </span>
                                </div>

                                <div className={styles.trainTicketContentMainUhrLeft}>
                                    <p>
                                        تهران
                                    </p>

                                    <div>
                                        <span>
                                    14:30
                                        </span>

                                        <span>
                                    جمعه 25 دی
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.trainTicketContentCollapse}>
                            <div className={styles.trainTicketContentCollapseButtonsParent}>
                                <span
                                    className={styles.trainTicketContentCollapseButtons}
                                    data-activate={table === 'info'}
                                    data-mobile_activate={mobileTable === 'info'}
                                    onClick={() =>
                                    {
                                        setTable('info');
                                        setMobileTable(mobileTable === 'info' ? '' : 'info');
                                    }}
                                >
                            اطلاعات قطار
                                </span>

                                <span
                                    className={styles.trainTicketContentCollapseButtons}
                                    data-activate={table === 'stations'}
                                    data-mobile_activate={mobileTable === 'stations'}
                                    onClick={() =>
                                    {
                                        setTable('stations');
                                        setMobileTable(mobileTable === 'stations' ? '' : 'stations');
                                    }}
                                >
                            ایستگاها
                                </span>

                                <span
                                    className={styles.trainTicketContentCollapseButtons}
                                    data-activate={table === 'terms'}
                                    data-mobile_activate={mobileTable === 'terms'}
                                    onClick={() =>
                                    {
                                        setTable('info');
                                        setMobileTable(mobileTable === 'terms' ? '' : 'terms');
                                    }}
                                >
                            قوانین کنسلی
                                </span>
                            </div>

                            <div className={styles.trainTicketContentCollapseBox} data-mobile_activate={mobileTable === 'info'} data-activate={table === 'info'}>
                                <div className={styles.trainTicketContentCollapseBoxInfo}>
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

                                <div className={styles.trainTicketContentCollapseBoxPath}>
                                    <div>
                                        <Train />
                                        <span />
                                        <i />
                                    </div>

                                    <ul>
                                        <li>
                                            جمعه 25 دی
                                        </li>

                                        <li>
                                            <img src={TrainLogo} alt='TrainLogo' />
                                        </li>

                                        <li>
                                            شنبه 26 دی
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            شیراز
                                        </li>

                                        <li>
                                            رجاء
                                        </li>

                                        <li>
                                            تهران
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            ایستگاه راه آهن
                                        </li>

                                        <li>
                                            حدود 2 ساعت و 15 دقیقه
                                        </li>

                                        <li>
                                            ایستگاه راه آهن
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.trainTicketContentCollapseBox} data-mobile_activate={mobileTable === 'stations'} data-stations={true} data-activate={table === 'stations'}>
                                <span>
                                    <Train />

                                    <Tooltip
                                        render={() =>
                                            (
                                                <span className='tooltip'>
                                            ایستگاه میرزاکوچک خان
                                                </span>
                                            )}
                                    >
                                        <i />
                                    </Tooltip>

                                    <Tooltip
                                        render={() =>
                                            (
                                                <span className='tooltip'>
                                            ایستگاه میرزاکوچک خان
                                                </span>
                                            )}
                                    >
                                        <i />
                                    </Tooltip>

                                    <Tooltip
                                        render={() =>
                                            (
                                                <span className='tooltip'>
                                            ایستگاه میرزاکوچک خان
                                                </span>
                                            )}
                                    >
                                        <i />
                                    </Tooltip>

                                    <Tooltip
                                        render={() =>
                                            (
                                                <span className='tooltip'>
                                            ایستگاه میرزاکوچک خان
                                                </span>
                                            )}
                                    >
                                        <i />
                                    </Tooltip>

                                    <Tooltip
                                        render={() =>
                                            (
                                                <span className='tooltip'>
                                            ایستگاه میرزاکوچک خان
                                                </span>
                                            )}
                                    >
                                        <i />
                                    </Tooltip>

                                    <Tooltip
                                        render={() =>
                                            (
                                                <span className='tooltip'>
                                            ایستگاه میرزاکوچک خان
                                                </span>
                                            )}
                                    >
                                        <i />
                                    </Tooltip>

                                    <i />
                                </span>

                                <ul>
                                    <li>
                                        <h4>
                                            شیراز
                                        </h4>

                                        <span>
                                    14:30
                                        </span>
                                    </li>

                                    <li>
                                        <h4>
                                            تهران
                                        </h4>

                                        <span>
                                    14:35
                                        </span>
                                    </li>

                                    <li>
                                        <h4>
                                            تهران
                                        </h4>

                                        <span>
                                    14:35
                                        </span>
                                    </li>

                                    <li>
                                        <h4>
                                            تهران
                                        </h4>

                                        <span>
                                    14:35
                                        </span>
                                    </li>

                                    <li>
                                        <h4>
                                            تهران
                                        </h4>

                                        <span>
                                    14:35
                                        </span>
                                    </li>

                                    <li>
                                        <h4>
                                            تهران
                                        </h4>

                                        <span>
                                    14:35
                                        </span>
                                    </li>

                                    <li>
                                        <h4>
                                            تهران
                                        </h4>

                                        <span>
                                    14:35
                                        </span>
                                    </li>

                                    <li>
                                        <h4>
                                            تهران
                                        </h4>

                                        <span>
                                    14:35
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={styles.trainTicketPrice}>
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
                <div className={styles.trainTicketLoading}>
                    <div className={styles.trainTicketLoadingContent}>
                        <button />

                        <div className={styles.trainTicketLoadingContentMain}>
                            <div className={styles.trainTicketLoadingContentMainHeader}>
                                <span />

                                <div />
                            </div>

                            <div className={styles.trainTicketLoadingContentMainUhr}>
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

                    <div className={styles.trainTicketLoadingPrice}>
                        <div />

                        <button />

                        <span />
                    </div>
                </div>
            )
    );
};

export default TrainTicket;
