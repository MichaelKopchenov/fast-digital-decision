import './Staff.css';

export default function Staff ({ 
    name, 
    prof, 
    avatar 
}) {
    return (
        <div className='team__container-box-card'>
            <img 
                className='team__container-box-card-avatar' 
                src={avatar} 
                alt={name} 
            />
            <p className='team__container-box-card-text'>
                {name} 
            </p>
            <p className='team__container-box-card-text'>
                {prof}
            </p>
        </div>
    );
};