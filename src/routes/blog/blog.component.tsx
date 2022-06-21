import React from 'react';
import { Link } from 'react-router-dom';

import styles from './blog.module.scss';

import Navbar from '../../components/layouts/navbar/navbar.component';
import Footer from '../../components/layouts/footer/footer.component';

import BlogImage from '../../assets/images/image-3.svg';
import { ReactComponent as Arrow2 } from '../../assets/icons/arrow-2.svg';

const Blog = () =>
{
    return (
        <main>
            <Navbar
                blog='فشم تهران؛ هر نوع تفریحی بخواهید اینجا پیدا می‌شود'
                blogImage={BlogImage}
            />
            <Footer />
        </main>
    );
};

export default Blog;
