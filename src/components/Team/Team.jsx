import React from 'react';
import AvatarVlad from '../../images/Vlad.png';
import AvatarSergey from '../../images/Sergey.png';
import AvatarAlexey from '../../images/Alexey.png';
import AvatarMichael from '../../images/Michael.png';
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
                            alt="Владислав, UI/Ux designer" 
                        />
                        <p className='team__container-box-card-text'>
                            Владислав, UI/Ux designer
                        </p>
                    </div>
                    <ul className='team__container-box-ul'>
                            <li className='team__container-box-li'>
                                Мы — команда Pro в области заказной разработки.
                            </li>
                            <li className='team__container-box-li'>
                                Потребности клиентов наш основной приоритет.
                            </li>
                            <li className='team__container-box-li'>
                                Наши знания и навыки, помогут вашему успеху.
                            </li>
                        </ul>
                        <div className='team__container-box-card'>
                        <img 
                            className='team__container-box-card-avatar' 
                            src={AvatarMichael} 
                            alt="Михаил, Web-developer" 
                        />
                        <p className='team__container-box-card-text'>
                            Михаил, Web-developer
                        </p>
                        </div>
                </div>
                <div className='team__container-box'>
                <div className='team__container-box-card team__container-box-card_type'>
                        <img 
                            className='team__container-box-card-avatar' 
                            src={AvatarSergey} 
                            alt="Сергей, Digital marketing" 
                        />
                        <p className='team__container-box-card-text'>
                            Сергей, Digital marketing
                        </p>
                        </div>
                        <div className='team__container-box-card team__container-box-card_type'>
                        <img 
                            className='team__container-box-card-avatar' 
                            src={AvatarAlexey} 
                            alt="Алексей, Product/Project manager" 
                        />
                        <p className='team__container-box-card-text'>
                            Алексей, Product/Project manager
                        </p>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default Team;