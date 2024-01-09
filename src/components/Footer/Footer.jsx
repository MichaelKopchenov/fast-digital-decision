import LogoT from '../../images/Logos/logot.png';
import {
    CONTACTS,
    TELEFHONE,
    NUMBER,
    EMAIL,
    EMAIL_ADDRESS,
    TELEGRAM,
    URL_TELEGRAM
} from '../../utils/constants';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer" id='Contacts'>
            <div className='footer__content'>
                <h2 className='footer-title'>
                    {CONTACTS}
                </h2>
                <h3 className='footer__subtitle'>
                    {TELEFHONE} <span className='footer__subtitle-number'>
                        {NUMBER}
                    </span>
                </h3>
                <h3 className='footer__email'>
                    {EMAIL} <a className='footer__email-address' href='mailto: fdd-info@yandex.ru'>
                        {EMAIL_ADDRESS}
                    </a>
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
            </div>
            <div className='footer__copyright'>
                <p className='footer__copyright-text'>
                    ©2023. created by Kopchenov Mikhail Victorovich
                </p>
            </div>
        </footer>
    );
};