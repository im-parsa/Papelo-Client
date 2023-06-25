import moment from 'jalali-moment';

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

    const clonedDate = date.clone();
    const monthName = `${ clonedDate.locale(language === 'FARSI' ? 'fa' : 'en').format(language === 'FARSI' ? 'jMMMM' : 'MMMM') } ${ moment().format(language === 'FARSI' ? 'jYYYY' : 'YYYY') === clonedDate.format(language === 'FARSI' ? 'jYYYY' : 'YYYY') ? '' : language === 'FARSI' ? fa(clonedDate.format('jYYYY')) : en(clonedDate.format('YYYY')) }`;
    const month = Number(
        date
            .clone()
            .locale(language === 'FARSI' ? 'fa' : 'en')
            .format(language === 'FARSI' ? 'jM' : 'M')
    );
    const firstDayOfWeek = date.clone().startOf(language === 'FARSI' ? 'jMonth' : 'Month');
    const lastDayOfWeek = date.clone().endOf(language === 'FARSI' ? 'jMonth' : 'Month');

    firstDayOfWeek.subtract((firstDayOfWeek.day() + 1) % 7, 'days');

    while (firstDayOfWeek.isBefore(lastDayOfWeek))
    {
        days.push(
            {
                day: firstDayOfWeek.clone().format(language === 'FARSI' ? 'jDD' : 'DD'),
                utc: new Date(firstDayOfWeek.clone().format('YYYY/M/DD')).toUTCString(),
                date: firstDayOfWeek.clone(),
                todayUnixTime: Date.parse(moment().format('YYYY/MM/DD')),
                unixTime: Date.parse(firstDayOfWeek.clone().format('YYYY/MM/DD')),
                disable: firstDayOfWeek.clone().format(language === 'FARSI' ? 'jMM' : 'MM') !== date.clone().format(language === 'FARSI' ? 'jMM' : 'MM')
            });

        firstDayOfWeek.add(1, 'days');
    }

    return { monthName, month, days };
};
