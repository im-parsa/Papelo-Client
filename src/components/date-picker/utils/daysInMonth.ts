import moment from 'jalali-moment';
import { Moment } from 'jalali-moment';

import { fa } from './index';

export interface IDays
{
    day: string;
    utc: string;
    faDate: string;
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

const checkDateMonth = (date: moment.Moment, current: moment.Moment) => current.jMonth() < date.jMonth();
const checkCurrentMonth = (date: Moment) => moment().format('jYYYY/jMM') === date.format('jYYYY/jMM');

export const daysInMonth = (date: Moment): IDaysInMonth =>
{
    const days: IDays[] = [];
    const clonedDate = date.clone();
    const monthName = `${clonedDate.locale('fa').format('jMMMM')} ${fa(clonedDate.format('jYYYY'))}`;

    const month = Number(
        date
            .clone()
            .locale('fa')
            .format('jM'),
    );

    const firstDayOfWeek = date.clone().startOf('jMonth');
    const lastDayOfWeek = date.clone().endOf('jMonth');
    const today = checkCurrentMonth(date) ? { today: date.format('jDD') } : null;

    firstDayOfWeek.subtract((firstDayOfWeek.day() + 1) % 7, 'days');

    while (firstDayOfWeek.isBefore(lastDayOfWeek))
    {
        days.push(
            {
                day: firstDayOfWeek.clone().format('jDD'),
                utc: new Date(firstDayOfWeek.clone().format('YYYY/M/DD')).toUTCString(),
                faDate: firstDayOfWeek.clone().format('jYYYY/jMM/jDD'),
                todayUnixTime: Date.parse(date.format('YYYY/M/DD')),
                unixTime: Date.parse(firstDayOfWeek.clone().format('YYYY/M/DD')),
                disable: checkDateMonth(date, firstDayOfWeek)
            });

        firstDayOfWeek.add(1, 'days');
    }

    return { monthName, month, days, ...today };
};
