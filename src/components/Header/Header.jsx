/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import LogoT from '../../images/logot.png';
import CloseIcon from '../../images/close.png'
import {
    CONTACTS,
    TEAM,
    WORK,
    URL_TELEGRAM,
    TELEGRAM,
    EMAIL,
    EMAIL_ADDRESS,
    TELEFHONE,
    NUMBER
} from '../../utils/constants';
import './Header.css';

function Header() {
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
            <div id="popup">
                <div className="header__popup">
                    <h2 className='header__popup_title'>
                        {CONTACTS}
                    </h2>
                    <h3 className='header__popup_subtitle'>
                    {TELEFHONE} <span className='header__subtitle-number'>
                                {NUMBER}
                            </span>
                    </h3>
                    <h3 className='header__popup-email'>
                    {EMAIL} <a className='header__popup-email-address' href='mailto: fdd-info@yandex.ru'>
                                {EMAIL_ADDRESS}
                            </a>
                    </h3>
                    <a 
                        href={URL_TELEGRAM} 
                        target='_blank' 
                        rel="noreferrer"
                        className='header__popup_link'
                    >
                        <img 
                            src={LogoT} 
                            alt="Телеграм" 
                            className='header__popup_ico'
                        />
                        {TELEGRAM}
                    </a>
                </div>
                <a className="header__popup_close" onClick={popupToggle}>
                    <img 
                        src={CloseIcon} 
                        alt='Закрыть' 
                        className='header__popup_close-icon'
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;

