import React from 'react';
import { Link } from 'react-router-dom';

import styles from './blogs.module.scss';
import stylesHome from '../home/home.module.scss';

import Navbar from '../../components/layouts/navbar/navbar.component';
import Footer from '../../components/layouts/footer/footer.component';

import Image3 from '../../assets/images/image-3.svg';
import { ReactComponent as Blog } from '../../assets/icons/blogs.svg';
import { ReactComponent as Comment } from '../../assets/icons/chat-1-line.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Check } from '../../assets/icons/check.svg';
import { ReactComponent as Arrow2 } from '../../assets/icons/arrow-2.svg';
import { ReactComponent as AppPhone } from '../../assets/images/app-phone.svg';
import { ReactComponent as Download } from '../../assets/icons/download-2.svg';

const Blogs = () =>
{
    return (
        <main>
            <Navbar
                blogs={true}
            />

            <header className={styles.blogsHeader}>
                <div className='container'>
                    <h2>
                        <Blog />
                        بروز از مجله<strong>اسکای&zwnj;رو</strong>
                    </h2>
                    <div>
                        <div>
                            دسته بندی
                            <Arrow2 />
                        </div>
                        <div>
                            مرتب سازی بر اساس
                            <Arrow2 />
                        </div>
                    </div>
                </div>
            </header>

            <section className={styles.blogsMain}>
                <div className='container'>
                    <Link to='/blog/test'>
                        <span style={{ backgroundImage: `url(${Image3})` }} />
                        <h2>
                            کلوت شهداد کرمان؛ دست ساخته طبیعت
                        </h2>
                        <h3>
                            هتل درویشی، که با عنوان یکی از مجلل‌ترین هتل‌های ایران از آن یاد می‌شود، اقامتگاهی درخور برای زائران امام رضا (ع) فراهم آورده
                        </h3>
                        <footer>
                            <div>
                                <div>
                                    <User />
                                    احسان غلام پور
                                </div>
                                <div>
                                    <Comment />
                                    بدون دیدگاه
                                </div>
                            </div>
                            <div>
                                مشاهده ادامه
                                <i>
                                    <Arrow2 />
                                </i>
                            </div>
                        </footer>
                    </Link>
                    <Link to='/blog/test'>
                        <span style={{ backgroundImage: `url(${Image3})` }} />
                        <h2>
                            کلوت شهداد کرمان؛ دست ساخته طبیعت
                        </h2>
                        <h3>
                            هتل درویشی، که با عنوان یکی از مجلل‌ترین هتل‌های ایران از آن یاد می‌شود، اقامتگاهی درخور برای زائران امام رضا (ع) فراهم آورده
                        </h3>
                        <footer>
                            <div>
                                <div>
                                    <User />
                                    احسان غلام پور
                                </div>
                                <div>
                                    <Comment />
                                    بدون دیدگاه
                                </div>
                            </div>
                            <div>
                                مشاهده ادامه
                                <i>
                                    <Arrow2 />
                                </i>
                            </div>
                        </footer>
                    </Link>
                    <Link to='/blog/test'>
                        <span style={{ backgroundImage: `url(${Image3})` }} />
                        <h2>
                            کلوت شهداد کرمان؛ دست ساخته طبیعت
                        </h2>
                        <h3>
                            هتل درویشی، که با عنوان یکی از مجلل‌ترین هتل‌های ایران از آن یاد می‌شود، اقامتگاهی درخور برای زائران امام رضا (ع) فراهم آورده
                        </h3>
                        <footer>
                            <div>
                                <div>
                                    <User />
                                    احسان غلام پور
                                </div>
                                <div>
                                    <Comment />
                                    بدون دیدگاه
                                </div>
                            </div>
                            <div>
                                مشاهده ادامه
                                <i>
                                    <Arrow2 />
                                </i>
                            </div>
                        </footer>
                    </Link>
                    <Link to='/blog/test'>
                        <span style={{ backgroundImage: `url(${Image3})` }} />
                        <h2>
                            کلوت شهداد کرمان؛ دست ساخته طبیعت
                        </h2>
                        <h3>
                            هتل درویشی، که با عنوان یکی از مجلل‌ترین هتل‌های ایران از آن یاد می‌شود، اقامتگاهی درخور برای زائران امام رضا (ع) فراهم آورده
                        </h3>
                        <footer>
                            <div>
                                <div>
                                    <User />
                                    احسان غلام پور
                                </div>
                                <div>
                                    <Comment />
                                    بدون دیدگاه
                                </div>
                            </div>
                            <div>
                                مشاهده ادامه
                                <i>
                                    <Arrow2 />
                                </i>
                            </div>
                        </footer>
                    </Link>
                    <Link to='/blog/test'>
                        <span style={{ backgroundImage: `url(${Image3})` }} />
                        <h2>
                            کلوت شهداد کرمان؛ دست ساخته طبیعت
                        </h2>
                        <h3>
                            هتل درویشی، که با عنوان یکی از مجلل‌ترین هتل‌های ایران از آن یاد می‌شود، اقامتگاهی درخور برای زائران امام رضا (ع) فراهم آورده
                        </h3>
                        <footer>
                            <div>
                                <div>
                                    <User />
                                    احسان غلام پور
                                </div>
                                <div>
                                    <Comment />
                                    بدون دیدگاه
                                </div>
                            </div>
                            <div>
                                مشاهده ادامه
                                <i>
                                    <Arrow2 />
                                </i>
                            </div>
                        </footer>
                    </Link>
                    <Link to='/blog/test'>
                        <span style={{ backgroundImage: `url(${Image3})` }} />
                        <h2>
                            کلوت شهداد کرمان؛ دست ساخته طبیعت
                        </h2>
                        <h3>
                            هتل درویشی، که با عنوان یکی از مجلل‌ترین هتل‌های ایران از آن یاد می‌شود، اقامتگاهی درخور برای زائران امام رضا (ع) فراهم آورده
                        </h3>
                        <footer>
                            <div>
                                <div>
                                    <User />
                                    احسان غلام پور
                                </div>
                                <div>
                                    <Comment />
                                    بدون دیدگاه
                                </div>
                            </div>
                            <div>
                                مشاهده ادامه
                                <i>
                                    <Arrow2 />
                                </i>
                            </div>
                        </footer>
                    </Link>
                    <Link to='/blog/test'>
                        <span style={{ backgroundImage: `url(${Image3})` }} />
                        <h2>
                            کلوت شهداد کرمان؛ دست ساخته طبیعت
                        </h2>
                        <h3>
                            هتل درویشی، که با عنوان یکی از مجلل‌ترین هتل‌های ایران از آن یاد می‌شود، اقامتگاهی درخور برای زائران امام رضا (ع) فراهم آورده
                        </h3>
                        <footer>
                            <div>
                                <div>
                                    <User />
                                    احسان غلام پور
                                </div>
                                <div>
                                    <Comment />
                                    بدون دیدگاه
                                </div>
                            </div>
                            <div>
                                مشاهده ادامه
                                <i>
                                    <Arrow2 />
                                </i>
                            </div>
                        </footer>
                    </Link>
                    <Link to='/blog/test'>
                        <span style={{ backgroundImage: `url(${Image3})` }} />
                        <h2>
                            کلوت شهداد کرمان؛ دست ساخته طبیعت
                        </h2>
                        <h3>
                            هتل درویشی، که با عنوان یکی از مجلل‌ترین هتل‌های ایران از آن یاد می‌شود، اقامتگاهی درخور برای زائران امام رضا (ع) فراهم آورده
                        </h3>
                        <footer>
                            <div>
                                <div>
                                    <User />
                                    احسان غلام پور
                                </div>
                                <div>
                                    <Comment />
                                    بدون دیدگاه
                                </div>
                            </div>
                            <div>
                                مشاهده ادامه
                                <i>
                                    <Arrow2 />
                                </i>
                            </div>
                        </footer>
                    </Link>
                    <Link to='/blog/test'>
                        <span style={{ backgroundImage: `url(${Image3})` }} />
                        <h2>
                            کلوت شهداد کرمان؛ دست ساخته طبیعت
                        </h2>
                        <h3>
                            هتل درویشی، که با عنوان یکی از مجلل‌ترین هتل‌های ایران از آن یاد می‌شود، اقامتگاهی درخور برای زائران امام رضا (ع) فراهم آورده
                        </h3>
                        <footer>
                            <div>
                                <div>
                                    <User />
                                    احسان غلام پور
                                </div>
                                <div>
                                    <Comment />
                                    بدون دیدگاه
                                </div>
                            </div>
                            <div>
                                مشاهده ادامه
                                <i>
                                    <Arrow2 />
                                </i>
                            </div>
                        </footer>
                    </Link>
                </div>
            </section>

            <section className={styles.blogsPagination}>
                <button data-type='text'>
                    <Arrow2/>
                    قبلی
                </button>
                <button data-type='number'>
                    1
                </button>
                <button data-type='dots'>
                    ...
                </button>
                <button data-type='number'>
                    3
                </button>
                <button data-type='number'>
                    4
                </button>
                <button data-type='number' data-activate={true}>
                    5
                </button>
                <button data-type='number'>
                    6
                </button>
                <button data-type='number'>
                    7
                </button>
                <button data-type='dots'>
                    ...
                </button>
                <button data-type='number'>
                    53
                </button>
                <button data-type='text'>
                    بعدی
                    <Arrow2/>
                </button>
            </section>

            <section className={stylesHome.homeApplication}>
                <div className="container">
                    <div className={stylesHome.homeApplicationBox}>
                        <AppPhone />
                        <div>
                            <h2 className='headingPrimary'>دریافت<span> اپلیکیشن اسکای&zwnj;رو </span></h2>
                            <ul>
                                <li>
                                    <Check />
                                    تقویم ارزان‌ترین بلیط
                                </li>
                                <li>
                                    <Check />
                                    مسیرهای جایگزین
                                </li>
                                <li>
                                    <Check />
                                    ارزیابی قیمت
                                </li>
                                <li>
                                    <Check />
                                    مشاهده صورت‌حساب قبل از پرداخت
                                </li>
                            </ul>
                            <Link to='/'>
                                <Download />
                                راهنمای دانلود
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Blogs;
