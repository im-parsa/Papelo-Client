import React  from 'react';
import { Link } from 'react-router-dom';

import styles from './blog-box.module.scss';

import Image3 from "../../assets/images/image-3.svg";
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Arrow2 } from '../../assets/icons/arrow-2.svg';
import { ReactComponent as Comment } from '../../assets/icons/chat-1-line.svg';

const BlogBox = (props: any) =>
{
    return (
        <Link to='/blog/test' className={styles.blogBox}>
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
    );
};

export default BlogBox;
