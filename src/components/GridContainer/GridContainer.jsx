import './GridContainer.css'

export default function GridContainer({ title, description }) {
    return (
        <div className='about__container-grid'>
            <h3 className='about__container-grid-ul'>
                {title}
            </h3>
            <p className='about__container-grid-ul-li'>
                {description}
            </p>
        </div>
    )
}