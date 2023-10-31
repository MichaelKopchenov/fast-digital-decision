import React from 'react';
import { BANNER_TEXT_THREE } from '../../utils/constants';
import '../Banner-First/Banner.css'

function BannerThird() {
    return (
        <section className='banner'>
            <h2 className='banner__title'>
            {BANNER_TEXT_THREE}
            </h2>
        </section>
    );
};

export default BannerThird;