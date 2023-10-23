import React from 'react';
import './About.css'

function About() {
    return (
        <section className='about' id='About'>
            <div className='about__container'>
                <div className='about__container-grid'>
                    <ul className='about__container-grid-ul'>
                        <li className='about__container-grid-ul-li'>
                            1. Веб-разработка высшего класса:
                        </li>
                        <li className='about__container-grid-ul-li'>
                            Стильные сайты, выделяющие ваш бренд среди других.
                        </li>
                        <li className='about__container-grid-ul-li'>
                            Инновации для отличной производительности.
                        </li>
                        <li className='about__container-grid-ul-li'>
                            Гибкие и масштабируемые решения.
                        </li>
                    </ul>
                </div>
                <div className='about__container-grid'>
                    <ul className='about__container-grid-ul'>
                        <li className='about__container-grid-ul-li'>
                            2. Оптимизация производительности:
                        </li>
                        <li className='about__container-grid-ul-li'>
                            Максимальная скорость загрузки и улучшенная работа.
                        </li>
                        <li className='about__container-grid-ul-li'>
                            Продвинутая безопасность и конфиденциальность.
                        </li>
                        <li className='about__container-grid-ul-li'>
                            Постоянный мониторинг и обновления.
                        </li>
                    </ul>
                </div>
                <div className='about__container-grid'>
                    <ul className='about__container-grid-ul'>
                        <li className='about__container-grid-ul-li'>
                            3. Индивидуальные решения под ключ:
                        </li>
                        <li className='about__container-grid-ul-li'>
                            Тщательный анализ для уникальных решений.
                        </li>
                        <li className='about__container-grid-ul-li'>
                            Персонализированный дизайн и функциональность.
                        </li>
                        <li className='about__container-grid-ul-li'>
                            Поддержка и доработки по мере развития.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;