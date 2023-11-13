import React from 'react';
import {
    ABOUT_TEXT_TITLE,
    ABOUT_TEXT_ONE,
    ABOUT_TEXT_TWO,
    ABOUT_TEXT_THREE,
    ABOUT_TEXT_FOUR,
    ABOUT_TEXT_FIVE,
    ABOUT_TEXT_SIX,
    ABOUT_TEXT_SEVEN,
    ABOUT_TEXT_EIGHT,
    ABOUT_TEXT_NINE,
    ABOUT_TEXT_TEN
} from '../../utils/constants';
import './About.css';

function About() {
    return (
        <section className='about' id='About'>
            <div className='about__container'>
                <h2 className='about__container-title'>
                    {ABOUT_TEXT_TITLE}
                </h2>
                <div className='about__container-caption'>
                    <div className='about__container-grid'>
                        <h3 className='about__container-grid-ul'>
                            {ABOUT_TEXT_ONE}
                        </h3>
                        <p className='about__container-grid-ul-li'>
                            {ABOUT_TEXT_TWO}
                        </p>
                    </div>
                    <div className='about__container-grid'>
                        <h3 className='about__container-grid-ul'>
                            {ABOUT_TEXT_THREE}
                        </h3>
                        <p className='about__container-grid-ul-li'>
                            {ABOUT_TEXT_FOUR}
                        </p>
                    </div>
                    <div className='about__container-grid'>
                        <h3 className='about__container-grid-ul'>
                            {ABOUT_TEXT_FIVE}
                        </h3>
                        <p className='about__container-grid-ul-li'>
                            {ABOUT_TEXT_SIX}
                        </p>
                    </div>
                    <div className='about__container-grid'>
                        <h3 className='about__container-grid-ul'>
                            {ABOUT_TEXT_SEVEN}
                        </h3>
                        <p className='about__container-grid-ul-li'>
                            {ABOUT_TEXT_EIGHT}
                        </p>
                    </div>
                    <div className='about__container-grid'>
                        <h3 className='about__container-grid-ul'>
                            {ABOUT_TEXT_NINE}
                        </h3>
                        <p className='about__container-grid-ul-li'>
                            {ABOUT_TEXT_TEN}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;