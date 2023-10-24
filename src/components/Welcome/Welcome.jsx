import React from 'react';
import {
    WELCOME_TEXT_ONE,
    WELCOME_TEXT_TWO,
    WELCOME_TEXT_THREE
} from '../../utils/constants';
import './Welcome.css';

function Welcome() {
    return (
        <section className='welcome' id='Welcome'>
            <ul className='welcome__ul'>
                <li className='welcome__li'>
                    {WELCOME_TEXT_ONE}
                </li>
                <li className='welcome__li'>
                    {WELCOME_TEXT_TWO}
                </li>
                <li className='welcome__li'>
                    {WELCOME_TEXT_THREE}
                </li>
            </ul>
        </section>
    );
};

export default Welcome;