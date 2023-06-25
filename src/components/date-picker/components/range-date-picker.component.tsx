import momentFa from 'jalali-moment';
import Tooltip from '@tippyjs/react/headless';
import React, { useState, useEffect } from 'react';

import { chunk } from '../utils/chunk';
import { daysInMonth } from '../utils/daysInMonth';
import { fa, en, holidays, weekDayNamesFa, weekDayNamesEn } from '../utils';

import 'tippy.js/dist/tippy.css';
import styles from '../stylesheets/date-picker.module.scss';
import rangeStyles from '../stylesheets/range-date-picker.module.scss';

import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';
import { ReactComponent as Close } from '../../../assets/icons/close-fill.svg';

export default function RangeDatePickerComponent(props: any)
{
    const [value]: any = useState(momentFa());
    const [fistCloneDays, setFirstCloneDays]: any = useState<any>(momentFa(value));
    const [secondCloneDays, setSecondCloneDays]: any = useState<any>(momentFa(value).add(1, 'month'));
    const [weeks, setWeeks] = useState<any>([]);
    const [monthNames, setMonthNames] = useState<string[]>([]);
    const [monthNumber, setMonthNumber] = useState(0);

    useEffect(() =>
    {
        const firstResponse: any = daysInMonth(fistCloneDays, props?.language);
        const secondResponse: any = daysInMonth(secondCloneDays, props?.language);

        if (!props?.values && props?.setValues && props?.defaultValue)
        {
            if (props?.language === 'FARSI')
            {
                props?.setValues[0](fistCloneDays?.format('jYYYY/jMM/jDD'));
                props?.setValues[1](secondCloneDays?.format('jYYYY/jMM/jDD'));
            }
            else
            {
                props?.setValues[0](fistCloneDays?.format('YYYY/MM/DD'));
                props?.setValues[1](secondCloneDays?.format('YYYY/MM/DD'));
            }
        }

        setMonthNames([firstResponse.monthName, secondResponse.monthName]);
        setWeeks([chunk(firstResponse.days, 7), chunk(secondResponse.days, 7)]);
    }, [props, setWeeks, setMonthNames, fistCloneDays, secondCloneDays]);

    const changeMonth = (amount: number) =>
    {
        if (amount > 0)
        {
            setMonthNumber(monthNumber + amount);
            setFirstCloneDays(fistCloneDays.clone().add(amount, 'month'));
            setSecondCloneDays(secondCloneDays.clone().add(amount, 'month'));
        }
        else
        {
            if (monthNumber > 0)
            {
                setMonthNumber(monthNumber + amount);
                setFirstCloneDays(fistCloneDays.clone().add(amount, 'month'));
                setSecondCloneDays(secondCloneDays.clone().add(amount, 'month'));
            }
        }
    };

    return (
        <div className={rangeStyles.rangeDatePicker} data-activate={props.activate}>
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

            <div className={styles.datePickerOutput}>
                {
                    props?.values[0]
                        ? (
                            <span>
                                <>
                                    <span>ورود</span>{ ' ' + props?.values[0]?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD') + ' '}
                                </>
                            </span>
                        )
                        : null
                }
                {
                    props?.values[1]
                        ? (
                            <span>
                                <>
                                    <span>خروج</span> { ' ' + props?.values[1]?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD') + ' '}
                                </>
                            </span>
                        )
                        : null
                }
            </div>

            <div className={rangeStyles.rangeDatePickerContent} dir={props?.language === 'FARSI' ? 'rtl' : 'ltr'}>
                <div className={styles.datePickerMonths} data-language={props?.language}>
                    <button onClick={() => changeMonth(-1)} data-activate={monthNumber > 0}>
                        <Arrow />
                    </button>

                    <span>
                        { monthNames[0] }
                    </span>

                    <button onClick={() => changeMonth(+1)} data-activate={true}>
                        <Arrow />
                    </button>
                </div>

                <div>
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
                            weeks[0]?.map((week: any) =>
                                (
                                    week?.map(({ day, utc, date, disable, unixTime, todayUnixTime }: any, index: number) =>
                                    {
                                        let betweenSelected = false;

                                        const dateNumber = date?.format(props?.language === 'FARSI' ? 'jYYYYjMMjDD' : 'YYYYMMDD');
                                        const startDateNumber = props?.values[0]?.format(props?.language === 'FARSI' ? 'jYYYYjMMjDD' : 'YYYYMMDD');
                                        const endDateNumber = props?.values[1]?.format(props?.language === 'FARSI' ? 'jYYYYjMMjDD' : 'YYYYMMDD');

                                        // @ts-ignore
                                        if ((isNaN(Number(startDateNumber)) ? 0 : Number(startDateNumber)) < (isNaN(Number(dateNumber)) ? 0 : Number(dateNumber)) && (isNaN(Number(dateNumber)) ? 0 : Number(dateNumber)) < (isNaN(Number(endDateNumber)) ? 0 : Number(endDateNumber)))
                                            betweenSelected = true;

                                        return (
                                            <span
                                                key={unixTime}
                                                data-utc={utc}
                                                data-date={date}
                                                data-disable={disable}
                                                data-language={props?.language}
                                                data-today={monthNumber === 0 && unixTime === todayUnixTime}
                                                data-first_selected={props?.values[0]?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD') === date?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                                data-between_selected={betweenSelected}
                                                data-second_selected={props?.values[1]?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD') === date?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                                data-deactivate={monthNumber === 0 && unixTime < todayUnixTime}
                                                data-holiday={!!holidays?.some(holiday => holiday === index)}
                                                onClick={() =>
                                                {
                                                    if (!disable && !(monthNumber === 0 && unixTime < todayUnixTime))
                                                    {
                                                        if (props?.values[0])
                                                            props?.setValues[1](date);
                                                        else
                                                            props?.setValues[0](date);
                                                    }

                                                    if (props?.values[1]?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD') === date?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD'))
                                                    {
                                                        props?.setValues[0](date);
                                                        props?.setValues[1](null);
                                                    }

                                                    // @ts-ignore
                                                    if ((isNaN(Number(dateNumber)) ? 0 : Number(dateNumber)) < (isNaN(Number(startDateNumber)) ? 0 : Number(startDateNumber)))
                                                    {
                                                        props?.setValues[0](date);
                                                        props?.setValues[1](null);
                                                    }
                                                }}
                                            >
                                                {
                                                    props?.language === 'FARSI'
                                                        ? fa(day)
                                                        : en(day)
                                                }
                                            </span>
                                        );
                                    })
                                ))
                        }
                    </div>
                </div>

                <div>
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
                            weeks[1]?.map((week: any) =>
                                (
                                    week?.map(({ day, utc, date, disable, unixTime, todayUnixTime }: any, index: number) =>
                                    {
                                        let betweenSelected = false;

                                        const dateNumber = date?.format(props?.language === 'FARSI' ? 'jYYYYjMMjDD' : 'YYYYMMDD');
                                        const startDateNumber = props?.values[0]?.format(props?.language === 'FARSI' ? 'jYYYYjMMjDD' : 'YYYYMMDD');
                                        const endDateNumber = props?.values[1]?.format(props?.language === 'FARSI' ? 'jYYYYjMMjDD' : 'YYYYMMDD');

                                        // @ts-ignore
                                        if ((isNaN(Number(startDateNumber)) ? 0 : Number(startDateNumber)) < (isNaN(Number(dateNumber)) ? 0 : Number(dateNumber)) && (isNaN(Number(dateNumber)) ? 0 : Number(dateNumber)) < (isNaN(Number(endDateNumber)) ? 0 : Number(endDateNumber)))
                                            betweenSelected = true;

                                        return (
                                            <span
                                                key={unixTime}
                                                data-utc={utc}
                                                data-date={date}
                                                data-disable={disable}
                                                data-language={props?.language}
                                                data-today={monthNumber === 0 && unixTime === todayUnixTime}
                                                data-first_selected={props?.values[0]?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD') === date?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                                data-between_selected={betweenSelected}
                                                data-second_selected={props?.values[1]?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD') === date?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                                data-deactivate={monthNumber === 0 && unixTime < todayUnixTime}
                                                data-holiday={!!holidays?.some(holiday => holiday === index)}
                                                onClick={() =>
                                                {
                                                    if (!disable && !(monthNumber === 0 && unixTime < todayUnixTime))
                                                    {
                                                        if (props?.values[0])
                                                            props?.setValues[1](date);
                                                        else
                                                            props?.setValues[0](date);
                                                    }

                                                    if (props?.values[1]?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD') === date?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD'))
                                                    {
                                                        props?.setValues[0](date);
                                                        props?.setValues[1](null);
                                                    }

                                                    // @ts-ignore
                                                    if ((isNaN(Number(dateNumber)) ? 0 : Number(dateNumber)) < (isNaN(Number(startDateNumber)) ? 0 : Number(startDateNumber)))
                                                    {
                                                        props?.setValues[0](date);
                                                        props?.setValues[1](null);
                                                    }
                                                }}
                                            >
                                                {
                                                    props?.language === 'FARSI'
                                                        ? fa(day)
                                                        : en(day)
                                                }
                                            </span>
                                        );
                                    })
                                ))
                        }
                    </div>
                </div>
            </div>

            <div className={rangeStyles.rangeDatePickerMonthsParent} data-removable={true} dir={props?.language === 'FARSI' ? 'rtl' : 'ltr'}>
                <div className={styles.datePickerMonths} data-language={props?.language}>
                    <button onClick={() => changeMonth(-1)} data-activate={monthNumber > 0}>
                        <Arrow />
                    </button>

                    <span>
                        { monthNames[0] }
                    </span>
                </div>

                <div className={styles.datePickerMonths} data-language={props?.language}>
                    <span>
                        { monthNames[1] }
                    </span>

                    <button onClick={() => changeMonth(+1)} data-activate={true}>
                        <Arrow />
                    </button>
                </div>
            </div>

            <div className={rangeStyles.rangeDatePickerDays} data-removable={true} data-language={props?.language} dir={props?.language === 'FARSI' ? 'rtl' : 'ltr'}>
                <div>
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
                </div>

                <div>
                    <div>
                        {
                            weeks[0]?.map((week: any) =>
                                (
                                    week?.map(({ day, utc, date, disable, unixTime, todayUnixTime }: any, index: number) =>
                                    {
                                        let betweenSelected = false;

                                        const dateNumber = date?.format(props?.language === 'FARSI' ? 'jYYYYjMMjDD' : 'YYYYMMDD');
                                        const startDateNumber = props?.values[0]?.format(props?.language === 'FARSI' ? 'jYYYYjMMjDD' : 'YYYYMMDD');
                                        const endDateNumber = props?.values[1]?.format(props?.language === 'FARSI' ? 'jYYYYjMMjDD' : 'YYYYMMDD');

                                        // @ts-ignore
                                        if ((isNaN(Number(startDateNumber)) ? 0 : Number(startDateNumber)) < (isNaN(Number(dateNumber)) ? 0 : Number(dateNumber)) && (isNaN(Number(dateNumber)) ? 0 : Number(dateNumber)) < (isNaN(Number(endDateNumber)) ? 0 : Number(endDateNumber)))
                                            betweenSelected = true;

                                        return (
                                            <span
                                                key={unixTime}
                                                data-utc={utc}
                                                data-date={date}
                                                data-disable={disable}
                                                data-language={props?.language}
                                                data-today={monthNumber === 0 && unixTime === todayUnixTime}
                                                data-first_selected={props?.values[0]?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD') === date?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                                data-between_selected={betweenSelected}
                                                data-second_selected={props?.values[1]?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD') === date?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                                data-deactivate={monthNumber === 0 && unixTime < todayUnixTime}
                                                data-holiday={!!holidays?.some(holiday => holiday === index)}
                                                onClick={() =>
                                                {
                                                    if (!disable && !(monthNumber === 0 && unixTime < todayUnixTime))
                                                    {
                                                        if (props?.values[0])
                                                            props?.setValues[1](date);
                                                        else
                                                            props?.setValues[0](date);
                                                    }

                                                    if (props?.values[1]?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD') === date?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD'))
                                                    {
                                                        props?.setValues[0](date);
                                                        props?.setValues[1](null);
                                                    }

                                                    // @ts-ignore
                                                    if ((isNaN(Number(dateNumber)) ? 0 : Number(dateNumber)) < (isNaN(Number(startDateNumber)) ? 0 : Number(startDateNumber)))
                                                    {
                                                        props?.setValues[0](date);
                                                        props?.setValues[1](null);
                                                    }
                                                }}
                                            >
                                                {
                                                    props?.language === 'FARSI'
                                                        ? fa(day)
                                                        : en(day)
                                                }
                                            </span>
                                        );
                                    })
                                ))
                        }
                    </div>

                    <div>
                        {
                            weeks[1]?.map((week: any) =>
                                (
                                    week?.map(({ day, utc, date, disable, unixTime, todayUnixTime }: any, index: number) =>
                                    {
                                        let betweenSelected = false;

                                        const dateNumber = date?.format(props?.language === 'FARSI' ? 'jYYYYjMMjDD' : 'YYYYMMDD');
                                        const startDateNumber = props?.values[0]?.format(props?.language === 'FARSI' ? 'jYYYYjMMjDD' : 'YYYYMMDD');
                                        const endDateNumber = props?.values[1]?.format(props?.language === 'FARSI' ? 'jYYYYjMMjDD' : 'YYYYMMDD');

                                        // @ts-ignore
                                        if ((isNaN(Number(startDateNumber)) ? 0 : Number(startDateNumber)) < (isNaN(Number(dateNumber)) ? 0 : Number(dateNumber)) && (isNaN(Number(dateNumber)) ? 0 : Number(dateNumber)) < (isNaN(Number(endDateNumber)) ? 0 : Number(endDateNumber)))
                                            betweenSelected = true;

                                        return (
                                            <span
                                                key={unixTime}
                                                data-utc={utc}
                                                data-date={date}
                                                data-disable={disable}
                                                data-language={props?.language}
                                                data-today={monthNumber === 0 && unixTime === todayUnixTime}
                                                data-first_selected={props?.values[0]?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD') === date?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                                data-between_selected={betweenSelected}
                                                data-second_selected={props?.values[1]?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD') === date?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD')}
                                                data-deactivate={monthNumber === 0 && unixTime < todayUnixTime}
                                                data-holiday={!!holidays?.some(holiday => holiday === index)}
                                                onClick={() =>
                                                {
                                                    if (!disable && !(monthNumber === 0 && unixTime < todayUnixTime))
                                                    {
                                                        if (props?.values[0])
                                                            props?.setValues[1](date);
                                                        else
                                                            props?.setValues[0](date);
                                                    }

                                                    if (props?.values[1]?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD') === date?.format(props?.language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD'))
                                                    {
                                                        props?.setValues[0](date);
                                                        props?.setValues[1](null);
                                                    }

                                                    // @ts-ignore
                                                    if ((isNaN(Number(dateNumber)) ? 0 : Number(dateNumber)) < (isNaN(Number(startDateNumber)) ? 0 : Number(startDateNumber)))
                                                    {
                                                        props?.setValues[0](date);
                                                        props?.setValues[1](null);
                                                    }
                                                }}
                                            >
                                                {
                                                    props?.language === 'FARSI'
                                                        ? fa(day)
                                                        : en(day)
                                                }
                                            </span>
                                        );
                                    })
                                ))
                        }
                    </div>
                </div>
            </div>

            <footer className={styles.datePickerFooter}>
                {
                    props?.values[0] || props?.values[1]
                        ? (
                            <button onClick={() =>
                            {
                                props?.setValues[0](null);
                                props?.setValues[1](null);
                            }}>
                                <Close />
                                پاک کردن
                            </button>
                        )
                        : null
                }

                <button data-activate='true' data-disabled={!(props?.values[0] && props?.values[1])} onClick={() =>
                {
                    if (props?.values[0] && props?.values[1]) props?.setActivate(false);
                }}>
                    اعمال
                </button>
            </footer>
        </div>
    );
}
