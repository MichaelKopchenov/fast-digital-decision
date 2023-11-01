/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
    CONTACTS,
    TEAM,
    WORK
} from '../../utils/constants';
import './Header.css';

function Header() {
    return (
        <header className="header" id='Header'>
            <ul className='header__ul'>
                <li className='header__li'>
                    <a href="#Team" className='header__li-link'>
                        {TEAM}
                    </a>
                </li>
                <li className='header__li'>
                    <a href="#" className='header__li-link'>
                        {WORK}
                    </a>
                </li>
                <li className='header__li'>
                    <a href="#Contacts" className='header__li-link'>
                        {CONTACTS}
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;

