import GridContainer from '../GridContainer/GridContainer';
import { ABOUT_TEXT_TITLE, gridText } from '../../utils/constants';
import './About.css';

export default function About() {
    return (
        <section className='about' id='About'>
            <div className='about__container'>
                <h2 className='about__container-title'>
                    {ABOUT_TEXT_TITLE}
                </h2>
                <div className='about__container-caption'>
                    {gridText.map((grid) => (
                        <GridContainer key={grid.description} {...grid} />
                    ))}
                </div>
            </div>
        </section>
    );
};