import Popup from '../Popup/Popup';
import {
    CONTACTS,
    TEAM,
    WORK,
} from '../../utils/constants';
import './Header.css';

export default function Header() {
    function popupOpen() {
        const popup = document.getElementById('popup');
        popup.classList.toggle('active');
    };

    return (
        <header className="header" id='Header'>
            <ul className='header__ul'>
                <li className='header__li'>
                    <a href="#Staff" className='header__li-link'>
                        {TEAM}
                    </a>
                </li>
                <li className='header__li'>
                    <a href="#Works" className='header__li-link'>
                        {WORK}
                    </a>
                </li>
                <li className='header__li'>
                    <button 
                        id='btn' 
                        className='header__li-link' 
                        onClick={popupOpen}
                    >
                        {CONTACTS}
                    </button>
                </li>
            </ul>
            <Popup />
        </header>
    );
};
