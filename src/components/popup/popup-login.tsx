import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { togglePopupHiddenLogin } from '../../redux/popup/popup.actions';

import { ReactComponent as Close } from '../../assets/icons/close.svg';

import styles from './popup.module.scss';

const PopupLogin = () =>
{
    const dispatch = useDispatch();

    return (
        <div className={styles.popupContainer}>
            <div className={styles.popupWrapper}>
                <Close onClick={() => dispatch(togglePopupHiddenLogin())} />
                <div className={styles.popupItem} data-column='true'>
                    <h1>
                        ورود یا ثبت نام
                    </h1>
                    <h2>
                        لطفا برای ادامه، شماره موبایل خود را وارد کنید
                    </h2>
                    <form>
                        <label>
                            شماره موبایل
                        </label>
                        <input type="text" name="phone_number"/>
                    </form>
                    <button data-background='true'>
                        ادامه
                    </button>
                    <div>
                        <hr/>
                        <span>
                            یا
                        </span>
                    </div>
                    <button>
                        ورود با کلمه عبور
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupLogin;
