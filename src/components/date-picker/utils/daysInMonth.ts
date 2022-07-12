import momentEn from 'moment';
import momentFa from 'jalali-moment';

import { fa, en } from './index';

export interface IDays
{
    day: string;
    utc: string;
    date: string;
    unixTime: number;
    todayUnixTime: number;
    disable: boolean;
}

export interface IDaysInMonth
{
    days: IDays[];
    monthName: string;
    month: number;
    today?: string;
}

export const daysInMonth = (date: any, language: string): IDaysInMonth =>
{
    const days: IDays[] = [];

    let clonedDate;
    let monthName;
    let month;
    let firstDayOfWeek;
    let lastDayOfWeek;
    let today;

    if (language === 'FARSI')
    {
        clonedDate = date.clone();

        monthName = `${clonedDate.locale('fa').format('jMMMM')} ${fa(clonedDate.format('jYYYY'))}`;
        month = Number(
            date
                .clone()
                .locale('fa')
                .format('jM')
        );
        firstDayOfWeek = date.clone().startOf('jMonth');
        lastDayOfWeek = date.clone().endOf('jMonth');
        today = momentFa().format('jYYYY/jMM') === date.format('jYYYY/jMM') ? { today: date.format('jDD') } : null;
    }
    else
    {
        clonedDate = date.clone();

        monthName = `${clonedDate.locale('en').format('MMMM')} ${en(clonedDate.format('YYYY'))}`;
        month = Number(
            date
                .clone()
                .locale('en')
                .format('M')
        );
        firstDayOfWeek = date.clone().startOf('month');
        lastDayOfWeek = date.clone().endOf('month');
        today = momentEn().format('YYYY/MM') === date.format('YYYY/MM') ? { today: date.format('DD') } : null;
    }

    firstDayOfWeek.subtract((firstDayOfWeek.day() + 1) % 7, 'days');

    while (firstDayOfWeek.isBefore(lastDayOfWeek))
    {
        days.push(
            {
                day: firstDayOfWeek.clone().format(language === 'FARSI' ? 'jDD' : 'DD'),
                utc: new Date(firstDayOfWeek.clone().format('YYYY/M/DD')).toUTCString(),
                date: firstDayOfWeek.clone().format(language === 'FARSI' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD'),
                todayUnixTime: Date.parse(date.format('YYYY/MM/DD')),
                unixTime: Date.parse(firstDayOfWeek.clone().format('YYYY/MM/DD')),
                disable: firstDayOfWeek.clone().format(language === 'FARSI' ? 'jMM' : 'MM') !== date.clone().format(language === 'FARSI' ? 'jMM' : 'MM')
            });

        firstDayOfWeek.add(1, 'days');
    }

    return { monthName, month, days, ...today };
};
