import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ticket-box.module.scss';

import { ReactComponent as Arrow2 } from '../../assets/icons/arrow-2.svg';
import { ReactComponent as Box4 } from '../../assets/icons/box-4.svg';
import { ReactComponent as Plane } from '../../assets/icons/plane.svg';

const TicketBox = (props: any) =>
{
    return (
        props?.proposal
            ? <div className={styles.ticketBoxProposal}>
                <div className={styles.ticketBoxProposalHeader}>
                    <div className={styles.ticketBoxProposalHeaderTop}>
                        <p>تهران</p>
                        <i />
                        <Plane />
                        <p>مشهد</p>
                    </div>
                    <div className={styles.ticketBoxProposalHeaderMiddle}>
                        <span>TEH</span>
                        <span>اکونومی</span>
                        <span>MHD</span>
                    </div>
                    <div className={styles.ticketBoxProposalHeaderBottom}>
                        <span>16:45</span>
                        <span>یک‌شنبه 30 آبان</span>
                        <span>17:25</span>
                    </div>
                </div>
                <Link to='#' className={styles.ticketBoxProposalFooter}>
                    <i />
                    <i />
                    <hr />
                    <div>
                        <span>13/479/400 ریال</span>
                        <p>
                            رزرو
                            <Arrow2 />
                        </p>
                    </div>
                </Link>
            </div>
            : <div className={styles.ticketBox}>
                <div className={styles.ticketBoxHeader}>
                    <div className={styles.ticketBoxHeaderTop}>
                        <div className={styles.ticketBoxHeaderTopInner}>
                            <Box4 />
                            <span>هواپیمایی آسمان</span>
                        </div>

                        <span className={styles.ticketBoxHeaderTopBudget}>اکونومی</span>
                    </div>

                    <div className={styles.ticketBoxHeaderMiddle}>
                        <span>تهران</span>
                        <i />
                        <Plane />
                        <span>مشهد</span>
                    </div>
                    <div className={styles.ticketBoxHeaderMiddle2}>
                        <span>16:45</span>
                        <span>یک‌شنبه 30 آبان</span>
                        <span>17:25</span>
                    </div>
                </div>
                <Link to='#' className={styles.ticketBoxFooter}>
                    <i />
                    <i />
                    <hr />
                    <div>
                        <p>شروع قیمت از</p>

                        <span>
                        13/479/400 ریال
                            <Arrow2 />
                        </span>
                    </div>
                </Link>
            </div>
    );
};

export default TicketBox;
