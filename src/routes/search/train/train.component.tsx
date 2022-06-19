import React from 'react';

import Navbar from '../../../components/layouts/navbar/navbar.component';
import Footer from '../../../components/layouts/footer/footer.component';

import styles from './train.module.scss';

const SearchTrain = () =>
{
    return (
        <main>
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
        </main>
    );
};

export default SearchTrain;
