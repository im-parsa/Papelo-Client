import momentEn from 'moment';
import momentFa from 'jalali-moment';
import Tooltip from '@tippyjs/react/headless';
import React, { useState, useEffect } from 'react';

import { chunk } from '../utils/chunk';
import { daysInMonth } from '../utils/daysInMonth';
import { fa, en, holidays, weekDayNamesFa, weekDayNamesEn } from '../utils';

import 'tippy.js/dist/tippy.css';
import styles from '../stylesheets/date-picker.module.scss';

import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';

export default function (props: any)
{
    const [language, setLanguage] = useState('FARSI');
    const [value]: any = useState(momentFa());
    const [cloneDays, setCloneDays] = useState(momentFa(value));
    const [weeks, setWeeks] = useState<any>([]);
    const [monthName, setMonthName] = useState('');
    const [monthNumber, setMonthNumber] = useState(0);

    useEffect(() =>
    {
        const response: any = daysInMonth(cloneDays, language);

        if (!props?.value && props?.setValue && props?.defaultValue)
        {
            if (language === 'FARSI')
            {
                props?.setValue(cloneDays?.format('jYYYY/jMM/jDD'));
            }
            else
            {
                props?.setValue(cloneDays?.format('YYYY/MM/DD'));
            }
        }

        setMonthName(response.monthName);
        setWeeks(chunk(response.days, 7));
    }, [props, setWeeks, setMonthName, cloneDays, language]);

    const changeMonth = (amount: number) =>
    {
        if (amount > 0)
        {
            setMonthNumber(monthNumber + amount);
            // @ts-ignore
            setCloneDays(cloneDays.clone().add(amount, 'month'));
        }
        else
        {
            if (monthNumber > 0)
            {
                setMonthNumber(monthNumber + amount);
                // @ts-ignore
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
                        <button data-activate={language === 'ENGLISH'} onClick={() => setLanguage('ENGLISH')}>
                            میلادی
                        </button>
                    </Tooltip>

                    <Tooltip
                        render={() =>
                            (
                                <span className={styles.datePickerTooltip}>
                                    تقویم میلادی
                                </span>
                            )}
                    >
                        <button data-activate={language === 'FARSI'} onClick={() => setLanguage('FARSI')}>
                            شمسی
                        </button>
                    </Tooltip>
                </div>
            </header>

            <div className={styles.datePickerMonths} data-language={language} dir={language === 'FARSI' ? 'rtl' : 'ltr'}>
                <button onClick={() => changeMonth(-1)} data-activate={monthNumber > 0}>
                    <Arrow />
                </button>

                <span id='date_picker_month'>
                    { monthName }
                </span>

                <button onClick={() => changeMonth(+1)} data-activate={true}>
                    <Arrow />
                </button>
            </div>

            <div className={styles.datePickerDays} data-language={language} dir={language === 'FARSI' ? 'rtl' : 'ltr'}>
                <header>
                    {
                        language === 'FARSI'
                            ?
                            weekDayNamesFa?.map((weekDayName: string) =>
                                (
                                    <span key={weekDayName}>
                                        {weekDayName}
                                    </span>
                                ))
                            :
                            weekDayNamesEn?.map((weekDayName: string) =>
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
                                            data-today={monthNumber === 0 && unixTime === todayUnixTime}
                                            data-activate={props?.value === date}
                                            data-deactivate={monthNumber === 0 && unixTime < todayUnixTime}
                                            data-holiday={!!holidays?.some(holiday => holiday === index)}
                                            onClick={() => { if (!disable && !(monthNumber === 0 && unixTime < todayUnixTime)) { props?.setValue(date) }}}
                                        >
                                            {
                                                language === 'FARSI'
                                                    ?
                                                    fa(day)
                                                    :
                                                    en(day)
                                            }
                                        </span>
                                    ))
                            ))
                    }
                </div>
            </div>

            <footer className={styles.datePickerFooters}>

            </footer>
        </div>
    );
};
