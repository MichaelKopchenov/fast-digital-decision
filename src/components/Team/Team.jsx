import React from 'react';
import AvatarVlad from '../../images/Vlad.png';
import AvatarSergey from '../../images/Sergey.png';
import AvatarAlexey from '../../images/Alexey.png';
import AvatarMichael from '../../images/Michael3.png';
import {
    TEAM_VALD,
    TEAM_VLAD_PROF,
    TEAM_ALEXEY,
    TEAM_ALEXEY_PROF,
    TEAM_MICHAEL,
    TEAM_MICHAEL_PROF,
    TEAM_SERGEY,
    TEAM_SERGEY_PROF,
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
                        <p className='team__container-box-card-text'>
                            {TEAM_VLAD_PROF}
                        </p>
                    </div>
                    <ul className='team__container-box-ul'>
                        <li className='team__container-box-li'>
                            {TEAM_TEXT_ONE}
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
                    <p className='team__container-box-card-text'>
                        {TEAM_MICHAEL_PROF}
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
                        <p className='team__container-box-card-text'>
                            {TEAM_SERGEY_PROF}
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
                        <p className='team__container-box-card-text'>
                            {TEAM_ALEXEY_PROF}
                        </p>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Team;