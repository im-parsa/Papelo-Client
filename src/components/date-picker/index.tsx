import moment from 'jalali-moment';
import React, { useState } from 'react';

import styles from './stylesheets/date-picker.module.scss';

import { chunk } from './utils/chunk';
import { fa, weekDayNames, holidays } from './utils';
import { daysInMonth } from './utils/daysInMonth';

import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';

const DatePicker = (props: any) =>
{
    const [value] = useState(moment());
    const [cloneDays, setCloneDays] = useState(moment(value));
    const [weeks, setWeeks] = useState<any>([]);
    const [monthName, setMonthName] = useState('');
    const [monthNumber, setMonthNumber] = useState(0);

    React.useEffect(() =>
    {
        const response: any = daysInMonth(cloneDays);

        if (!props?.value && props?.setValue && props?.defaultValue)
        {
            props?.setValue(cloneDays?.format('jYYYY/jMM/jDD'));
        }

        setMonthName(response.monthName);
        setWeeks(chunk(response.days, 7));
    }, [setWeeks, setMonthName, cloneDays]);

    const changeMonth = (amount: number) =>
    {
        if (monthNumber > 0)
        {
            setMonthNumber(monthNumber + amount);
            setCloneDays(cloneDays.clone().add(amount, 'month'));
        }
    };

    return (
        <div className={styles.datePicker} data-activate={props.activate}>
            <div className={styles.datePickerMonths}>
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

            <div className={styles.datePickerDays}>
                <header>
                    {
                        weekDayNames?.map((weekDayName: string) =>
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
                                week?.map(({ day, utc, faDate, disable, unixTime, todayUnixTime }: any, index: number) =>
                                    (
                                        <span
                                            key={unixTime}
                                            data-utc={utc}
                                            data-date={faDate}
                                            data-disable={disable}
                                            data-today={unixTime === todayUnixTime}
                                            data-activate={props?.value === faDate}
                                            data-deactivate={unixTime < todayUnixTime}
                                            data-holiday={!!holidays?.some(holiday => holiday === index)}
                                            onClick={() => { if (!disable && unixTime >= todayUnixTime) { props?.setValue(faDate) }}}
                                        >
                                            {fa(day)}
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

export default DatePicker;
