import React from 'react';
// import LogoVk from '../../images/logovk.png';
import LogoT from '../../images/logot.png';
// import Logowa from '../../images/logowa.png';
import {
    CONTACTS,
    TELEFHONE,
    NUMBER,
    // VK,
    // WHATSAPP,
    TELEGRAM,
    // URL_VK,
    // URL_WHATSAPP,
    URL_TELEGRAM
} from '../../utils/constants';
import './Footer.css';

function Footer() {
    window.onload = function () {
        const btnUp = {
            el: document.querySelector('.btn-up'),
            scrolling: false,
            show() {
              if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
                this.el.classList.remove('btn-up_hide');
                this.el.classList.add('btn-up_hiding');
                window.setTimeout(() => {
                  this.el.classList.remove('btn-up_hiding');
                }, 300);
              }
            },
            hide() {
              if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
                this.el.classList.add('btn-up_hiding');
                window.setTimeout(() => {
                  this.el.classList.add('btn-up_hide');
                  this.el.classList.remove('btn-up_hiding');
                }, 300);
              }
            },
            addEventListener() {
              window.addEventListener('scroll', () => {
                const scrollY = window.scrollY || document.documentElement.scrollTop;
                if (this.scrolling && scrollY > 0) {
                  return;
                }
                this.scrolling = false;
                if (scrollY > 400) {
                  this.show();
                } else {
                  this.hide();
                }
              });
              document.querySelector('.btn-up').onclick = () => {
                this.scrolling = true;
                this.hide();
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
                });
              }
            }
          }
          
        btnUp.addEventListener();
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
                {/* <li className='footer__li'>
                    <img 
                        src={LogoVk} 
                        alt="Вкнотакте" 
                        className='footer__li-ico'
                    />
                    <a 
                        href={URL_VK} 
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
                        href={URL_WHATSAPP} 
                        target='_blank' 
                        rel="noreferrer"
                        className='footer__li-link'
                    >
                        {WHATSAPP}
                    </a>
                </li> */}
                <li className='footer__li'>
                    <img 
                        src={LogoT} 
                        alt="Телеграм" 
                        className='footer__li-ico'
                    />
                    <a 
                        href={URL_TELEGRAM} 
                        target='_blank' 
                        rel="noreferrer"
                        className='footer__li-link'
                    >
                        {TELEGRAM}
                    </a>
                </li>
            </ul>
            <div className='btn-up btn-up_hide' />
        </footer>
    );
};

export default Footer;