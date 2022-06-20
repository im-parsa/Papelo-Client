import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import styles from './about-us.module.scss';

import Navbar from '../../components/layouts/navbar/navbar.component';
import Footer from '../../components/layouts/footer/footer.component';

import Header from '../../assets/images/team.svg';
import { ReactComponent as Support } from '../../assets/icons/customer-service-2-fill.svg';
import { ReactComponent as Ticket } from '../../assets/icons/coupon-3-fill.svg';
import { ReactComponent as Dollar } from '../../assets/icons/money-dollar-circle-line.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as Minus } from '../../assets/icons/minus.svg';

const AboutUs = () =>
{
    const [faq, setFaq] = useState(0);

    return (
        <main>
            <Navbar
                header='درباره ما'
                title='درباره ما'
                description='ما پیمان بستیم تا تجربه سفر را برایتان دلنشین و زیبا رقم بزنیم'
                headerImage={Header}
            />
            <section className={styles.aboutUsFeatures}>
                <div className='container border no-padding'>
                    <div>
                        <i>
                            <Dollar />
                        </i>
                        <h2>
                            قیمت های رقابتی
                        </h2>
                        <h3>
                            ما در علی‌بابا برای انجام وظایفمان منتظر کلمه‌ها هستیم، نه دستورالعمل و نامه‌ی رسمی؛ درست مثل یک خانواده
                        </h3>
                    </div>
                    <div>
                        <i>
                            <Support />
                        </i>
                        <h2>
                            پشتیبانی 24 ساعته
                        </h2>
                        <h3>
                            ما در علی‌بابا برای انجام وظایفمان منتظر کلمه‌ها هستیم، نه دستورالعمل و نامه‌ی رسمی؛ درست مثل یک خانواده
                        </h3>
                    </div>
                    <div>
                        <i>
                            <Ticket />
                        </i>
                        <h2>
                            همکاری با بیش از 20 شرکت
                        </h2>
                        <h3>
                            ما در علی‌بابا برای انجام وظایفمان منتظر کلمه‌ها هستیم، نه دستورالعمل و نامه‌ی رسمی؛ درست مثل یک خانواده
                        </h3>
                    </div>
                </div>
            </section>
            <section className={styles.aboutUsContent}>
                <div className='container'>
                    <h3>
                        مِستر بلیط کیست؟
                    </h3>
                    <h4>
                        مِستر بلیط در بهمن ماه سال 1394 شروع به کار کرد و در ابتدا تنها وب سایتی برای رزرو آنلاین بلیط هواپیما ارزان قیمت بود. پس از چند ماه فعالیت و علاقه مندی و درخواست مشتریان، خدمات بلیط قطار و اتوبوس نیز برای اولین بار در ایران اضافه گردید. در مِستر بلیط علاوه بر جستجوی کاملترین پروازهای داخلی می توانید ارزانترین قیمت ها را نیز پیدا کنید! خدمات رزرو آنلاین قطار و اتوبوس هر روز کامل تر می شود تا شما مجموعه کاملی از رزرو آنلاین بلیط داخلی را در مِستر بلیط داشته باشید. ما به تجربه شما از خرید اینترنتی اهمیت می دهیم و تلاش ما برای داشتن خدماتی ساده، سریع و ارزان است
                    </h4>
                </div>
            </section>
            <section className={styles.aboutUsFaq}>
                <div className='container border'>
                    <h3>
                        پرسش های متداول شما
                    </h3>
                    <ul>
                        <li data-activate={faq === 0 ? 'true' : 'false'} onClick={() => setFaq(faq === 0 ? -1 : 0)}>
                            <div>
                                <Plus />
                                <Minus />
                                <span>چند روز قبل از پرواز، بلیط هواپیما را بخریم؟</span>
                            </div>
                            <p>
                                خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید
                            </p>
                        </li>
                        <li data-activate={faq === 1 ? 'true' : 'false'} onClick={() => setFaq(faq === 1 ? -1 : 1)}>
                            <div>
                                <Plus />
                                <Minus />
                                <span>در هر پرواز، میزان بار مجاز چقدر است؟</span>
                            </div>
                            <p>
                                خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید
                            </p>
                        </li>
                        <li data-activate={faq === 2 ? 'true' : 'false'} onClick={() => setFaq(faq === 2 ? -1 : 2)}>
                            <div>
                                <Plus />
                                <Minus />
                                <span>نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟</span>
                            </div>
                            <p>
                                خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید
                            </p>
                        </li>
                        <li data-activate={faq === 3 ? 'true' : 'false'} onClick={() => setFaq(faq === 3 ? -1 : 3)}>
                            <div>
                                <Plus />
                                <Minus />
                                <span>رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟</span>
                            </div>
                            <p>
                                خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید
                            </p>
                        </li>
                        <li data-activate={faq === 4 ? 'true' : 'false'} onClick={() => setFaq(faq === 4 ? -1 : 4)}>
                            <div>
                                <Plus />
                                <Minus />
                                <span>آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟</span>
                            </div>
                            <p>
                                خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید
                            </p>
                        </li>
                        <li data-activate={faq === 5 ? 'true' : 'false'} onClick={() => setFaq(faq === 5 ? -1 : 5)}>
                            <div>
                                <Plus />
                                <Minus />
                                <span>آیا پس از خرید بلیط هواپیما، امکان تغییر نام یا نام خانوادگی وجود دارد؟</span>
                            </div>
                            <p>
                                خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={styles.aboutUsFooter}>
                <div className='container no-padding'>
                    <h3>
                        برای کسانی که سوال دارند
                    </h3>
                    <div>
                        <Link to='/'>
                            تماس با پشتیبانی
                        </Link>
                        <Link to='/'>
                            استخدام در بلیط یاب
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default AboutUs;
