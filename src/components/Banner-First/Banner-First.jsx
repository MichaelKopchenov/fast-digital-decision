import React from 'react';
import { BANNER_TEXT_ONE, BANNER_TEXT } from '../../utils/constants';
import './Banner.css';

function BannerFirst() {
    return (
        <section className='banner'>
            <h2 className='banner__title'>
            {BANNER_TEXT_ONE}
            </h2>
            <h2 className='banner__title'>
            {BANNER_TEXT}
            </h2>
        </section>
    );
};

export default BannerFirst;