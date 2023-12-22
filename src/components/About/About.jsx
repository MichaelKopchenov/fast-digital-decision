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
                    <GridContainer {...gridText[0]}/>
                    <GridContainer {...gridText[1]}/>
                    <GridContainer {...gridText[2]}/>
                    <GridContainer {...gridText[3]}/>
                    <GridContainer {...gridText[4]}/>
                </div>
            </div>
        </section>
    );
};