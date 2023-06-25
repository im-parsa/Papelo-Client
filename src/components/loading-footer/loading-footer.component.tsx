import React from 'react';

import styles from './loading-footer.module.scss';

import { ReactComponent as Repeat } from '../../assets/icons/repeat-2-line.svg';

const LoadingFooter = (props: any) =>
{
    return (
        <span className={styles.loadingFooter}>
            <button>
                <Repeat />
                در حال بارگذاری
            </button>
        </span>
    );
};

export default LoadingFooter;
