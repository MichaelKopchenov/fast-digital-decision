import './Banner.css';

export default function Banner ({title}) {
    return (
        <section id='Section-Team' className='banner'>
            <h2 className='banner__title'>
                {title}
            </h2>
        </section>
    );
}