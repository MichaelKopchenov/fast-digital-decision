import LogoT from '../../images/logot.png';
import CloseIcon from '../../images/close.png'
import {
    CONTACTS,
    URL_TELEGRAM,
    TELEGRAM,
    EMAIL,
    EMAIL_ADDRESS,
    TELEFHONE,
    NUMBER
} from '../../utils/constants';
import './Popup.css';

export default function Popup () {
    function popupClose(){
        const popup = document.getElementById('popup');
        popup.classList.remove('active');
    }
    
    return (
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
                <button className="header__popup_close" onClick={popupClose}>
                    <img 
                        src={CloseIcon} 
                        alt='Закрыть' 
                        className='header__popup_close-icon'
                    />
                </button>
            </div>
    )
}