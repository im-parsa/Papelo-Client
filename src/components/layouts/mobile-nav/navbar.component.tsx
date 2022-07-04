import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/icons/logo.png';
import { ReactComponent as List } from '../../../assets/icons/list.svg';
import { ReactComponent as ListNested } from '../../../assets/icons/list-nested.svg';

import styles from './navbar.module.scss';

const Navbar = () =>
{
    const [open, setOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <div>
                <img src={Logo} alt='Logo'/>
                {
                    open
                        ?
                        <span onClick={() => setOpen(false)}>
                        <ListNested />
                    </span>
                        :
                        <span onClick={() => setOpen(true)}>
                        <List />
                    </span>
                }
            </div>
            <ul className={styles.navPopup} data-open={open}>
                <li data-activate='true'>
                    <Link to='/'>
                        صفحه اصلی
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        خدمات سفر
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        راهنمایی و پشتیبانی
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
