import {
    HELLO_TEXT_TITLE,
    HELLO_TEXT_SPAN,
    HELLO_TEXT_SUBTITLE
} from '../../utils/constants';
import './Hello.css';

export default function Hello() {
    function removeCursor () {
        document.getElementById("title").style = "border-right: none";
    }

    function getSpanBlock () {
        document.getElementById("span").style.display = "block";
      }
      
    setTimeout(removeCursor, 1500);
    setTimeout(getSpanBlock, 1500);

    return (
        <section className='hello' id='Hello'>
            <h1 id='title' className='hello__text hello__title'>
                {HELLO_TEXT_TITLE}
            </h1>
            <span id='span' className='hello__text hello__span'>
                {HELLO_TEXT_SPAN}
            </span>
            <p className='hello__subtitle'>
                {HELLO_TEXT_SUBTITLE}
            </p>
        </section>
    );
};
