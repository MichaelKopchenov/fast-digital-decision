import React from 'react';
import './Welcome.css'

function Welcome() {
    return (
        <section className='welcome'>
            <ul className='welcome__ul'>
                <li className='welcome__li'>
                Добро пожаловать в мир профессиональных IT-решений!
                </li>
                <li className='welcome__li'>
                Мы — команда экспертов, готовых преобразить ваш онлайн-опыт.
                </li>
                <li className='welcome__li'>
                Наши уникальные подходы и передовые технологии <br /> обеспечат ваш бизнес надежным фундаментом в цифровом пространстве
                </li>
            </ul>
        </section>
    );
}

export default Welcome;