import React from 'react';
import {
    HELLO_TEXT_TITLE,
    HELLO_TEXT_SPAN,
    HELLO_TEXT_SUBTITLE
} from '../../utils/constants';
import './Hello.css';

function Hello() {
    return (
        <section className='hello' id='Hello'>
            <h1 className='hello__title'>
                {HELLO_TEXT_TITLE}
            </h1>
            <span className='hello__title hello__title-span'>
                {HELLO_TEXT_SPAN}
            </span>
            <p className='hello__subtitle'>
                {HELLO_TEXT_SUBTITLE}
            </p>
        </section>
    );
};

export default Hello;