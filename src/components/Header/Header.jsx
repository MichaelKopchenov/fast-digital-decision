import React from 'react';
import './Header.css'

function Header() {
    return (
        <header className="header">
            <ul className='header__ul'>
                <li className='header__li'>
                    Команда
                </li>
                <li className='header__li'>
                    Наши работы
                </li>
                <li className='header__li'>
                    Контакты
                </li>
            </ul>
        </header>
    );
}

export default Header;

