import momentFa from 'jalali-moment';
import Tooltip from '@tippyjs/react/headless';
import React, { useState, useEffect } from 'react';

import { chunk } from '../utils/chunk';
import { daysInMonth } from '../utils/daysInMonth';
import { fa, en, holidays, weekDayNamesFa, weekDayNamesEn } from '../utils';

import 'tippy.js/dist/tippy.css';
import styles from '../stylesheets/date-picker.module.scss';

import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';

export default function DatePickerComponent(props: any)
{
    const [value]: any = useState(momentFa());
    const [cloneDays, setCloneDays]: any = useState<any>(momentFa(value));
    const [weeks, setWeeks] = useState<any>([]);
    const [monthName, setMonthName] = useState('');
    const [monthNumber, setMonthNumber] = useState(0);

    useEffect(() =>
    {
        const response: any = daysInMonth(cloneDays, props?.language);

        if (!props?.value && props?.setValue && props?.defaultValue)
        {
            if (props?.language === 'FARSI')
                props?.setValue(cloneDays?.format('jYYYY/jMM/jDD'));
            else
                props?.setValue(cloneDays?.format('YYYY/MM/DD'));
        }

        setMonthName(response.monthName);
        setWeeks(chunk(response.days, 7));
    }, [props, setWeeks, setMonthName, cloneDays]);

    const changeMonth = (amount: number) =>
    {
        if (amount > 0)
        {
            setMonthNumber(monthNumber + amount);
            setCloneDays(cloneDays.clone().add(amount, 'month'));
        }
        else
        {
            if (monthNumber > 0)
            {
                setMonthNumber(monthNumber + amount);
                setCloneDays(cloneDays.clone().add(amount, 'month'));
            }
        }
    };

    return (
        <div className={styles.datePicker} data-activate={props.activate}>
            <header className={styles.datePickerHeader}>
                <h4>
                    {props.title || 'تاریخ'}
                </h4>

                <div>
                    <Tooltip
                        render={() =>
                            (
                                <span className={styles.datePickerTooltip}>
                                    تقویم میلادی
                                </span>
                            )}
                    >
                        <button data-activate={props?.language === 'ENGLISH'} onClick={() => props?.setLanguage('ENGLISH')}>
                            میلادی
                        </button>
                    </Tooltip>

                    <Tooltip
                        render={() =>
                            (
                                <span className={styles.datePickerTooltip}>
                                    تقویم شمسی
                                </span>
                            )}
                    >
                        <button data-activate={props?.language === 'FARSI'} onClick={() => props?.setLanguage('FARSI')}>
                            شمسی
                        </button>
                    </Tooltip>
                </div>
            </header>

            <div className={styles.datePickerMonths} data-language={props?.language} dir={props?.language === 'FARSI' ? 'rtl' : 'ltr'}>
                <button onClick={() => changeMonth(-1)} data-activate={monthNumber > 0}>
                    <Arrow />
                </button>

                <span>
                    { monthName }
                </span>

                <button onClick={() => changeMonth(+1)} data-activate={true}>
                    <Arrow />
                </button>
            </div>

            <div className={styles.datePickerDays} data-language={props?.language} dir={props?.language === 'FARSI' ? 'rtl' : 'ltr'}>
                <header>
                    {
                        props?.language === 'FARSI'
                            ? weekDayNamesFa?.map((weekDayName: string) =>
                                (
                                    <span key={weekDayName}>
                                        {weekDayName}
                                    </span>
                                ))
                            : weekDayNamesEn?.map((weekDayName: string) =>
                                (
                                    <span key={weekDayName}>
                                        {weekDayName}
                                    </span>
                                ))
                    }
                </header>

                <div>
                    {
                        weeks?.map((week: any) =>
                            (
                                week?.map(({ day, utc, date, disable, unixTime, todayUnixTime }: any, index: number) =>
                                    (
                                        <span
                                            key={unixTime}
                                            data-utc={utc}
                                            data-date={date}
                                            data-disable={disable}
                                            data-language={props?.language}
                                            data-today={monthNumber === 0 && unixTime === todayUnixTime}
                                            data-activate={props?.value?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD') === date?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                            data-deactivate={monthNumber === 0 && unixTime < todayUnixTime}
                                            data-holiday={!!holidays?.some(holiday => holiday === index)}
                                            onClick={() =>
                                            {
                                                if (!disable && !(monthNumber === 0 && unixTime < todayUnixTime))
                                                    props?.setValue(date);
                                            }}
                                        >
                                            {
                                                props?.language === 'FARSI'
                                                    ? fa(day)
                                                    : en(day)
                                            }
                                        </span>
                                    ))
                            ))
                    }
                </div>
            </div>

            <footer className={styles.datePickerFooter}>
                <span>
                    {props?.value?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                </span>

                <button data-activate='true' data-disabled={!props?.value} onClick={() =>
                {
                    if (props?.value) props?.setActivate(false);
                }}>
                    تایید
                </button>
            </footer>
        </div>
    );
}
