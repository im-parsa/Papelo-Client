import moment from 'jalali-moment';

export const fa = (n: string) =>
{
    return Number(n).toLocaleString('fa',
        {
            useGrouping: false,
        });
};

export const inputFaDateMask = [/[0-1]/,/[0-4]/,/[0-9]/,/[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /[0-3]/, /[0-9]/];

export const inputFaDateWithTimeMask = [/[0-1]/,/[0-4]/,/[0-9]/,/[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /[0-3]/, /[0-9]/, ' ','-',' ', /[0-2]/,/[0-9]/, ':', /[0-5]/,/[0-9]/];

export const formatDateTime = 'jYYYY/jMM/jDD - HH:mm';

export const formatDate = 'jYYYY/jMM/jDD';

export const weekDayNames = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

export const holidays = [6, 12, 18, 24, 30, 36, 42, 48, 54];

export const formatJalaliDate = (date: any) =>
{
    const formattedDate = moment(`${date}`, 'jYYYY/jMM/jDD');

    if (formattedDate.isValid())
    {
        return formattedDate;
    }
    return null;
};
