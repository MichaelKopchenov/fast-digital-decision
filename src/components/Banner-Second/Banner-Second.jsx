import React from 'react';
import { BANNER_TEXT_TWO } from '../../utils/constants';
import '../Banner-First/Banner.css'

function BannerSecond() {
    return (
        <section id='Banner-Two' className='banner'>
            <h2 className='banner__title'>
            {BANNER_TEXT_TWO}
            </h2>
        </section>
    );
};

export default BannerSecond;