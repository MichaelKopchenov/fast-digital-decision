import { useEffect, useRef } from 'react';
import {
    HELLO_TEXT_TITLE,
    HELLO_TEXT_SPAN,
    HELLO_TEXT_SUBTITLE
} from '../../utils/constants';
import './Hello.css';

export default function Hello() {
    const titleRef = useRef();
    const spanRef = useRef();

    useEffect(() => {
        titleRef.current.style = 'border-right: none';
        spanRef.current.style = 'display: block';
    }, []);

    return (
        <section className='hello' id='Hello'>
            <h1
                ref={titleRef}
                id='title'
                className='hello__text hello__title'
            >
                {HELLO_TEXT_TITLE}
            </h1>
            <span
                ref={spanRef}
                id='span'
                className='hello__text hello__span'
            >
                {HELLO_TEXT_SPAN}
            </span>
            <p className='hello__subtitle'>
                {HELLO_TEXT_SUBTITLE}
            </p>
        </section>
    );
};
