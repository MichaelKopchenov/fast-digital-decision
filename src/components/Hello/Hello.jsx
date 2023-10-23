import React from 'react';
import './Hello.css';

function Hello() {
    return (
        <section className='hello'>
            <h1 className='hello__title'>
                Fast Digital
            </h1>
            <span className='hello__title hello__title-span'>Decisions</span>
            <p className='hello__subtitle'>
                Быстрые цифровые решения для вашего бизнеса
            </p>
        </section>
    );
}

export default Hello;