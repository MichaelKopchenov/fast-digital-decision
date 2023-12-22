/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useState } from 'react';
import Popup from '../Popup/Popup';
import {
    CONTACTS,
    TEAM,
    WORK,
} from '../../utils/constants';
import './Header.css';

export default function Header() {
    function popupToggle(){
        const popup = document.getElementById('popup');
        popup.classList.toggle('active');
    }
    return (
        <header className="header" id='Header'>
            <ul className='header__ul'>
                <li className='header__li'>
                    <a href="#Section-Team" className='header__li-link'>
                        {TEAM}
                    </a>
                </li>
                <li className='header__li'>
                    <a href="#Section-Work" className='header__li-link'>
                        {WORK}
                    </a>
                </li>
                <li className='header__li'>
                    <button 
                        id='btn' 
                        className='header__li-link' 
                        onClick={popupToggle}
                    >
                        {CONTACTS}
                    </button>
                </li>
            </ul>
            <Popup />
        </header>
    );
};
