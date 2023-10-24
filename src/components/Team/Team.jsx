import React from 'react';
import AvatarVlad from '../../images/Vlad.png';
import AvatarSergey from '../../images/Sergey.png';
import AvatarAlexey from '../../images/Alexey.png';
import AvatarMichael from '../../images/Michael.png';
import {
    TEAM_VALD,
    TEAM_ALEXEY,
    TEAM_MICHAEL,
    TEAM_SERGEY,
    TEAM_TEXT_ONE,
    TEAM_TEXT_TWO,
    TEAM_TEXT_THREE
} from '../../utils/constants';
import './Team.css';

function Team() {
    return (
        <section className='team' id='Team'>
            <div className='team__container'>
                <div className='team__container-box'>
                    <div className='team__container-box-card'>
                        <img 
                            className='team__container-box-card-avatar' 
                            src={AvatarVlad} 
                            alt={TEAM_VALD} 
                        />
                        <p className='team__container-box-card-text'>
                            {TEAM_VALD} 
                        </p>
                    </div>
                    <ul className='team__container-box-ul'>
                            <li className='team__container-box-li'>
                                {TEAM_TEXT_ONE}
                            </li>
                            <li className='team__container-box-li'>
                                {TEAM_TEXT_TWO}
                            </li>
                            <li className='team__container-box-li'>
                                {TEAM_TEXT_THREE}
                            </li>
                        </ul>
                        <div className='team__container-box-card'>
                        <img 
                            className='team__container-box-card-avatar' 
                            src={AvatarMichael} 
                            alt={TEAM_MICHAEL} 
                        />
                        <p className='team__container-box-card-text'>
                            {TEAM_MICHAEL}
                        </p>
                        </div>
                </div>
                <div className='team__container-box'>
                <div className='team__container-box-card team__container-box-card_type'>
                        <img 
                            className='team__container-box-card-avatar' 
                            src={AvatarSergey} 
                            alt={TEAM_SERGEY} 
                        />
                        <p className='team__container-box-card-text'>
                            {TEAM_SERGEY}
                        </p>
                        </div>
                        <div className='team__container-box-card team__container-box-card_type'>
                        <img 
                            className='team__container-box-card-avatar' 
                            src={AvatarAlexey} 
                            alt={TEAM_ALEXEY} 
                        />
                        <p className='team__container-box-card-text'>
                            {TEAM_ALEXEY}
                        </p>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Team;