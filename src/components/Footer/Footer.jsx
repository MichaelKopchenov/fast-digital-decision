import React from 'react';
import LogoVk from '../../images/logovk.png';
import LogoT from '../../images/logot.jpg';
import LogoTel from '../../images/logotel.png';
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <ul className='footer__ul'>
                <li className='footer__li'>
                    <img src={LogoVk} alt="Вкнотакте"/><a href="https://vk.com/" target='_blank' rel="noreferrer">Вкнонтакте</a>
                </li>
                <li className='footer__li'>
                    <img src={LogoT} alt="Телеграм"/><a href="https://t.me/" target='_blank' rel="noreferrer">Телеграм</a>
                </li>
                <li className='footer__li'>
                    <img src={LogoTel} alt="Телефон"/>
                    <span className='footer__li-number'>7-999-999-99-99</span>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;