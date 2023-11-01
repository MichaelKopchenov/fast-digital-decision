import React from 'react';
import LogoT from '../../images/logot.png';
import {
    CONTACTS,
    TELEFHONE,
    NUMBER,
    TELEGRAM,
    URL_TELEGRAM
} from '../../utils/constants';
import './Footer.css';

function Footer() {
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
        document.getElementById("footer__button-up").style.display = "flex";
    } else {
        document.getElementById("footer__button-up").style.display = "none";
    }
  }
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
                    <a 
                        href={URL_TELEGRAM} 
                        target='_blank' 
                        rel="noreferrer"
                        className='footer__li-link'
                    >
                        <img 
                        src={LogoT} 
                        alt="Телеграм" 
                        className='footer__li-ico'
                        />
                        {TELEGRAM}
                    </a>
                </li>
            </ul>
            <a href="#Header" id='footer__button-up'>
              ⬆
            </a>
        </footer>
    );
};

export default Footer;