import React from 'react';
import {
    ABOUT_TEXT_ONE,
    ABOUT_TEXT_TWO,
    ABOUT_TEXT_THREE,
    ABOUT_TEXT_FOUR,
    ABOUT_TEXT_FIVE,
    ABOUT_TEXT_SIX,
    ABOUT_TEXT_SEVEN,
    ABOUT_TEXT_EIGHT,
    ABOUT_TEXT_NINE,
    ABOUT_TEXT_TEN,
    ABOUT_TEXT_ELEWEN,
    ABOUT_TEXT_TWELVE
} from '../../utils/constants';
import './About.css';

function About() {
    return (
        <section className='about' id='About'>
            <div className='about__container'>
                <div className='about__container-grid'>
                    <ul className='about__container-grid-ul'>
                        <li className='about__container-grid-ul-li'>
                            {ABOUT_TEXT_ONE}
                        </li>
                        <li className='about__container-grid-ul-li'>
                            {ABOUT_TEXT_TWO}
                        </li>
                        <li className='about__container-grid-ul-li'>
                            {ABOUT_TEXT_THREE}
                        </li>
                        <li className='about__container-grid-ul-li'>
                            {ABOUT_TEXT_FOUR}
                        </li>
                    </ul>
                </div>
                <div className='about__container-grid'>
                    <ul className='about__container-grid-ul'>
                        <li className='about__container-grid-ul-li'>
                            {ABOUT_TEXT_FIVE}
                        </li>
                        <li className='about__container-grid-ul-li'>
                            {ABOUT_TEXT_SIX}
                        </li>
                        <li className='about__container-grid-ul-li'>
                            {ABOUT_TEXT_SEVEN}
                        </li>
                        <li className='about__container-grid-ul-li'>
                            {ABOUT_TEXT_EIGHT}
                        </li>
                    </ul>
                </div>
                <div className='about__container-grid'>
                    <ul className='about__container-grid-ul'>
                        <li className='about__container-grid-ul-li'>
                            {ABOUT_TEXT_NINE}
                        </li>
                        <li className='about__container-grid-ul-li'>
                            {ABOUT_TEXT_TEN}
                        </li>
                        <li className='about__container-grid-ul-li'>
                            {ABOUT_TEXT_ELEWEN}
                        </li>
                        <li className='about__container-grid-ul-li'>
                            {ABOUT_TEXT_TWELVE}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;