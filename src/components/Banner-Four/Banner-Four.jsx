import React from 'react';
import { BANNER_TEXT_FOUR } from '../../utils/constants';
import '../Banner-First/Banner.css'

function BannerFour() {
    return (
        <section id='Section-Work' className='banner'>
            <h2 className='banner__title'>
            {BANNER_TEXT_FOUR}
            </h2>
        </section>
    );
};

export default BannerFour;