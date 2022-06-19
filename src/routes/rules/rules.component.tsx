import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useCallback, useState } from 'react';

import styles from './rules.module.scss';

import Navbar from '../../components/layouts/navbar/navbar.component';
import Footer from '../../components/layouts/footer/footer.component';

import Header from '../../assets/images/header-1.svg';
import { ReactComponent as Arrow2 } from '../../assets/icons/arrow-2.svg';

const Home = () =>
{
    const [page, setPage] = useState('plane');
    const handlePage = useCallback(
        (page: string) =>
        {
            setPage(page);
        }, [setPage]);

    return (
        <main>
            <Navbar
                header='قوانین و مقررات'
                headerImage={Header}
            />
            <section className={styles.rulesMain}>
                <div className='container border'>
                    <aside>
                        <button data-activate={true}>
                            قوانین عمومی
                            <Arrow2 />
                        </button>
                        <button>
                            رزرو هتل
                            <Arrow2 />
                        </button>
                        <button>
                            شرایط استفده
                            <Arrow2 />
                        </button>
                        <button>
                            پرواز
                            <Arrow2 />
                        </button>
                    </aside>
                    <article>
                        <h2>
                            قوانین و مقررات عمومی
                        </h2>
                        <p>
                            برای تهران‌نشین‌ها، فشم صرفا یک روستای عادی نیست؛ فشم تهران برای ساکنین پایتخت یک راه قرار است، فرار از آلودگی و شلوغی شهر به دامان سرسبز و آرامش‌بخش طبیعت. تست لینک بلیط یاب کافی‌ست یکی از روزهای تعطیل بار مختصری بسته و راهی این روستا شوید. حتی قبل از اینکه جایی اتراق کنید، زیبایی‌های مسیر منظور مرا برایتان اثبات می‌کند . برای تهران‌نشین‌ها، فشم صرفا یک روستای عادی نیست؛ فشم تهران برای ساکنین پایتخت یک راه قرار است، فرار از آلودگی و شلوغی شهر به دامان سرسبز و آرامش‌بخش طبیعت. کافی‌ست یکی از روزهای تعطیل بار مختصری بسته و راهی این روستا شوید. حتی قبل از اینکه جایی اتراق کنید، زیبایی‌های مسیر منظور مرا برایتان اثبات می‌کند
                        </p>
                        <ul>
                            <a href='#'>
                                فشم چطور جایی است
                            </a>
                            <a href='#'>
                                شغل اصلی مردم شهر زیبای فشم
                                فشم چطور جایی است
                            </a>
                            <a href='#'>
                                بهترین زمان سفر و تفریح
                                فشم چطور جایی است
                            </a>
                            <a href='#'>
                                شکم گردی در رستوران های فشم
                                فشم چطور جایی است
                            </a>
                            <a href='#'>
                                بهترین زمان سفر و تفریح
                                فشم چطور جایی است
                            </a>
                        </ul>
                        <h2>
                            سیاست حفظ حریم خصوصی کاربران
                        </h2>
                        <p>
                            برای تهران‌نشین‌ها، فشم صرفا یک روستای عادی نیست؛ فشم تهران برای ساکنین پایتخت یک راه قرار است، فرار از آلودگی و شلوغی شهر به دامان سرسبز و آرامش‌بخش طبیعت. تست لینک بلیط یاب کافی‌ست یکی از روزهای تعطیل بار مختصری بسته و راهی این روستا شوید. حتی قبل از اینکه جایی اتراق کنید، زیبایی‌های مسیر منظور مرا برایتان اثبات می‌کند . برای تهران‌نشین‌ها، فشم صرفا یک روستای عادی نیست؛ فشم تهران برای ساکنین پایتخت یک راه قرار است، فرار از آلودگی و شلوغی شهر به دامان سرسبز و آرامش‌بخش طبیعت. کافی‌ست یکی از روزهای تعطیل بار مختصری بسته و راهی این روستا شوید. حتی قبل از اینکه جایی اتراق کنید، زیبایی‌های مسیر منظور مرا برایتان اثبات می‌کند
                        </p>
                    </article>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default Home;
