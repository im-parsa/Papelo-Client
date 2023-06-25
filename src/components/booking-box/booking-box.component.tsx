import React, { useEffect, useState } from 'react';

import styles from './booking-box.module.scss';

import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as User2 } from '../../assets/icons/user.svg';
import { ReactComponent as Arrow2 } from '../../assets/icons/arrow-2.svg';
import { ReactComponent as User } from '../../assets/icons/user-3-fill.svg';
import { ReactComponent as Trash } from '../../assets/icons/delete-bin-line.svg';

const BookingBox = (props: any) =>
{
    const [ageOpen, setAgeOpen] = useState(false);
    const [genderOpen, setGenderOpen] = useState(false);
    const [passport, setPassport] = useState(false);

    useEffect(() =>
    {
        props?.mainRef?.current?.addEventListener('click', (event: any) =>
        {
            if (!props?.gendersRef?.current[props?.index]?.current?.contains(event?.target))
                setGenderOpen(false);

            if (!props?.agesRef?.current[props?.index]?.current?.contains(event?.target))
                setAgeOpen(false);
        });
    }, [props, setGenderOpen, setAgeOpen]);

    return (
        <div data-activate={props?.page === 'user'} className={styles?.bookingBox}>
            <header>
                <span>
                    <User data-fill={true}/>
                    مشخصات مسافر
                </span>

                {
                    props?.passengers?.length !== 1
                        ? <button onClick={() => props?.deletePassenger(props?.passenger?.id)}>
                            حذف
                            <Trash />
                        </button>
                        : null
                }
            </header>

            <div>
                <div>
                    <p>
                        <input type='radio' id={`cart_${ props?.index }`} onChange={() =>
                        {
                            props?.onChange({ target: { value: false } }, 'passport', props?.passenger?.id);
                            setPassport(false);
                        }} checked={!passport}/>
                        <label htmlFor={`cart_${ props?.index }`}>
                            کارت ملی
                        </label>
                    </p>
                    <p>
                        <input type='radio' id={`passport_${ props?.index }`} onChange={() =>
                        {
                            props?.onChange({ target: { value: true } }, 'passport', props?.passenger?.id);
                            setPassport(true);
                        }} checked={passport}/>
                        <label htmlFor={`passport_${ props?.index }`}>
                            پاسپورت
                        </label>
                    </p>
                </div>

                <button onClick={() =>
                {
                    props?.setPopup(true); props?.setPopupIndex(props?.index);
                }}>
                    <User2 />
                    مسافرین سابق
                </button>
            </div>

            <form>
                <div data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                    <label>
                        نام لاتین
                    </label>

                    <input
                        value={props?.passenger?.latinName ?? ''}
                        onChange={(event: any) => props?.onChange(event, 'latinName', props?.passenger?.id)}
                        ref={props?.latinNamesRef?.current[props?.index]}
                        data-lang='en'
                        type='text'
                        onBlur={(event: any) =>
                        {
                            if (!event?.target?.value)
                            {
                                event?.target?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                                event?.target?.parentElement?.setAttribute('data-error', 'true');
                            }
                            else
                                event?.target?.parentElement?.setAttribute('data-error', 'false');
                        }}
                        onFocus={(event: any) => event?.target?.parentElement?.setAttribute('data-error', 'false')}
                    />
                </div>

                <div data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                    <label>
                        نام فارسی
                    </label>

                    <input
                        value={props?.passenger?.persianName ?? ''}
                        onChange={(event: any) => props?.onChange(event, 'persianName', props?.passenger?.id)}
                        ref={props?.persianNamesRef?.current[props?.index]}
                        type='text'
                        onBlur={(event: any) =>
                        {
                            if (!event?.target?.value)
                            {
                                event?.target?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                                event?.target?.parentElement?.setAttribute('data-error', 'true');
                            }
                            else
                                event?.target?.parentElement?.setAttribute('data-error', 'false');
                        }}
                        onFocus={(event: any) => event?.target?.parentElement?.setAttribute('data-error', 'false')}
                    />
                </div>

                <div data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                    <label>
                        نام خانوادگی لاتین
                    </label>

                    <input
                        value={props?.passenger?.latinLastName ?? ''}
                        onChange={(event: any) => props?.onChange(event, 'latinLastName', props?.passenger?.id)}
                        ref={props?.latinLastNamesRef?.current[props?.index]}
                        data-lang='en'
                        type='text'
                        onBlur={(event: any) =>
                        {
                            if (!event?.target?.value)
                            {
                                event?.target?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                                event?.target?.parentElement?.setAttribute('data-error', 'true');
                            }
                            else
                                event?.target?.parentElement?.setAttribute('data-error', 'false');
                        }}
                        onFocus={(event: any) => event?.target?.parentElement?.setAttribute('data-error', 'false')}
                    />
                </div>

                <div data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                    <label>
                        نام خانوادگی فارسی
                    </label>

                    <input
                        value={props?.passenger?.persianLastName ?? ''}
                        onChange={(event: any) => props?.onChange(event, 'persianLastName', props?.passenger?.id)}
                        ref={props?.persianLastNamesRef?.current[props?.index]}
                        type='text'
                        onBlur={(event: any) =>
                        {
                            if (!event?.target?.value)
                            {
                                event?.target?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                                event?.target?.parentElement?.setAttribute('data-error', 'true');
                            }
                            else
                                event?.target?.parentElement?.setAttribute('data-error', 'false');
                        }}
                        onFocus={(event: any) => event?.target?.parentElement?.setAttribute('data-error', 'false')}
                    />
                </div>

                <div data-error='false' data-activate={genderOpen} ref={props?.gendersRef?.current[props?.index]} data-error_message='پر کردن این فیلد الزامی است'>
                    <label>
                        جنسیت
                    </label>

                    <div onClick={() => setGenderOpen(!genderOpen)}>
                        <span data-activate={!!props?.passenger?.gender}>
                            { props?.passenger?.gender ?? 'انتخاب' }
                        </span>

                        <Arrow2 data-open={genderOpen}/>

                        <ul data-open={genderOpen}>
                            <li onClick={() =>
                            {
                                props?.onChange({ target: { value: 'آقا' } }, 'gender', props?.passenger?.id);
                                props?.gendersRef?.current[props?.index]?.current?.setAttribute('data-error', 'false');
                            }}>
                                آقا
                            </li>

                            <li onClick={() =>
                            {
                                props?.onChange({ target: { value: 'خانم' } }, 'gender', props?.passenger?.id);
                                props?.gendersRef?.current[props?.index]?.current?.setAttribute('data-error', 'false');
                            }}>
                                خانم
                            </li>
                        </ul>
                    </div>
                </div>

                <div data-error='false' data-activate={ageOpen} ref={props?.agesRef?.current[props?.index]} data-error_message='پر کردن این فیلد الزامی است'>
                    <label>
                        رده سنی مسافر
                    </label>

                    <div onClick={() => setAgeOpen(!ageOpen)}>
                        <span data-activate={!!props?.passenger?.age}>
                            { props?.passenger?.age ?? 'انتخاب' }
                        </span>

                        <Arrow2 data-open={ageOpen}/>

                        <ul data-open={ageOpen}>
                            <li onClick={() =>
                            {
                                props?.onChange({ target: { value: 'بزرگسال' } }, 'age', props?.passenger?.id);
                                props?.agesRef?.current[props?.index]?.current?.setAttribute('data-error', 'false');
                            }}>
                                بزرگسال
                            </li>

                            <li onClick={() =>
                            {
                                props?.onChange({ target: { value: 'کودک' } }, 'age', props?.passenger?.id);
                                props?.agesRef?.current[props?.index]?.current?.setAttribute('data-error', 'false');
                            }}>
                                کودک
                            </li>

                            <li onClick={() =>
                            {
                                props?.onChange({ target: { value: 'نوزاد' } }, 'age', props?.passenger?.id);
                                props?.agesRef?.current[props?.index]?.current?.setAttribute('data-error', 'false');
                            }}>
                                نوزاد
                            </li>
                        </ul>
                    </div>
                </div>

                <div data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                    {
                        props?.passenger?.passport
                            ? <label>
                                شماره پاسپورت
                            </label>
                            : <label>
                                کد ملی
                            </label>
                    }

                    <input
                        value={props?.passenger?.code ?? ''}
                        onChange={(event: any) => props?.onChange(event, 'code', props?.passenger?.id, passport)}
                        ref={props?.codesRef?.current[props?.index]}
                        data-lang='en'
                        type='text'
                        onBlur={(event: any) =>
                        {
                            if (!event?.target?.value)
                            {
                                event?.target?.parentElement?.setAttribute('data-error_message', 'پر کردن این فیلد الزامی است');
                                event?.target?.parentElement?.setAttribute('data-error', 'true');
                            }
                            else

                                event?.target?.parentElement?.setAttribute('data-error', 'false');
                        }}
                        onFocus={(event: any) => event?.target?.parentElement?.setAttribute('data-error', 'false')}
                    />
                </div>

                <div data-error='false' data-error_message='پر کردن این فیلد الزامی است'>
                    <label>
                        تاریخ تولد
                    </label>

                    <ul>
                        <input
                            value={props?.passenger?.birthdayDay ?? ''}
                            onChange={(event: any) => props?.onChange(event, 'birthdayDay', props?.passenger?.id)}
                            ref={props?.birthdaysDayRef?.current[props?.index]}
                            data-lang='en'
                            type='text'
                            placeholder='روز'
                            onBlur={() => props?.birthdayValidate(props?.passenger, props?.index)}
                            onFocus={(event: any) => event?.target?.setAttribute('data-error', 'false')}
                        />

                        <span>
                            /
                        </span>

                        <input
                            value={props?.passenger?.birthdayMonth ?? ''}
                            onChange={(event: any) => props?.onChange(event, 'birthdayMonth', props?.passenger?.id)}
                            ref={props?.birthdaysMonthRef?.current[props?.index]}
                            data-lang='en'
                            type='text'
                            placeholder='ماه'
                            onBlur={() => props?.birthdayValidate(props?.passenger, props?.index)}
                            onFocus={(event: any) => event?.target?.setAttribute('data-error', 'false')}
                        />

                        <span>
                            /
                        </span>

                        <input
                            value={props?.passenger?.birthdayYear ?? ''}
                            onChange={(event: any) => props?.onChange(event, 'birthdayYear', props?.passenger?.id)}
                            ref={props?.birthdaysYearRef?.current[props?.index]}
                            data-lang='en'
                            type='text'
                            data-year={true}
                            placeholder='سال'
                            onBlur={() => props?.birthdayValidate(props?.passenger, props?.index)}
                            onFocus={(event: any) => event?.target?.setAttribute('data-error', 'false')}
                        />
                    </ul>
                </div>
            </form>

            {
                props?.index + 1 === props?.passengers?.length
                    ? <div data-add={true} onClick={() => props?.setPassengers((oldArray: any) => [...oldArray, { id: props?.nanoid() }])}>
                        <Plus />
                        اضافه کردن مسافر جدید
                    </div>
                    : null
            }
        </div>
    );
};

export default BookingBox;
