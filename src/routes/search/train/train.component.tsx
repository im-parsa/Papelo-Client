import React from 'react';

import styles from './train.module.scss';
import Navbar from '../../../components/layouts/navbar/navbar.component';
import Footer from '../../../components/layouts/footer/footer.component';

const SearchTrain = () =>
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

export default SearchTrain;
