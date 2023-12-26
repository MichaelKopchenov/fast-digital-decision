import './Banner.css';

export default function Banner ( {title, id} ) {
    return (
        <section id={id} className='banner'>
            <h2 className='banner__title'>
                {title}
            </h2>
        </section>
    );
}