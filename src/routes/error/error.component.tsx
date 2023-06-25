import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Error1 } from '../../assets/images/error-1.svg';
import { ReactComponent as Book } from '../../assets/icons/book-line.svg';
import { ReactComponent as Search } from '../../assets/icons/search-line.svg';
import { ReactComponent as User } from '../../assets/icons/user-3-line.svg';
import { ReactComponent as Bug } from '../../assets/icons/bug-line.svg';
import { ReactComponent as Home } from '../../assets/icons/home-line.svg';

import styles from './error.module.scss';

const Error = () =>
{
    return (
        <main>
            <section className={styles.error}>
                <div className="container">
                    <div className={styles.errorContent}>
                        <Link to='/blogs'>
                            <Book />
                            <span>مشاهده یک مقاله بصورت تصادفی</span>
                        </Link>
                        <Error1 className={styles.errorContentBack} />
                        <p>
                            <span>جستجو در میان هزاران مطالب سایت</span>
                            <Search />
                        </p>
                    </div>

                    <p className={styles.errorParagraph}>صفحه مورد نظر در دسترس نمی‌باشد</p>
                    <p className={styles.errorParagraph}>متاسفانه خطایی هنگام انتقال درخواست شما رخ داده است</p>

                    <div className={styles.errorCircle}>
                        <Link to='/' className={styles.errorCircleBox}>
                            <span>
                                <Home />
                            </span>
                            <p>صفحه اصلی</p>
                        </Link>
                        <Link to='/' className={styles.errorCircleBox}>
                            <span>
                                <User />
                            </span>
                            <p>حساب کاربری</p>
                        </Link>
                        <Link to='/' className={styles.errorCircleBox}>
                            <span>
                                <Bug />
                            </span>
                            <p>گزارش خطا</p>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Error;
