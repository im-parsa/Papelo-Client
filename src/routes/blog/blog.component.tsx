import React, { useState } from 'react';

import styles from './blog.module.scss';

import Navbar from '../../components/layouts/navbar/navbar.component';
import Footer from '../../components/layouts/footer/footer.component';

import BlogImage from '../../assets/images/image-3.svg';
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Minus } from "../../assets/icons/minus.svg";
import { ReactComponent as Navigate } from "../../assets/icons/navigation-line.svg";
import { ReactComponent as Save } from "../../assets/icons/save-line.svg";
import { ReactComponent as Print } from "../../assets/icons/printer-line.svg";
import {Link} from "react-router-dom";
import Image3 from "../../assets/images/image-3.svg";
import {ReactComponent as User} from "../../assets/icons/user.svg";
import {ReactComponent as Comment} from "../../assets/icons/chat-1-line.svg";
import {ReactComponent as Arrow2} from "../../assets/icons/arrow-2.svg";

const Blog = () =>
{
    const [faq, setFaq] = useState(0);
    const [title, setTitle] = useState(0);

    return (
        <main>
            <Navbar
                blog='فشم تهران؛ هر نوع تفریحی بخواهید اینجا پیدا می‌شود'
                blogImage={BlogImage}
            />

            <section className={styles.blogMain}>
                <div className='container'>
                    <p>
                        برای تهران‌نشین‌ها، فشم صرفا یک روستای عادی نیست؛ فشم تهران برای ساکنین پایتخت یک راه قرار است، فرار از آلودگی و شلوغی شهر به دامان سرسبز و آرامش‌بخش طبیعت. کافی‌ست یکی از روزهای تعطیل بار مختصری بسته و راهی این روستا شوید. حتی قبل از اینکه جایی اتراق کنید، زیبایی‌های مسیر منظور مرا برایتان اثبات می‌کند
                    </p>

                    <div className={styles.blogMainTitle}>
                        <ul>
                            <li data-activate={title === 0 ? 'true' : 'false'} onClick={() => setTitle(title === 0 ? -1 : 0)}>
                                <div>
                                    <Plus />
                                    <Minus />
                                    <span>سرفصل های مقاله</span>
                                </div>
                                <ul>
                                    <li>
                                        فشم چطور جایی است
                                    </li>
                                    <li>
                                        شغل اصلی مردم شهر زیبای فشم
                                    </li>
                                    <li data-activate='true'>
                                        شکم گردی در رستوران های فشم
                                    </li>
                                    <li>
                                        بهترین زمان سفر و تفریح
                                    </li>
                                    <li>
                                        شکم گردی در رستوران های فشم
                                    </li>
                                    <li>
                                        بهترین زمان سفر و تفریح
                                    </li>
                                </ul>
                            </li>
                            <li data-activate={title === 1 ? 'true' : 'false'} onClick={() => setTitle(title === 1 ? -1 : 1)}>
                                <div>
                                    <Plus />
                                    <Minus />
                                    <span>سرفصل های مقاله</span>
                                </div>
                                <ul>
                                    <li>
                                        فشم چطور جایی است
                                    </li>
                                    <li>
                                        شغل اصلی مردم شهر زیبای فشم
                                    </li>
                                    <li data-activate='true'>
                                        شکم گردی در رستوران های فشم
                                    </li>
                                    <li>
                                        بهترین زمان سفر و تفریح
                                    </li>
                                    <li>
                                        شکم گردی در رستوران های فشم
                                    </li>
                                    <li>
                                        بهترین زمان سفر و تفریح
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <h2>
                        فشم چطور جایی است
                    </h2>
                    <p>
                        برای تهران‌نشین‌ها، فشم صرفا یک روستای عادی نیست؛ فشم تهران برای ساکنین پایتخت یک راه قرار است، فرار از آلودگی و شلوغی شهر به دامان سرسبز و آرامش‌بخش طبیعت. تست لینک بلیط یاب کافی‌ست یکی از روزهای تعطیل بار مختصری بسته و راهی این روستا شوید. حتی قبل از اینکه جایی اتراق کنید، زیبایی‌های مسیر منظور مرا برایتان اثبات می‌کند . برای تهران‌نشین‌ها، فشم صرفا یک روستای عادی نیست؛ فشم تهران برای ساکنین پایتخت یک راه قرار است، فرار از آلودگی و شلوغی شهر به دامان سرسبز و آرامش‌بخش طبیعت. کافی‌ست یکی از روزهای تعطیل بار مختصری بسته و راهی این روستا شوید. حتی قبل از اینکه جایی اتراق کنید، زیبایی‌های مسیر منظور مرا برایتان اثبات می‌کند
                    </p>

                    <div className={styles.blogMainFaq}>
                        <ul>
                            <li data-activate={faq === 0 ? 'true' : 'false'} onClick={() => setFaq(faq === 0 ? -1 : 0)}>
                                <div>
                                    <Plus />
                                    <Minus />
                                    <span>فشم کجاست؟</span>
                                </div>
                                <p>
                                    تهران- اتوبان باقری- جاده لشگرک- بلوار امام خمینی- فشم
                                </p>
                            </li>
                            <li data-activate={faq === 1 ? 'true' : 'false'} onClick={() => setFaq(faq === 1 ? -1 : 1)}>
                                <div>
                                    <Plus />
                                    <Minus />
                                    <span>فشم کجاست؟</span>
                                </div>
                                <p>
                                    تهران- اتوبان باقری- جاده لشگرک- بلوار امام خمینی- فشم
                                </p>
                            </li>
                            <li data-activate={faq === 2 ? 'true' : 'false'} onClick={() => setFaq(faq === 2 ? -1 : 2)}>
                                <div>
                                    <Plus />
                                    <Minus />
                                    <span>فاصله تهران تا فشم چقدر است؟</span>
                                </div>
                                <p>
                                    تهران- اتوبان باقری- جاده لشگرک- بلوار امام خمینی- فشم
                                </p>
                            </li>
                            <li data-activate={faq === 3 ? 'true' : 'false'} onClick={() => setFaq(faq === 3 ? -1 : 3)}>
                                <div>
                                    <Plus />
                                    <Minus />
                                    <span>جاهای دیدنی فشم کدام اند؟</span>
                                </div>
                                <p>
                                    تهران- اتوبان باقری- جاده لشگرک- بلوار امام خمینی- فشم
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h2>
                        فشم چطور جایی است
                    </h2>
                    <p>
                        برای تهران‌نشین‌ها، فشم صرفا یک روستای عادی نیست؛ فشم تهران برای ساکنین پایتخت یک راه قرار است، فرار از آلودگی و شلوغی شهر به دامان سرسبز و آرامش‌بخش طبیعت. تست لینک بلیط یاب کافی‌ست یکی از روزهای تعطیل بار مختصری بسته و راهی این روستا شوید. حتی قبل از اینکه جایی اتراق کنید، زیبایی‌های مسیر منظور مرا برایتان اثبات می‌کند . برای تهران‌نشین‌ها، فشم صرفا یک روستای عادی نیست؛ فشم تهران برای ساکنین پایتخت یک راه قرار است، فرار از آلودگی و شلوغی شهر به دامان سرسبز و آرامش‌بخش طبیعت. کافی‌ست یکی از روزهای تعطیل بار مختصری بسته و راهی این روستا شوید. حتی قبل از اینکه جایی اتراق کنید، زیبایی‌های مسیر منظور مرا برایتان اثبات می‌کند
                    </p>
                    <p>
                        برای تهران‌نشین‌ها، فشم صرفا یک روستای عادی نیست؛ فشم تهران برای ساکنین پایتخت یک راه قرار است، فرار از آلودگی و شلوغی شهر به دامان سرسبز و آرامش‌بخش طبیعت. تست لینک بلیط یاب کافی‌ست یکی از روزهای تعطیل بار مختصری بسته و راهی این روستا شوید. حتی قبل از اینکه جایی اتراق کنید، زیبایی‌های مسیر منظور مرا برایتان اثبات می‌کند . برای تهران‌نشین‌ها، فشم صرفا یک روستای عادی نیست؛ فشم تهران برای ساکنین پایتخت یک راه قرار است، فرار از آلودگی و شلوغی شهر به دامان سرسبز و آرامش‌بخش طبیعت. کافی‌ست یکی از روزهای تعطیل بار مختصری بسته و راهی این روستا شوید. حتی قبل از اینکه جایی اتراق کنید، زیبایی‌های مسیر منظور مرا برایتان اثبات می‌کند
                    </p>
                </div>
            </section>

            <section className={styles.blogMainFooter}>
                <div className='container'>
                    <span>
                        اخبار گردشگری
                    </span>
                    <div>
                        <span>
                            <Save />
                            ذخیره
                        </span>
                        <span>
                            <Print />
                            چاپ
                        </span>
                        <span>
                            <Navigate />
                            اشتراک گذاری
                        </span>
                    </div>
                </div>
            </section>

            <section className={styles.blogMainAuthor}>
                <div className='container'>
                    <span>
                        <img src={BlogImage} alt='profile'/>
                    </span>
                    <div>
                        <h3>
                            احسان غلام پور - نویسنده
                        </h3>
                        <p>
                            همیشه فکر می‌کردم کلمه‌ها از یه جایی به بعد تموم می‌شن تا اینکه درک من نسبت به این موضوع تغییر کرد! فهمیدم می‌شه با دنیای معجزه‌گر کلمات زندگی کرد، بدون اینکه از نوشتن خسته شد یا به بن‌بست رسید
                        </p>
                    </div>
                </div>
            </section>

            <header className={styles.blogsHeader}>
                <div className='container'>
                    <h3>
                        ممکن است به این مطالب نیز علاقمند باشید
                    </h3>
                    <Link to='/blogs'>
                        بیشتر
                        <Arrow2 />
                    </Link>
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
                </div>
            </section>

            <section className={styles.blogMainComments}>
                <div className='container'>
                    <div className={styles.blogMainCommentsForm}>
                        <h3>
                            <Comment />
                            ارسال دیدگاه
                        </h3>
                        <form>
                            <textarea placeholder='متن دیدگاه خود را وارد نمایید' />
                            <footer>
                                <div>
                                    <input type='text' placeholder='نام' />
                                </div>
                                <div>
                                    <input type='text' placeholder='آدرس ایمیل' />
                                </div>
                                <div>
                                    <input type='text' placeholder='شماره تماس' />
                                </div>
                            </footer>
                        </form>
                        <button>
                            ارسال
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Blog;
