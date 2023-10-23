import React from 'react';
import './Header.css'

function Header() {
    return (
        <header className="header">
            <ul className='header__ul'>
                <li className='header__li'>
                    <a href="#Team" className='header__li-link'>
                        Команда
                    </a>
                </li>
                <li className='header__li'>
                    Наши работы
                </li>
                <li className='header__li'>
                    <a href="#Contacts" className='header__li-link'>
                        Контакты
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default Header;

