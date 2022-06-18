import React from 'react';

import { ReactComponent as Box4 } from '../../assets/icons/box-4.svg';
import Texture from '../../assets/images/texture.svg';

import styles from './train.module.scss';
import Navbar from '../../../components/layouts/navbar/navbar.component';
import Footer from '../../../components/layouts/footer/footer.component';

const Home = () =>
{
    return (
        <>
            <Navbar />
            <section className={styles.trainHeader}>
                <div className='container'>
                    <div className={styles.trainHeaderBox}>
                        <i/>
                        <i/>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;
