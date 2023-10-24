import React from 'react';
import LogoVk from '../../images/logovk.png';
import LogoT from '../../images/logot.png';
import Logowa from '../../images/logowa.png';
import {
    CONTACTS,
    TELEFHONE,
    NUMBER,
    VK,
    WHATSAPP,
    TELEGRAM
} from '../../utils/constants';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer" id='Contacts'>
            <h2 className='footer-title'>
                {CONTACTS}
            </h2>
            <h3 className='footer__subtitle'>
                {TELEFHONE} <span className='footer__subtitle-number'>
                            {NUMBER}
                        </span>
            </h3>
            <ul className='footer__ul'>
                <li className='footer__li'>
                    <img 
                        src={LogoVk} 
                        alt="Вкнотакте" 
                        className='footer__li-ico'
                    />
                    <a 
                        href="https://vk.com/" 
                        target='_blank' 
                        rel="noreferrer"
                        className='footer__li-link'
                    >
                        {VK}
                    </a>
                </li>
                <li className='footer__li'>
                    <img 
                        src={Logowa} 
                        alt="Ватсап" 
                        className='footer__li-ico'
                    />
                    <a 
                        href="https://whatsapp.com/" 
                        target='_blank' 
                        rel="noreferrer"
                        className='footer__li-link'
                    >
                        {WHATSAPP}
                    </a>
                </li>
                <li className='footer__li'>
                    <img 
                        src={LogoT} 
                        alt="Телеграм" 
                        className='footer__li-ico'
                    />
                    <a 
                        href="https://t.me/" 
                        target='_blank' 
                        rel="noreferrer"
                        className='footer__li-link'
                    >
                        {TELEGRAM}
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;