import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './navbar.module.scss';

import { ReactComponent as Home } from '../../../assets/icons/home-line.svg';
import { ReactComponent as HomeFill } from '../../../assets/icons/home-fill.svg';
import { ReactComponent as Ticket } from '../../../assets/icons/coupon-3-line.svg';
import { ReactComponent as TicketFill } from '../../../assets/icons/coupon-3-fill.svg';
import { ReactComponent as User } from '../../../assets/icons/user-3-line.svg';
import { ReactComponent as UserFill } from '../../../assets/icons/user-3-fill.svg';

const Navbar = () =>
{
    const [active] = useState<string>('home');

    return (
        <nav className={styles.nav}>
            <Link to='/' data-activate={active === 'home'}>
                {
                    active === 'home'
                        ? <HomeFill />
                        : <Home />
                }

                <span>
                    خانه
                </span>
            </Link>
            <Link to='/' data-activate={active === 'my-orders'}>
                {
                    active === 'my-orders'
                        ? <TicketFill />
                        : <Ticket />
                }

                <span>
                    سفارش های من
                </span>
            </Link>
            <Link to='/' data-activate={active === 'dashboard'}>
                {
                    active === 'dashboard'
                        ? <UserFill />
                        : <User />
                }

                <span>
                    حساب کاربری
                </span>
            </Link>
        </nav>
    );
};

export default Navbar;
